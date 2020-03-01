import React from "react";
import { Link } from "gatsby";
import HeadingSection from "../Shared/HeadingSection";
import { SectionTitle } from "../Styles/StyledContent";
import {
  StyledMonumentsSection,
  StyledFeaturedMonumentCard,
  StyledOtherMonumentCard,
} from "../Styles/StyledMonumentsPage";

import * as translate from "../../utils/translate.json";

const Monumenti = ({ data, language }) => {
  const slugPrefix = language === "it" ? "/monumenti/" : "/en/monuments/";

  return (
    <>
      <HeadingSection>
        <h2>{translate.default.monuments_page_title[`${language}`]}</h2>
      </HeadingSection>
      <StyledMonumentsSection className="featured-monuments">
        <SectionTitle>
          {translate.default.monuments_page_subtitle_one[`${language}`]}
        </SectionTitle>
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
                <Link to={`${slugPrefix}${slug}/`}>Leggi l'articolo</Link>
              </div>
            </StyledFeaturedMonumentCard>
          );
        })}
        <SectionTitle>
          {translate.default.monuments_page_subtitle_two[`${language}`]}
        </SectionTitle>
        {data.otherMonuments.edges.map(monument => {
          const { title, slug, description } = monument.node.frontmatter;
          const { id } = monument.node;

          return (
            <StyledOtherMonumentCard className="monuments__card" key={id}>
              <h3>{title}</h3>
              <p>
                {description}{" "}
                <span>
                  <Link to={`${slugPrefix}${slug}/`}>Leggi l'articolo</Link>
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
