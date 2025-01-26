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
            Estamos comprometidos em ajudar stands de carros a se destacarem no
            ambiente digital, oferecendo soluções modernas e personalizadas para
            o seu negócio.
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col justify-center items-center text-center max-w-xs p-4">
          <div className="mb-4">
            <Image src={suportImage} alt="Confianca Image" className="w-32" />
          </div>
          <h3 className="text-3xl font-bold mb-2">Suporte ao Cliente</h3>
          <p className="text-md text-gray-600">
            Contamos com uma equipe dedicada para oferecer suporte técnico em
            todas as etapas, garantindo um atendimento ágil e de qualidade. Conte conosco para o que for preciso!
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col justify-center items-center text-center max-w-xs p-4">
          <div className="mb-4">
            <Image src={liderImage} alt="Confianca Image" className="w-32" />
          </div>
          <h3 className="text-3xl font-bold mb-2">Foco no Setor</h3>
          <p className="text-md text-gray-600">
            Nosso objetivo é nos tornar referência no desenvolvimento de sites
            para stands de carros, oferecendo ferramentas e serviços que atendam
            às suas necessidades específicas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
