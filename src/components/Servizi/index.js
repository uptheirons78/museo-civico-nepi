import React from "react";
import Img from "gatsby-image";
// Components
import HeadingSection from "../Shared/HeadingSection";
import {
  SinglePageWrapper,
  PageDescription,
  Main,
  DoubleGrid,
  ServiceTitle,
  ServiceArticle,
  ContactInfo,
} from "../Styles/StyledPageElement";
const Servizi = ({ language, data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <div>
      <HeadingSection thumbnail={data.banner.childImageSharp.fixed.src}>
        <h2>{frontmatter[`${language}`].title}</h2>
      </HeadingSection>
      <SinglePageWrapper>
        <PageDescription>
          {frontmatter[`${language}`].description}
        </PageDescription>
        <Main>
          <DoubleGrid top="3rem" bottom="3rem">
            <div className="left-block text-block">
              <h4>{frontmatter[`${language}`].visiteInterneTitle}</h4>
              <p>{frontmatter[`${language}`].visiteInterneDescription}</p>
            </div>
            <div className="right-block">
              <Img fluid={data.firstPicture.childImageSharp.fluid} />
            </div>
          </DoubleGrid>
          <ServiceTitle>
            {frontmatter[`${language}`].visiteEsterneTitle}
          </ServiceTitle>
          <section>
            {frontmatter[`${language}`].visiteEsterne.map(visita => {
              return (
                <ServiceArticle key={visita.title}>
                  <h5>{visita.title}</h5>
                  <p>{visita.description}</p>
                </ServiceArticle>
              );
            })}
          </section>
          <ServiceTitle>
            {language === "it"
              ? "Per informazioni e prenotazioni"
              : "Info and reservations"}
          </ServiceTitle>
          <p>
            <ContactInfo>Email: </ContactInfo>
            museo@comune.nepi.vt.it
          </p>
          <p>
            <ContactInfo>
              {language === "it" ? "Telefono" : "Telephone"}:{" "}
            </ContactInfo>
            0761 570604
          </p>
        </Main>
      </SinglePageWrapper>
    </div>
  );
};

export default Servizi;
