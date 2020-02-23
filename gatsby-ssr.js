// Import Fonts
import "typeface-open-sans";
import "typeface-source-sans-pro";
// Import Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import LanguageContextProvider from "./src/context/LanguageContext";
export const wrapRootElement = ({ element }) => (
  <LanguageContextProvider>{element}</LanguageContextProvider>
);
