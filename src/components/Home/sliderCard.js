import React from "react";
import { Link } from "gatsby";
import { StyledSliderCard } from "../Styles/StyledSliderCard";

const SliderCard = ({ title, image, description, slug }) => {
  return (
    <StyledSliderCard
      className="title-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="inner-section">
        <h2 className="slider-title">{title}</h2>
        <p className="slider-text">{description}</p>
        <Link className="slider-link" to={`/monumenti/${slug}`}>
          Leggi l'articolo
        </Link>
      </div>
    </StyledSliderCard>
  );
};

export default SliderCard;
