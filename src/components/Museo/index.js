import React from "react";
import Img from "gatsby-image";

// Components
import HeadingSection from "../Shared/HeadingSection";
import {
  SinglePageWrapper,
  PageDescription,
  Main,
  DoubleGrid,
} from "../Styles/StyledPageElement";

const Museo = ({ language, data }) => {
  const {
    title,
    description,
    textA,
    textB,
    textC,
    titleA,
    titleB,
    titleC,
  } = data.markdownRemark.frontmatter[`${language}`];

  return (
    <>
      <HeadingSection thumbnail={data.banner.childImageSharp.fixed.src}>
        <h2>{title}</h2>
      </HeadingSection>
      <SinglePageWrapper>
        <PageDescription>{description}</PageDescription>
        <Main>
          <DoubleGrid top="3rem" bottom="3rem">
            <div className="left-block text-block">
              <h4>{titleA}</h4>
              <p>{textA}</p>
            </div>
            <div className="right-block">
              <Img fluid={data.firstPicture.childImageSharp.fluid} />
            </div>
          </DoubleGrid>
          <DoubleGrid top="5rem" bottom="5rem">
            <div className="left-block">
              <Img fluid={data.secondPicture.childImageSharp.fluid} />
            </div>
            <div className="right-block text-block">
              <h4>{titleB}</h4>
              <p>{textB}</p>
            </div>
          </DoubleGrid>
          <DoubleGrid top="5rem" bottom="5rem">
            <div className="left-block text-block">
              <h4>{titleC}</h4>
              <p>{textC}</p>
            </div>
            <div className="right-block">
              <Img fluid={data.thirdPicture.childImageSharp.fluid} />
            </div>
          </DoubleGrid>
        </Main>
      </SinglePageWrapper>
    </>
  );
};

export default Museo;
