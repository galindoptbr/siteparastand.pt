"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import logo from "../assets/images/siteparastand-logo.png";

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full bg-zinc-800 shadow-lg fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center m-auto p-4 max-w-[1200px]">
        {/* Logo */}
        <Link href="/" replace>
          <Image className="w-44 rounded-lg" src={logo} alt="logo" />
        </Link>
        {/* Botão para menu mobile */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white focus:outline-none"
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
        {/* Navbar para telas grandes */}
        <ul className="hidden lg:flex gap-8 items-center font-semibold text-white">
          <li>
            <a href="#inicio" className="hover:text-gray-300 transition-all">
              Início
            </a>
          </li>
          <li>
            <a href="#projetos" className="hover:text-gray-300 transition-all">
              Desenvolvemos seu Site
            </a>
          </li>
          <li>
            <a href="#dominio" className="hover:text-gray-300 transition-all">
              Verificar Domínio
            </a>
          </li>
        </ul>
        {/* Navbar para telas pequenas */}
        {isMobileMenuOpen && (
          <ul className="lg:hidden bg-zinc-800 fixed top-20 left-0 w-full z-10 flex flex-col gap-4 p-4">
            <li>
              <a
                href="#inicio"
                className="text-gray-100 hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                className="text-gray-100 hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Desenvolvemos seu Site
              </a>
            </li>
            <li>
              <a
                href="#dominio"
                className="text-gray-100 hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Verificar Domínio
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
