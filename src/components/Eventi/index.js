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

const Eventi = ({ data, language }) => {
  const slugPrefix = language === "it" ? "/eventi/" : "/en/events/";

  return (
    <>
      <HeadingSection>
        <h2>{translate.default.events_page_title[`${language}`]}</h2>
      </HeadingSection>
      <StyledMonumentsSection className="featured-monuments">
        <SectionTitle>
          {translate.default.events_page_subtitle_one[`${language}`]}
        </SectionTitle>
        {data.featuredEvents.edges.map(event => {
          const {
            title,
            slug,
            description,
            image,
            start,
            end,
            type,
          } = event.node.frontmatter;
          const { id } = event.node;

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
                <h4>
                  {type}{" "}
                  <span>
                    {translate.default.dates.from[`${language}`]} {start}{" "}
                    {translate.default.dates.to[`${language}`]} {end}
                  </span>
                </h4>
                <p>{description}</p>
                <Link to={`${slugPrefix}${slug}/`}>
                  {translate.default.readmore[`${language}`]}
                </Link>
              </div>
            </StyledFeaturedMonumentCard>
          );
        })}
        <SectionTitle>
          {translate.default.events_page_subtitle_two[`${language}`]}
        </SectionTitle>
        {data.otherEvents.edges.map(event => {
          const {
            title,
            slug,
            description,
            type,
            start,
            end,
          } = event.node.frontmatter;
          const { id } = event.node;

          return (
            <StyledOtherMonumentCard className="monuments__card" key={id}>
              <h3>{title}</h3>
              <h4>
                {type}{" "}
                <span>
                  {translate.default.dates.from[`${language}`]} {start}{" "}
                  {translate.default.dates.to[`${language}`]} {end}
                </span>
              </h4>
              <p>
                {description}{" "}
                <span>
                  <Link to={`${slugPrefix}${slug}/`}>
                    {translate.default.readmore[`${language}`]}
                  </Link>
                </span>
              </p>
            </StyledOtherMonumentCard>
          );
        })}
      </StyledMonumentsSection>
    </>
  );
};

export default Eventi;
