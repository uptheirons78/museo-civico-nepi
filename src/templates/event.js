import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import HeadingSection from "../components/Shared/HeadingSection";
import { Content, Description, Info } from "../components/Styles/StyledContent";
import ImageGrid from "../components/Shared/ImageGrid";

const event = ({ data }) => {
  const {
    title,
    description,
    start,
    end,
    place,
    access,
    ticket,
    type,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <HeadingSection>
        <h2>{title}</h2>
        <p style={{ textTransform: "capitalize" }}>
          {start} - {end}
        </p>
      </HeadingSection>
      <Description>
        <h4>{description}</h4>
      </Description>
      <Content
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      ></Content>
      <ImageGrid />
      <Info>
        <h2>Informazioni</h2>
        <div className="info-section">
          <h3>Luogo</h3>
          <p>{place}</p>
          <h3>Orario</h3>
          <p>{access}</p>
          <h3>Biglietto d'ingresso</h3>
          <p>{ticket}</p>
          <h3>Tipologia Evento</h3>
          <p>{type}</p>
        </div>
      </Info>
    </Layout>
  );
};

export default event;

// Gatsby Query
export const pageQuery = graphql`
  query EventsBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        start(formatString: "DD MMM YYYY", locale: "it")
        end(formatString: "DD MMM YYYY", locale: "it")
        place
        access
        ticket
        type
      }
      html
    }
  }
`;
