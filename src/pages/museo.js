import React from "react";
import { graphql } from "gatsby";
// Components
import SEO from "../components/seo";
import Layout from "../components/Layout/layout";
import Museo from "../components/Museo";

const MuseoPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter.it;
  return (
    <Layout language="it">
      <SEO lang="it" title={title} description={description} />
      <Museo language="it" data={data} />
    </Layout>
  );
};

export default MuseoPage;

export const museoQuery = graphql`
  query MuseoPage {
    markdownRemark(frontmatter: { templateKey: { eq: "museum" } }) {
      frontmatter {
        it {
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
