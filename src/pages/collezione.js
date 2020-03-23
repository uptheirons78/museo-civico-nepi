import React from "react";
import { graphql } from "gatsby";

//Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import Collezioni from "../components/Collezioni";

const collezioniPage = ({ data }) => {
  const { pageTitle, pageDescription } = data.markdownRemark.frontmatter.it;
  return (
    <Layout language="it">
      <SEO lang="it" title={pageTitle} description={pageDescription} />
      <Collezioni language="it" data={data} />
    </Layout>
  );
};

export default collezioniPage;

export const query = graphql`
  query {
    markdownRemark: markdownRemark(
      frontmatter: { templateKey: { eq: "collections" } }
    ) {
      frontmatter {
        it {
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
