"use client";

import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const DomainSearch = () => {
  const [domain, setDomain] = useState("");
  const [mainDomain, setMainDomain] = useState<{
    domain: string;
    available: boolean;
    status: string;
  } | null>(null);
  const [suggestions, setSuggestions] = useState<
    { domain: string; available: boolean; status: string }[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkDomain = async () => {
    setLoading(true);
    setError(null);
    setMainDomain(null);
    setSuggestions([]);

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

      setMainDomain(data.mainDomain);
      setSuggestions(data.suggestions);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Erro desconhecido.";
      setError(errorMessage);
      console.error("Erro no frontend:", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center max-w-[1100px] m-auto pt-28">
      <div className="flex flex-col w-full max-w-4xl p-4">
        {/* Input e botão */}
        <div className="flex items-center mb-4">
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
            className={`px-10 py-3 text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? <ClipLoader size={20} color="#fff" /> : "Pesquisar"}
          </button>
        </div>

        {/* Mensagem de erro */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Resultado principal */}
        {mainDomain && (
          <div
            className={`p-4 border ${
              mainDomain.available
                ? "border-green-400 bg-green-100"
                : "border-red-400 bg-red-100"
            } rounded-lg mb-4`}
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

        {/* Sugestões */}
        {suggestions.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Outras extensões disponíveis:
            </h3>
            <ul className="space-y-2">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.domain}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                >
                  <span className="text-gray-700">{suggestion.domain}</span>
                  {suggestion.available ? (
                    <a
                      href={`https://www.namecheap.com/domains/registration/results/?domain=${suggestion.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                    >
                      Registrar
                    </a>
                  ) : (
                    <span className="text-red-500">Indisponível</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DomainSearch;
