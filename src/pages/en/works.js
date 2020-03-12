import React from "react";
import { graphql } from "gatsby";
//Components
import Layout from "../../components/Layout/layout";
import SEO from "../../components/seo";
import Opere from "../../components/Opere";

const worksPage = ({ data }) => {
  return (
    <Layout language="en">
      <SEO
        lang="en"
        title="Important Works"
        description={data.markdownRemark.frontmatter.en.pageDescription}
      />
      <Opere language="en" data={data} />
    </Layout>
  );
};

export default worksPage;

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "works" } }) {
      frontmatter {
        en {
          pageTitle
          pageDescription
          sectionATitle
          sectionBTitle
          sectionCTitle
          sectionA
          sectionB
          sectionC
        }
      }
    }
  }
`;
