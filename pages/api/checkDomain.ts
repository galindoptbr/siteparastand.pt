import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

const DOMAINR_API_URL = "https://domainr.p.rapidapi.com/v2/status";
const API_KEY = "a1a3506bc5msha68b7439071fcb3p154a0bjsn366005913152";

// Defina os tipos para os dados retornados pela API
interface DomainStatus {
  domain: string;
  status: string;
  summary?: string;
}

interface FormattedResult {
  domain: string;
  available: boolean;
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
    console.log(
      "Chamando a API Domainr para verificar o status do domínio:",
      domain
    );

    const options = {
      method: "GET",
      url: DOMAINR_API_URL,
      params: {
        domain: domain,
      },
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "domainr.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);

    const status: DomainStatus[] = response.data.status;

    if (!status || !Array.isArray(status)) {
      return res.status(500).json({
        error: "Resposta inesperada da API Domainr.",
      });
    }

    // Processa os resultados para determinar a disponibilidade
    const formattedResults: FormattedResult[] = status.map((item) => ({
      domain: item.domain,
      available: ["inactive", "undelegated", "undelegated inactive"].includes(
        item.status
      ),
      status: item.status,
      summary: item.summary, // Resumo do status, caso necessário
    }));

    // Busca o status do domínio principal pesquisado
    const mainDomain = formattedResults.find((item) => item.domain === domain);

    res.status(200).json({
      mainDomain: mainDomain || {
        domain,
        available: false,
        status: "unknown",
      },
      suggestions: formattedResults.filter((item) => item.domain !== domain),
    });
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
