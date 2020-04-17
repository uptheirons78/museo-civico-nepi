import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
// Components
import HeadingSection from "../Shared/HeadingSection";
import {
  SinglePageWrapper,
  PageDescription,
  Main,
  DoubleGrid,
} from "../Styles/StyledPageElement";

const OpeningInfo = styled.p`
  color: ${props => props.theme.primaryColor};
  font-weight: 600;
`;

const InfoAndTickets = ({ language, data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <div>
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
              <h4>{frontmatter[`${language}`].sectionATitle}</h4>
              <div style={{ margin: "1rem 0" }}>
                <OpeningInfo>
                  {frontmatter[`${language}`].winterOpening}
                </OpeningInfo>
                <p>{frontmatter[`${language}`].winterTueFri}</p>
                <p>{frontmatter[`${language}`].winterSatSun}</p>
                <p>{frontmatter[`${language}`].winterClosing}</p>
              </div>
              <div>
                <OpeningInfo>
                  {frontmatter[`${language}`].summerOpening}
                </OpeningInfo>
                <p>{frontmatter[`${language}`].summerTueFri}</p>
                <p>{frontmatter[`${language}`].summerSatSun}</p>
                <p>{frontmatter[`${language}`].summerClosing}</p>
              </div>
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
              <div style={{ marginBottom: "2rem" }}>
                <h4>{frontmatter[`${language}`].sectionBTitle}</h4>
                <p>{frontmatter[`${language}`].close1}</p>
                <p>{frontmatter[`${language}`].close2}</p>
              </div>
              <div>
                <h4>{frontmatter[`${language}`].sectionCTitle}</h4>
                <p>{frontmatter[`${language}`].entrance}</p>
              </div>
            </div>
          </DoubleGrid>
        </Main>
      </SinglePageWrapper>
    </div>
  );
};

export default InfoAndTickets;
