import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-size: 16px;

    @media screen and (max-width: 650px) {
    font-size: 15px;
    }

    @media screen and (max-width: 480px) {
    font-size: 14px;
    }
  }
  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
    letter-spacing: 1px;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  /** Slider Styles */

  /** Arrows Styles */
  .slick-arrow {
    visibility: hidden;
    opacity: 0;
    display: none;
  }
  /** Dots Styles */
  .slick-dots {
    li {
      button {
        &::before {
          font-size: 8px !important;
          color: black;
        }
      }

      &:hover, &.slick-active {
        button {
          &::before {
            color: ${props => props.theme.primaryColor};
          }
        }
      }
    }
  }

  .slider-container {
    position: relative;
    max-width: 1050px;
    width: 100%;
    overflow: hidden;
  }

  .navigation__link.disabled-link {
    pointer-events: none;
  }

  .mobile-navigation__link.disabled-link {
    pointer-events: none;
  }

  .cookieConsent {

    .cookies-link {
      text-decoration: none !important;
      color: #FAA916 !important;
      transition: all .350s ease-in-out;
    }
  }



`;

export default GlobalStyle;
