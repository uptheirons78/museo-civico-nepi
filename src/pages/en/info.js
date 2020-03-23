import React from "react";
import { graphql } from "gatsby";

//Components
import Layout from "../../components/Layout/layout";
import SEO from "../../components/seo";
import InfoAndTickets from "../../components/Info";

const infoEnglishPage = ({ data }) => {
  const { pageTitle, pageDescription } = data.markdownRemark.frontmatter.en;
  return (
    <Layout language="en">
      <SEO lang="en" title={pageTitle} description={pageDescription} />
      <InfoAndTickets language="en" data={data} />
    </Layout>
  );
};

export default infoEnglishPage;

export const query = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "info" } }) {
      frontmatter {
        en {
          pageTitle
          pageDescription
          sectionATitle
          sectionBTitle
          sectionCTitle
          winterOpening
          winterTueFri
          winterSatSun
          winterClosing
          summerOpening
          summerTueFri
          summerSatSun
          summerClosing
          close1
          close2
          entrance
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
    banner: file(relativePath: { eq: "banners/museo-banner.jpg" }) {
      childImageSharp {
        fixed(width: 1100, height: 300) {
          src
        }
      }
    }
  }
`;
