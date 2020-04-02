import React from "react";
import { graphql } from "gatsby";
//Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import ScientificActivities from "../components/ScientificActivities";

const attivitàScientifichePage = ({ data }) => {
  return (
    <Layout language="it">
      <SEO lang="it" title="Attività Scientifiche" />
      <ScientificActivities data={data} language="it" />
    </Layout>
  );
};

export default attivitàScientifichePage;

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
