import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import bgImg from "../../images/nepi_01.jpg";
import mobileBgImg from "../../images/mobile-title-section.jpg";

const TitleSection = () => {
  return (
    <StyledTitleSection className="title-section">
      <div className="inner-section">
        <Link className="home-page__link" to="/">
          <h2>Museo Civico di Nepi</h2>
        </Link>
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

  @media screen and (max-width: 600px) {
    background-image: url(${mobileBgImg});
  }

  @media screen and (max-width: 400px) {
    height: 150px;
  }

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

    @media screen and (max-width: 600px) {
      width: 280px;

      h2 {
        font-size: 1.3rem;
      }
    }

    @media screen and (max-width: 400px) {
      width: 220px;

      h2 {
        font-size: 1.2rem;
      }
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 398px;
      height: 100%;
      background: ${props => props.theme.primaryColor};
      clip-path: polygon(0 0, 95% 0, 100% 100%, 0% 100%);
      z-index: -1;
      @media screen and (max-width: 600px) {
        width: 278px;
      }
      @media screen and (max-width: 400px) {
        width: 218px;
      }
    }

    .home-page__link {
      text-decoration: none;
      color: ${props => props.theme.white};
    }
  }
`;
