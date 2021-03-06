import React from "react";
import { graphql } from "gatsby";
//Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import ScientificActivities from "../components/ScientificActivities";

const attivitàScientifichePage = ({ data }) => {
  const { pageTitle, pageDescription } = data.markdownRemark.frontmatter.it;
  return (
    <Layout language="it">
      <SEO lang="it" title={pageTitle} description={pageDescription} />
      <ScientificActivities data={data} language="it" />
    </Layout>
  );
};

export default attivitàScientifichePage;

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "scientifica" } }) {
      frontmatter {
        it {
          pageTitle
          pageDescription
          titleA
          titleB
          titleC
          descriptionA
          descriptionB
          descriptionC
          gallery {
            alt
            image
          }
        }
      }
    }
    firstPicture: file(relativePath: { eq: "museo/scientifica-04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    secondPicture: file(relativePath: { eq: "museo/scientifica-06.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thirdPicture: file(relativePath: { eq: "museo/scientifica-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    banner: file(relativePath: { eq: "banners/museo-banner.jpg" }) {
      childImageSharp {
        fixed(width: 1100, height: 300) {
          src
        }
      }
    }
  }
`;
