import React from "react";
import styled from "styled-components";
import TitleSection from "./titleSection";
import Navbar from "./navbar";
import Intro from "./intro";

const Header = () => {
  return (
    <StyledHeader>
      <Intro />
      <TitleSection />
      <Navbar />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header``;
