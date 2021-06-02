import React from "react";
import { isDesktop } from "react-device-detect";

const BrowserView = ({ children }) => {
  return isDesktop ? <React.Fragment>{children}</React.Fragment> : null;
};

export default BrowserView;
