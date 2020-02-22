import React from "react";

import MonumentiSlider from "./slider";
import Activities from "./activities";
import News from "./news";
import { SectionTitle } from "../Styles/StyledContent";

const Home = () => {
  return (
    <>
      <MonumentiSlider />
      <SectionTitle>Attività e Servizi</SectionTitle>
      <Activities />
      <SectionTitle>News ed Eventi</SectionTitle>
      <News />
    </>
  );
};

export default Home;
