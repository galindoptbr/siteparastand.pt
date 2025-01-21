import React from "react";
import Image from "next/image";
import card1 from "../assets/images/card-1.png";
import card2 from "../assets/images/card-2.png";
import card3 from "../assets/images/card-3.png";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

const CardsHome = () => {
  return (
    <>
      <div className="max-w-[1100px] m-auto">
        <div className="relative z-10 p-5 sm:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="w-full max-w-[370px] h-[450px] mx-auto rounded-md overflow-hidden shadow-lg bg-white">
            <div className="relative w-full h-[220px] bg-purple-800">
              <Image
                src={card1}
                alt="Hosting NVMe"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-start items-start text-white p-4 top-5">
                <h3 className="text-3xl font-bold">Hosting NVMe</h3>
                <p className="text-sm">Super Poderoso, Rápido e Simples!</p>
                <p className="text-4xl font-bold mt-2">Até -86%</p>
                <p className="text-xs">Oferta de Domínio no 1º ano</p>
              </div>
            </div>
            <div className="relative z-10 -mt-6 right-20 flex justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-md shadow-lg">
                Comece Já
              </button>
            </div>
            <div className="p-5">
              <ul className="flex flex-col gap-4 text-md mt-5 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">
                    <FaCheck />
                  </span>
                  Segurança Avançada com Imunify360
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">
                    <FaCheck />
                  </span>
                  Jetbackup Backups
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">
                    <FaCheck />
                  </span>
                  Domínio .pt GRÁTIS por 1 ano
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-[370px] h-[450px] mx-auto rounded-md overflow-hidden shadow-lg bg-white">
            <div className="relative w-full h-[220px] bg-purple-800">
              <Image
                src={card2}
                alt="Criar Site"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-start items-start text-white p-4 top-5">
                <h3 className="text-3xl font-bold">Criar Site</h3>
                <p className="text-sm">Nunca o seu site foi tão rápido.</p>
                <p className="text-4xl font-bold mt-2">Até -82%</p>
                <p className="text-xs">Oferta de Domínio no 1º ano</p>
              </div>
            </div>
            <div className="relative z-10 -mt-6 right-20 flex justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-md shadow-lg">
                Comece Já
              </button>
            </div>
            <div className="p-5">
              <ul className="flex flex-col gap-4 text-md mt-5 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">
                    <FaCheck />
                  </span>
                  Domínio .pt GRÁTIS por 1 ano
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">
                    <FaCheck />
                  </span>
                  OFERTA SSL & Imunify360
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">
                    <FaCheck />
                  </span>
                  Templates com Inteligência Artificial
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-[370px] h-[450px] mx-auto rounded-md overflow-hidden shadow-lg bg-white">
            <div className="relative w-full h-[220px] bg-purple-800">
              <Image
                src={card3}
                alt="Crie Facilmente"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-start items-start text-white p-4 top-5">
                <h3 className="text-3xl font-bold">Crie Facilmente</h3>
                <p className="text-sm">Política de Privacidade & Cookies</p>
                <p className="text-4xl font-bold mt-2">Até -50%</p>
                <p className="text-xs">Evite multas relacionadas com o RGPD</p>
              </div>
            </div>
            <div className="relative z-10 -mt-6 right-20 flex justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-md shadow-lg">
                Comece Já
              </button>
            </div>
            <div className="p-5">
              <ul className="flex flex-col gap-4 text-md mt-5 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">
                    <FaCheck />
                  </span>
                  Google Consent Mode V2
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">
                    <FaCheck />
                  </span>
                  Política de Privacidade e Cookies
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">
                    <FaCheck />
                  </span>
                  Cookie Banner
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full px-10 mb-10">
          <p className="text-4xl text-center mb-10 mt-5">
            Tudo o que necessita para colocar as suas ideias online!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Loja Online */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-4">Loja Online</h3>
                <p className="text-gray-600 mb-4">
                  Fácil de usar, não necessita de conhecimentos técnicos e já
                  integrado com pagamentos e logística.
                </p>
                <p className="text-2xl font-bold text-green-600 mb-2">
                  17,48€/mês
                </p>
                <p className="text-sm line-through text-gray-400 mb-4">
                  Normalmente 19,80€
                </p>
              </div>
              <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mt-4">
                Comece a vender
              </button>
            </div>

            {/* Card 2 - Criação de Site */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-4">Criação de Site</h3>
                <p className="text-gray-600 mb-4">
                  Crie um site maravilhoso, visível em todos os dispositivos e
                  sem nenhum conhecimento de programação.
                </p>
                <p className="text-2xl font-bold text-green-600 mb-2">
                  0,99€/mês
                </p>
                <p className="text-sm line-through text-gray-400 mb-4">
                  Normalmente 9,99€
                </p>
              </div>
              <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mt-4">
                Criar Site
              </button>
            </div>

            {/* Card 3 - Microsoft 365 */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-4">Microsoft 365</h3>
                <p className="text-gray-600 mb-4">
                  A solução integrada para criar, comunicar, colaborar e
                  realizar o seu melhor trabalho.
                </p>
                <p className="text-2xl font-bold text-green-600 mb-2">
                  4,85€/mês
                </p>
                <p className="text-sm text-gray-400 mb-4">Licença/mês</p>
              </div>
              <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mt-4">
                Ver Planos
              </button>
            </div>

            {/* Card 4 - Certificados SSL */}
            <div className="bg-white shadow-md rounded-lg p-6 text-center flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-4">Certificados SSL</h3>
                <p className="text-gray-600 mb-4">
                  Proteja o seu site com HTTPS e conquiste a confiança dos seus
                  clientes e visitantes.
                </p>
                <p className="text-2xl font-bold text-green-600 mb-2">
                  29,33€/ano
                </p>
                <p className="text-sm line-through text-gray-400 mb-4">
                  Normalmente 58,65€
                </p>
              </div>
              <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mt-4">
                Ativar Segurança
              </button>
            </div>
          </div>
          <p className="text-center mt-10">
            * Consulte as nossas condições promocionais,{" "}
            <Link
              href={"/"}
              className="italic text-green-600 hover:text-green-500"
            >
              clique aqui
            </Link>{" "}
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default CardsHome;
