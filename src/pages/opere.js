import React from "react";
import { graphql } from "gatsby";

//Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import Opere from "../components/Opere";

const operePage = ({ data }) => {
  return (
    <Layout language="it">
      <SEO
        lang="it"
        title={data.markdownRemark.frontmatter.it.pageTitle}
        description={data.markdownRemark.frontmatter.it.pageDescription}
      />
      <Opere language="it" data={data} />
    </Layout>
  );
};

export default operePage;

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "works" } }) {
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
    firstPicture: file(relativePath: { eq: "museo/opere-05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    secondPicture: file(relativePath: { eq: "museo/opere-02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thirdPicture: file(relativePath: { eq: "museo/opere-03.jpg" }) {
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
