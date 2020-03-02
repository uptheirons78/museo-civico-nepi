import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import Eventi from "../components/Eventi";

const EventiPage = ({ data }) => {
  return (
    <Layout language="it">
      <SEO lang="it" title="Eventi" />
      <Eventi language="it" data={data} />
    </Layout>
  );
};

export default EventiPage;

export const eventiQuery = graphql`
  query EventiPage {
    featuredEvents: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "eventi" }, featured: { eq: true } }
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
            start(formatString: "DD MMM YYYY", locale: "it")
            end(formatString: "DD MMM YYYY", locale: "it")
            type
          }
        }
      }
    }
    otherEvents: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "eventi" }, featured: { eq: false } }
      }
      sort: { fields: frontmatter___start, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            description
            start(formatString: "DD MMM YYYY", locale: "it")
            end(formatString: "DD MMM YYYY", locale: "it")
            type
          }
        }
      }
    }
  }
`;
