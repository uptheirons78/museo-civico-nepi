import React from "react";
import { StyledHeadingSection } from "../Styles/StyledHeadingSection";

import bgImg from "../../images/nepi_02.jpg";

const HeadingSection = ({ title }) => {
  return (
    <StyledHeadingSection
      className="title-section"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="inner-section">
        <h2>{title}</h2>
      </div>
    </StyledHeadingSection>
  );
};

export default HeadingSection;
