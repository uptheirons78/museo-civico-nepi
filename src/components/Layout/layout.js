import React from "react";
import styled from "styled-components";
import GlobalStyle from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import { ThemeProvider } from "styled-components";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <MainWrapper>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Footer />
      </MainWrapper>
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
`;
