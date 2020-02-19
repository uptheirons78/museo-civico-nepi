import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";

// Components
import SliderCard from "./sliderCard";

const MonumentiSlider = () => {
  const data = useStaticQuery(graphql`
    query FeaturedQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            featured: { eq: true }
            templateKey: { eq: "monumenti" }
          }
        }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              image
            }
          }
        }
      }
    }
  `);

  const settings = {
    dots: true,
    speed: 1250,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  };

  const featuredMonuments = data.allMarkdownRemark.edges;

  return (
    <Slider {...settings}>
      {featuredMonuments.map(monument => {
        return (
          <SliderCard
            key={monument.node.id}
            image={monument.node.frontmatter.image}
            title={monument.node.frontmatter.title}
            description={monument.node.frontmatter.description}
          />
        );
      })}
    </Slider>
  );
};

export default MonumentiSlider;
