import React from "react";
import { StyledSliderCard } from "../Styles/StyledSliderCard";

const SliderCard = ({ title, image, description }) => {
  return (
    <StyledSliderCard
      className="title-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="inner-section">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </StyledSliderCard>
  );
};

export default SliderCard;
