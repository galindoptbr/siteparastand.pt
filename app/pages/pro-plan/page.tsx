import React from "react";
import Image from "next/image";

import projectImage from "../../src/assets/images/pro.png";
import DomainSearchPages from "../../src/components/DomainSearchPages";
import ServicesHome from "@/app/src/components/ServicesHome";

const ProPlanPage = () => {
  return (
    <div className="max-w-[1100px] m-auto mb-20 mt-20">
      <div className="text-center p-10">
        <p className="text-4xl font-bold">Benefícios do Modelo Pro</p>
        <p className="text-xl">
          Eleve sua presença online com funcionalidades avançadas e uma conexão
          direta com seus clientes.
        </p>
        {/* Valor promocional */}
        <div className="mt-5">
          <p className="text-2xl text-gray-600 line-through">
            Valor Real: 599€
          </p>
          <p className="text-5xl font-bold text-red-600">Agora por: 299€</p>
          <p className="text-xl text-gray-500 mt-2">
            Aproveite a promoção e transforme seu stand em referência!
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col md:flex-row items-center md:items-start px-10 gap-4">
          {/* Imagem */}
          <div className="max-w-[500px] mx-auto">
            <Image
              src={projectImage}
              alt="modelo pro"
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
            {/* Botões */}
            <div className="flex flex-col md:flex-row w-full gap-4 items-center">
              <a
                href="https://buy.stripe.com/7sIeXI3Ax1RyenS7sy"
                target="_blank"
                className="bg-red-600 text-white w-72 py-3 px-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:bg-red-700 hover:scale-105"
              >
                Comprar meu site agora!
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
          Por que escolher o Modelo Pro?
        </h2>
        <p className="text-gray-600 text-lg leading-7">
          O <strong>Modelo Pro</strong> foi desenvolvido para stands de carros
          que desejam um diferencial competitivo no mercado digital. Com
          funcionalidades avançadas e integrações estratégicas, o Pro é ideal
          para quem busca mais interação com os clientes e um site que se
          destaca.
        </p>
        <p className="text-gray-600 text-lg leading-7 mt-4">
          Além de incluir todos os benefícios do modelo Start, o plano Pro vai
          além ao oferecer <strong>integração com WhatsApp e Messenger</strong>,
          permitindo uma comunicação rápida e direta com os clientes. O design é
          ainda mais refinado e personalizado, garantindo que seu stand tenha
          uma presença digital que impressione.
        </p>
        <p className="text-gray-600 text-lg leading-7 mt-4">
          Aproveite um <strong>Painel de Administrador Avançado</strong>, com
          ferramentas adicionais que tornam a gestão do seu site ainda mais
          prática e eficiente. E para completar, oferecemos o
          <strong> domínio .pt gratuito por 1 ano</strong>, garantindo
          profissionalismo e credibilidade.
        </p>
        <h3 className="text-2xl font-bold mt-8">
          O que você ganha com o Modelo Pro:
        </h3>
        <ul className="list-disc list-inside mt-4 text-gray-600 text-lg leading-7">
          <li>
            <strong>Maior Interatividade:</strong> Conecte-se com seus clientes
            usando as principais plataformas de mensagens.
          </li>
          <li>
            <strong>Design Personalizado:</strong> Um site moderno e ajustado às
            necessidades do seu stand.
          </li>
          <li>
            <strong>Gestão Eficiente:</strong> Painel avançado para controle e
            atualização de conteúdos.
          </li>
          <li>
            <strong>Presença Digital Profissional:</strong> Domínio gratuito
            para começar com credibilidade.
          </li>
        </ul>
        <p className="text-gray-600 text-lg leading-7 mt-4">
          <strong>
            Eleve o padrão do seu stand com o Modelo Pro e conquiste novos
            clientes. Clique no botão acima e comece agora!
          </strong>
        </p>
      </div>
      <ServicesHome />
    </div>
  );
};

export default ProPlanPage;
