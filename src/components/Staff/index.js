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

const Staff = ({ data, language }) => {
  const {
    pageTitle,
    pageDescription,
    director,
    directorName,
    operator,
    operatorsList,
  } = data.markdownRemark.frontmatter[`${language}`];

  return (
    <>
      <HeadingSection thumbnail={data.banner.childImageSharp.fixed.src}>
        <h2>{pageTitle}</h2>
      </HeadingSection>
      <SinglePageWrapper>
        <PageDescription>{pageDescription}</PageDescription>
        <Main>
          <DoubleGrid top="3rem" bottom="3rem">
            <div className="left-block text-block">
              <div>
                <h4>{director}</h4>
                <p>{directorName}</p>
              </div>
              <div style={{ marginTop: "3rem" }}>
                <h4>{operator}</h4>
                {operatorsList.map(operator => (
                  <p style={{ margin: "0.5rem 0" }} key={operator.name}>
                    {operator.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="right-block">
              <Img fluid={data.firstPicture.childImageSharp.fluid} />
            </div>
          </DoubleGrid>
        </Main>
      </SinglePageWrapper>
    </>
  );
};

export default Staff;
