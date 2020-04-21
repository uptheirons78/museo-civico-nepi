import React from "react";
import { graphql } from "gatsby";
// Components
import SEO from "../../components/seo";
import Layout from "../../components/Layout/layout";
import Bookshop from "../../components/Bookshop";

const EnglishBookshopPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter.en;
  return (
    <Layout language="en">
      <SEO lang="en" title={title} description={description} />
      <Bookshop data={data} language="en" />
    </Layout>
  );
};

export default EnglishBookshopPage;

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "banners/museo-banner.jpg" }) {
      childImageSharp {
        fixed(width: 1100, height: 300) {
          src
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "bookshop" } }) {
      frontmatter {
        en {
          title
          description
          gadgets {
            alt
            image
            title
            subtitle
            pubblication
            researcher
            editor
          }
        }
      }
    }
  }
`;
