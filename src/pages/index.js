import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";

// Components
import Layout from "../components/Layout/layout";
import Home from "../components/Home";

const IndexPage = ({ data }) => {
  return (
    <Layout language="it">
      <SEO title="Home" lang="it" />
      <Home data={data} language="it" />
    </Layout>
  );
};

export default IndexPage;

export const homeQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "home" } }) {
      frontmatter {
        title
        heading
        descriptionLeft
        descriptionRight
        enDescriptionLeft
        enDescriptionRight
      }
    }
  }
`;
