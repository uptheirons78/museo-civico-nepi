import React from "react";
import styled from "styled-components";
import bgImg from "../../images/nepi_01.jpg";

const TitleSection = () => {
  return (
    <StyledTitleSection className="title-section">
      <div className="inner-section">
        <h2>Museo Civico di Nepi</h2>
      </div>
    </StyledTitleSection>
  );
};

export default TitleSection;

const StyledTitleSection = styled.section`
  height: 180px;
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  .inner-section {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    color: ${props => props.theme.white};
    position: relative;
    top: 0;
    left: 0;
    width: 400px;
    height: 100%;
    background: #fff;
    clip-path: polygon(0 0, 95% 0, 100% 100%, 0% 100%);
    /* clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%); */

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 398px;
      height: 100%;
      background: ${props => props.theme.primaryColor};
      clip-path: polygon(0 0, 95% 0, 100% 100%, 0% 100%);
      /* clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%); */
      z-index: -1;
    }
  }
`;
