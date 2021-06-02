"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DetectMobileContextProvider", {
  enumerable: true,
  get: function get() {
    return _mobileDetect.DetectMobileContextProvider;
  }
});
Object.defineProperty(exports, "useMobileDetect", {
  enumerable: true,
  get: function get() {
    return _mobileDetect.useMobileDetect;
  }
});
Object.defineProperty(exports, "BrowserView", {
  enumerable: true,
  get: function get() {
    return _BrowserView.default;
  }
});
Object.defineProperty(exports, "MobileView", {
  enumerable: true,
  get: function get() {
    return _MobileView.default;
  }
});

var _mobileDetect = require("./contexts/mobile-detect");

var _BrowserView = _interopRequireDefault(require("./components/BrowserView"));

var _MobileView = _interopRequireDefault(require("./components/MobileView"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }