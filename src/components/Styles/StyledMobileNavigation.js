import styled from "styled-components";

export const StyledMobileNavigation = styled.nav`
  position: absolute;
  top: 0;
  left: -100%;
  width: 82%;
  height: 100vh;
  background: ${props => props.theme.primaryColor};
  z-index: 100;
  visibility: hidden;
  transition: all 0.65s ease;
  &.open {
    left: 0;
    display: block;
    visibility: visible;
  }
  .mobile-navigation__list {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;
    margin-top: 1rem;
    margin-right: 2rem;
    .mobile-navigation__item {
      padding: 0.5rem 0;
      .mobile-navigation__link {
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1rem;
      }
    }
  }

  .mobile-dropdown__list {
    list-style-type: none;
    text-align: right;

    .mobile-dropdown__link {
      color: ${props => props.theme.white};
      text-decoration: none;
      text-transform: uppercase;
      font-size: 0.7rem;
    }
  }

  .mobile-nav__info {
    text-align: right;
    margin-right: 2rem;
    margin-top: 2vh;
    h1 {
      text-transform: uppercase;
      font-weight: 600;
      color: #fff;
    }
  }
  .mobile-nav__social {
    display: flex;
    justify-content: flex-end;
    list-style-type: none;
    margin-right: 2rem;
    margin-top: 2vh;
    li {
      margin-left: 0.6rem;
    }
    svg {
      fill: ${props => props.theme.primaryColor};
      background: #fff;
      width: 1.7rem;
      height: 1.7rem;
      padding: 0.4rem;
    }
  }
`;
