import React from "react";
import Image from "next/image";

import logoDesignImage from "../../src/assets/images/logotipo.png";
import ServicesHome from "@/app/src/components/ServicesHome";

const LogotipoPage = () => {
  return (
    <div className="max-w-[1100px] m-auto mb-20 mt-20">
      <div className="text-center p-10">
        <p className="text-4xl font-bold">
          Criação de Logotipo para Stands de Carros
        </p>
        <p className="text-xl">
          Transmita profissionalismo e credibilidade com um logotipo exclusivo
          para seu stand de veículos.
        </p>
        {/* Valor promocional */}
        <div className="mt-5">
          <p className="text-2xl text-gray-600 line-through">
            Valor Real: 199€
          </p>
          <p className="text-5xl font-bold text-red-600">Agora por: 99€</p>
          <p className="text-xl text-gray-500 mt-2">
            Aproveite a oferta especial e tenha um logotipo profissional que
            valorize sua marca!
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col md:flex-row items-center md:items-start px-10 gap-4">
          {/* Imagem */}
          <div className="max-w-[500px] mx-auto">
            <Image
              src={logoDesignImage}
              alt="Criação de Logotipo para Stands de Carros"
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
          {/* Texto ao lado da imagem */}
          <div className="flex flex-col gap-4 mt-2">
            <div>
              <h3 className="text-2xl font-bold">Design Personalizado</h3>
              <p className="text-gray-600">
                Criamos um logotipo único para seu stand de veículos, destacando
                sua identidade no mercado automotivo.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Impacto Visual</h3>
              <p className="text-gray-600">
                Design moderno e marcante que transmite confiança e
                profissionalismo aos seus clientes.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Entrega Rápida</h3>
              <p className="text-gray-600">
                Receba seu logotipo em alta resolução e pronto para uso em redes
                sociais, websites e materiais impressos.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Revisões Inclusas</h3>
              <p className="text-gray-600">
                Ajustes ilimitados até que o logotipo esteja perfeito para
                representar sua marca.
              </p>
            </div>
            {/* Botões */}
            <div className="flex flex-col md:flex-row w-full gap-4 items-center">
              <button className="bg-red-600 text-white w-72 py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-red-700 hover:scale-105">
                Solicite seu Logotipo Agora!
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Descrição completa */}
      <div className="mt-10 px-10">
        <h2 className="text-3xl font-bold text-center mb-5">
          Por que um logotipo profissional é essencial?
        </h2>
        <p className="text-gray-600 text-lg leading-7">
          No competitivo mercado de venda de carros, um logotipo bem projetado
          reforça a identidade visual do seu stand e transmite confiança aos
          seus clientes. Criamos um design exclusivo para diferenciar seu
          negócio e destacar sua presença online e offline.
        </p>
        <h3 className="text-2xl font-bold mt-8">
          O que você ganha com nosso serviço?
        </h3>
        <ul className="list-disc list-inside mt-4 text-gray-600 text-lg leading-7">
          <li>
            <strong>Identidade Profissional:</strong> Seu stand será reconhecido
            instantaneamente.
          </li>
          <li>
            <strong>Alta Qualidade:</strong> Arquivos prontos para impressão e
            uso digital.
          </li>
          <li>
            <strong>Versatilidade:</strong> Logotipo adaptado para diferentes
            mídias e materiais.
          </li>
          <li>
            <strong>Credibilidade e Confiança:</strong> Uma marca bem construída
            gera mais negócios.
          </li>
        </ul>
        <p className="text-gray-600 text-lg leading-7 mt-4">
          <strong>
            Destaque seu stand com um logotipo profissional e conquiste mais
            clientes! Solicite já o seu.
          </strong>
        </p>
      </div>
      <ServicesHome />
    </div>
  );
};

export default LogotipoPage;
