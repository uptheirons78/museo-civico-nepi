import React from "react";
import { graphql } from "gatsby";

// Components
import Layout from "../components/Layout/layout";

const monument = ({ data }) => {
  return (
    <Layout>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  );
};

export default monument;

// Gatsby Query
export const pageQuery = graphql`
  query MonumentsBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
    }
  }
`;
