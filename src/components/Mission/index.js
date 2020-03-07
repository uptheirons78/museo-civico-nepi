import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
// Components
import HeadingSection from "../Shared/HeadingSection";
import {
  SinglePageWrapper,
  PageDescription,
  Main,
  DoubleGrid,
} from "../Styles/StyledPageElement";

const Mission = ({ language }) => {
  /**
   * Static Query
   */
  const { markdownRemark, firstPicture, secondPicture } = useStaticQuery(
    missionPageQuery
  );
  const { frontmatter } = markdownRemark;
  return (
    <>
      <HeadingSection>
        <h2>{frontmatter[`${language}`].pageTitle}</h2>
      </HeadingSection>
      <SinglePageWrapper>
        <PageDescription>
          {frontmatter[`${language}`].pageDescription}
        </PageDescription>
        <Main>
          <DoubleGrid top="3rem" bottom="3rem">
            <div className="left-block text-block">
              <p>{frontmatter[`${language}`].descriptionA}</p>
            </div>
            <div className="right-block">
              <Img fluid={firstPicture.childImageSharp.fluid} />
            </div>
          </DoubleGrid>
          <DoubleGrid top="5rem" bottom="5rem">
            <div className="left-block">
              <Img fluid={secondPicture.childImageSharp.fluid} />
            </div>
            <div className="right-block text-block">
              <p>{frontmatter[`${language}`].descriptionB}</p>
            </div>
          </DoubleGrid>
        </Main>
      </SinglePageWrapper>
    </>
  );
};

export default Mission;

// Query
const missionPageQuery = graphql`
  query {
    markdownRemark: markdownRemark(
      frontmatter: { templateKey: { eq: "mission" } }
    ) {
      frontmatter {
        it {
          pageTitle
          pageDescription
          descriptionA
          descriptionB
        }
        en {
          pageTitle
          pageDescription
          descriptionA
          descriptionB
        }
      }
    }
    firstPicture: file(relativePath: { eq: "museo-01.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    secondPicture: file(relativePath: { eq: "museo-02.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
