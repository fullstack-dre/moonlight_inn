"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/resources",{

/***/ "./components/resource-card.js":
/*!*************************************!*\
  !*** ./components/resource-card.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ResourceCard\": function() { return /* binding */ ResourceCard; }\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/andreasnotokusumo/Documents/React Project/moonlight_inn/components/resource-card.js\",\n    _this = undefined;\n\n\n\n\nvar ResourceCard = function ResourceCard(_ref) {\n  var item = _ref.item,\n      index = _ref.index;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"flex flex-col justify-items-center transition duration-200 ease-in-out transform hover:scale-105 hover:drop-shadow-xl\",\n    onClick: function onClick() {\n      return next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/resources/\");\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"relative flex justify-center self-center shadow-sm\",\n      style: {\n        height: 250,\n        width: 180\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n        layout: \"fill\",\n        src: \"https:\" + item.fields[\"thumbnail\"].fields.file.url\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, _this)\n    }, index, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      className: \"py-4 self-center text-center\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n        className: \"font-medium text-body\",\n        children: item.fields[\"title\"]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, _this);\n};\n_c = ResourceCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"ResourceCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Jlc291cmNlLWNhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVPLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQW1CO0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVztBQUM3QyxzQkFDRTtBQUNFLGFBQVMsRUFBQyx1SEFEWjtBQUVFLFdBQU8sRUFBRTtBQUFBLGFBQU1ILHVEQUFBLENBQVksYUFBWixDQUFOO0FBQUEsS0FGWDtBQUFBLDRCQUlFO0FBQ0UsZUFBUyxFQUFDLG9EQURaO0FBR0UsV0FBSyxFQUFFO0FBQ0xLLFFBQUFBLE1BQU0sRUFBRSxHQURIO0FBRUxDLFFBQUFBLEtBQUssRUFBRTtBQUZGLE9BSFQ7QUFBQSw2QkFRRSw4REFBQyxtREFBRDtBQUNFLGNBQU0sRUFBRSxNQURWO0FBRUUsV0FBRyxFQUFFLFdBQVdKLElBQUksQ0FBQ0ssTUFBTCxDQUFZLFdBQVosRUFBeUJBLE1BQXpCLENBQWdDQyxJQUFoQyxDQUFxQ0M7QUFGdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGLE9BRU9OLEtBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBaUJFO0FBQUssZUFBUyxFQUFDLDhCQUFmO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFDLHVCQUFkO0FBQUEsa0JBQXVDRCxJQUFJLENBQUNLLE1BQUwsQ0FBWSxPQUFaO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBeEJNO0tBQU1OIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcmVzb3VyY2UtY2FyZC5qcz8yZGIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGNvbnN0IFJlc291cmNlQ2FyZCA9ICh7aXRlbSwgaW5kZXh9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGhvdmVyOmRyb3Atc2hhZG93LXhsXCJcbiAgICAgIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKFwiL3Jlc291cmNlcy9cIil9ICBcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgc2VsZi1jZW50ZXIgc2hhZG93LXNtXCJcbiAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBoZWlnaHQ6IDI1MCxcbiAgICAgICAgICB3aWR0aDogMTgwLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBsYXlvdXQ9e1wiZmlsbFwifVxuICAgICAgICAgIHNyYz17XCJodHRwczpcIiArIGl0ZW0uZmllbGRzW1widGh1bWJuYWlsXCJdLmZpZWxkcy5maWxlLnVybH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS00IHNlbGYtY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWJvZHlcIj57aXRlbS5maWVsZHNbXCJ0aXRsZVwiXX08L2gzPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiUm91dGVyIiwiUmVzb3VyY2VDYXJkIiwiaXRlbSIsImluZGV4IiwicHVzaCIsImhlaWdodCIsIndpZHRoIiwiZmllbGRzIiwiZmlsZSIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/resource-card.js\n");

/***/ })

});