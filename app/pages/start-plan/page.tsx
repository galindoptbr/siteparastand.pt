import React from "react";
import Image from "next/image";

import projectImage from "../../src/assets/images/start.png";
import DomainSearchPages from "../../src/components/DomainSearchPages";
import ServicesHome from "@/app/src/components/ServicesHome";

const StartPlanPage = () => {
  return (
    <div className="max-w-[1100px] m-auto mb-20 mt-20">
      <div className="text-center p-10">
        <p className="text-4xl font-bold">Benefícios do Modelo Start</p>
        <p className="text-xl">
          Tudo o que você precisa para começar sua presença online de forma
          profissional.
        </p>
        {/* Valor promocional */}
        <div className="mt-5">
          <p className="text-2xl text-gray-600 line-through">
            Valor Real: 399€
          </p>
          <p className="text-5xl font-bold text-red-600">Agora por: 199€</p>
          <p className="text-xl text-gray-500 mt-2">
            Aproveite a promoção e garanta seu site profissional!
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col md:flex-row items-center md:items-start px-10 gap-4">
          {/* Imagem */}
          <div className="max-w-[500px] mx-auto">
            <Image
              src={projectImage}
              alt="modelo start"
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
          {/* Texto e botões */}
          <div className="flex flex-col gap-4 mt-2">
            <div>
              <h3 className="text-2xl font-bold">Site 100% Responsivo</h3>
              <p className="text-gray-600">
                Seu site será acessível e terá uma ótima aparência em todos os
                dispositivos, desde computadores até smartphones.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">SEO Otimizado</h3>
              <p className="text-gray-600">
                Projetado para se destacar nos motores de busca, ajudando
                clientes a encontrar seu stand online com facilidade.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Painel de Administrador</h3>
              <p className="text-gray-600">
                Gerencie seu site e atualize seu catálogo de veículos de forma
                simples e prática, sem complicações.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Domínio .pt Gratuito</h3>
              <p className="text-gray-600">
                Receba um domínio .pt gratuito por 1 ano, garantindo uma
                presença profissional para o seu stand.
              </p>
            </div>
            {/* Botões */}
            <div className="flex flex-col md:flex-row w-full gap-4 items-center">
              <a
                href="https://buy.stripe.com/9AQbLwefbeEkenSfZ5"
                target="_blank"
                className="bg-red-600 text-white w-72 py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-red-700 hover:scale-105"
              >
                Garanta seu site com desconto!
              </a>
              <a
                href="https://seu-stand-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white w-72 py-3 px-6 text-center rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
              >
                Visualizar Site
              </a>
            </div>
          </div>
        </div>
      </div>
      <DomainSearchPages />
      {/* Descrição completa */}
      <div className="mt-10 px-10">
        <h2 className="text-3xl font-bold text-center mb-5">
          Por que escolher o Modelo Start?
        </h2>
        <p className="text-gray-600 text-lg leading-7">
          O <strong>Modelo Start</strong> foi criado para atender às
          necessidades de stands de carros que desejam dar o primeiro passo no
          mundo digital de forma prática e acessível. Com um design moderno e
          responsivo, seu site será compatível com qualquer dispositivo,
          proporcionando uma experiência incrível para os visitantes.
        </p>
        <p className="text-gray-600 text-lg leading-7 mt-4">
          Além disso, nosso foco em <strong>SEO otimizado</strong> garante que o
          seu site se destaque nos motores de busca, facilitando que potenciais
          clientes encontrem seus veículos. Você terá controle total do seu site
          por meio de um <strong>Painel de Administrador intuitivo</strong>, que
          permite atualizar o catálogo de veículos, adicionar novas informações
          ou gerenciar conteúdos sem complicações.
        </p>
        <p className="text-gray-600 text-lg leading-7 mt-4">
          Para completar, incluímos um{" "}
          <strong>domínio .pt gratuito por 1 ano</strong>, oferecendo uma
          presença profissional e confiável para o seu negócio desde o início. E
          o melhor: tudo isso por um preço promocional de <strong>199€</strong>,
          em vez dos <span className="line-through">399€</span> que você pagaria
          normalmente. Essa é a oportunidade perfeita para alavancar seu stand
          de carros no mercado digital!
        </p>
        <h3 className="text-2xl font-bold mt-8">
          O que você ganha com o Modelo Start:
        </h3>
        <ul className="list-disc list-inside mt-4 text-gray-600 text-lg leading-7">
          <li>
            <strong>Maior Visibilidade:</strong> Seu site será projetado para se
            destacar no Google, aumentando as chances de atrair clientes.
          </li>
          <li>
            <strong>Praticidade:</strong> Um painel de administrador simples e
            eficaz, que permite gerenciar tudo sem precisar de conhecimentos
            técnicos.
          </li>
          <li>
            <strong>Credibilidade:</strong> Um domínio profissional gratuito
            durante o primeiro ano, que transmite confiança aos seus clientes.
          </li>
          <li>
            <strong>Responsividade:</strong> Um design moderno e ajustado para
            qualquer dispositivo, garantindo que seus clientes tenham uma ótima
            experiência de navegação.
          </li>
        </ul>
        <p className="text-gray-600 text-lg leading-7 mt-4">
          <strong>
            Não perca a chance de transformar seu negócio e aumentar suas vendas
            com o Modelo Start.
          </strong>{" "}
          Clique no botão acima e comece agora!
        </p>
      </div>
      <ServicesHome />
    </div>
  );
};

export default StartPlanPage;
