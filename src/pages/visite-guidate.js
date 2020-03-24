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
    firstPicture: file(relativePath: { eq: "museo/visite-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    banner: file(relativePath: { eq: "banners/museo-banner.jpg" }) {
      childImageSharp {
        fixed(width: 1100, height: 300) {
          src
        }
      }
    }
  }
`;
