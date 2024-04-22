import React, { createContext, useContext, useState } from "react";

const ActiveKeysContext = createContext();

export const useActiveKeys = () => useContext(ActiveKeysContext);

export const ActiveKeysProvider = ({ children }) => {
  const [activeKeys, setActiveKeys] = useState({});

  const handleKeyDown = (key) => {
    setActiveKeys((prevActiveKeys) => ({
      ...prevActiveKeys,
      [key]: true,
    }));
  };

  const handleKeyUp = (key) => {
    setActiveKeys((prevActiveKeys) => {
      const newActiveKeys = { ...prevActiveKeys };
      delete newActiveKeys[key];
      return newActiveKeys;
    });
  };

  return (
    <ActiveKeysContext.Provider
      value={{ activeKeys, handleKeyDown, handleKeyUp }}>
      {children}
    </ActiveKeysContext.Provider>
  );
};
