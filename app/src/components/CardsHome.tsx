"use client";

import React from "react";
import Image from "next/image";
import { FaCheck, FaTimes } from "react-icons/fa";
import Link from "next/link";

import card1 from "../assets/images/card-1.png";
import card2 from "../assets/images/card-2.png";
import card3 from "../assets/images/card-3.png";

const benefits = [
  { name: "Site 100% responsivo", plans: ["start", "pro", "expert"] },
  { name: "SEO otimizado Google", plans: ["start", "pro", "expert"] },
  { name: "Painel de Administrador", plans: ["start", "pro", "expert"] },
  { name: "Domínio .pt GRÁTIS por 1 ano", plans: ["start", "pro", "expert"] },
  {
    name: "Integração com WhatsApp e Messenger",
    plans: ["start", "pro", "expert"],
  },
  { name: "Criação de logotipo personalizado", plans: ["pro","expert"] },
  { name: "Integração com OLX e StandVirtual", plans: ["expert"] },
];

type PlanType = "start" | "pro" | "expert";

const CardsHome = () => {
  const renderBenefits = (plan: PlanType) =>
    benefits.map((benefit, index) => (
      <li className="flex items-center" key={index}>
        <span
          className={`mr-2 ${
            benefit.plans.includes(plan) ? "text-green-600" : "text-red-600"
          }`}
        >
          {benefit.plans.includes(plan) ? <FaCheck /> : <FaTimes />}
        </span>
        {benefit.name}
      </li>
    ));

  return (
    <div className="max-w-[1100px] m-auto pb-10">
      <div className="text-center px-5 py-10">
        <p className="text-4xl">Nossos Planos de Desenvolvimento</p>
        <p className="text-xl text-gray-600">
          Escolha o plano perfeito para criar um site profissional para o seu
          stand.
        </p>
      </div>

      <div className="relative z-10 p-5 sm:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 - Start */}
        <div className="w-full max-w-[370px] mx-auto rounded-md overflow-hidden shadow-lg bg-white">
          <div className="relative w-full h-[220px] flex items-center justify-center bg-gray-900">
            <Image
              src={card1}
              alt="Modelo Start"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Preço */}
          <div className="text-center py-5">
            <p className="text-lg text-gray-500 line-through">399€</p>
            <p className="text-4xl font-bold text-red-600">199€</p>
            <p className="text-sm text-gray-500">
              Preço promocional por tempo limitado!
            </p>
          </div>

          {/* Benefícios */}
          <div className="p-5">
            <ul className="flex flex-col gap-1 text-md text-gray-700">
              {renderBenefits("start")}
            </ul>
          </div>

          {/* Botao */}
          <div className="p-5 flex justify-center">
            <Link href="/pages/start-plan">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-20 py-4 rounded-md shadow-lg w-full">
                Ver Detalhes
              </button>
            </Link>
          </div>
        </div>

        {/* Card 2 - Pro */}
        <div className="w-full max-w-[370px] mx-auto rounded-md overflow-hidden shadow-lg bg-white">
          <div className="relative w-full h-[220px] flex items-center justify-center bg-gray-900">
            <Image
              src={card2}
              alt="Modelo Pro"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Preço */}
          <div className="text-center py-5">
            <p className="text-lg text-gray-500 line-through">599€</p>
            <p className="text-4xl font-bold text-red-600">299€</p>
            <p className="text-sm text-gray-500">
              Preço promocional por tempo limitado!
            </p>
          </div>

          {/* Benefícios */}
          <div className="p-5">
            <ul className="flex flex-col gap-1 text-md text-gray-700">
              {renderBenefits("pro")}
            </ul>
          </div>

          {/* Botão */}
          <div className="p-5 flex justify-center">
            <Link href="/pages/pro-plan">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-20 py-4 rounded-md shadow-lg w-full">
                Ver Detalhes
              </button>
            </Link>
          </div>
        </div>

        {/* Card 3 - Expert (Desativado) */}
        <div className="relative w-full max-w-[370px] mx-auto rounded-md overflow-hidden shadow-lg bg-gray-300 opacity-60 pointer-events-none">
          <div className="relative w-full h-[220px] flex items-center justify-center bg-gray-900">
            <Image
              src={card3}
              alt="Modelo Expert"
              className="w-full h-full object-cover"
            />
            {/* Faixa diagonal "Em Breve" */}
            <div className="absolute top-5 right-[-50px] transform rotate-45 bg-red-600 text-white text-sm font-bold py-1 px-10 shadow-lg">
              Em Breve
            </div>
          </div>

          {/* Preço */}
          <div className="text-center py-5">
            <p className="text-lg text-gray-500 line-through">899€</p>
            <p className="text-4xl font-bold text-red-600">399€</p>
            <p className="text-sm text-gray-500">
              Preço promocional por tempo limitado!
            </p>
          </div>

          {/* Benefícios */}
          <div className="p-5">
            <ul className="flex flex-col gap-1 text-md text-gray-700">
              {renderBenefits("expert")}
            </ul>
          </div>

          {/* Botão Desativado */}
          <div className="p-5 flex justify-center">
            <button className="bg-gray-500 text-white font-bold px-20 py-4 rounded-md shadow-lg w-full cursor-not-allowed">
              Indisponível
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsHome;
