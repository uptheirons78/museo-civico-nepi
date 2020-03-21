import React from "react";
import { graphql } from "gatsby";
//Components
import Layout from "../../components/Layout/layout";
import SEO from "../../components/seo";
import Didattica from "../../components/Didattica";

const didatticaEnglishPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter.en;
  return (
    <Layout language="en">
      <SEO lang="en" title={title} description={description} />
      <Didattica language="en" data={data} />
    </Layout>
  );
};

export default didatticaEnglishPage;

export const didatticaEnglishQuery = graphql`
  query didatticaEnglishPage {
    markdownRemark(frontmatter: { templateKey: { eq: "didattica" } }) {
      frontmatter {
        en {
          title
          description
          textA
          textB
          info
          textATitle
          textBTitle
          infoTitle
        }
      }
    }
    firstPicture: file(relativePath: { eq: "museo/didattica-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    secondPicture: file(relativePath: { eq: "museo/didattica-02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thirdPicture: file(relativePath: { eq: "museo/didattica-03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
