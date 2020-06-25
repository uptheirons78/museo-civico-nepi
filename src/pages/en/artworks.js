import React from "react";
import { graphql } from "gatsby";
//Components
import Layout from "../../components/Layout/layout";
import SEO from "../../components/seo";
import Opere from "../../components/Opere";

const worksPage = ({ data }) => {
  return (
    <Layout language="en">
      <SEO
        lang="en"
        title={data.markdownRemark.frontmatter.en.pageTitle}
        description={data.markdownRemark.frontmatter.en.pageDescription}
      />
      <Opere language="en" data={data} />
    </Layout>
  );
};

export default worksPage;

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "works" } }) {
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
