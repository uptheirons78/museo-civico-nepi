import React from "react";
import Slider from "react-slick";

// Components
import SliderCard from "./sliderCard";

// Queries
import useMonumenti from "../Shared/monumentiQuery";
import useMonuments from "../Shared/monumentsQuery";

const MonumentiSlider = ({ language }) => {
  const monumenti = useMonumenti();
  const monuments = useMonuments();

  const featuredMonuments = language === "it" ? monumenti : monuments;

  const settings = {
    dots: true,
    speed: 1250,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    mobileFirst: true,
  };

  return (
    <Slider
      {...settings}
      style={{ marginBottom: "2rem" }}
      className="home-slider"
    >
      {featuredMonuments.map(monument => {
        return (
          <SliderCard
            key={monument.node.id}
            image={monument.node.frontmatter.image}
            title={monument.node.frontmatter.title}
            description={monument.node.frontmatter.description}
            slug={monument.node.frontmatter.slug}
          />
        );
      })}
    </Slider>
  );
};

export default MonumentiSlider;
