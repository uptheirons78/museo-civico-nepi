import React from "react";
import { Link } from "gatsby";
import HeadingSection from "../Shared/HeadingSection";
import { SectionTitle } from "../Styles/StyledContent";
import {
  StyledMonumentsSection,
  StyledFeaturedMonumentCard,
  StyledOtherMonumentCard,
} from "../Styles/StyledMonumentsPage";

const Monumenti = ({ data }) => {
  return (
    <>
      <HeadingSection>
        <h2>Monumenti</h2>
      </HeadingSection>
      <StyledMonumentsSection className="featured-monuments">
        <SectionTitle>Cosa vedere a Nepi</SectionTitle>
        {data.featuredMonuments.edges.map(monument => {
          const { title, slug, description, image } = monument.node.frontmatter;
          const { id } = monument.node;

          return (
            <StyledFeaturedMonumentCard
              className="featured-monuments__card"
              key={id}
            >
              <div className="featured-monuments__card-a">
                <img src={image} alt={title} />
              </div>
              <div className="featured-monuments__card-b">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to={`/monumenti/${slug}/`}>Leggi l'articolo</Link>
              </div>
            </StyledFeaturedMonumentCard>
          );
        })}
        <SectionTitle>Altri monumenti da visitare</SectionTitle>
        {data.otherMonuments.edges.map(monument => {
          const { title, slug, description } = monument.node.frontmatter;
          const { id } = monument.node;

          return (
            <StyledOtherMonumentCard className="monuments__card" key={id}>
              <h3>{title}</h3>
              <p>
                {description}{" "}
                <span>
                  <Link to={`/monumenti/${slug}/`}>Leggi l'articolo</Link>
                </span>
              </p>
            </StyledOtherMonumentCard>
          );
        })}
      </StyledMonumentsSection>
    </>
  );
};

export default Monumenti;
