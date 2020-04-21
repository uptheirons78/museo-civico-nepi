import React from "react";
import { graphql } from "gatsby";
// Components
import SEO from "../components/seo";
import Layout from "../components/Layout/layout";
import Bookshop from "../components/Bookshop";

const BookshopPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter.it;
  return (
    <Layout language="it">
      <SEO lang="it" title={title} description={description} />
      <Bookshop data={data} language="it" />
    </Layout>
  );
};

export default BookshopPage;

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
        it {
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
