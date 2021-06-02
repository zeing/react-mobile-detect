import React from "react";
import { isMobile } from "react-device-detect";

const MobileView = ({ children }) => {

  return isMobile ? <React.Fragment>{children}</React.Fragment> : null;
};

export default MobileView;
