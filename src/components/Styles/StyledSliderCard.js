import styled from "styled-components";

export const StyledSliderCard = styled.section`
  height: 320px;
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

    h2 {
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    p {
      font-size: 0.7rem;
      padding: 1rem 1.5rem 0 0;
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
    }
  }
`;
