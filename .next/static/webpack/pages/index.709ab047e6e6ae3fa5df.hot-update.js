"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/carousel.js":
/*!********************************!*\
  !*** ./components/carousel.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/andreasnotokusumo/Documents/React Project/moonlight_inn/components/carousel.js\";\n\n\n\nfunction Carousel(_ref) {\n  var _this = this;\n\n  var resources = _ref.resources;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    className: \"p-0 m-0\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {\n      spaceBetween: 50,\n      slidesPerView: 1,\n      navigation: true,\n      pagination: {\n        clickable: true\n      },\n      scrollbar: {\n        draggable: true\n      },\n      onSwiper: function onSwiper(swiper) {\n        return console.log(swiper);\n      },\n      onSlideChange: function onSlideChange() {\n        return console.log(\"slide change\");\n      },\n      children: resources.map(function (item, i) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {\n          className: \"w-full flex justify-center align-middle\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n            className: \"w-full justify-items-center\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"relative flex justify-center self-center shadow-sm hover:drop-shadow-xl\",\n              style: {\n                height: 250,\n                width: 180\n              },\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {\n                layout: \"fill\",\n                src: \"https:\" + item.fields[\"thumbnail\"].fields.file.url\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 29,\n                columnNumber: 19\n              }, _this)\n            }, i, false, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n              className: \"py-4\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n                className: \"font-medium text-body\",\n                children: item.fields[\"title\"]\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n_c = Carousel;\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Nhcm91c2VsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFZSxTQUFTRyxRQUFULE9BQWlDO0FBQUE7O0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBQzlDLHNCQUNFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQSwyQkFDRSw4REFBQyxnREFBRDtBQUNFLGtCQUFZLEVBQUUsRUFEaEI7QUFFRSxtQkFBYSxFQUFFLENBRmpCO0FBR0UsZ0JBQVUsTUFIWjtBQUlFLGdCQUFVLEVBQUU7QUFBRUMsUUFBQUEsU0FBUyxFQUFFO0FBQWIsT0FKZDtBQUtFLGVBQVMsRUFBRTtBQUFFQyxRQUFBQSxTQUFTLEVBQUU7QUFBYixPQUxiO0FBTUUsY0FBUSxFQUFFLGtCQUFDQyxNQUFEO0FBQUEsZUFBWUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVosQ0FBWjtBQUFBLE9BTlo7QUFPRSxtQkFBYSxFQUFFO0FBQUEsZUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixDQUFOO0FBQUEsT0FQakI7QUFBQSxnQkFTR0wsU0FBUyxDQUFDTSxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDMUIsNEJBQ0UsOERBQUMscURBQUQ7QUFBYSxtQkFBUyxFQUFDLHlDQUF2QjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQyw2QkFBZjtBQUFBLG9DQUNFO0FBQ0UsdUJBQVMsRUFBQyx5RUFEWjtBQUdFLG1CQUFLLEVBQUU7QUFDTEMsZ0JBQUFBLE1BQU0sRUFBRSxHQURIO0FBRUxDLGdCQUFBQSxLQUFLLEVBQUU7QUFGRixlQUhUO0FBQUEscUNBUUUsOERBQUMsbURBQUQ7QUFDRSxzQkFBTSxFQUFFLE1BRFY7QUFFRSxtQkFBRyxFQUFFLFdBQVdILElBQUksQ0FBQ0ksTUFBTCxDQUFZLFdBQVosRUFBeUJBLE1BQXpCLENBQWdDQyxJQUFoQyxDQUFxQ0M7QUFGdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGLGVBRU9MLENBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQWNFO0FBQUssdUJBQVMsRUFBQyxNQUFmO0FBQUEscUNBQ0U7QUFBSSx5QkFBUyxFQUFDLHVCQUFkO0FBQUEsMEJBQ0dELElBQUksQ0FBQ0ksTUFBTCxDQUFZLE9BQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBd0JELE9BekJBO0FBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdDRDtLQXpDdUJaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2Fyb3VzZWwuanM/NTgzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2Fyb3VzZWwoeyByZXNvdXJjZXMgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC0wIG0tMFwiPlxuICAgICAgPFN3aXBlclxuICAgICAgICBzcGFjZUJldHdlZW49ezUwfVxuICAgICAgICBzbGlkZXNQZXJWaWV3PXsxfVxuICAgICAgICBuYXZpZ2F0aW9uXG4gICAgICAgIHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XG4gICAgICAgIHNjcm9sbGJhcj17eyBkcmFnZ2FibGU6IHRydWUgfX1cbiAgICAgICAgb25Td2lwZXI9eyhzd2lwZXIpID0+IGNvbnNvbGUubG9nKHN3aXBlcil9XG4gICAgICAgIG9uU2xpZGVDaGFuZ2U9eygpID0+IGNvbnNvbGUubG9nKFwic2xpZGUgY2hhbmdlXCIpfVxuICAgICAgPlxuICAgICAgICB7cmVzb3VyY2VzLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGp1c3RpZnktaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBzZWxmLWNlbnRlciBzaGFkb3ctc20gaG92ZXI6ZHJvcC1zaGFkb3cteGxcIlxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxODAsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBsYXlvdXQ9e1wiZmlsbFwifVxuICAgICAgICAgICAgICAgICAgICBzcmM9e1wiaHR0cHM6XCIgKyBpdGVtLmZpZWxkc1tcInRodW1ibmFpbFwiXS5maWVsZHMuZmlsZS51cmx9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNFwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5maWVsZHNbXCJ0aXRsZVwiXX1cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvU3dpcGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJDYXJvdXNlbCIsInJlc291cmNlcyIsImNsaWNrYWJsZSIsImRyYWdnYWJsZSIsInN3aXBlciIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpdGVtIiwiaSIsImhlaWdodCIsIndpZHRoIiwiZmllbGRzIiwiZmlsZSIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/carousel.js\n");

/***/ })

});