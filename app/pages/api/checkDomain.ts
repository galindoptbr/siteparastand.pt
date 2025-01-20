import axios, { AxiosError } from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const DOMAINR_API_URL = "https://api.domainr.com/v2/status";
const API_KEY = "SUA_API_KEY_AQUI"; // Substitua pela sua API Key

type DomainStatusResponse = {
  domain: string;
  available: boolean;
  status: string;
};

type ApiErrorData = {
  message?: string;
};

type ErrorResponse = {
  error: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DomainStatusResponse | ErrorResponse>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { domain } = req.query;

  if (!domain || typeof domain !== "string") {
    return res
      .status(400)
      .json({ error: "Por favor, forneça um domínio válido." });
  }

  try {
    const response = await axios.get(DOMAINR_API_URL, {
      params: {
        domain,
        client_id: API_KEY,
      },
    });

    // Validação dos dados retornados pela API
    const status = response.data.status?.[0]?.status; // Ex.: 'active', 'undelegated', 'inactive'
    const availableStatuses = ["inactive", "undelegated"];
    const available = availableStatuses.includes(status);

    res.status(200).json({
      domain,
      available,
      status: status || "unknown", // Caso o status não exista
    });
  } catch (error) {
    const axiosError = error as AxiosError<ApiErrorData>;

    console.error("Erro na API Domainr:", axiosError.message);

    const errorMessage =
      axiosError.response?.data?.message ||
      axiosError.message ||
      "Erro ao verificar o domínio.";

    res.status(500).json({ error: errorMessage });
  }
}
