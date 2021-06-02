import React, { useContext } from "react";
import * as detectUserAgent from "react-device-detect";

const DetectMobileContext = React.createContext(null);

export const DetectMobileContextProvider = ({ children }) => {
  return (
    <DetectMobileContext.Provider
      value={{
        ...detectUserAgent,
      }}
    >
      {children}
    </DetectMobileContext.Provider>
  );
};

export const useMobileDetect = () => useContext(DetectMobileContext);
