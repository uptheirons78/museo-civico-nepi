import React from "react";
import { graphql } from "gatsby";
//Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import FourOFour from "../components/404";

const ThanksPage = ({ data }) => {
  const title = "Museo Civico Nepi";
  const description =
    "Gentile Visitatore abbiamo ricevuto la tua richiesta. Risponderemo appena possibile. Grazie per averci contattato.";
  return (
    <Layout language="it">
      <SEO lang="it" title="Grazie" description={description} />
      <FourOFour data={data} description={description} title={title} />
    </Layout>
  );
};

export default ThanksPage;

export const query = graphql`
  query {
    firstPicture: file(relativePath: { eq: "museo/interni-museo-01.jpg" }) {
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
