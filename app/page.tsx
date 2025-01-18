import { Banner } from "./src/components/Banner";
import CardsHome from "./src/components/CardsHome";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <Banner />
      <CardsHome />
    </div>
  );
};

export default Home;
