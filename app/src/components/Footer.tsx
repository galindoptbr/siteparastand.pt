"use client";

import React from "react";
import Link from "next/link";
import { ImFacebook2, ImYoutube, ImInstagram } from "react-icons/im";
import { CiLinkedin } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

import arrancadaLogo from "../assets/images/arrancadalogo.png";
import Image from "next/image";
import { FaPhone } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-violet-700 text-white p-10">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Coluna 1 */}
        <div>
          <Image
            src={arrancadaLogo}
            alt="logo arrancada web"
            className="w-60"
          />
          <p className="text-md mb-6">
            Mais de 80 000 clientes confiam os seus serviços à arrancadaweb.pt.
            Operamos no mercado nacional desde 2001 na área de registo de
            domínios e serviços web.
          </p>
          <div className="flex gap-4">
            <Link href="https://www.facebook.com" target="_blank">
              <div className="w-10 h-10 flex items-center justify-center bg-yellow-400 rounded-full">
                <ImFacebook2
                  size={20}
                  className="cursor-pointer text-white hover:text-violet-700"
                />
              </div>
            </Link>
            <Link href="https://www.youtube.com" target="_blank">
              <div className="w-10 h-10 flex items-center justify-center bg-yellow-400 rounded-full">
                <ImYoutube
                  size={20}
                  className="cursor-pointer text-white hover:text-violet-700"
                />
              </div>
            </Link>
            <Link href="https://www.instagram.com" target="_blank">
              <div className="w-10 h-10 flex items-center justify-center bg-yellow-400 rounded-full">
                <ImInstagram
                  size={20}
                  className="cursor-pointer text-white hover:text-violet-700"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Coluna 2 */}
        <div>
          <h3 className="font-bold text-2xl text-yellow-400 mb-4">Contactos</h3>
          <ul className="flex flex-col text-md space-y-2">
            <li>
              <Link
                href="tel:210081081"
                className="flex items-center gap-2 hover:text-gray-400"
              >
                <FaPhone size={20} />
                <p className="text-2xl">999 999 999</p>
              </Link>
            </li>
            <p className="text-sm pl-4 pb-10">Seg. a Sex. 9h00 | 18h00</p>
            <li>
              <Link
                href="/suporte"
                className="flex items-center gap-2 hover:text-gray-400"
              >
                <IoIosArrowForward /> Suporte
              </Link>
            </li>
            <li>
              <Link
                href="/base-conhecimento"
                className="flex items-center gap-2 hover:text-gray-400"
              >
                <IoIosArrowForward /> Base de Conhecimento
              </Link>
            </li>
            <li>
              <Link
                href="/registrar-cliente"
                className="flex items-center gap-2 hover:text-gray-400"
              >
                <IoIosArrowForward /> Registar como Cliente
              </Link>
            </li>
            <li>
              <Link
                href="/pagamentos"
                className="flex items-center gap-2 hover:text-gray-400"
              >
                <IoIosArrowForward /> Pagamentos
              </Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div>
          <h3 className="font-bold text-2xl text-yellow-400 mb-4">
            Arrancadaweb.pt
          </h3>
          <ul className="flex flex-col text-md space-y-2">
            {[
              { href: "/sobre-nos", text: "Sobre Nós" },
              { href: "/recrutamento", text: "Recrutamento" },
              {
                href: "/datacenter-certificacoes",
                text: "Datacenter e Certificações",
              },
              { href: "/pua", text: "PUA" },
              { href: "/condicoes", text: "Condições" },
              {
                href: "/condicoes-promocionais",
                text: "Condições Promocionais",
              },
              { href: "/blog", text: "Blog" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 hover:text-gray-400"
                >
                  <IoIosArrowForward /> {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna 4 */}
        <div>
          <h3 className="font-bold text-2xl text-yellow-400 mb-4">Produtos</h3>
          <ul className="text-md space-y-2">
            {[
              { href: "/dominios", text: "Domínios" },
              { href: "/email-profissional", text: "Email Profissional" },
              { href: "/web-design", text: "Serviço Web Design" },
              { href: "/servidores-dedicados", text: "Servidores Dedicados" },
              { href: "/cloud-servers", text: "Cloud Servers" },
              { href: "/email-marketing", text: "Email Marketing" },
              { href: "/alojamento-sites", text: "Alojamento de Sites" },
              { href: "/criar-site", text: "Criar Site" },
              { href: "/loja-online", text: "Loja Online" },
              { href: "/vps-servers", text: "VPS Servers" },
              { href: "/google-adwords", text: "Google AdWords" },
              { href: "/certificados-ssl", text: "Certificados SSL" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 hover:text-gray-400"
                >
                  <IoIosArrowForward /> {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <div className="flex justify-center items-center mt-2">
          <p>© 2025 desenvolvido por -</p>
          <CiLinkedin size={20} className="mr-1 ml-1 text-blue-500" />
          <Link href="https://www.linkedin.com/in/galindoptbr/" target="_blank">
            <span className="hover:text-yellow-500 cursor-pointer">
              GalindoPtBr
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};
