import React from "react";
import { graphql } from "gatsby";
//Components
import Layout from "../../components/Layout/layout";
import SEO from "../../components/seo";
import ScientificActivities from "../../components/ScientificActivities";

const ScientificActivitiesPage = ({ data }) => {
  return (
    <Layout language="en">
      <SEO lang="en" title="Scientific Activities" />
      <ScientificActivities data={data} language="en" />
    </Layout>
  );
};

export default ScientificActivitiesPage;

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "banners/museo-banner.jpg" }) {
      childImageSharp {
        fixed(width: 1100, height: 300) {
          src
        }
      }
    }
  }
`;
