import React from "react";
import { Link } from "gatsby";

export const Single = ({ name, url }) => (
  <li className="navigation__item">
    <Link to={url} className="navigation__link">
      {name}
    </Link>
  </li>
);

export const Dropdown = ({ name, url, subpages, disabled }) => {
  const linkClass = disabled ? "disabled-link" : "";
  return (
    <li className="navigation__item">
      <Link to={url} className={`navigation__link ${linkClass}`}>
        {name}
      </Link>
      <ul className="dropdown">
        {subpages.map(page => (
          <li className="dropdown__item" key={page.name}>
            <Link className="dropdown__link" to={page.url}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
