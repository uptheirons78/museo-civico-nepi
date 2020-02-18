import React from "react";
import styled from "styled-components";
import FooterMenu from "./footerMenu";
import Credits from "./credits";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterMenu />
      <Credits />
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${props => props.theme.primaryColor};
`;
