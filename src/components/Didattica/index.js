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

const Didattica = ({ language, data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <div>
      <HeadingSection>
        <h2>{frontmatter[`${language}`].title}</h2>
      </HeadingSection>
      <SinglePageWrapper>
        <PageDescription>
          {frontmatter[`${language}`].description}
        </PageDescription>
        <Main>
          <DoubleGrid top="3rem" bottom="3rem">
            <div className="left-block text-block">
              <h4>{frontmatter[`${language}`].textATitle}</h4>
              <p>{frontmatter[`${language}`].textA}</p>
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
              <h4>{frontmatter[`${language}`].textBTitle}</h4>
              <p>{frontmatter[`${language}`].textB}</p>
            </div>
          </DoubleGrid>
          <DoubleGrid top="5rem" bottom="5rem">
            <div className="left-block text-block">
              <h4>{frontmatter[`${language}`].infoTitle}</h4>
              <p>{frontmatter[`${language}`].info}</p>
            </div>
            <div className="right-block">
              <Img fluid={data.thirdPicture.childImageSharp.fluid} />
            </div>
          </DoubleGrid>
        </Main>
      </SinglePageWrapper>
    </div>
  );
};

export default Didattica;
