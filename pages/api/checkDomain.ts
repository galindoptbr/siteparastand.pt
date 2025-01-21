import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const DOMAINR_API_URL_STATUS = "https://domainr.p.rapidapi.com/v2/status";
const API_KEY = "a1a3506bc5msha68b7439071fcb3p154a0bjsn366005913152";

// Interface para os dados retornados pela API
interface DomainStatus {
  domain: string;
  status: string;
  summary?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
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
    console.log("Chamando o endpoint status para o domínio:", domain);

    // Chamada ao endpoint `status`
    const statusResponse = await axios.request({
      method: "GET",
      url: DOMAINR_API_URL_STATUS,
      params: { domain },
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "domainr.p.rapidapi.com",
      },
    });

    const statusData: DomainStatus[] = statusResponse.data.status;

    if (!statusData || !Array.isArray(statusData)) {
      return res
        .status(500)
        .json({ error: "Resposta inesperada da API (status)." });
    }

    // Processa o status do domínio principal
    const mainDomainStatus = statusData.find((item) => item.domain === domain);
    const mainDomain = {
      domain,
      available: ["inactive", "undelegated", "undelegated inactive"].includes(
        mainDomainStatus?.status || "unknown"
      ),
      status: mainDomainStatus?.status || "unknown",
      summary: mainDomainStatus?.summary,
    };

    res.status(200).json({ mainDomain });
  } catch (error: unknown) {
    let errorMessage = "Erro desconhecido.";

    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.message || error.message;
      console.error("Erro de resposta da API:", error.response?.data);
    } else if (error instanceof Error) {
      errorMessage = error.message;
      console.error("Erro genérico:", errorMessage);
    } else {
      console.error("Erro inesperado:", error);
    }

    res.status(500).json({ error: errorMessage });
  }
}
