import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/seo";

// Components
import Layout from "../../components/Layout/layout";
import Storia from "../../components/Storia";

const HistoryPage = ({ data }) => (
  <Layout language="en">
    <SEO
      title={data.markdownRemark.frontmatter.enTitle}
      description={data.markdownRemark.frontmatter.enDescription}
      lang="en"
    />
    <Storia language="en" data={data} />
  </Layout>
);

export default HistoryPage;

export const historyQuery = graphql`
  query historyPage {
    markdownRemark(frontmatter: { templateKey: { eq: "storia" } }) {
      frontmatter {
        enTitle
        enDescription
        enTextA
        enTextB
        enTextC
      }
    }
  }
`;
