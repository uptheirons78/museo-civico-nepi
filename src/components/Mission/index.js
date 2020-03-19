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

const Mission = ({ language, data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <>
      <HeadingSection thumbnail={data.banner.childImageSharp.fixed.src}>
        <h2>{frontmatter[`${language}`].pageTitle}</h2>
      </HeadingSection>
      <SinglePageWrapper>
        <PageDescription>
          {frontmatter[`${language}`].pageDescription}
        </PageDescription>
        <Main>
          <DoubleGrid top="3rem" bottom="3rem">
            <div className="left-block text-block">
              <h4>{frontmatter[`${language}`].titleA}</h4>
              <p>{frontmatter[`${language}`].descriptionA}</p>
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
              <h4>{frontmatter[`${language}`].titleB}</h4>
              <p>{frontmatter[`${language}`].descriptionB}</p>
            </div>
          </DoubleGrid>
        </Main>
      </SinglePageWrapper>
    </>
  );
};

export default Mission;
