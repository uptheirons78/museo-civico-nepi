import React from "react";
import { Link } from "gatsby";

// Styled Components
import { StyledFooterGridMenu } from "../Styles/StyledFooterGridMenu";

// Pages
import { footer_pages } from "../../utils/pages";

const FooterNav = ({ links }) => {
  return (
    <ul className="footer-nav" role="navigation">
      {links.map(link => (
        <li key={link.name}>
          <Link to={link.url}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

const FooterMenu = () => {
  const language = "it";
  const {
    museo_links,
    info_links,
    collezioni_links,
    site_links,
  } = footer_pages[language];
  return (
    <StyledFooterGridMenu className="footer-grid-menu">
      <div className="footer-grid-menu__item one">
        <h1>museo</h1>
        <FooterNav links={museo_links} />
      </div>
      <div className="footer-grid-menu__item two">
        <h1>info</h1>
        <FooterNav links={info_links} />
      </div>
      <div className="footer-grid-menu__item three">
        <h1>collezioni</h1>
        <FooterNav links={collezioni_links} />
      </div>
      <div className="footer-grid-menu__item four">
        <h1>sito e privacy</h1>
        <FooterNav links={site_links} />
      </div>
    </StyledFooterGridMenu>
  );
};

export default FooterMenu;
