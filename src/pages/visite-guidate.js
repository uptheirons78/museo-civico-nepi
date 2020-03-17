import React from "react";
import { graphql } from "gatsby";
//Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import Servizi from "../components/Servizi";

const serviziPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter.it;
  return (
    <Layout language="it">
      <SEO lang="it" title={title} description={description} />
      <Servizi language="it" data={data} />
    </Layout>
  );
};

export default serviziPage;

export const ServiziQuery = graphql`
  query ServiziPage {
    markdownRemark(frontmatter: { templateKey: { eq: "services" } }) {
      frontmatter {
        it {
          title
          description
          visiteInterneTitle
          visiteInterneDescription
          visiteEsterneTitle
          visiteEsterne {
            title
            description
          }
        }
      }
    }
  }
`;
