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

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Questa applicazione è stata aggiornata. ` +
      `Vuoi ricaricare la pagina per vedere le ultime novità?`
  );

  if (answer === true) {
    window.location.reload();
  }
};
