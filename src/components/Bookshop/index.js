import React from "react";
// Components
import HeadingSection from "../Shared/HeadingSection";
import {
  SinglePageWrapper,
  PageDescription,
  Main,
  DoubleGrid,
  PubblicazioniImageContainer,
} from "../Styles/StyledPageElement";

const Bookshop = ({ language, data }) => {
  const { frontmatter } = data.markdownRemark;
  const { gadgets } = data.markdownRemark.frontmatter[`${language}`];
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
          {gadgets.map((item, i) => (
            <DoubleGrid top="5rem" bottom="5rem" key={`${item.title}${i}`}>
              <div className="left-block">
                <PubblicazioniImageContainer>
                  <img
                    style={{ width: "100%" }}
                    src={item.image}
                    alt={item.alt}
                  />
                </PubblicazioniImageContainer>
              </div>
              <div className="right-block text-block">
                <h4>{item.title}</h4>
                {item.subtitle && <p>{item.subtitle}</p>}
                {item.pubblication && <p>{item.pubblication}</p>}
                {item.researcher && <p>{item.researcher}</p>}
                {item.editor && <p>{item.editor}</p>}
              </div>
            </DoubleGrid>
          ))}
        </Main>
      </SinglePageWrapper>
    </div>
  );
};

export default Bookshop;
