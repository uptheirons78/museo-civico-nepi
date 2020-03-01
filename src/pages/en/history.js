import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/seo";

// Components
import Layout from "../../components/Layout/layout";
import Storia from "../../components/Storia";

const HistoryPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter.en;
  return (
    <Layout language="en">
      <SEO title={title} description={description} lang="en" />
      <Storia language="en" data={data} />
    </Layout>
  );
};

export default HistoryPage;

export const HistoryQuery = graphql`
  query HistoryPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "history" } }) {
      frontmatter {
        en {
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