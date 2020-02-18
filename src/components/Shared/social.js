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
        <a href="/">
          <FaEnvelope />
        </a>
      </li>
      <li className="social-link social-link__facebook">
        <a href="/">
          <FaFacebookF />
        </a>
      </li>
      <li className="social-link social-link__linkedin">
        <a href="/">
          <FaLinkedinIn />
        </a>
      </li>
      <li className="social-link social-link__twitter">
        <a href="/">
          <FaTwitter />
        </a>
      </li>
    </SocialContainer>
  );
};

export default Social;
