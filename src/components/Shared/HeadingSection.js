import React from "react";
import { StyledHeadingSection } from "../Styles/StyledHeadingSection";

import defaultImage from "../../images/default-heading-image.jpg";

const HeadingSection = ({ thumbnail, children }) => {
  const thumbnailImage = thumbnail ? thumbnail : defaultImage;
  return (
    <StyledHeadingSection
      className="title-section"
      style={{ backgroundImage: `url(${thumbnailImage})` }}
    >
      <div className="inner-section">{children}</div>
    </StyledHeadingSection>
  );
};

export default HeadingSection;
