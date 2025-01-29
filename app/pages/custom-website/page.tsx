import React from "react";
import Image from "next/image";

import customWebsiteImage from "../../src/assets/images/website.png";
import ServicesHome from "@/app/src/components/ServicesHome";

const CustomWebsitePage = () => {
  return (
    <div className="max-w-[1100px] m-auto mb-20 mt-20">
      <div className="text-center p-10">
        <p className="text-4xl font-bold">
          Site Personalizado para Stands de Carros
        </p>
        <p className="text-xl">
          Tenha um site exclusivo e sob medida para seu stand, com design único
          e funcionalidades adaptadas ao seu negócio.
        </p>
        {/* Valor promocional */}
        <div className="mt-10">
          <p className="text-5xl font-bold text-red-600">A partir de: 449€</p>
          <p className="text-xl text-gray-500 mt-2">
            Aproveite esta oportunidade para destacar seu stand no mundo digital
            com um site feito sob medida!
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col md:flex-row items-center md:items-start px-10 gap-4">
          {/* Imagem */}
          <div className="max-w-[500px] mx-auto">
            <Image
              src={customWebsiteImage}
              alt="Site Personalizado para Stands de Carros"
              className="w-full h-auto rounded-lg object-contain"
            />
          </div>
          {/* Texto ao lado da imagem */}
          <div className="flex flex-col gap-4 mt-2">
            <div>
              <h3 className="text-2xl font-bold">Design Exclusivo</h3>
              <p className="text-gray-600">
                Criamos um site totalmente personalizado, atendendo às
                necessidades do seu stand e destacando sua identidade visual.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Funcionalidades Sob Medida</h3>
              <p className="text-gray-600">
                Desenvolvemos recursos específicos para facilitar a gestão e
                melhorar a experiência do usuário.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">SEO e Performance</h3>
              <p className="text-gray-600">
                Otimizamos seu site para os motores de busca, garantindo melhor
                posicionamento no Google.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Suporte e Manutenção</h3>
              <p className="text-gray-600">
                Oferecemos suporte contínuo para manter seu site sempre
                atualizado e funcional.
              </p>
            </div>
            {/* Botão */}
            <div className="flex flex-col md:flex-row w-full gap-4 items-center">
              <button className="bg-red-600 text-white w-72 py-3 px-6 rounded-lg shadow-lg transition-all duration-300 hover:bg-red-700 hover:scale-105">
                Solicite um orçamento Agora!
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Descrição completa */}
      <div className="mt-10 px-10">
        <h2 className="text-3xl font-bold text-center mb-5">
          Por que um site personalizado?
        </h2>
        <p className="text-gray-600 text-lg leading-7">
          No mercado automotivo, um site exclusivo fortalece a presença digital
          do seu stand e melhora a experiência dos clientes.
        </p>
        <h3 className="text-2xl font-bold mt-8">Vantagens do nosso serviço:</h3>
        <ul className="list-disc list-inside mt-4 text-gray-600 text-lg leading-7">
          <li>
            <strong>Identidade Única:</strong> Seu site será exclusivo e feito
            sob medida.
          </li>
          <li>
            <strong>Conversão Aumentada:</strong> Design estratégico para atrair
            mais clientes.
          </li>
          <li>
            <strong>Desempenho e Segurança:</strong> Tecnologia moderna e
            otimizada.
          </li>
          <li>
            <strong>Fácil Gestão:</strong> Painel administrativo intuitivo.
          </li>
        </ul>
        <p className="text-gray-600 text-lg leading-7 mt-4">
          <strong>
            Garanta um site profissional e aumente suas vendas. Solicite já o
            seu!
          </strong>
        </p>
      </div>
      <ServicesHome />
    </div>
  );
};

export default CustomWebsitePage;
