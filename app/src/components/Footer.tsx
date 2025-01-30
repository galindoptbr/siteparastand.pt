"use client";

import React from "react";
import Link from "next/link";
import { ImFacebook2, ImYoutube, ImInstagram } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";

import logo from "../assets/images/siteparastand-logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();

  const handleNavigation = (hash: string) => {
    if (pathname !== "/") {
      // Se não estiver na landing page, redireciona para a home
      window.location.href = `/${hash}`;
    } else {
      // Scroll para o elemento da página inicial
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-zinc-800 text-white p-10">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Coluna 1: Sobre */}
        <div>
          <Image src={logo} alt="logo site para stand" className="w-60" />
          <p className="text-md mb-6">
            Especialistas em criar sites para stands de carros. Ajudamos seu
            negócio a se destacar no mercado digital com soluções rápidas e
            personalizadas.
          </p>
          {/* <div className="flex gap-4">
            <Link href="https://www.facebook.com" target="_blank">
              <div className="w-10 h-10 flex items-center justify-center bg-yellow-500 rounded-full">
                <ImFacebook2
                  size={20}
                  className="cursor-pointer text-white hover:text-violet-700"
                />
              </div>
            </Link>
            <Link href="https://www.youtube.com" target="_blank">
              <div className="w-10 h-10 flex items-center justify-center bg-yellow-500 rounded-full">
                <ImYoutube
                  size={20}
                  className="cursor-pointer text-white hover:text-violet-700"
                />
              </div>
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <div className="w-10 h-10 flex items-center justify-center bg-yellow-500 rounded-full">
                <ImInstagram
                  size={20}
                  className="cursor-pointer text-white hover:text-violet-700"
                />
              </div>
            </Link>
          </div> */}
        </div>
        {/* Coluna 2: Contatos */}
        <div>
          <h3 className="font-bold text-2xl text-yellow-500 mb-4">Contatos</h3>
          <ul className="flex flex-col text-md space-y-2">
            <li>
              <p className="text-lg">Email:</p>
              <p className="text-md font-bold">siteparastand@gmail.com</p>
            </li>
            <p className="text-sm">Seg. a Sex. 9h00 | 18h00</p>
          </ul>
        </div>
        {/* Coluna 3: Sobre Nós */}
        <div>
          <h3 className="font-bold text-2xl text-yellow-500 mb-4">Sobre Nós</h3>
          <ul className="flex flex-col text-md space-y-2">
            <li>
              <Link
                href="/pages/about"
                className="flex items-center gap-2 hover:text-gray-400"
              >
                <IoIosArrowForward /> Sobre Nós
              </Link>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("#servicos")}
                className="flex items-center gap-2 hover:text-gray-400"
              >
                <IoIosArrowForward /> Nossos Serviços
              </button>
            </li>
            <li>
              <Link
                href="/pages/privacy-policy"
                className="flex items-center gap-2 hover:text-gray-400"
              >
                <IoIosArrowForward /> Políticas de Privacidade
              </Link>
            </li>
          </ul>
        </div>
        {/* Coluna 4: Produtos e Serviços */}
        <div>
          <h3 className="font-bold text-2xl text-yellow-500 mb-4">Serviços</h3>
          <ul className="text-md space-y-2">
            <li>
              <button
                onClick={() => handleNavigation("#cards")}
                className="flex items-center gap-2 hover:text-gray-400"
              >
                <IoIosArrowForward /> Sites para Stand
              </button>
            </li>
            <li>
              <Link
                href={"/pages/custom-website"}
                className="flex items-center gap-2 hover:text-gray-400"
              >
                <IoIosArrowForward /> Site Personalizado
              </Link>
            </li>
            <li>
              <Link
                href={"/pages/logotipo"}
                className="flex items-center gap-2 hover:text-gray-400"
              >
                <IoIosArrowForward /> Criação de Logotipos
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <div className="flex justify-center items-center mt-2">
          <p>© 2025 desenvolvido por -</p>
          <Link href="https://www.linkedin.com/in/galindoptbr/" target="_blank">
            <span className="hover:text-yellow-500 cursor-pointer ml-1 font-bold">
              GalindoPtBr
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};
