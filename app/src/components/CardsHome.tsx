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
          <div className="w-full max-w-[370px] h-[460px] mx-auto rounded-md overflow-hidden shadow-lg bg-white">
            <div className="relative w-full h-[220px] bg-purple-800">
              <Image
                src={card1}
                alt="Hosting NVMe"
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute inset-0 flex flex-col justify-start items-start text-white p-4 top-5">
                <h3 className="text-3xl font-bold">Hosting NVMe</h3>
                <p className="text-sm">Super Poderoso, Rápido e Simples!</p>
                <p className="text-4xl font-bold mt-2">Até -86%</p>
                <p className="text-xs">Oferta de Domínio no 1º ano</p>
              </div> */}
            </div>
            <div className="relative z-10 -mt-6 right-20 flex justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-md shadow-lg">
                Ver Detalhes
              </button>
            </div>
            <div className="p-5">
              <ul className="flex flex-col gap-1 text-md text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">
                    <FaCheck />
                  </span>
                  Site 100% responsivo
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">
                    <FaCheck />
                  </span>
                  SEO otimizado
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">
                    <FaCheck />
                  </span>
                  Painel de Administrador
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
          <div className="w-full max-w-[370px] h-[460px] mx-auto rounded-md overflow-hidden shadow-lg bg-white">
            <div className="relative w-full h-[220px] bg-purple-800">
              <Image
                src={card1}
                alt="Criar Site"
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute inset-0 flex flex-col justify-start items-start text-white p-4 top-5">
                <h3 className="text-3xl font-bold">Criar Site</h3>
                <p className="text-sm">Nunca o seu site foi tão rápido.</p>
                <p className="text-4xl font-bold mt-2">Até -82%</p>
                <p className="text-xs">Oferta de Domínio no 1º ano</p>
              </div> */}
            </div>
            <div className="relative z-10 -mt-6 right-20 flex justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-md shadow-lg">
                Ver Detalhes
              </button>
            </div>
            <div className="p-5">
              <ul className="flex flex-col gap-1 text-md text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">
                    <FaCheck />
                  </span>
                  Site 100% responsivo
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">
                    <FaCheck />
                  </span>
                  SEO otimizado
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">
                    <FaCheck />
                  </span>
                  Painel de Administrador
                </li>
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
                  Integração com WhatsApp e Messenger
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-[370px] h-[460px] mx-auto rounded-md overflow-hidden shadow-lg bg-white">
            <div className="relative w-full h-[220px] bg-purple-800">
              <Image
                src={card1}
                alt="Crie Facilmente"
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute inset-0 flex flex-col justify-start items-start text-white p-4 top-5">
                <h3 className="text-3xl font-bold">Crie Facilmente</h3>
                <p className="text-sm">Política de Privacidade & Cookies</p>
                <p className="text-4xl font-bold mt-2">Até -50%</p>
                <p className="text-xs">Evite multas relacionadas com o RGPD</p>
              </div> */}
            </div>
            <div className="relative z-10 -mt-6 right-20 flex justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-md shadow-lg">
                Ver Detalhes
              </button>
            </div>
            <div className="p-5">
              <ul className="flex flex-col gap-1 text-md text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">
                    <FaCheck />
                  </span>
                  Site 100% responsivo
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">
                    <FaCheck />
                  </span>
                  SEO otimizado
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">
                    <FaCheck />
                  </span>
                  Painel de Administrador
                </li>
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
                  Integração com WhatsApp e Messenger
                </li>
                <li className="flex items-center">
                  <span className="text-green-600 mr-2">
                    <FaCheck />
                  </span>
                  Integração com OLX e StandVirtual
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsHome;
