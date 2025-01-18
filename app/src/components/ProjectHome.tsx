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
              Crie o seu próprio Site ou Loja Online, ou entregue-nos o seu
              projeto que nós fazemos!
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
                  Crie facilmente o seu próprio{" "}
                  <span className="text-green-600">Site</span>
                </h3>
                <p className="text-gray-600 mb-6">
                  Escolha simplesmente um template e construa o seu próprio site
                  em menos de 1 hora! Dê vida à sua visão, é fácil e rápido.
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
                  Crie facilmente a sua própria{" "}
                  <span className="text-green-600">Loja Online</span>
                </h3>
                <p className="text-gray-600 mb-6">
                  Construa a sua Loja Online adaptada a todos os dispositivos em
                  menos de 1 hora e expanda o seu negócio na Internet!
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
                  Quer ter um Site, Blog, Loja Online ou App? Confie em nós para
                  desenvolver o seu projeto à medida das suas necessidades.
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
