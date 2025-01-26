import Image from "next/image";
import React from "react";
import screens from "../assets/images/screens.png";

const ProjectHome = () => {
  return (
    <>
      <div className="bg-white pb-5">
        <div className="max-w-[1100px] m-auto">
          <div className="text-center p-10 ">
            <p className="text-4xl">
              Confie em nós para desenvolver o seu projeto!
            </p>
            <p className="text-xl">
              Precisa de um site único? Nós desenvolvemos um projeto sob medida
              para o seu stand!
            </p>
          </div>
          <Image
            src={screens}
            alt="Devices Screens"
            className="w-[950px] m-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-10">
            {/* Card 1 */}
            <div className="p-6 flex flex-col justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Seu site pronto em até{" "}
                  <span className="text-green-600">48 horas</span>
                </h3>
                <p className="text-gray-600 mb-6">
                  Após concluir a compra, nós garantimos que o site do seu stand
                  estará pronto e funcionando em até 48 horas. Um processo
                  rápido, simples e sem complicações.
                </p>
              </div>
              <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mt-4">
                Saiba Mais
              </button>
            </div>
            {/* Card 2 */}
            <div className="p-6 flex flex-col justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Criação de Logotipo{" "}
                  <span className="text-green-600">Personalizado</span>
                </h3>
                <p className="text-gray-600 mb-6">
                  Transforme a identidade do seu stand com um logotipo
                  exclusivo, feito sob medida para destacar sua marca no
                  mercado. Simples, rápido e profissional.
                </p>
              </div>
              <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mt-4">
                Saiba Mais
              </button>
            </div>
            {/* Card 3 */}
            <div className="p-6 flex flex-col justify-between text-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Necessita de ajuda?{" "}
                  <span className="text-green-600">Criamos o seu site</span>
                </h3>
                <p className="text-gray-600 mb-6">
                  Quer um site único e personalizado? Confie em nós para
                  desenvolver o projeto ideal para o seu stand, atendendo às
                  suas necessidades específicas.
                </p>
              </div>
              <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mt-4">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectHome;
