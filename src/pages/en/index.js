import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/seo";

// Components
import Layout from "../../components/Layout/layout";
import Home from "../../components/Home";

const enIndexPage = ({ data }) => {
  return (
    <Layout language="en">
      <SEO title="Home" lang="en" />
      <Home data={data} language="en" />
    </Layout>
  );
};

export default enIndexPage;

export const enHomeQuery = graphql`
  query enIndexPage {
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
