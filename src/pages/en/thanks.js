import React from "react";
import { graphql } from "gatsby";
//Components
import Layout from "../../components/Layout/layout";
import SEO from "../../components/seo";
import FourOFour from "../../components/404";
import Thanks from "../../components/Thanks";

const ThanksPage = ({ data }) => {
  const title = "Museo Civico di Nepi";
  const description =
    "Dear Guest, we received your request. We will reply as soon as possible. Thanks for contacting us.";
  return (
    <Layout language="en">
      <SEO lang="en" title="Thanks" description={description} />
      <Thanks
        language="en"
        data={data}
        description={description}
        title={title}
      />
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
