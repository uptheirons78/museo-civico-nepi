import React from "react";
import { graphql } from "gatsby";
//Components
import Layout from "../../components/Layout/layout";
import SEO from "../../components/seo";
import Mission from "../../components/Mission";

const missionEnglishPage = ({ data }) => {
  const { pageTitle, pageDescription } = data.markdownRemark.frontmatter.en;
  return (
    <Layout language="en">
      <SEO lang="en" title={pageTitle} description={pageDescription} />
      <Mission language="en" data={data} />
    </Layout>
  );
};

export default missionEnglishPage;

export const missionEnglishQuery = graphql`
  query MissionEnglishPage {
    markdownRemark(frontmatter: { templateKey: { eq: "mission" } }) {
      frontmatter {
        en {
          pageTitle
          pageDescription
          descriptionA
          descriptionB
          titleA
          titleB
        }
      }
    }
    firstPicture: file(relativePath: { eq: "museo/interni-museo-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    secondPicture: file(relativePath: { eq: "museo/interni-museo-02.jpg" }) {
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
