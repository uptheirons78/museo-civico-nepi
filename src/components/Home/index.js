import React from "react";

import MonumentiSlider from "./slider";
import Activities from "./activities";
import News from "./news";
import { SectionTitle } from "../Styles/StyledContent";
import Presentation from "./presentation";
import * as translate from "../../utils/translate.json";

const Home = ({ data, language }) => {
  return (
    <>
      <div className="slider-container">
        <MonumentiSlider language={language} />
      </div>
      <SectionTitle>{translate.default.home_title_one[language]}</SectionTitle>
      <Presentation data={data} language={language} />
      <SectionTitle>{translate.default.home_title_two[language]}</SectionTitle>
      <Activities language={language} />
      <SectionTitle>
        {translate.default.home_title_three[language]}
      </SectionTitle>
      <News language={language} />
    </>
  );
};

export default Home;
