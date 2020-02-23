import React, { useContext } from "react";
import { graphql } from "gatsby";
import SEO from "../components/seo";

// Components
import Layout from "../components/Layout/layout";
import Home from "../components/Home";
import { LanguageContext } from "../context/LanguageContext";

const IndexPage = ({ data }) => {
  const { language } = useContext(LanguageContext);
  return (
    <Layout>
      <SEO title="Home" lang={language.value} />
      <Home data={data} />
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
      }
    }
  }
`;
