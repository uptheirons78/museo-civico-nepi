import React from "react";
import { StyledHeadingSection } from "../Styles/StyledHeadingSection";

import bgImg from "../../images/nepi_02.jpg";

const HeadingSection = ({ children }) => {
  return (
    <StyledHeadingSection
      className="title-section"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="inner-section">{children}</div>
    </StyledHeadingSection>
  );
};

export default HeadingSection;
