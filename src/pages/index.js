import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";

// Components
import Layout from "../components/Layout/layout";
import Home from "../components/Home";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Home data={data} />
  </Layout>
);

export default IndexPage;

export const privacyQuery = graphql`
  query PrivacyPage {
    markdownRemark(frontmatter: { templateKey: { eq: "privacy-policy" } }) {
      frontmatter {
        title
        heading
        description
      }
      html
    }
  }
`;
