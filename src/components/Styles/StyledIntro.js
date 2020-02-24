import styled from "styled-components";

export const StyledIntro = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  .intro-section__left {
    display: flex;
    align-items: center;
    .intro-section__logo-container {
      width: 50px;
      margin-right: 0.5rem;
      img {
        width: 100%;
      }
    }
    .intro-section__title-container {
      p {
        font-size: 0.7rem;
      }
    }
  }
  .intro-section__right {
    display: flex;
    align-items: center;
    button {
      display: none;
      margin-left: 0.5rem;
      background: ${props => props.theme.primaryColor};
      color: #fff;
      border: none;
      padding: 0.4rem 0.8rem;
      text-transform: uppercase;
      font-weight: bold;
      cursor: pointer;
      @media screen and (max-width: 600px) {
        display: block;
      }
    }
  }

  .language-btn {
    text-decoration: none;
    border: 1px solid ${props => props.theme.primaryColor};
    padding: 0.1rem 0.6rem;
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.white};
    font-size: 0.7rem;
    font-weight: bold;
    transition: all 0.5s ease;

    &:hover {
      background: ${props => props.theme.white};
      color: ${props => props.theme.primaryColor};
    }
  }
`;
