import React from "react";
// SiteMetaData
import useSiteMetadata from "../Shared/siteMetadata";
// Styled Components
import { StyledCredits } from "../Styles/StyledCredits";
// Images
import tripAdvisorImage from "../../images/tripadvisorbianco.png";

import * as translate from "../../utils/translate.json";

const Credits = props => {
  const { title, contacts } = useSiteMetadata();
  const { address, city, cap, telephone, email } = contacts;
  const year = new Date().getFullYear();
  return (
    <StyledCredits>
      <div className="credits__section-left">
        <img
          className="credits__trip-image"
          src={tripAdvisorImage}
          alt="TripAdvisor Logo"
        />
        <p className="credits__text">
          {translate.default.recensioni[props.language]}
          <a
            href="https://bit.ly/2T2qtQh"
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>
        </p>
      </div>
      <div className="credits__section-right">
        <p className="credits__text">
          {title},{" "}
          <span className="credits__info">
            {address} - {cap} {city}(VT) - Tel. {telephone}
          </span>
        </p>
        <p className="credits__text">
          &copy; {year} Comune di Nepi - Email: {email}
        </p>
      </div>
    </StyledCredits>
  );
};

export default Credits;
