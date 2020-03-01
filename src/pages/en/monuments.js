import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/seo";

// Components
import Layout from "../../components/Layout/layout";
import Monumenti from "../../components/Monumenti";

const MonumentsPage = ({ data }) => {
  return (
    <Layout language="en">
      <SEO title="Monuments" lang="en" />
      <Monumenti data={data} language="en" />
    </Layout>
  );
};

export default MonumentsPage;

export const monumentsQuery = graphql`
  query AllMonumentsPage {
    featuredMonuments: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "monuments" }
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
          templateKey: { eq: "monuments" }
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
