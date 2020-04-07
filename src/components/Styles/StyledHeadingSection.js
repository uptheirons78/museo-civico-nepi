import styled from "styled-components";

export const StyledHeadingSection = styled.section`
  height: 240px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

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

    p {
      font-size: 0.7rem;
      padding: 0.3rem 0;
    }

    h2 {
      font-size: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .heading-section-link {
      align-self: flex-start;
      margin-top: 0.5rem;
      color: #fff;
      text-decoration: none;
      font-size: 0.9rem;
      letter-spacing: 1px;
      border-bottom: 1px solid transparent;
      padding-bottom: 0.1rem;
      transition: all 0.5s linear;
      &:hover {
        border-bottom: 1px solid #fff;
      }
    }
  }
`;
