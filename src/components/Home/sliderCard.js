import React from "react";
import { Link } from "gatsby";
import { StyledSliderCard } from "../Styles/StyledSliderCard";
import * as translate from "../../utils/translate.json";

const SliderCard = ({ title, image, description, slug, language }) => {
  const monumentSlug = language === "it" ? "/monumenti/" : "/en/monuments/";
  return (
    <StyledSliderCard
      className="title-section"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="inner-section">
        <h2 className="slider-title">{title}</h2>
        <p className="slider-text">{description}</p>
        <Link className="slider-link" to={`${monumentSlug}${slug}`}>
          {translate.default.readmore[`${language}`]}
        </Link>
      </div>
    </StyledSliderCard>
  );
};

export default SliderCard;
