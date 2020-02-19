import React from "react";
import { graphql } from "gatsby";

// Components
import HeadingSection from "../components/Shared/HeadingSection";
import { Content } from "../components/Styles/StyledContent";
// Components
import Layout from "../components/Layout/layout";
import SEO from "../components/seo";

const event = ({ data }) => {
  const { title, description, start, end } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <SEO title={title} />
      <HeadingSection>
        <h2>{title}</h2>
        <p style={{ textTransform: "capitalize" }}>
          {start} - {end}
        </p>
        <p>{description}</p>
      </HeadingSection>
      <Content
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      ></Content>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  );
};

export default event;

// Gatsby Query
export const pageQuery = graphql`
  query EventsBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        start(formatString: "DD MMM YYYY", locale: "it")
        end(formatString: "DD MMM YYYY", locale: "it")
      }
      html
    }
  }
`;
