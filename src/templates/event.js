import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import HeadingSection from "../components/Shared/HeadingSection";
import { Content, Description, Info } from "../components/Styles/StyledContent";
import ImageGrid from "../components/Shared/ImageGrid";
import SocialShare from "../components/Shared/socialShare";
import { SinglePageWrapper } from "../components/Styles/StyledPageElement";

const event = ({ data }) => {
  const {
    slug,
    title,
    description,
    image,
    start,
    end,
    place,
    access,
    ticket,
    gallery,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout language="it">
      <SEO title={title} lang="it" description={description} image={image} />
      <HeadingSection thumbnail={image}>
        <h2>{title}</h2>
        <p style={{ textTransform: "capitalize" }}>
          {start} - {end}
        </p>
      </HeadingSection>
      <SinglePageWrapper>
        <Description>
          <h4>{description}</h4>
        </Description>
        <Content
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        ></Content>
        <ImageGrid gallery={gallery} />
        <Info>
          <h2>Informazioni</h2>
          <div className="info-section">
            <h3>Luogo</h3>
            <p>{place}</p>
            <h3>Orario</h3>
            <p>{access}</p>
            <h3>Biglietto d'ingresso</h3>
            <p>{ticket}</p>
          </div>
          <SocialShare
            socialConfig={{
              config: {
                url: `https://museociviconepi.it/eventi/${slug}`,
              },
            }}
          />
        </Info>
      </SinglePageWrapper>
    </Layout>
  );
};

export default event;

// Gatsby Query
export const pageQuery = graphql`
  query EventsBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        description
        image
        start(formatString: "DD MMM YYYY", locale: "it")
        end(formatString: "DD MMM YYYY", locale: "it")
        place
        access
        ticket
        type
        gallery {
          image
          alt
        }
      }
      html
    }
  }
`;
