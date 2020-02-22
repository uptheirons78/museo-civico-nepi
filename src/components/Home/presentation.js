import React from "react";
import styled from "styled-components";

const Presentation = ({ data }) => {
  return (
    <StyledPresentation className="presentation">
      <div className="presentation__container presentation__container-left">
        {data.markdownRemark.frontmatter.descriptionLeft}
      </div>
      <div className="presentation__container presentation__container-right">
        {data.markdownRemark.frontmatter.descriptionRight}
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
    &.presentation__container-left {
    }
  }
`;
