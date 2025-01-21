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
      <Banner />
      <DomainSearch />
      <CardsHome />
      <ProjectHome />
      <RegisterHome />
      <ServicesHome />
    </div>
  );
};

export default Home;
