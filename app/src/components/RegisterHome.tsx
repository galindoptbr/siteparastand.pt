import Image from "next/image";
import React from "react";

import projectImage from "../assets/images/project-image.png";
import datacenterImage from "../assets/images/datacenter.png";

const RegisterHome = () => {
  return (
    <div className="max-w-[1100px] m-auto">
      <div className="text-center p-10">
        <p className="text-4xl">Tudo incluído no Registo do domínio</p>
        <p className="text-xl">
          Ao registar um domínio tem tudo o que necessita para o seu sucesso
          online!
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start px-10 gap-4">
        {/* Imagem */}
        <div className="max-w-[500px] mx-auto">
          <Image
            src={projectImage}
            alt="men with laptop"
            className="w-full h-auto rounded-lg object-contain"
          />
        </div>
        {/* Texto ao lado da imagem */}
        <div className="flex flex-col gap-10 mt-10">
          <div>
            <h3 className="text-2xl font-bold">Alojamento Web</h3>
            <p className="text-gray-600">
              Oferta do Web Domain no primeiro ano. Tenha 1GB de alojamento para
              alojar de imediato o seu site!
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Site OnePage</h3>
            <p className="text-gray-600">
              Crie facilmente um Site One Page com navegação vertical! É
              gratuito durante o 1º ano com o registo de um domínio e só renova
              se quiser.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Conta de Email</h3>
            <p className="text-gray-600">
              Uma conta de email com o nome do seu domínio para que possa
              receber, enviar e reenviar emails de forma profissional.
            </p>
          </div>
          <button className="bg-black text-white w-60 py-3 px-6 rounded-lg hover:bg-gray-800">
            Registe já o seu domínio
          </button>
        </div>
      </div>
      <div className="text-center p-10">
        <p className="text-4xl">
          Datacenter Nacional com hardware de última geração!
        </p>
        <p className="text-xl">
          Mais de 20 anos de experiência e uma reputação de inovação e
          excelência.
        </p>
        <div className="flex flex-wrap justify-center mt-10 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col justify-between text-center p-4 max-w-xs h-full">
            <div>
              <h3 className="text-2xl font-bold">Servidores Dedicados</h3>
              <p className="text-md text-gray-600">
                Potência e Performance garantida para as suas aplicações.
              </p>
            </div>
            <button className="mt-4 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded">
              Ver Planos
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col justify-between text-center p-4 max-w-xs h-full">
            <div>
              <h3 className="text-2xl font-bold">Cloud Servers</h3>
              <p className="text-md text-gray-600">
                Cloud SSD Geridos, performance e segurança avançada.
              </p>
            </div>
            <button className="mt-4 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded">
              Ver Planos
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col justify-between text-center p-4 max-w-xs h-full">
            <div>
              <h3 className="text-2xl font-bold">VPS Servidores Virtuais</h3>
              <p className="text-md text-gray-600">
                Escaláveis, velozes, seguros, adaptados às suas necessidades.
              </p>
            </div>
            <button className="mt-4 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded">
              Ver Planos
            </button>
          </div>
        </div>

        <Image
          src={datacenterImage}
          alt="data center image"
          className="rounded-lg max-w-full mt-10"
        />
      </div>
    </div>
  );
};

export default RegisterHome;
