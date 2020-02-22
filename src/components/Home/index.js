import React from "react";

import MonumentiSlider from "./slider";
import Activities from "./activities";
import News from "./news";
import { SectionTitle } from "../Styles/StyledContent";
import Presentation from "./presentation";

const Home = ({ data }) => {
  return (
    <>
      <MonumentiSlider />
      <SectionTitle>Nepi e dintorni</SectionTitle>
      <Presentation data={data} />
      <SectionTitle>Attività e Servizi</SectionTitle>
      <Activities />
      <SectionTitle>News ed Eventi</SectionTitle>
      <News />
    </>
  );
};

export default Home;
