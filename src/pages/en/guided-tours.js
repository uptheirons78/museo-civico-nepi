import React from "react";
import { graphql } from "gatsby";

//Components
import Layout from "../../components/Layout/layout";
import SEO from "../../components/seo";
import Servizi from "../../components/Servizi";

const serviziEnglishPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter.en;
  return (
    <Layout language="en">
      <SEO lang="en" title={title} description={description} />
      <Servizi language="en" data={data} />
    </Layout>
  );
};

export default serviziEnglishPage;

export const ServiziEnglishQuery = graphql`
  query ServiziEnglishPage {
    markdownRemark(frontmatter: { templateKey: { eq: "services" } }) {
      frontmatter {
        en {
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
