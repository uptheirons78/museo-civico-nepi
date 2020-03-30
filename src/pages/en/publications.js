import React from "react";
import { graphql } from "gatsby";
// Components
import SEO from "../../components/seo";
import Layout from "../../components/Layout/layout";
import Pubblicazioni from "../../components/Pubblicazioni";

const PubblicazioniEnglishPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter.en;
  return (
    <Layout language="en">
      <SEO lang="en" title={title} description={description} />
      <Pubblicazioni data={data} language="en" />
    </Layout>
  );
};

export default PubblicazioniEnglishPage;

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "banners/museo-banner.jpg" }) {
      childImageSharp {
        fixed(width: 1100, height: 300) {
          src
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "pubblicazioni" } }) {
      frontmatter {
        en {
          title
          description
          subtitleOne
          subtitleTwo
          quaderni {
            alt
            image
            title
            subtitle
            pubblication
            researcher
            editor
          }
          other {
            alt
            image
            title
            subtitle
            pubblication
            researcher
            editor
          }
        }
      }
    }
  }
`;
