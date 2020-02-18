import React from "react";
import styled from "styled-components";
import TitleSection from "./titleSection";
import Navbar from "./navbar";

const Header = () => {
  return (
    <StyledHeader>
      <TitleSection />
      <Navbar />
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header``;
