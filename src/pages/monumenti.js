import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";

// Components
import Layout from "../components/Layout/layout";
import Monumenti from "../components/Monumenti";

const MonumentiPage = ({ data }) => {
  return (
    <Layout language="it">
      <SEO title="Monumenti" lang="it" />
      <Monumenti data={data} />
    </Layout>
  );
};

export default MonumentiPage;

export const homeQuery = graphql`
  query MonumentiPage {
    featuredMonuments: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "monumenti" }
          featured: { eq: true }
        }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            description
            image
          }
        }
      }
    }
    otherMonuments: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "monumenti" }
          featured: { eq: false }
        }
      }
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            description
          }
        }
      }
    }
  }
`;
