import React from "react";
// Components
import HeadingSection from "../Shared/HeadingSection";
import {
  SinglePageWrapper,
  PageDescription,
  Main,
  SectionTitle,
  DoubleGrid,
  PubblicazioniImageContainer,
} from "../Styles/StyledPageElement";

const Pubblicazioni = ({ language, data }) => {
  const { frontmatter } = data.markdownRemark;
  const { quaderni, other } = data.markdownRemark.frontmatter[`${language}`];
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
          <SectionTitle>{frontmatter[`${language}`].subtitleOne}</SectionTitle>
          {quaderni.map(quaderno => (
            <DoubleGrid top="5rem" bottom="5rem" key={quaderno.title}>
              <div className="left-block">
                <PubblicazioniImageContainer>
                  <img
                    style={{ width: "100%" }}
                    src={quaderno.image}
                    alt={quaderno.alt}
                  />
                </PubblicazioniImageContainer>
              </div>
              <div className="right-block text-block">
                <h4>{quaderno.title}</h4>
                {quaderno.subtitle && <p>{quaderno.subtitle}</p>}
                {quaderno.pubblication && <p>{quaderno.pubblication}</p>}
                {quaderno.researcher && <p>{quaderno.researcher}</p>}
                {quaderno.editor && <p>{quaderno.editor}</p>}
              </div>
            </DoubleGrid>
          ))}
          <SectionTitle>{frontmatter[`${language}`].subtitleTwo}</SectionTitle>
          {other.map(quaderno => (
            <DoubleGrid top="5rem" bottom="5rem" key={quaderno.title}>
              <div className="left-block">
                <PubblicazioniImageContainer>
                  <img
                    style={{ width: "100%" }}
                    src={quaderno.image}
                    alt={quaderno.alt}
                  />
                </PubblicazioniImageContainer>
              </div>
              <div className="right-block text-block">
                <h4>{quaderno.title}</h4>
                {quaderno.subtitle && <p>{quaderno.subtitle}</p>}
                {quaderno.pubblication && <p>{quaderno.pubblication}</p>}
                {quaderno.researcher && <p>{quaderno.researcher}</p>}
                {quaderno.editor && <p>{quaderno.editor}</p>}
              </div>
            </DoubleGrid>
          ))}
        </Main>
      </SinglePageWrapper>
    </div>
  );
};

export default Pubblicazioni;
