import React from "react";
import { graphql } from "gatsby";
//Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import Didattica from "../components/Didattica";

const didatticaPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter.it;
  return (
    <Layout language="it">
      <SEO lang="it" title={title} description={description} />
      <Didattica language="it" data={data} />
    </Layout>
  );
};

export default didatticaPage;

export const didatticaQuery = graphql`
  query didatticaPage {
    markdownRemark(frontmatter: { templateKey: { eq: "didattica" } }) {
      frontmatter {
        it {
          title
          description
          textA
          textB
          info
          textATitle
          textBTitle
          infoTitle
        }
      }
    }
  }
`;
