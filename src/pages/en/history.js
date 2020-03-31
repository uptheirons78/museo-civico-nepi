import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/seo";

// Components
import Layout from "../../components/Layout/layout";
import Storia from "../../components/Storia";

const HistoryPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter.en;
  return (
    <Layout language="en">
      <SEO title={title} description={description} lang="en" />
      <Storia language="en" data={data} />
    </Layout>
  );
};

export default HistoryPage;

export const HistoryQuery = graphql`
  query HistoryPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "history" } }) {
      frontmatter {
        en {
          title
          description
          textA
          textB
          textC
        }
      }
    }
    firstPicture: file(relativePath: { eq: "museo/interni-museo-03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    secondPicture: file(relativePath: { eq: "museo/storia-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thirdPicture: file(relativePath: { eq: "museo/storia-02.jpg" }) {
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
