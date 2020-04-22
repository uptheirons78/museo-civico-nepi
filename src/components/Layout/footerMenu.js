import React from "react";
import { Link } from "gatsby";
// Styled Components
import { StyledFooterGridMenu } from "../Styles/StyledFooterGridMenu";

// Pages
import { footer_pages } from "../../utils/pages";

const FooterNav = ({ links, menu, language }) => {
  return (
    <ul className="footer-nav" role="navigation">
      {links.map(link => (
        <li key={link.name}>
          <Link to={link.url}>{link.name}</Link>
        </li>
      ))}
      {menu === "museo" ? (
        <li>
          <a href="/assets/regolamento.pdf" target="_blank">
            {language === "it" ? "Regolamento" : "Regulations"}
          </a>
        </li>
      ) : null}
    </ul>
  );
};

const FooterMenu = ({ language }) => {
  const {
    museo_links,
    info_links,
    collezioni_links,
    site_links,
  } = footer_pages[`${language}`];

  const titles = {
    it: ["il museo", "info", "la collezione", "privacy"],
    en: ["museum", "info", "collections", "privacy"],
  };

  return (
    <StyledFooterGridMenu className="footer-grid-menu">
      <div className="footer-grid-menu__item one">
        <h1>{titles[`${language}`][0]}</h1>
        <FooterNav links={museo_links} menu="museo" language={language} />
      </div>
      <div className="footer-grid-menu__item two">
        <h1>{titles[`${language}`][1]}</h1>
        <FooterNav links={info_links} />
      </div>
      <div className="footer-grid-menu__item three">
        <h1>{titles[`${language}`][2]}</h1>
        <FooterNav links={collezioni_links} />
      </div>
      <div className="footer-grid-menu__item four">
        <h1>{titles[`${language}`][3]}</h1>
        <FooterNav links={site_links} />
      </div>
    </StyledFooterGridMenu>
  );
};

export default FooterMenu;
