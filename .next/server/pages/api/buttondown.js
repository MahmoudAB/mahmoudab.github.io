"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/buttondown";
exports.ids = ["pages/api/buttondown"];
exports.modules = {

/***/ "(api)/./pages/api/buttondown.js":
/*!*********************************!*\
  !*** ./pages/api/buttondown.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// eslint-disable-next-line import/no-anonymous-default-export\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const { email  } = req.body;\n    if (!email) {\n        return res.status(400).json({\n            error: \"Email is required\"\n        });\n    }\n    try {\n        const API_KEY = process.env.BUTTONDOWN_API_KEY;\n        const buttondownRoute = `${process.env.BUTTONDOWN_API_URL}subscribers`;\n        const response = await fetch(buttondownRoute, {\n            body: JSON.stringify({\n                email\n            }),\n            headers: {\n                Authorization: `Token ${API_KEY}`,\n                \"Content-Type\": \"application/json\"\n            },\n            method: \"POST\"\n        });\n        if (response.status >= 400) {\n            return res.status(500).json({\n                error: `There was an error subscribing to the list.`\n            });\n        }\n        return res.status(201).json({\n            error: \"\"\n        });\n    } catch (error) {\n        return res.status(500).json({\n            error: error.message || error.toString()\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYnV0dG9uZG93bi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsOERBQThEO0FBQzlELGlFQUFlLE9BQU9BLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0lBQ2pDLE1BQU0sRUFBRUMsS0FBSyxHQUFFLEdBQUdGLEdBQUcsQ0FBQ0csSUFBSTtJQUMxQixJQUFJLENBQUNELEtBQUssRUFBRTtRQUNWLE9BQU9ELEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFLG1CQUFtQjtTQUFFLENBQUM7S0FDNUQ7SUFFRCxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0Msa0JBQWtCO1FBQzlDLE1BQU1DLGVBQWUsR0FBRyxDQUFDLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7UUFDdEUsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQ0gsZUFBZSxFQUFFO1lBQzVDUixJQUFJLEVBQUVZLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2dCQUNuQmQsS0FBSzthQUNOLENBQUM7WUFDRmUsT0FBTyxFQUFFO2dCQUNQQyxhQUFhLEVBQUUsQ0FBQyxNQUFNLEVBQUVYLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQyxjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0RZLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQztRQUVGLElBQUlOLFFBQVEsQ0FBQ1QsTUFBTSxJQUFJLEdBQUcsRUFBRTtZQUMxQixPQUFPSCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxLQUFLLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQzthQUFFLENBQUM7U0FDdEY7UUFFRCxPQUFPTCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLEtBQUssRUFBRSxFQUFFO1NBQUUsQ0FBQztLQUMzQyxDQUFDLE9BQU9BLEtBQUssRUFBRTtRQUNkLE9BQU9MLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUMsS0FBSyxFQUFFQSxLQUFLLENBQUNjLE9BQU8sSUFBSWQsS0FBSyxDQUFDZSxRQUFRLEVBQUU7U0FBRSxDQUFDO0tBQzFFO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlsd2luZC1uZXh0anMtc3RhcnRlci1ibG9nLy4vcGFnZXMvYXBpL2J1dHRvbmRvd24uanM/ZjQyZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWFub255bW91cy1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgZW1haWwgfSA9IHJlcS5ib2R5XG4gIGlmICghZW1haWwpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogJ0VtYWlsIGlzIHJlcXVpcmVkJyB9KVxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuQlVUVE9ORE9XTl9BUElfS0VZXG4gICAgY29uc3QgYnV0dG9uZG93blJvdXRlID0gYCR7cHJvY2Vzcy5lbnYuQlVUVE9ORE9XTl9BUElfVVJMfXN1YnNjcmliZXJzYFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYnV0dG9uZG93blJvdXRlLCB7XG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBUb2tlbiAke0FQSV9LRVl9YCxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICB9KVxuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBgVGhlcmUgd2FzIGFuIGVycm9yIHN1YnNjcmliaW5nIHRvIHRoZSBsaXN0LmAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oeyBlcnJvcjogJycgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCBlcnJvci50b1N0cmluZygpIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJyZXEiLCJyZXMiLCJlbWFpbCIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJBUElfS0VZIiwicHJvY2VzcyIsImVudiIsIkJVVFRPTkRPV05fQVBJX0tFWSIsImJ1dHRvbmRvd25Sb3V0ZSIsIkJVVFRPTkRPV05fQVBJX1VSTCIsInJlc3BvbnNlIiwiZmV0Y2giLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJtZXRob2QiLCJtZXNzYWdlIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/buttondown.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/buttondown.js"));
module.exports = __webpack_exports__;

})();