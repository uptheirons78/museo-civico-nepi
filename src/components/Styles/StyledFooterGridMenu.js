import styled from "styled-components";

export const StyledFooterGridMenu = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 1rem;
  .footer-grid-menu__item {
    padding: 0.5rem;
    h1 {
      color: #fff;
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin-bottom: 0.5rem;
    }
    .footer-nav {
      list-style-type: none;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 0.8rem;
        font-weight: 600;
        display: block;
        margin-bottom: 0.1rem;
      }
    }
  }
  .one,
  .two,
  .three,
  .four {
    grid-column: span 1;
  }
  .two,
  .three,
  .four {
    border-left: 1px solid rgba(255, 255, 255, 0.7);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    .three {
      border: none;
    }
  }
`;
