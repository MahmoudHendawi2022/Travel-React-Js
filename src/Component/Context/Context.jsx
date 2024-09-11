import React, { createContext } from "react";
import Data from "../../Data/Data";

export const ContextData = createContext();

const ContextProvider = ({ children }) => {
  return (
    <ContextData.Provider value={{ Data }}>{children}</ContextData.Provider>
  );
};
export default ContextProvider;
;
