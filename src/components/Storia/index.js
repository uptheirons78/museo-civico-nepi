import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
// Components
import HeadingSection from "../Shared/HeadingSection";
import {
  SinglePageWrapper,
  PageDescription,
} from "../Styles/StyledPageElement";
import { StyledStoria } from "../Styles/StyledStoria";

const Storia = ({ language }) => {
  const {
    pageData,
    firstPicture,
    secondPicture,
    thirdPicture,
  } = useStaticQuery(storiaPageQuery);

  const { title, description, textA, textB, textC } = pageData.frontmatter[
    `${language}`
  ];

  return (
    <div>
      <HeadingSection>
        <h2>{title}</h2>
      </HeadingSection>
      <SinglePageWrapper>
        <PageDescription>{description}</PageDescription>
        <StyledStoria>
          <div className="block first-block">
            <div className="left">
              <h4>{language === "it" ? "anni '80" : "eighties"}</h4>
              <p className="text">{textA}</p>
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
              <p className="text">{textB}</p>
            </div>
          </div>
          <div className="block third-block">
            <div className="left">
              <h4>{language === "it" ? "oggi" : "today"}</h4>
              <p className="text">{textC}</p>
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

// Queries
const storiaPageQuery = graphql`
  query {
    pageData: markdownRemark(frontmatter: { templateKey: { eq: "history" } }) {
      frontmatter {
        title
        it {
          title
          description
          textA
          textB
          textC
        }
        en {
          title
          description
          textA
          textB
          textC
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
    thirdPicture: file(relativePath: { eq: "museo-03.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
