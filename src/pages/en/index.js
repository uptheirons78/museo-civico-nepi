import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/seo";

// Components
import Layout from "../../components/Layout/layout";
import Home from "../../components/Home";

const enIndexPage = ({ data }) => {
  const lang = "en";
  return (
    <Layout lang={lang}>
      <SEO title="Home" lang={lang} />
      <Home data={data} lang={lang} />
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
      }
    }
  }
`;
