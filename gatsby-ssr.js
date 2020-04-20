'use strict';

// import google font
const _react = require('react');
const _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

// replace with your fonts string
const googleFontsLink = 'https://fonts.googleapis.com/css2?family=Dosis:wght@400;700&family=Roboto+Condensed:wght@300;400;700&display=swap';

exports.onRenderBody = function(_ref, options) {
  _ref.setHeadComponents([
    _react2.default.createElement('link', {
      key: 'fonts',
      href: googleFontsLink,
      rel: 'stylesheet'
    })
  ])
};