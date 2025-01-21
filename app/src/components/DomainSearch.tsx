"use client";

import { useState } from "react";

const DomainSearch = () => {
  const [domain, setDomain] = useState("");
  const [mainDomain, setMainDomain] = useState<{
    domain: string;
    available: boolean;
    status: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkDomain = async () => {
    setLoading(true);
    setError(null);
    setMainDomain(null);

    if (!domain || !domain.includes(".")) {
      setError("Por favor, insira um domínio válido (exemplo.com).");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/checkDomain?domain=${domain}`);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Erro do servidor: ${response.status} - ${response.statusText}. ${errorText}`
        );
      }

      const data = await response.json();
      console.log("Dados recebidos:", data);

      // Atualiza o estado do domínio principal
      setMainDomain(data.mainDomain);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido.";
      setError(errorMessage);
      console.error("Erro no frontend:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center max-w-[1100px] m-auto">
      <div className="flex flex-col w-full max-w-4xl p-4">
        {/* Input e botão */}
        <div className="flex items-center">
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Procure o seu domínio (exemplo.com)"
            className="flex-grow px-4 py-3 border border-gray-300"
          />
          <button
            onClick={checkDomain}
            disabled={loading || !domain}
            className={`w-40 py-3 text-white text-center ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Pesquisando..." : "Pesquisar"}
          </button>
        </div>

        {/* Mensagem de erro */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Espaço reservado para o resultado */}
        <div className="mb-4 mt-4">
          {mainDomain && (
            <div
              className={`p-4 border ${
                mainDomain.available
                  ? "border-green-400 bg-green-100"
                  : "border-red-400 bg-red-100"
              } rounded-lg`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-lg ${
                    mainDomain.available ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {mainDomain.domain}{" "}
                  {mainDomain.available
                    ? "(Disponível para registro)"
                    : "(Já registrado)"}
                </span>
                {mainDomain.available && (
                  <a
                    href={`https://www.namecheap.com/domains/registration/results/?domain=${mainDomain.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                  >
                    Registrar
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DomainSearch;
