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

const Thanks = ({ data, title, description, language }) => {
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
                <h4>
                  {language === "it"
                    ? "Ecco alcune pagine che potrebbero interessarti"
                    : "Here some pages you would like to visit"}
                </h4>
                <div>
                  <p>
                    {language === "it"
                      ? "Qualora volessi prendere visione di cosa offre il nostro museo o la città di Nepi:"
                      : "If you'd like to see what's inside our museum or the main monuments of Nepi:"}
                  </p>
                  <ul>
                    <Link
                      to={
                        language === "it"
                          ? "/percorso-espositivo"
                          : "/en/exhibition-itinerary"
                      }
                    >
                      {language === "it"
                        ? "Percorso Espositivo"
                        : "Exhibition Itinerary"}
                    </Link>
                    <br />
                    <Link
                      to={language === "it" ? "/monumenti" : "/en/monuments"}
                    >
                      {language === "it" ? "Monumenti" : "Monuments"}
                    </Link>
                    <br />
                    <Link to={language === "it" ? "/eventi" : "/en/events"}>
                      {language === "it" ? "Eventi" : "Events"}
                    </Link>
                  </ul>
                </div>
                <div style={{ marginTop: "3rem" }}>
                  <p>
                    {language === "it"
                      ? "Altrimenti puoi sempre far ritorno alla nostra home page o contattarci per qualsiasi tua necessità:"
                      : "Otherwise you could always go back to our home page or contact us for any other needs:"}
                  </p>
                  <ul>
                    <Link to={language === "it" ? "/" : "/en/"}>Home</Link>
                    <br />
                    <Link to={language === "it" ? "/contatti" : "/en/contacts"}>
                      {language === "it" ? "Contatti" : "Contacts"}
                    </Link>
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

export default Thanks;
