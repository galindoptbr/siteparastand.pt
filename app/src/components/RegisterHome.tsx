import Image from "next/image";
import React from "react";

import projectImage from "../assets/images/project-image.png";

const RegisterHome = () => {
  return (
    <div className="max-w-[1100px] m-auto">
      <div className="text-center p-10">
        <p className="text-4xl">Tudo incluso na criação do site do seu stand</p>
        <p className="text-xl">
          Ao criar o site do seu stand conosco, você terá tudo o que precisa
          para atrair mais clientes e vender mais veículos!
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
            <h3 className="text-2xl font-bold">Domínio .pt Gratuito</h3>
            <p className="text-gray-600">
              Receba o domínio .pt para o site do seu stand gratuitamente no
              primeiro ano, garantindo uma presença digital profissional.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Design Personalizado</h3>
            <p className="text-gray-600">
              Tenha um site exclusivo e otimizado para exibir o catálogo de
              veículos do seu stand, com foco em atrair e engajar clientes.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Otimização para Google</h3>
            <p className="text-gray-600">
              Seu site será projetado para se destacar nos resultados de busca,
              aumentando as chances de clientes encontrarem seu stand online.
            </p>
          </div>
          <button className="bg-black text-white w-72 py-3 px-6 rounded-lg hover:bg-zinc-700">
            Crie agora o site do seu stand
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterHome;
