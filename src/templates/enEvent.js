import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import HeadingSection from "../components/Shared/HeadingSection";
import { Content, Description, Info } from "../components/Styles/StyledContent";
import ImageGrid from "../components/Shared/ImageGrid";
import SocialShare from "../components/Shared/socialShare";

const enEvent = ({ data }) => {
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
    type,
    gallery,
  } = data.markdownRemark.frontmatter;

  return (
    <Layout language="en">
      <SEO title={title} lang="en" />
      <HeadingSection thumbnail={image}>
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
      <ImageGrid gallery={gallery} />
      <Info>
        <h2>Informations</h2>
        <div className="info-section">
          <h3>Place</h3>
          <p>{place}</p>
          <h3>Opening</h3>
          <p>{access}</p>
          <h3>Tickets</h3>
          <p>{ticket}</p>
          <h3>Type</h3>
          <p>{type}</p>
        </div>
        <SocialShare
          socialConfig={{
            config: {
              title: { title },
              url: `https://museo-civico-nepi.netlify.com/en/events/${slug}`,
            },
          }}
        />
      </Info>
    </Layout>
  );
};

export default enEvent;

// Gatsby Query
export const pageQuery = graphql`
  query EnEventsBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        description
        image
        start(formatString: "DD MMM YYYY", locale: "en")
        end(formatString: "DD MMM YYYY", locale: "en")
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