import React from "react";
import styled from "styled-components";
import TitleSection from "./titleSection";
import Navbar from "./navbar";
import Intro from "./intro";
import MobileNavigation from "./mobileNavigation";

const Header = ({ language }) => {
  return (
    <StyledHeader>
      <Intro language={language} />
      <TitleSection />
      <Navbar language={language} />
      <MobileNavigation language={language} />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header``;
