import { Banner } from "./src/components/Banner";
import CardsHome from "./src/components/CardsHome";
import { NextPage } from "next";
import ProjectHome from "./src/components/ProjectHome";
import RegisterHome from "./src/components/RegisterHome";
import ServicesHome from "./src/components/ServicesHome";
import DomainSearch from "./src/components/DomainSearch";

const Home: NextPage = () => {
  return (
    <div>
      {/* Seção Banner */}
      <section id="inicio">
        <Banner />
      </section>

      {/* Seção Cards */}
      <section id="cards">
        <CardsHome />
      </section>

      {/* Seção Servicos */}
      <section id="servicos">
        <ProjectHome />
      </section>

      {/* Seção Registro */}
      <section id="registro">
        <RegisterHome />
      </section>

      {/* Seção Dominio */}
      <section id="dominio">
        <DomainSearch />
      </section>

      {/* Seção Serviços */}
      <section id="servicos">
        <ServicesHome />
      </section>
    </div>
  );
};

export default Home;
