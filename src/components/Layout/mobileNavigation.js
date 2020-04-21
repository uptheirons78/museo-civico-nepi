import React, { useContext } from "react";
import { Link } from "gatsby";
import { GlobalContext } from "../../context/GlobalContext";
import { StyledMobileNavigation } from "../Styles/StyledMobileNavigation";
import { pages } from "../../utils/pages";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const MobileSingleLink = ({ name, url }) => (
  <li className="mobile-navigation__item">
    <Link to={url} className="mobile-navigation__link">
      {name}
    </Link>
  </li>
);

const MobileDropdown = ({ name, url, subpages, disabled }) => {
  const linkClass = disabled ? "disabled-link" : "";

  return (
    <li className="mobile-navigation__item">
      <Link to={url} className={`mobile-navigation__link ${linkClass}`}>
        {name}
      </Link>
      <ul className="mobile-dropdown__list">
        {subpages.map(page => (
          <li className="mobile-dropdown__item" key={page.name}>
            <Link className="mobile-dropdown__link" to={page.url}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

const MobileNavigation = ({ language }) => {
  const { toggle, handleToggle } = useContext(GlobalContext);
  const menuClass = toggle ? "mobile-nav open" : "mobile-nav";
  return (
    <StyledMobileNavigation className={menuClass} onClick={handleToggle}>
      <div className="mobile-nav__info">
        <h1>Museo Civico di Nepi</h1>
      </div>
      <ul className="mobile-navigation__list">
        {pages[`${language}`].map(page => {
          if (page.subpages.length === 0) {
            return (
              <MobileSingleLink
                key={page.name}
                url={page.url}
                name={page.name}
              />
            );
          } else {
            return (
              <MobileDropdown
                key={page.name}
                url={page.url}
                name={page.name}
                subpages={page.subpages}
                disabled={page.disabled}
              />
            );
          }
        })}
      </ul>
      <div className="mobile-nav__social">
        <li className="social-link">
          <a href="mailto:museo@comune.nepi.vt.it">
            <FaEnvelope />
          </a>
        </li>
        <li className="social-link">
          <a
            href="https://www.facebook.com/museociviconepi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
        </li>
        <li className="social-link">
          <a
            href="https://it.linkedin.com/in/stefano-francocci-42ab9010"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-link">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
      </div>
    </StyledMobileNavigation>
  );
};

export default MobileNavigation;
