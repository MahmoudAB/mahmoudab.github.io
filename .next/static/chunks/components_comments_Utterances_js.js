"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["components_comments_Utterances_js"],{

/***/ "./components/comments/Utterances.js":
/*!*******************************************!*\
  !*** ./components/comments/Utterances.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/data/siteMetadata */ \"./data/siteMetadata.js\");\n/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Utterances = function(param) {\n    var issueTerm = param.issueTerm;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), enableLoadComments = ref[0], setEnabledLoadComments = ref[1];\n    var ref1 = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)(), theme = ref1.theme, resolvedTheme = ref1.resolvedTheme;\n    var commentsTheme = theme === \"dark\" || resolvedTheme === \"dark\" ? (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.utterancesConfig.darkTheme) : (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.utterancesConfig.theme);\n    var COMMENTS_ID = \"comments-container\";\n    var LoadComments = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        setEnabledLoadComments(false);\n        var script = document.createElement(\"script\");\n        script.src = \"https://utteranc.es/client.js\";\n        script.setAttribute(\"repo\", (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.utterancesConfig.repo));\n        script.setAttribute(\"issue-term\", issueTerm);\n        script.setAttribute(\"label\", (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_3___default().comment.utterancesConfig.label));\n        script.setAttribute(\"theme\", commentsTheme);\n        script.setAttribute(\"crossorigin\", \"anonymous\");\n        script.async = true;\n        var comments1 = document.getElementById(COMMENTS_ID);\n        if (comments1) comments1.appendChild(script);\n        return function() {\n            var comments = document.getElementById(COMMENTS_ID);\n            if (comments) comments.innerHTML = \"\";\n        };\n    }, [\n        commentsTheme,\n        issueTerm\n    ]);\n    // Reload on theme change\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var iframe = document.querySelector(\"iframe.utterances-frame\");\n        if (!iframe) return;\n        LoadComments();\n    }, [\n        LoadComments\n    ]);\n    // Added `relative` to fix a weird bug with `utterances-frame` position\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pt-6 pb-6 text-center text-gray-700 dark:text-gray-300\",\n        children: [\n            enableLoadComments && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: LoadComments,\n                children: \"Load Comments\"\n            }, void 0, false, {\n                fileName: \"/Users/mahmoudabdelbasset/dev/notes/mahmoudab.github.io/components/comments/Utterances.js\",\n                lineNumber: 46,\n                columnNumber: 30\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"utterances-frame relative\",\n                id: COMMENTS_ID\n            }, void 0, false, {\n                fileName: \"/Users/mahmoudabdelbasset/dev/notes/mahmoudab.github.io/components/comments/Utterances.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mahmoudabdelbasset/dev/notes/mahmoudab.github.io/components/comments/Utterances.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(Utterances, \"QoSFMeNXcKbsbttQCOWXG1zryKM=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = Utterances;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Utterances);\nvar _c;\n$RefreshReg$(_c, \"Utterances\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1lbnRzL1V0dGVyYW5jZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBK0Q7QUFDekI7QUFFUTs7QUFFOUMsSUFBTU0sVUFBVSxHQUFHLGdCQUFtQjtRQUFoQkMsU0FBUyxTQUFUQSxTQUFTOztJQUM3QixJQUFxRE4sR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQU5yRSxrQkFNMkIsR0FBNEJBLEdBQWMsR0FBMUMsRUFOM0Isc0JBTW1ELEdBQUlBLEdBQWMsR0FBbEI7SUFDakQsSUFBaUNHLElBQVUsR0FBVkEscURBQVEsRUFBRSxFQUFuQ00sS0FBSyxHQUFvQk4sSUFBVSxDQUFuQ00sS0FBSyxFQUFFQyxhQUFhLEdBQUtQLElBQVUsQ0FBNUJPLGFBQWE7SUFDNUIsSUFBTUMsYUFBYSxHQUNqQkYsS0FBSyxLQUFLLE1BQU0sSUFBSUMsYUFBYSxLQUFLLE1BQU0sR0FDeENOLDhGQUErQyxHQUMvQ0EsMEZBQTJDO0lBRWpELElBQU1XLFdBQVcsR0FBRyxvQkFBb0I7SUFFeEMsSUFBTUMsWUFBWSxHQUFHZCxrREFBVyxDQUFDLFdBQU07UUFDckNNLHNCQUFzQixDQUFDLEtBQUssQ0FBQztRQUM3QixJQUFNUyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUMvQ0YsTUFBTSxDQUFDRyxHQUFHLEdBQUcsK0JBQStCO1FBQzVDSCxNQUFNLENBQUNJLFlBQVksQ0FBQyxNQUFNLEVBQUVqQix5RkFBMEMsQ0FBQztRQUN2RWEsTUFBTSxDQUFDSSxZQUFZLENBQUMsWUFBWSxFQUFFZixTQUFTLENBQUM7UUFDNUNXLE1BQU0sQ0FBQ0ksWUFBWSxDQUFDLE9BQU8sRUFBRWpCLDBGQUEyQyxDQUFDO1FBQ3pFYSxNQUFNLENBQUNJLFlBQVksQ0FBQyxPQUFPLEVBQUVWLGFBQWEsQ0FBQztRQUMzQ00sTUFBTSxDQUFDSSxZQUFZLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQztRQUMvQ0osTUFBTSxDQUFDTyxLQUFLLEdBQUcsSUFBSTtRQUVuQixJQUFNQyxTQUFRLEdBQUdQLFFBQVEsQ0FBQ1EsY0FBYyxDQUFDWCxXQUFXLENBQUM7UUFDckQsSUFBSVUsU0FBUSxFQUFFQSxTQUFRLENBQUNFLFdBQVcsQ0FBQ1YsTUFBTSxDQUFDO1FBRTFDLE9BQU8sV0FBTTtZQUNYLElBQU1RLFFBQVEsR0FBR1AsUUFBUSxDQUFDUSxjQUFjLENBQUNYLFdBQVcsQ0FBQztZQUNyRCxJQUFJVSxRQUFRLEVBQUVBLFFBQVEsQ0FBQ0csU0FBUyxHQUFHLEVBQUU7U0FDdEM7S0FDRixFQUFFO1FBQUNqQixhQUFhO1FBQUVMLFNBQVM7S0FBQyxDQUFDO0lBRTlCLHlCQUF5QjtJQUN6QkwsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTTRCLE1BQU0sR0FBR1gsUUFBUSxDQUFDWSxhQUFhLENBQUMseUJBQXlCLENBQUM7UUFDaEUsSUFBSSxDQUFDRCxNQUFNLEVBQUUsT0FBTTtRQUNuQmIsWUFBWSxFQUFFO0tBQ2YsRUFBRTtRQUFDQSxZQUFZO0tBQUMsQ0FBQztJQUVsQix1RUFBdUU7SUFDdkUscUJBQ0UsOERBQUNlLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHdEQUF3RDs7WUFDcEV6QixrQkFBa0Isa0JBQUksOERBQUMwQixRQUFNO2dCQUFDQyxPQUFPLEVBQUVsQixZQUFZOzBCQUFFLGVBQWE7Ozs7O3FCQUFTOzBCQUM1RSw4REFBQ2UsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDJCQUEyQjtnQkFBQ0csRUFBRSxFQUFFcEIsV0FBVzs7Ozs7cUJBQUk7Ozs7OzthQUMxRCxDQUNQO0NBQ0Y7R0E1Q0tWLFVBQVU7O1FBRW1CRixpREFBUTs7O0FBRnJDRSxLQUFBQSxVQUFVO0FBOENoQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1lbnRzL1V0dGVyYW5jZXMuanM/YTA4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnbmV4dC10aGVtZXMnXG5cbmltcG9ydCBzaXRlTWV0YWRhdGEgZnJvbSAnQC9kYXRhL3NpdGVNZXRhZGF0YSdcblxuY29uc3QgVXR0ZXJhbmNlcyA9ICh7IGlzc3VlVGVybSB9KSA9PiB7XG4gIGNvbnN0IFtlbmFibGVMb2FkQ29tbWVudHMsIHNldEVuYWJsZWRMb2FkQ29tbWVudHNdID0gdXNlU3RhdGUodHJ1ZSlcbiAgY29uc3QgeyB0aGVtZSwgcmVzb2x2ZWRUaGVtZSB9ID0gdXNlVGhlbWUoKVxuICBjb25zdCBjb21tZW50c1RoZW1lID1cbiAgICB0aGVtZSA9PT0gJ2RhcmsnIHx8IHJlc29sdmVkVGhlbWUgPT09ICdkYXJrJ1xuICAgICAgPyBzaXRlTWV0YWRhdGEuY29tbWVudC51dHRlcmFuY2VzQ29uZmlnLmRhcmtUaGVtZVxuICAgICAgOiBzaXRlTWV0YWRhdGEuY29tbWVudC51dHRlcmFuY2VzQ29uZmlnLnRoZW1lXG5cbiAgY29uc3QgQ09NTUVOVFNfSUQgPSAnY29tbWVudHMtY29udGFpbmVyJ1xuXG4gIGNvbnN0IExvYWRDb21tZW50cyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRFbmFibGVkTG9hZENvbW1lbnRzKGZhbHNlKVxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgc2NyaXB0LnNyYyA9ICdodHRwczovL3V0dGVyYW5jLmVzL2NsaWVudC5qcydcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdyZXBvJywgc2l0ZU1ldGFkYXRhLmNvbW1lbnQudXR0ZXJhbmNlc0NvbmZpZy5yZXBvKVxuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ2lzc3VlLXRlcm0nLCBpc3N1ZVRlcm0pXG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnbGFiZWwnLCBzaXRlTWV0YWRhdGEuY29tbWVudC51dHRlcmFuY2VzQ29uZmlnLmxhYmVsKVxuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3RoZW1lJywgY29tbWVudHNUaGVtZSlcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdjcm9zc29yaWdpbicsICdhbm9ueW1vdXMnKVxuICAgIHNjcmlwdC5hc3luYyA9IHRydWVcblxuICAgIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoQ09NTUVOVFNfSUQpXG4gICAgaWYgKGNvbW1lbnRzKSBjb21tZW50cy5hcHBlbmRDaGlsZChzY3JpcHQpXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChDT01NRU5UU19JRClcbiAgICAgIGlmIChjb21tZW50cykgY29tbWVudHMuaW5uZXJIVE1MID0gJydcbiAgICB9XG4gIH0sIFtjb21tZW50c1RoZW1lLCBpc3N1ZVRlcm1dKVxuXG4gIC8vIFJlbG9hZCBvbiB0aGVtZSBjaGFuZ2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUudXR0ZXJhbmNlcy1mcmFtZScpXG4gICAgaWYgKCFpZnJhbWUpIHJldHVyblxuICAgIExvYWRDb21tZW50cygpXG4gIH0sIFtMb2FkQ29tbWVudHNdKVxuXG4gIC8vIEFkZGVkIGByZWxhdGl2ZWAgdG8gZml4IGEgd2VpcmQgYnVnIHdpdGggYHV0dGVyYW5jZXMtZnJhbWVgIHBvc2l0aW9uXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwdC02IHBiLTYgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS0zMDBcIj5cbiAgICAgIHtlbmFibGVMb2FkQ29tbWVudHMgJiYgPGJ1dHRvbiBvbkNsaWNrPXtMb2FkQ29tbWVudHN9PkxvYWQgQ29tbWVudHM8L2J1dHRvbj59XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInV0dGVyYW5jZXMtZnJhbWUgcmVsYXRpdmVcIiBpZD17Q09NTUVOVFNfSUR9IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXR0ZXJhbmNlc1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZVRoZW1lIiwic2l0ZU1ldGFkYXRhIiwiVXR0ZXJhbmNlcyIsImlzc3VlVGVybSIsImVuYWJsZUxvYWRDb21tZW50cyIsInNldEVuYWJsZWRMb2FkQ29tbWVudHMiLCJ0aGVtZSIsInJlc29sdmVkVGhlbWUiLCJjb21tZW50c1RoZW1lIiwiY29tbWVudCIsInV0dGVyYW5jZXNDb25maWciLCJkYXJrVGhlbWUiLCJDT01NRU5UU19JRCIsIkxvYWRDb21tZW50cyIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInNldEF0dHJpYnV0ZSIsInJlcG8iLCJsYWJlbCIsImFzeW5jIiwiY29tbWVudHMiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwiaWZyYW1lIiwicXVlcnlTZWxlY3RvciIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/comments/Utterances.js\n");

/***/ })

}]);