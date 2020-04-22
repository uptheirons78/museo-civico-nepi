import React from "react";
import { graphql } from "gatsby";

//Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import Credits from "../components/Credits/index";

const creditsPage = ({ data }) => {
  return (
    <Layout language="it">
      <SEO
        lang="it"
        title="Credits"
        description="Pagina di ringraziamento per le persone che hanno collaborato alla realizzazione del sito web del Museo Civico di Nepi"
      />
      <Credits
        language="it"
        data={data}
        description="Si ringraziano le diverse persone che hanno collaborato alla realizzazione del sito web del Museo Civico di Nepi"
      />
    </Layout>
  );
};

export default creditsPage;

export const query = graphql`
  query {
    firstPicture: file(relativePath: { eq: "museo/interni-museo-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    secondPicture: file(relativePath: { eq: "museo/interni-museo-02.jpg" }) {
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
