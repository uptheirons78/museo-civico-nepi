import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../../components/Layout/layout";
import SEO from "../../components/seo";
import Eventi from "../../components/Eventi";

const EventsPage = ({ data }) => {
  return (
    <Layout language="en">
      <SEO lang="en" title="Our Events" />
      <Eventi language="en" data={data} />
    </Layout>
  );
};

export default EventsPage;

export const englishEventsQuery = graphql`
  query EventsPage {
    featuredEvents: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "events" }, featured: { eq: true } }
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
            start(formatString: "DD MMM YYYY", locale: "en")
            end(formatString: "DD MMM YYYY", locale: "en")
            type
          }
        }
      }
    }
    otherEvents: allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "events" }, featured: { eq: false } }
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
            start(formatString: "DD MMM YYYY", locale: "en")
            end(formatString: "DD MMM YYYY", locale: "en")
            type
          }
        }
      }
    }
  }
`;
