"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import logo from "../assets/images/siteparastand-logo.png";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleNavigation = (hash: string) => {
    if (pathname !== "/") {
      window.location.href = `/${hash}`;
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* Navbar Desktop */}
      <div className="hidden lg:block bg-zinc-800">
        <div className="max-w-[1200px] mx-auto px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" replace>
            <Image src={logo} alt="Logo" className="w-48" />
          </Link>
          {/* Links de Navegação */}
          <ul className="flex gap-8 items-center font-semibold text-white">
            <li>
              <a
                onClick={() => handleNavigation("#inicio")}
                className="hover:text-gray-300 transition-all cursor-pointer"
              >
                Início
              </a>
            </li>
            <li>
              <Link
                href="/pages/about"
                className="hover:text-gray-300 transition-all cursor-pointer"
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <a
                onClick={() => handleNavigation("#servicos")}
                className="hover:text-gray-300 transition-all cursor-pointer"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavigation("#dominio")}
                className="hover:text-gray-300 transition-all cursor-pointer"
              >
                Domínio
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Navbar Mobile */}
      <div className="bg-zinc-800 flex items-center justify-between p-4 max-w-[1200px] mx-auto lg:hidden">
        {/* Logo Mobile */}
        <Link href="/" replace>
          <Image src={logo} alt="Logo" className="w-40" />
        </Link>
        {/* Botão para abrir/fechar o menu */}
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      <ul
        className={`lg:hidden bg-zinc-800 fixed inset-x-0 top-20 z-10 flex flex-col items-center gap-8 transition-all duration-300 p-10 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <li>
          <a
            onClick={() => {
              handleNavigation("#inicio");
              setIsMobileMenuOpen(false);
            }}
            className="hover:text-gray-300 transition-all cursor-pointer font-semibold text-white"
          >
            Início
          </a>
        </li>
        <li>
          <Link
            href="/pages/about"
            className="hover:text-gray-300 transition-all cursor-pointer font-semibold text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Sobre Nós
          </Link>
        </li>
        <li>
          <a
            onClick={() => {
              handleNavigation("#servicos");
              setIsMobileMenuOpen(false);
            }}
            className="hover:text-gray-300 transition-all cursor-pointer font-semibold text-white"
          >
            Serviços
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              handleNavigation("#dominio");
              setIsMobileMenuOpen(false);
            }}
            className="hover:text-gray-300 transition-all cursor-pointer font-semibold text-white"
          >
            Domínio
          </a>
        </li>
      </ul>
    </div>
  );
};
