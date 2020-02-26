import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/seo";

// Components
import Layout from "../../components/Layout/layout";
import Cookies from "../../components/Cookies";

const EnglishCookiesPolicyPage = ({ data }) => (
  <Layout language="en">
    <SEO
      title="Cookies Policy"
      lang="en"
      description={data.markdownRemark.frontmatter.description}
    />
    <Cookies data={data} />
  </Layout>
);

export default EnglishCookiesPolicyPage;

export const cookiesQuery = graphql`
  query EnglishCookiesPage {
    markdownRemark(
      frontmatter: { templateKey: { eq: "english-cookies-policy" } }
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
