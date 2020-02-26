import styled from "styled-components";

export const StyledSliderCard = styled.section`
  width: 100%;
  height: 320px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 600px) {
    height: 280px;
  }

  @media screen and (max-width: 400px) {
    height: 210px;
  }

  .inner-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 1rem;
    color: ${props => props.theme.white};
    position: relative;
    top: 0;
    left: 0;
    width: 400px;
    height: 100%;
    background: #fff;
    clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);

    @media screen and (max-width: 600px) {
      width: 280px;
    }
    @media screen and (max-width: 400px) {
      width: 220px;
    }

    .slider-title {
      text-transform: uppercase;
      letter-spacing: 1px;
      @media screen and (max-width: 600px) {
        font-size: 1.2rem;
      }
      @media screen and (max-width: 400px) {
        font-size: 1.1rem;
      }
    }

    .slider-text {
      font-size: 0.7rem;
      padding: 1rem 1.5rem 0 0;
    }

    .slider-link {
      align-self: flex-start;
      margin-top: 0.5rem;
      color: #fff;
      text-decoration: none;
      font-size: 0.7rem;
      letter-spacing: 1px;
      border-bottom: 1px solid transparent;
      padding-bottom: 0.1rem;
      transition: all 0.5s linear;
      &:hover {
        border-bottom: 1px solid #fff;
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
      clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
      z-index: -1;

      @media screen and (max-width: 600px) {
        width: 278px;
      }
      @media screen and (max-width: 400px) {
        width: 218px;
      }
    }
  }
`;
