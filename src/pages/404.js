import React from "react";
import { graphql } from "gatsby";
//Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import FourOFour from "../components/404";

const NotFoundPage = ({ data }) => {
  const description =
    "Gentile Visitatore la pagina che stai cercando non esiste all'interno del sito del Museo Civico di Nepi, è stata, probabilmente, rimossa o risulta al momento inaccessibile per problemi tecnici. Ci scusiamo per il disagio.";
  return (
    <Layout language="it">
      <SEO
        lang="it"
        title="404: Pagina Non Trovata"
        description={description}
      />
      <FourOFour data={data} description={description} />
    </Layout>
  );
};

export default NotFoundPage;

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
