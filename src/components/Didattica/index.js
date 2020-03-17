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

const Didattica = ({ language, data }) => {
  /**
   * Static Query
   */
  const { firstPicture, secondPicture, thirdPicture } = useStaticQuery(
    didatticaQuery
  );

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
              <Img fluid={firstPicture.childImageSharp.fluid} />
            </div>
          </DoubleGrid>
          <DoubleGrid top="5rem" bottom="5rem">
            <div className="left-block">
              <Img fluid={secondPicture.childImageSharp.fluid} />
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
              <Img fluid={thirdPicture.childImageSharp.fluid} />
            </div>
          </DoubleGrid>
        </Main>
      </SinglePageWrapper>
    </div>
  );
};

export default Didattica;

// Query
const didatticaQuery = graphql`
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
