import React from "react";
import styled from "styled-components";

const Presentation = ({ data, language }) => {
  const {
    descriptionLeft,
    descriptionRight,
    enDescriptionLeft,
    enDescriptionRight,
  } = data.markdownRemark.frontmatter;
  const left = language === "it" ? descriptionLeft : enDescriptionLeft;
  const right = language === "it" ? descriptionRight : enDescriptionRight;
  return (
    <StyledPresentation className="presentation">
      <div className="presentation__container presentation__container-left">
        {left}
      </div>
      <div className="presentation__container presentation__container-right">
        {right}
        prova prova prova
      </div>
    </StyledPresentation>
  );
};

export default Presentation;

const StyledPresentation = styled.section`
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-bottom: 1rem;

  .presentation__container {
    font-size: 0.9rem;
    text-align: justify;
    line-height: 1.5;
    padding-right: 2rem;

    @media screen and (max-width: 650px) {
      padding-right: 0;
    }
    &.presentation__container-left {
      grid-column: span 1;

      @media screen and (max-width: 650px) {
        grid-column: span 2;
      }
    }
    &.presentation__container-right {
      grid-column: span 1;

      @media screen and (max-width: 650px) {
        grid-column: span 2;
      }
    }
  }
`;
