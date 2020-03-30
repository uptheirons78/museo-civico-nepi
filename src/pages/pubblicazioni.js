import React from "react";
import { graphql } from "gatsby";
// Components
import SEO from "../components/seo";
import Layout from "../components/Layout/layout";
import Pubblicazioni from "../components/Pubblicazioni";

const PubblicazioniPage = ({ data }) => {
  const { title, description } = data.markdownRemark.frontmatter.it;
  return (
    <Layout language="it">
      <SEO lang="it" title={title} description={description} />
      <Pubblicazioni data={data} language="it" />
    </Layout>
  );
};

export default PubblicazioniPage;

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
        it {
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
