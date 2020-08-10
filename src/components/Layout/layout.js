/* eslint-disable */
import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import GlobalStyle from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import { ThemeProvider } from "styled-components";
import Header from "./header";
import Footer from "./footer";
import CookieConsent from "react-cookie-consent";

/**
 * Fade Animation to mimic page transitions
 */
import Fade from "../Animations/Fade";

/**
 * Button styles from React Cookie Consent
 */
const btnStyle = {
  background: "#FAA916",
};

const Layout = (props) => {
  return (
    <ThemeProvider theme={Theme}>
      <Fade>
        <Pop>
          <h1 style={{ color: "white" }}>Work in progress...</h1>
        </Pop>
        <MainWrapper>
          <GlobalStyle />
          <Header language={props.language} />
          <main>{props.children}</main>
          <Footer language={props.language} />
          <CookieConsent
            location="bottom"
            buttonText="Accetto"
            buttonStyle={btnStyle}
            enableDeclineButton
            declineButtonText="Non Accetto"
            style={{
              background: "#2B373B",
              fontSize: "0.8rem",
            }}
            expires={150}
          >
            Utilizziamo cookies proprietari per i nostri servizi e cookies di
            terze parti per abilitare importanti funzionalità del sito.
            Visualizza la{" "}
            <Link to="/privacy-policy" className="cookies-link">
              Privacy Policy
            </Link>{" "}
            o la{" "}
            <Link to="/cookies-policy" className="cookies-link">
              Cookies Policy
            </Link>{" "}
            per saperne di più.
          </CookieConsent>
        </MainWrapper>
      </Fade>
    </ThemeProvider>
  );
};

export default Layout;

const MainWrapper = styled.div`
  display: none;
  max-width: 1050px;
  width: 100%;
  background: ${(props) => props.theme.white};
  margin: 0 auto;
  box-shadow: 18px 0 22px -4px rgba(0, 0, 0, 0.6),
    -18px 0 22px -4px rgba(0, 0, 0, 0.6);

  @media screen and (max-width: 1049px) {
    box-shadow: none;
  }
`;

const Pop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  position: relative;
  top: 0;
  right: 0;
`;

/**
 * Per rivedere il sito rimuovere l'elemento Pop e
 * displey none sul Main Wrapper
 */
