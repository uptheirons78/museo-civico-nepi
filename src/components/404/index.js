import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

// Components
import HeadingSection from "../Shared/HeadingSection";
import {
  SinglePageWrapper,
  PageDescription,
  Main,
  DoubleGrid,
} from "../Styles/StyledPageElement";

const FourOFour = ({ data, title, description }) => {
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
              <div>
                <h4>Ecco alcune pagine che potrebbero interessarti</h4>
                <div>
                  <p>
                    Qualora volessi prendere visione di cosa offre il nostro
                    museo o la città di Nepi:
                  </p>
                  <ul>
                    <Link to="/museo">Museo</Link>
                    <br />
                    <Link to="/monumenti">Monumenti</Link>
                    <br />
                    <Link to="/eventi">Eventi</Link>
                  </ul>
                </div>
                <div style={{ marginTop: "3rem" }}>
                  <p>
                    Altrimenti puoi sempre far ritorno alla nostra home page o
                    contattarci per qualsiasi tua necessità:
                  </p>
                  <ul>
                    <Link to="/">Home</Link>
                    <br />
                    <Link to="/contatti">Contatti</Link>
                  </ul>
                </div>
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

export default FourOFour;
