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

const Storia = ({ language, data }) => {
  const { firstPicture, secondPicture, thirdPicture } = useStaticQuery(
    storiaPageQuery
  );

  const {
    title,
    description,
    textA,
    textB,
    textC,
  } = data.markdownRemark.frontmatter[`${language}`];

  return (
    <div>
      <HeadingSection>
        <h2>{title}</h2>
      </HeadingSection>
      <SinglePageWrapper>
        <PageDescription>{description}</PageDescription>
        <Main>
          <DoubleGrid top="3rem" bottom="3rem">
            <div className="left-block text-block">
              <h4>{language === "it" ? "anni '80" : "eighties"}</h4>
              <p className="text">{textA}</p>
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
              <h4>{language === "it" ? "anni '90" : "ninenties"}</h4>
              <p className="text">{textB}</p>
            </div>
          </DoubleGrid>
          <DoubleGrid top="5rem" bottom="5rem">
            <div className="left-block text-block">
              <h4>{language === "it" ? "oggi" : "today"}</h4>
              <p className="text">{textC}</p>
            </div>
            <div className="right-block">
              <Img fluid={thirdPicture.childImageSharp.fluid} />
            </div>
          </DoubleGrid>
        </Main>
      </SinglePageWrapper>
    </div>
  );
};

export default Storia;

// Queries
const storiaPageQuery = graphql`
  query {
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
    thirdPicture: file(relativePath: { eq: "museo-03.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
