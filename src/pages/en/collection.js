import React from "react";
import { graphql } from "gatsby";

//Components
import Layout from "../../components/Layout/layout";
import SEO from "../../components/seo";
import Collezioni from "../../components/Collezioni";

const collezioniEnglishPage = ({ data }) => {
  const { pageTitle, pageDescription } = data.markdownRemark.frontmatter.en;
  return (
    <Layout language="en">
      <SEO lang="en" title={pageTitle} description={pageDescription} />
      <Collezioni language="en" data={data} />
    </Layout>
  );
};

export default collezioniEnglishPage;

export const query = graphql`
  query {
    markdownRemark: markdownRemark(
      frontmatter: { templateKey: { eq: "collections" } }
    ) {
      frontmatter {
        en {
          pageTitle
          pageDescription
          sectionATitle
          sectionBTitle
          sectionCTitle
          sectionA
          sectionB
          sectionC
        }
      }
    }
    firstPicture: file(relativePath: { eq: "museo/collezione-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    secondPicture: file(relativePath: { eq: "museo/collezione-02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thirdPicture: file(relativePath: { eq: "museo/collezione-03.jpg" }) {
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
