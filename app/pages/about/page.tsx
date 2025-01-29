import React from "react";
import Image from "next/image";

import aboutImage from "../../src/assets/images/project-image.png";

const AboutPage = () => {
  return (
    <div className="max-w-[1100px] mt-10 mx-auto px-6 py-16 text-gray-800">
      {/* Seção Hero */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-zinc-800">Sobre Nós</h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Criamos soluções digitais inovadoras para stands de carros, ajudando
          negócios a crescerem com sites personalizados e otimizados para o
          mercado automotivo.
        </p>
      </div>

      {/* Seção de Informações */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Imagem */}
        <div>
          <Image
            src={aboutImage}
            alt="Sobre Nós"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Texto */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-zinc-700">Nossa Missão</h2>
          <p className="text-lg text-gray-700">
            Nossa missão é fornecer aos stands de carros uma presença digital
            poderosa, desenvolvendo sites modernos, responsivos e fáceis de
            gerenciar.
          </p>
          <h2 className="text-3xl font-semibold text-zinc-700">
            Por que Escolher a Gente?
          </h2>
          <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside">
            <li>Design moderno e personalizado para cada cliente.</li>
            <li>SEO otimizado para garantir mais visibilidade.</li>
            <li>
              Sites responsivos que funcionam perfeitamente em qualquer
              dispositivo.
            </li>
            <li>
              Fácil gestão de conteúdo para atualizações rápidas e intuitivas.
            </li>
            <li>
              Integrações inteligentes com plataformas de venda automotiva.
            </li>
          </ul>
        </div>
      </div>

      {/* Seção de Valores */}
      <div className="mt-16 text-center">
        <h2 className="text-4xl font-bold text-zinc-700 mb-6">
          Nossos Valores
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg border-t-4 border-yellow-500">
            <h3 className="text-2xl font-semibold text-zinc-700">Inovação</h3>
            <p className="mt-2 text-gray-700">
              Utilizamos as melhores tecnologias para criar soluções digitais
              eficazes.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg border-t-4 border-yellow-500">
            <h3 className="text-2xl font-semibold text-zinc-700">
              Compromisso
            </h3>
            <p className="mt-2 text-gray-700">
              Nosso foco é o sucesso do seu negócio, garantindo resultados
              reais.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg border-t-4 border-yellow-500">
            <h3 className="text-2xl font-semibold text-zinc-700">Qualidade</h3>
            <p className="mt-2 text-gray-700">
              Desenvolvemos sites otimizados para alta performance e conversão.
            </p>
          </div>
        </div>
      </div>

      {/* Chamada para Ação */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-zinc-700">
          Pronto para levar seu stand ao próximo nível?
        </h2>
        <p className="mt-2 text-lg text-gray-700">
          Entre em contato e descubra como podemos transformar sua presença
          digital.
        </p>
        <a
          href="/contato"
          className="inline-block mt-6 px-8 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition"
        >
          Fale Conosco
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
