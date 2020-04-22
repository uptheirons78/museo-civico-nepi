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

const Credits = ({ language, data, description }) => {
  return (
    <div>
      <HeadingSection thumbnail={data.banner.childImageSharp.fixed.src}>
        <h2>Credits</h2>
      </HeadingSection>
      <SinglePageWrapper>
        <PageDescription>{description}</PageDescription>
        <Main>
          <DoubleGrid top="3rem" bottom="3rem">
            <div className="left-block text-block">
              <div>
                <h4>
                  {language === "it" ? "Cura redazionale" : "Text and contents"}
                </h4>
                <p>Stefano Francocci</p>
              </div>
              <div style={{ marginTop: "3rem" }}>
                <h4>{language === "it" ? "Fotografia" : "Photography"}</h4>
                <p>Stefano Francocci</p>
                <p>Paolo Paoletti</p>
                <p>Giovanni De Lorenzo</p>
                <p>Fabio Pugliesi</p>
                <p>Alessio Santini</p>
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
              <div>
                <h4>
                  {language === "it"
                    ? "Realizzazione Grafica"
                    : "Graphic Design"}
                </h4>
                <p>Paolo Paoletti</p>
              </div>
              <div style={{ marginTop: "3rem" }}>
                <h4>
                  {language === "it" ? "Sviluppo Web" : "Web Development"}
                </h4>
                <p>Mauro Bono</p>
              </div>
            </div>
          </DoubleGrid>
        </Main>
      </SinglePageWrapper>
    </div>
  );
};

export default Credits;
