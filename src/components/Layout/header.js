import React from "react";
import styled from "styled-components";
import TitleSection from "./titleSection";
import Navbar from "./navbar";
import Intro from "./intro";

const Header = ({ lang }) => {
  return (
    <StyledHeader>
      <Intro />
      <TitleSection />
      <Navbar lang={lang} />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header``;
