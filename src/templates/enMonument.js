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

const enMonumentTemplate = ({ data }) => {
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
    <Layout language="en">
      <SEO lang="en" title={title} description={description} image={image} />
      <HeadingSection thumbnail={image}>
        <h2>{title}</h2>
        <a className="heading-section-link" href="#info">
          More Informations
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
          <h2 id="info">Informations</h2>
          <div className="info-section">
            {place && <h3>Address</h3>}
            {place && <p>{place}</p>}
            {access && <h3>Openings</h3>}
            {access && <p>{access}</p>}
            {ticket && <h3>Tickets</h3>}
            {ticket && <p>{ticket}</p>}
          </div>
          <SocialShare
            socialConfig={{
              config: {
                url: `https://museo-civico-nepi.netlify.com/en/monuments/${slug}`,
              },
            }}
          />
        </Info>
      </SinglePageWrapper>
    </Layout>
  );
};

export default enMonumentTemplate;

// Gatsby Query
export const pageQuery = graphql`
  query EnMonumentsBySlug($slug: String!) {
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
