import React from "react";
// Pages
import { pages } from "../../utils/pages";
// Components
import { Single, Dropdown } from "./navigationLinks";
// Styled Components
import { Navigation } from "../Styles/StyledNavigation";

const Navbar = ({ language }) => {
  return (
    <Navigation className="navigation" role="navigation">
      <ul className="navigation__list">
        {pages[`${language}`].map(page => {
          if (page.subpages.length === 0) {
            return <Single key={page.name} url={page.url} name={page.name} />;
          } else {
            return (
              <Dropdown
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
    </Navigation>
  );
};

export default Navbar;
