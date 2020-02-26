import React from "react";
// Styled Components
import { SocialContainer } from "../Styles/StyledSocial";
// Components
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Social = ({ socialClassName }) => {
  const containerClass =
    socialClassName === "intro" ? "social-container intro" : "social-container";

  return (
    <SocialContainer className={containerClass}>
      <li className="social-link social-link__envelop">
        <a href="mailto:museo@comune.nepi.vt.it">
          <FaEnvelope />
        </a>
      </li>
      <li className="social-link social-link__facebook">
        <a
          href="https://www.facebook.com/museociviconepi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
      </li>
      <li className="social-link social-link__linkedin">
        <a
          href="https://it.linkedin.com/in/stefano-francocci-42ab9010"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li className="social-link social-link__twitter">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </li>
    </SocialContainer>
  );
};

export default Social;
