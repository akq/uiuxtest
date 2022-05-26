// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
require('@testing-library/jest-dom');
require('uiuxloader/jsdom-adapter')
var { screen } = require('@testing-library/react');

window.__screen = screen
window.domainURL = process.env.domainUrl
