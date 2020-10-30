import React from "react";
import { graphql } from "gatsby";

//Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import { Content } from "../components/Styles/StyledContent";
import { SinglePageWrapper } from "../components/Styles/StyledPageElement";
import HeadingSection from "../components/Shared/HeadingSection";

const cartaDeiServiziPage = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter;
  return (
    <Layout language="it">
      <SEO lang="it" title="Carta dei Servizi" />
      <HeadingSection>
        <h2>{title}</h2>
      </HeadingSection>
      <SinglePageWrapper>
        <Content
          style={{ textAlign: "justify" }}
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html,
          }}
        ></Content>
      </SinglePageWrapper>
    </Layout>
  );
};

export default cartaDeiServiziPage;

export const query = graphql`
  query CartaDeiServiziQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "carta" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
