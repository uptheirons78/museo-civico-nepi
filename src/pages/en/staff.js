import React from "react";
import { graphql } from "gatsby";
//Components
import Layout from "../../components/Layout/layout";
import SEO from "../../components/seo";
import Staff from "../../components/Staff";

const StaffEnglishPage = ({ data }) => {
  const { pageTitle, pageDescription } = data.markdownRemark.frontmatter.en;
  return (
    <Layout language="en">
      <SEO lang="en" title={pageTitle} description={pageDescription} />
      <Staff data={data} language="en" />
    </Layout>
  );
};

export default StaffEnglishPage;

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "staff" } }) {
      frontmatter {
        en {
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
