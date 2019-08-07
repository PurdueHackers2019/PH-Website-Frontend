webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/modules/common/Navbar.tsx":
/*!***************************************!*\
  !*** ./src/modules/common/Navbar.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _utils_session__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/session */ "./src/utils/session.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");
var _jsxFileName = "/Users/ashwin/Projects/PH-Website-Frontend/src/modules/common/Navbar.tsx";







const CommonNav = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
  href: _constants__WEBPACK_IMPORTED_MODULE_5__["default"].MEMBERS,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Members"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
  href: _constants__WEBPACK_IMPORTED_MODULE_5__["default"].EVENTS,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "Events"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
  href: _constants__WEBPACK_IMPORTED_MODULE_5__["default"].CALENDAR,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Calendar"));

const OrganizerDropdown = ({
  user
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavDropdown"], {
  title: "Organizers",
  id: "protected-nav-dropdown",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, '.privateItem a {padding-top: 5px !important;}'), Object(_utils_session__WEBPACK_IMPORTED_MODULE_4__["hasPermission"])(user, 'permissions') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
  className: "privateItem",
  href: _constants__WEBPACK_IMPORTED_MODULE_5__["default"].PERMISSIONS,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "Permissions"), Object(_utils_session__WEBPACK_IMPORTED_MODULE_4__["hasPermission"])(user, 'credentials') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
  className: "privateItem",
  href: _constants__WEBPACK_IMPORTED_MODULE_5__["default"].CREDENTIALS,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "Credentials"));

const PHNavbar = ({
  auth,
  id,
  user
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
  collapseOnSelect: true,
  bsStyle: "default",
  style: {
    marginBottom: '10px',
    maxWidth: '100%'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Header, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  id: "nav-brand",
  className: "navbar-brand",
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "nav-logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: "nav-name",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "Purdue Hackers")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Toggle, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"].Collapse, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
  pullRight: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, auth && id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  role: "presentation",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/member/".concat(id),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, "Profile"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommonNav, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}), (Object(_utils_session__WEBPACK_IMPORTED_MODULE_4__["hasPermission"])(user, 'permissions') || Object(_utils_session__WEBPACK_IMPORTED_MODULE_4__["hasPermission"])(user, 'credentials')) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrganizerDropdown, {
  user: user,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  role: "presentation",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: _constants__WEBPACK_IMPORTED_MODULE_5__["default"].LOGOUT,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, "Logout")))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommonNav, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
  href: _constants__WEBPACK_IMPORTED_MODULE_5__["default"].LOGIN,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, "Login"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
  href: _constants__WEBPACK_IMPORTED_MODULE_5__["default"].SIGNUP,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}, "Join")))));

PHNavbar.propTypes = {
  auth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
PHNavbar.defaultProps = {
  auth: null,
  id: null,
  user: null
};
OrganizerDropdown.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
OrganizerDropdown.defaultProps = {
  user: null
}; // export default Navbar;

/* harmony default export */ __webpack_exports__["default"] = (PHNavbar);

/***/ })

})
//# sourceMappingURL=_app.js.7bbbe629ae3445e319fb.hot-update.js.map