import Image from "next/image";
import React from "react";

import confiancaImage from "../assets/images/confianca.png";
import suportImage from "../assets/images/suport.png";
import liderImage from "../assets/images/lider.png";



const ServicesHome = () => {
  return (
    <div className="text-center p-10">
      <p className="text-4xl">Algumas razões para usar os nossos serviços</p>
      <div className="flex justify-center gap-8 flex-wrap">
        {/* Card 1 */}
        <div className="flex flex-col justify-center items-center text-center max-w-xs p-4">
          <div className="mb-4">
            <Image
              src={confiancaImage}
              alt="Confianca Image"
              className="w-32"
            />
          </div>
          <h3 className="text-3xl font-bold mb-2">Confiança</h3>
          <p className="text-smd text-gray-600">
            Mais de 80 000 clientes confiam os seus serviços à arrancadaweb.pt.
            Operamos no mercado nacional desde 2001 na área de registo de
            domínios e serviços web.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-center items-center text-center max-w-xs p-4">
          <div className="mb-4">
            <Image
              src={suportImage}
              alt="Confianca Image"
              className="w-32"
            />
          </div>
          <h3 className="text-3xl font-bold mb-2">Suporte ao Cliente</h3>
          <p className="text-md text-gray-600">
            O nosso suporte técnico é disponibilizado por uma equipa
            especializada, o que nos permite uma maior rapidez de resposta e uma
            melhor qualidade no atendimento.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-center items-center text-center max-w-xs p-4">
          <div className="mb-4">
            <Image
              src={liderImage}
              alt="Confianca Image"
              className="w-32"
            />
          </div>
          <h3 className="text-3xl font-bold mb-2">Líderes de Mercado</h3>
          <p className="text-md text-gray-600">
            A arrancadaweb.pt é o maior prestador em Portugal de serviços de Registo
            de domínios, Alojamento de Sites, Servidores Dedicados, Microsoft
            365 e Email Empresarial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
