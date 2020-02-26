import React from "react";
import { graphql } from "gatsby";
// Components
import SEO from "../components/seo";
import Layout from "../components/Layout/layout";
import Museo from "../components/Museo";

const MuseoPage = ({ data }) => {
  return (
    <Layout language="it">
      <SEO
        title="Il Museo"
        lang="it"
        description={data.markdownRemark.frontmatter.description}
      />
      <Museo data={data} />
    </Layout>
  );
};

export default MuseoPage;

export const museumQuery = graphql`
  query MuseoPage {
    markdownRemark(frontmatter: { templateKey: { eq: "museo" } }) {
      frontmatter {
        title
        description
        textA
        textB
        textC
        textD
      }
      html
    }
  }
`;
