"use client";

import { useState } from "react";

const DomainSearch = () => {
  const [domain, setDomain] = useState("");
  const [status, setStatus] = useState<{
    available: boolean;
    domain: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const checkDomain = async () => {
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch(`/api/checkDomain?domain=${domain}`);
      const data = await response.json();

      if (response.ok) {
        setStatus({
          domain: data.domain,
          available: data.available,
        });
      } else {
        setStatus({
          domain,
          available: false,
        });
      }
    } catch {
      setStatus({
        domain,
        available: false,
      });
    }
  };

  return (
    <div className="flex justify-center items-center max-w-[1100px] m-auto pt-28">
      {/* Seção principal: input, botão e status */}
      <div className="flex flex-col pl-4 w-full max-w-4xl">
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
            {loading ? "Pesquisando" : "Pesquisar"}
          </button>
        </div>

        {/* Status */}
        <div className="min-h-[48px]">
          {status && (
            <div
              className={`flex items-center justify-between px-4 py-2 rounded-lg ${
                status.available
                  ? "bg-green-100 border border-green-400"
                  : "bg-red-100 border border-red-400"
              }`}
            >
              <p
                className={`text-lg ${
                  status.available ? "text-green-700" : "text-red-700"
                }`}
              >
                {status.available
                  ? `O domínio "${status.domain}" está disponível!`
                  : `O domínio "${status.domain}" já está registrado.`}
              </p>
              {status.available && (
                <button
                  className="ml-4 px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg"
                  onClick={() =>
                    console.log(`Comprar domínio: ${status.domain}`)
                  }
                >
                  Comprar
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DomainSearch;
