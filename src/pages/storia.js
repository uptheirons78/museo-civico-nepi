import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";

// Components
import Layout from "../components/Layout/layout";
import Storia from "../components/Storia";

const StoriaPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter.it;
  return (
    <Layout language="it">
      <SEO title={title} description={description} lang="it" />
      <Storia language="it" data={data} />
    </Layout>
  );
};

export default StoriaPage;

export const StoriaQuery = graphql`
  query StoriaPage {
    markdownRemark(frontmatter: { templateKey: { eq: "history" } }) {
      frontmatter {
        it {
          title
          description
          textA
          textB
          textC
        }
      }
    }
    firstPicture: file(relativePath: { eq: "museo/storia-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    secondPicture: file(relativePath: { eq: "museo/storia-02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thirdPicture: file(relativePath: { eq: "museo/interni-museo-04.jpg" }) {
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
