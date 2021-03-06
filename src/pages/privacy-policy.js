import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";

// Components
import Layout from "../components/Layout/layout";
import Privacy from "../components/Privacy";

const PrivacyPolicyPage = ({ data }) => (
  <Layout language="it">
    <SEO
      title="Privacy Policy"
      description={data.markdownRemark.frontmatter.description}
    />
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
