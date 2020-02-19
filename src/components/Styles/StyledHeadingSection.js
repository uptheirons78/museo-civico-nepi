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

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 398px;
      height: 100%;
      background: ${props => props.theme.primaryColor};
      clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%);
      /* clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%); */
      z-index: -1;
    }

    p {
      font-size: 0.7rem;
      padding: 0.3rem 0;
    }
  }
`;
