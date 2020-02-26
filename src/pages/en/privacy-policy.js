import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/seo";

// Components
import Layout from "../../components/Layout/layout";
import Privacy from "../../components/Privacy";

const EnglishPrivacyPolicyPage = ({ data }) => (
  <Layout language="en">
    <SEO
      title="Privacy Policy"
      lang="en"
      description={data.markdownRemark.frontmatter.description}
    />
    <Privacy data={data} />
  </Layout>
);

export default EnglishPrivacyPolicyPage;

export const privacyQuery = graphql`
  query EnglishPrivacyPage {
    markdownRemark(
      frontmatter: { templateKey: { eq: "english-privacy-policy" } }
    ) {
      frontmatter {
        title
        heading
        description
      }
      html
    }
  }
`;
