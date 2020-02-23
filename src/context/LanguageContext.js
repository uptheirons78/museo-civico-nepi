import React, { useState, createContext } from "react";

export const LanguageContext = createContext();

const LanguageContextProvider = props => {
  const [language, setLanguage] = useState({ value: "it" });

  const handleChange = event => {
    setLanguage({ value: event.target.value });
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        handleChange,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContextProvider;
