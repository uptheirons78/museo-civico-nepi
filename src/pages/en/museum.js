import React from "react";
import { graphql } from "gatsby";
// Components
import SEO from "../../components/seo";
import Layout from "../../components/Layout/layout";
import Museo from "../../components/Museo";

const MuseumPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter.en;
  return (
    <Layout language="en">
      <SEO lang="en" title={title} description={description} />
      <Museo language="en" data={data} />
    </Layout>
  );
};

export default MuseumPage;

export const museumQuery = graphql`
  query MuseumPage {
    markdownRemark(frontmatter: { templateKey: { eq: "museum" } }) {
      frontmatter {
        en {
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
