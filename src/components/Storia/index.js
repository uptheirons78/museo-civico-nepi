import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";
// Components
import HeadingSection from "../Shared/HeadingSection";
import {
  SinglePageWrapper,
  PageDescription,
} from "../Styles/StyledPageElement";

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

const Storia = ({ data, language }) => {
  const { firstPicture, secondPicture, thirdPicture } = useStaticQuery(
    storiaPageQuery
  );

  const {
    title,
    enTitle,
    description,
    enDescription,
    textA,
    enTextA,
    textB,
    enTextB,
    textC,
    enTextC,
  } = data.markdownRemark.frontmatter;

  return (
    <div>
      <HeadingSection>
        <h2>{language === "it" ? title : enTitle}</h2>
      </HeadingSection>
      <SinglePageWrapper>
        <PageDescription>
          {language === "it" ? description : enDescription}
        </PageDescription>
        <StyledStoria>
          <div className="block first-block">
            <div className="left">
              <h4>{language === "it" ? "anni '80" : "eighties"}</h4>
              <p className="text">{language === "it" ? textA : enTextA}</p>
            </div>
            <div className="right">
              <Img fluid={firstPicture.childImageSharp.fluid} />
            </div>
          </div>
          <div className="block second-block">
            <div className="left">
              <Img fluid={secondPicture.childImageSharp.fluid} />
            </div>
            <div className="right">
              <h4>{language === "it" ? "anni '90" : "ninenties"}</h4>
              <p className="text">{language === "it" ? textB : enTextB}</p>
            </div>
          </div>
          <div className="block third-block">
            <div className="left">
              <h4>{language === "it" ? "oggi" : "today"}</h4>
              <p className="text">{language === "it" ? textC : enTextC}</p>
            </div>
            <div className="right">
              <Img fluid={thirdPicture.childImageSharp.fluid} />
            </div>
          </div>
        </StyledStoria>
      </SinglePageWrapper>
    </div>
  );
};

export default Storia;

const StyledStoria = styled.section`
  margin-top: 3rem;

  h4 {
    color: ${props => props.theme.primaryColor};
    text-transform: uppercase;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    margin-top: 1rem;
  }
  p {
    padding: 1rem 2rem;
  }

  .block {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    .left {
      grid-column: span 1;
    }

    .right {
      grid-column: span 1;
    }
  }

  .second-block {
    margin-top: 3rem;
  }

  .third-block {
    margin-top: 3rem;
  }
`;
