/* eslint-disable */
import React from "react";
import styled from "styled-components";
import GlobalStyle from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import { ThemeProvider } from "styled-components";
import Header from "./header";
import Footer from "./footer";

/**
 * Fade Animation to mimic page transitions
 */
import Fade from "../Animations/Fade";

const Layout = props => {
  return (
    <ThemeProvider theme={Theme}>
      <Fade>
        <MainWrapper>
          <GlobalStyle />
          <Header language={props.language} />
          <main>{props.children}</main>
          <Footer language={props.language} />
        </MainWrapper>
      </Fade>
    </ThemeProvider>
  );
};

export default Layout;

const MainWrapper = styled.div`
  max-width: 1050px;
  width: 100%;
  background: ${props => props.theme.white};
  margin: 0 auto;
  box-shadow: 18px 0 22px -4px rgba(0, 0, 0, 0.6),
    -18px 0 22px -4px rgba(0, 0, 0, 0.6);

  @media screen and (max-width: 1049px) {
    box-shadow: none;
  }
`;
