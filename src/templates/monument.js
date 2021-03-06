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

const monument = ({ data }) => {
  const {
    slug,
    title,
    description,
    image,
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
        <a className="heading-section-link" href="#info">
          Informazioni Utili
        </a>
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
          <h2 id="info">Informazioni</h2>
          <div className="info-section">
            {place && <h3>Indirizzo</h3>}
            {place && <p>{place}</p>}
            {access && <h3>Orario</h3>}
            {access && <p>{access}</p>}
            {ticket && <h3>Biglietto</h3>}
            {ticket && <p>{ticket}</p>}
          </div>
          <SocialShare
            socialConfig={{
              config: {
                url: `https://museociviconepi.it/monumenti/${slug}`,
              },
            }}
          />
        </Info>
      </SinglePageWrapper>
    </Layout>
  );
};

export default monument;

// Gatsby Query
export const pageQuery = graphql`
  query MonumentsBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        description
        image
        place
        access
        ticket
        gallery {
          image
          alt
        }
      }
      html
    }
  }
`;
