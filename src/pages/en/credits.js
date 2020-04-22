import React from "react";
import { graphql } from "gatsby";

//Components
import Layout from "../../components/Layout/layout";
import SEO from "../../components/seo";
import Credits from "../../components/Credits/index";

const englishCreditsPage = ({ data }) => {
  return (
    <Layout language="en">
      <SEO
        lang="en"
        title="Credits"
        description="Credits page for the various people who collaborated in the creation of the website of the Museo Civico di Nepi"
      />
      <Credits
        language="en"
        data={data}
        description="We thank the various people who collaborated in the creation of the website of the Museo Civico di Nepi"
      />
    </Layout>
  );
};

export default englishCreditsPage;

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
