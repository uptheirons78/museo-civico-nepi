import React from "react";
import { graphql } from "gatsby";
//Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import Mission from "../components/Mission";

const missionPage = ({ data }) => {
  const { pageTitle, pageDescription } = data.markdownRemark.frontmatter.it;
  return (
    <Layout language="it">
      <SEO lang="it" title={pageTitle} description={pageDescription} />
      <Mission language="it" data={data} />
    </Layout>
  );
};

export default missionPage;

export const missionQuery = graphql`
  query MissionPage {
    markdownRemark(frontmatter: { templateKey: { eq: "mission" } }) {
      frontmatter {
        it {
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
