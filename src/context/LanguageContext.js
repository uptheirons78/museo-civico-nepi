import React, { useState, createContext } from "react";

export const LanguageContext = createContext();

const LanguageContextProvider = props => {
  const [language, setLanguage] = useState({
    it: true,
    en: false,
  });

  const handleEnglish = () => {
    setLanguage({
      ...language,
      it: false,
      en: true,
    });
  };

  const handleItalian = () => {
    setLanguage({
      ...language,
      it: true,
      en: false,
    });
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        handleEnglish,
        handleItalian,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
