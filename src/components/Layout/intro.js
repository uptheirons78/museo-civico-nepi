import React, { useContext } from "react";
import { Link } from "gatsby";
import { StyledIntro } from "../Styles/StyledIntro";

import Logo from "../../images/comune.png";
import Social from "../Shared/social";
import { GlobalContext } from "../../context/GlobalContext";

const Intro = ({ language }) => {
  const { toggle, handleToggle } = useContext(GlobalContext);
  const menuText = toggle ? "Close" : "Menu";
  return (
    <StyledIntro className="intro-section">
      <div className="intro-section__left">
        <div className="intro-section__logo-container">
          <img src={Logo} alt="Logo Comune di Nepi" />
        </div>
        <div className="intro-section__title-container">
          <h3>Comune di Nepi</h3>
          <p>Cultura, Turismo e Politiche Giovanili</p>
          {language === "it" ? (
            <Link to="/en/" className="language-btn">
              EN
            </Link>
          ) : (
            <Link to="/" className="language-btn">
              IT
            </Link>
          )}
        </div>
      </div>
      <div className="intro-section__right">
        <Social socialClassName="intro" />
        <button className="mobileToggler" onClick={handleToggle}>
          {menuText}
        </button>
      </div>
    </StyledIntro>
  );
};

export default Intro;
