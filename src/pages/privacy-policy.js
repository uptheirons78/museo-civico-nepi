import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";

// Components
import Layout from "../components/Layout/layout";
import Privacy from "../components/Privacy";

const PrivacyPolicyPage = ({ data }) => (
  <Layout>
    <SEO title="Privacy Policy" />
    <Privacy data={data} />
  </Layout>
);

export default PrivacyPolicyPage;

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
