import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";

// Components
import Layout from "../components/Layout/layout";
import Storia from "../components/Storia";

const StoriaPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter.it;
  return (
    <Layout language="it">
      <SEO title={title} description={description} lang="it" />
      <Storia language="it" data={data} />
    </Layout>
  );
};

export default StoriaPage;

export const StoriaQuery = graphql`
  query StoriaPage {
    markdownRemark(frontmatter: { templateKey: { eq: "history" } }) {
      frontmatter {
        it {
          title
          description
          textA
          textB
          textC
        }
      }
    }
  }
`;
