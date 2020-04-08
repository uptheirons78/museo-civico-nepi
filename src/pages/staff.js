import React from "react";
import { graphql } from "gatsby";
//Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import Staff from "../components/Staff";

const StaffPage = ({ data }) => {
  const { pageTitle, pageDescription } = data.markdownRemark.frontmatter.it;
  return (
    <Layout language="it">
      <SEO lang="it" title={pageTitle} description={pageDescription} />
      <Staff data={data} language="it" />
    </Layout>
  );
};

export default StaffPage;

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "staff" } }) {
      frontmatter {
        it {
          pageTitle
          pageDescription
          director
          directorName
          operator
          operatorsList {
            name
          }
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
    banner: file(relativePath: { eq: "banners/museo-banner.jpg" }) {
      childImageSharp {
        fixed(width: 1100, height: 300) {
          src
        }
      }
    }
  }
`;
