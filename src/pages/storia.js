import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";

// Components
import Layout from "../components/Layout/layout";
import Storia from "../components/Storia";

const StoriaPage = ({ data }) => (
  <Layout language="it">
    <SEO
      title={data.markdownRemark.frontmatter.title}
      description={data.markdownRemark.frontmatter.description}
      lang="it"
    />
    <Storia language="it" data={data} />
  </Layout>
);

export default StoriaPage;

export const storiaQuery = graphql`
  query storiaPage {
    markdownRemark(frontmatter: { templateKey: { eq: "storia" } }) {
      frontmatter {
        title
        description
        textA
        textB
        textC
      }
    }
  }
`;
