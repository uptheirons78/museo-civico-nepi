import React from "react";
import { graphql } from "gatsby";
// Components
import SEO from "../../components/seo";
import Layout from "../../components/Layout/layout";
import Museo from "../../components/Museo";

const MuseumPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter.en;
  return (
    <Layout language="en">
      <SEO lang="en" title={title} description={description} />
      <Museo language="en" data={data} />
    </Layout>
  );
};

export default MuseumPage;

export const museumQuery = graphql`
  query MuseumPage {
    markdownRemark(frontmatter: { templateKey: { eq: "museum" } }) {
      frontmatter {
        en {
          title
          description
          textA
          textB
          textC
          titleA
          titleB
          titleC
        }
      }
    }
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
    thirdPicture: file(relativePath: { eq: "museo/interni-museo-08.jpg" }) {
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
