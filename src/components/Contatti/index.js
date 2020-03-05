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
import Mappa from "../Shared/Map";

const Contatti = () => {
  const { firstPicture, secondPicture, thirdPicture } = useStaticQuery(
    contattiPageQuery
  );

  /**
   * Coordinate Mappe
   */
  const coordinate = [
    {
      nome: "sede",
      lat: 42.242757,
      lng: 12.348116,
    },
  ];

  return (
    <>
      <HeadingSection>
        <h2>Contatti</h2>
      </HeadingSection>
      <SinglePageWrapper>
        <PageDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laboriosam
          assumenda rem?
        </PageDescription>
        <Main>
          <DoubleGrid top="3rem" bottom="3rem">
            <div className="left-block text-block">
              <h4>Title</h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt reiciendis molestiae consequatur nisi animi temporibus
                veritatis reprehenderit nostrum sunt recusandae! Dolore ullam
                quae autem cupiditate.
              </p>
            </div>
            <div className="right-block">
              <Img fluid={firstPicture.childImageSharp.fluid} />
            </div>
          </DoubleGrid>
          <Mappa coordinate={coordinate} />
        </Main>
      </SinglePageWrapper>
    </>
  );
};

export default Contatti;

// Queries
const contattiPageQuery = graphql`
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
