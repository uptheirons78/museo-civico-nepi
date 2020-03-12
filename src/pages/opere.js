import React from "react";
import { graphql } from "gatsby";

//Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import Opere from "../components/Opere";

const operePage = ({ data }) => {
  return (
    <Layout language="it">
      <SEO
        lang="it"
        title="Opere Importanti"
        description={data.markdownRemark.frontmatter.it.pageDescription}
      />
      <Opere language="it" data={data} />
    </Layout>
  );
};

export default operePage;

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "works" } }) {
      frontmatter {
        it {
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
