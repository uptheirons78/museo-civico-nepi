import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";

// Components
import Layout from "../components/Layout/layout";
import Cookies from "../components/Cookies";

const CookiesPolicyPage = ({ data }) => (
  <Layout language="it">
    <SEO
      title="Cookies Policy"
      lang="it"
      description={data.markdownRemark.frontmatter.description}
    />
    <Cookies data={data} />
  </Layout>
);

export default CookiesPolicyPage;

export const cookiesQuery = graphql`
  query CookiesPage {
    markdownRemark(frontmatter: { templateKey: { eq: "cookies-policy" } }) {
      frontmatter {
        title
        heading
        description
      }
      html
    }
  }
`;
