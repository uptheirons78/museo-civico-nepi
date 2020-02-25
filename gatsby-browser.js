// Import Fonts
import "typeface-open-sans";
import "typeface-source-sans-pro";
// Import Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import GlobalContextProvider from "./src/context/GlobalContext";
export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>{element}</GlobalContextProvider>
);
