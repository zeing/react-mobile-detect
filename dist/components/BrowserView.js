"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDeviceDetect = require("react-device-detect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BrowserView = _ref => {
  let {
    children
  } = _ref;
  return _reactDeviceDetect.isDesktop ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children) : null;
};

var _default = BrowserView;
exports.default = _default;