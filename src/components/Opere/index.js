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

const Opere = ({ language, data }) => {
  /**
   * Static Query
   */
  const { firstPicture, secondPicture, thirdPicture } = useStaticQuery(
    worksPageQuery
  );

  const { frontmatter } = data.markdownRemark;

  return (
    <div>
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
              <h4>{frontmatter[`${language}`].sectionATitle}</h4>
              <p>{frontmatter[`${language}`].sectionA}</p>
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
              <h4>{frontmatter[`${language}`].sectionBTitle}</h4>
              <p>{frontmatter[`${language}`].sectionB}</p>
            </div>
          </DoubleGrid>
          <DoubleGrid top="5rem" bottom="5rem">
            <div className="left-block text-block">
              <h4>{frontmatter[`${language}`].sectionCTitle}</h4>
              <p>{frontmatter[`${language}`].sectionC}</p>
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

export default Opere;

// Query
const worksPageQuery = graphql`
  query {
    firstPicture: file(relativePath: { eq: "collezioni1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    secondPicture: file(relativePath: { eq: "collezioni2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    thirdPicture: file(relativePath: { eq: "collezioni3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
