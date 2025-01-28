import React from "react";
import Image from "next/image";

import projectImage from "../../src/assets/images/expert.png";
import DomainSearchPages from "../../src/components/DomainSearchPages";
import ServicesHome from "@/app/src/components/ServicesHome";

const ExpertPlanPage = () => {
  return (
    <div className="max-w-[1100px] m-auto mb-20 mt-20">
      <div className="text-center p-10">
        <p className="text-4xl font-bold">Benefícios do Modelo Expert</p>
        <p className="text-xl">
          O pacote mais completo para quem quer dominar o mercado digital com
          integração avançada e recursos exclusivos.
        </p>
        {/* Valor promocional */}
        <div className="mt-5">
          <p className="text-2xl text-gray-600 line-through">
            Valor Real: 899€
          </p>
          <p className="text-5xl font-bold text-red-600">Agora por: 399€</p>
          <p className="text-xl text-gray-500 mt-2">
            Aproveite a promoção e leve o seu stand para o próximo nível!
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col md:flex-row items-center md:items-start px-10 gap-4">
          {/* Imagem */}
          <div className="max-w-[500px] m-auto">
            <Image
              src={projectImage}
              alt="modelo expert"
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
          {/* Texto ao lado da imagem */}
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
            <div>
              <h3 className="text-2xl font-bold">
                Integração com WhatsApp e Messenger
              </h3>
              <p className="text-gray-600">
                Conecte-se diretamente com seus clientes por meio das principais
                plataformas de mensagens, facilitando a comunicação e o suporte.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                Integração com OLX e StandVirtual
              </h3>
              <p className="text-gray-600">
                Anuncie seus veículos diretamente nos maiores marketplaces de
                automóveis, ampliando sua visibilidade e alcançando mais
                clientes.
              </p>
            </div>
            {/* Botões */}
            <div className="flex flex-col md:flex-row w-full gap-4 items-center">
              <button className="bg-red-600 text-white w-72 py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-red-700 hover:scale-105">
                Garanta seu site com desconto!
              </button>
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
          Por que escolher o Modelo Expert?
        </h2>
        <p className="text-gray-600 text-lg leading-7">
          O <strong>Modelo Expert</strong> é o plano mais completo e avançado,
          perfeito para quem deseja dominar o mercado digital. Com todos os
          benefícios dos modelos Start e Pro, o Expert vai além, oferecendo
          integração com os maiores marketplaces de automóveis, como OLX e
          StandVirtual.
        </p>
        <p className="text-gray-600 text-lg leading-7 mt-4">
          Além disso, o plano inclui todas as funcionalidades essenciais, como{" "}
          <strong>site responsivo</strong>, <strong>SEO otimizado</strong>, e um{" "}
          <strong>painel de administrador avançado</strong>. Ele também conta
          com <strong>integração com WhatsApp e Messenger</strong> para
          facilitar a comunicação com seus clientes.
        </p>
        <h3 className="text-2xl font-bold mt-8">
          O que você ganha com o Modelo Expert:
        </h3>
        <ul className="list-disc list-inside mt-4 text-gray-600 text-lg leading-7">
          <li>
            <strong>Integração Completa:</strong> Anuncie diretamente no OLX e
            StandVirtual.
          </li>
          <li>
            <strong>Maior Alcance:</strong> Amplie sua visibilidade e alcance
            mais clientes.
          </li>
          <li>
            <strong>Gestão Avançada:</strong> Painel eficiente para controle e
            atualizações do site.
          </li>
          <li>
            <strong>Conexão Direta:</strong> Fale com seus clientes via WhatsApp
            e Messenger.
          </li>
        </ul>
        <p className="text-gray-600 text-lg leading-7 mt-4">
          <strong>
            Escolha o Modelo Expert e leve o seu stand ao topo do mercado
            digital. Clique no botão acima e comece agora!
          </strong>
        </p>
      </div>
      <ServicesHome />
    </div>
  );
};

export default ExpertPlanPage;
