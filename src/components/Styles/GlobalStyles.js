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
  }
  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
    letter-spacing: 1px;
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


`;

export default GlobalStyle;
