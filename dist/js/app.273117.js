webpackJsonp([1],{

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(49);\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Main = function (_React$Component) {\n  _inherits(Main, _React$Component);\n\n  function Main() {\n    _classCallCheck(this, Main);\n\n    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));\n  }\n\n  _createClass(Main, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'React app'\n      );\n    }\n  }]);\n\n  return Main;\n}(_react2.default.Component);\n\nexports.default = Main;\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/src/Main.js\n// module id = 82\n// module chunks = 1\n\n//# sourceURL=webpack:///./app/src/Main.js?");

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(49);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(83);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _Main = __webpack_require__(82);\n\nvar _Main2 = _interopRequireDefault(_Main);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nif (false) {\n  module.hot.accept();\n}\n\n_reactDom2.default.render(_react2.default.createElement(_Main2.default, null), document.querySelector('#app'));\n\n//////////////////\n// WEBPACK FOOTER\n// ./app/src/app-browser.js\n// module id = 84\n// module chunks = 1\n\n//# sourceURL=webpack:///./app/src/app-browser.js?");

/***/ })

},[84]);