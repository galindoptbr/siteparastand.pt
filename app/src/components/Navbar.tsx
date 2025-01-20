"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import logo from "../assets/images/arrancadalogo.png";

export const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Estado para o menu mobile

  const toggleDropdown = (index: number | null) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full bg-violet-700 shadow-lg fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center m-auto p-4 max-w-[1200px]">
        {/* Logo */}
        <Link href="/" replace>
          <Image className="w-48 rounded-lg" src={logo} alt="logo" />
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
          {/* Domínios & SSL */}
          <li
            className="relative group"
            onMouseEnter={() => toggleDropdown(0)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-gray-300">
              Domínios & SSL
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Submenu */}
            <ul
              className={`absolute left-0 top-full mt-2 bg-violet-700 shadow-md rounded-md w-60 p-4 transition-all duration-300 ${
                openDropdown === 0
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              <li className="flex items-center gap-2 py-2">
                <span className="text-green-400">🌐</span>
                <Link
                  href="/register-domains"
                  className="text-gray-100 hover:text-gray-300"
                >
                  Registrar Domínios
                </Link>
              </li>
              <li className="flex items-center gap-2 py-2">
                <span className="text-green-400">📤</span>
                <Link
                  href="/transfer-domains"
                  className="text-gray-100 hover:text-gray-300"
                >
                  Transferir Domínios
                </Link>
              </li>
              <li className="flex items-center gap-2 py-2">
                <span className="text-green-400">🔄</span>
                <Link
                  href="/renew-domains"
                  className="text-gray-100 hover:text-gray-300"
                >
                  Renovar Domínios
                </Link>
              </li>
              <li className="flex items-center gap-2 py-2">
                <span className="text-green-400">⭐</span>
                <Link
                  href="/new-domains"
                  className="text-gray-100 hover:text-gray-300"
                >
                  Novos Domínios
                </Link>
              </li>
              <li className="flex items-center gap-2 py-2">
                <span className="text-green-400">🔍</span>
                <Link
                  href="/whois-search"
                  className="text-gray-100 hover:text-gray-300"
                >
                  Pesquisar Whois
                </Link>
              </li>
            </ul>
          </li>
          {/* Servidores */}
          <li
            className="relative group"
            onMouseEnter={() => toggleDropdown(1)}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-gray-300">
              Servidores
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Submenu */}
            <ul
              className={`absolute left-0 top-full mt-2 bg-violet-700 shadow-md rounded-md w-[500px] p-4 transition-all duration-300 grid grid-cols-2 gap-4 ${
                openDropdown === 1
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              {/* Soluções Virtuais */}
              <div>
                <h4 className="text-gray-200 mb-4">Soluções Virtuais</h4>
                <ul>
                  <li className="flex items-center gap-2 py-2">
                    <span className="text-green-400">☁️</span>
                    <Link
                      href="/cloud-servers"
                      className="text-gray-100 hover:text-gray-300 flex items-center"
                    >
                      Cloud Servers{" "}
                      <span className="ml-2 text-orange-400 text-xs">
                        PROMO
                      </span>
                    </Link>
                  </li>
                  <li className="flex items-center gap-2 py-2">
                    <span className="text-green-400">💻</span>
                    <Link
                      href="/virtual-servers"
                      className="text-gray-100 hover:text-gray-300 flex items-center"
                    >
                      Servidores Virtuais{" "}
                      <span className="ml-2 text-orange-400 text-xs">
                        PROMO
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Servidores Dedicados */}
              <div>
                <h4 className="text-gray-200 mb-4">Servidores Dedicados</h4>
                <ul>
                  <li className="flex items-center gap-2 py-2">
                    <span className="text-green-400">🐧</span>
                    <Link
                      href="/linux-servers"
                      className="text-gray-100 hover:text-gray-300"
                    >
                      Servidores Linux
                    </Link>
                  </li>
                  <li className="flex items-center gap-2 py-2">
                    <span className="text-green-400">🖥️</span>
                    <Link
                      href="/windows-servers"
                      className="text-gray-100 hover:text-gray-300"
                    >
                      Servidores Windows
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
          </li>
          {/* Outros tópicos */}
          <li>
            <Link
              href="/hosting-wordpress"
              className="hover:text-gray-300 transition-all"
            >
              Hosting & WordPress
            </Link>
          </li>
          <li>
            <Link href="/email" className="hover:text-gray-300 transition-all">
              Email
            </Link>
          </li>
          <li>
            <Link href="/sites" className="hover:text-gray-300 transition-all">
              Sites
            </Link>
          </li>
          <li>
            <Link
              href="/marketing"
              className="hover:text-gray-300 transition-all"
            >
              Marketing
            </Link>
          </li>
          <li>
            <Link href="/rgpd" className="hover:text-gray-300 transition-all">
              RGPD
            </Link>
          </li>
        </ul>
        {/* Navbar para telas pequenas */}
        {isMobileMenuOpen && (
          <ul className="lg:hidden bg-violet-700 fixed inset-y-0 top-20 left-0 w-full z-10 flex flex-col gap-4 p-4">
            <li>
              <Link
                href="/register-domains"
                className="text-gray-100 hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Registrar Domínios
              </Link>
            </li>
            <li>
              <Link
                href="/cloud-servers"
                className="text-gray-100 hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cloud Servers
              </Link>
            </li>
            <li>
              <Link
                href="/hosting-wordpress"
                className="text-gray-100 hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hosting & WordPress
              </Link>
            </li>
            <li>
              <Link
                href="/email"
                className="text-gray-100 hover:text-gray-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Email
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
