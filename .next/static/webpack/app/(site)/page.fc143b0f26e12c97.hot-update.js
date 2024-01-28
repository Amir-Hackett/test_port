"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(site)/page",{

/***/ "(app-pages-browser)/./app/(site)/page.tsx":
/*!*****************************!*\
  !*** ./app/(site)/page.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _contact_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact */ \"(app-pages-browser)/./app/(site)/contact/contact.tsx\");\n/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @portabletext/react */ \"(app-pages-browser)/./node_modules/@portabletext/react/dist/index.js\");\n/* harmony import */ var _sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/sanity/sanity-utils */ \"(app-pages-browser)/./sanity/sanity-utils.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    var _projects_currentIndex, _projects_currentIndex1, _projects_currentIndex2, _projects_currentIndex3, _projects_currentIndex4, _projects_currentIndex5;\n    _s();\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProjects = async ()=>{\n            const projectData = await (0,_sanity_sanity_utils__WEBPACK_IMPORTED_MODULE_5__.getProjects)();\n            setProjects(projectData);\n        };\n        fetchProjects();\n    }, []);\n    const goToNextProject = ()=>{\n        setCurrentIndex((prevIndex)=>(prevIndex + 1) % projects.length);\n    };\n    const goToPrevProject = ()=>{\n        setCurrentIndex((prevIndex)=>prevIndex === 0 ? projects.length - 1 : prevIndex - 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-100 min-h-screen p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-7xl font-extrabold\",\n                children: [\n                    \"Hello I'm\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent\",\n                        children: \"Amir\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    \"!\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"-mt-8 w-36 h-36 float-right rounded-full\",\n                        src: \"../images/IMG_0909.JPG\",\n                        alt: \"Medium avatar\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-3 text-xl text-gray-600\",\n                children: \"Accomplished and dynamic professional with a proven track record of innovative web development, strategic business operations, and advanced problem-solving. Expert in translating complex business requirements into technical solutions, delivering high-quality projects that enhance organizational performance. Renowned for driving operational excellence, leveraging extensive experience in API integration, and cultivating user-centric experiences that propel leading organizations to the forefront of their industries. A collaborative leader and mentor committed to fostering team growth and championing agile methodologies to accelerate project delivery and achieve exceptional results.\"\n            }, void 0, false, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                id: \"projects\",\n                className: \"mt-24 font-bold text-gray-700 text-3xl\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-5 relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative flex items-center justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cursor-pointer text-xl font-bold mr-4\",\n                            onClick: goToPrevProject,\n                            children: \"<\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-grow\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                href: \"\".concat((_projects_currentIndex = projects[currentIndex]) === null || _projects_currentIndex === void 0 ? void 0 : _projects_currentIndex.url),\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                children: [\n                                    ((_projects_currentIndex1 = projects[currentIndex]) === null || _projects_currentIndex1 === void 0 ? void 0 : _projects_currentIndex1.image) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: (_projects_currentIndex2 = projects[currentIndex]) === null || _projects_currentIndex2 === void 0 ? void 0 : _projects_currentIndex2.image,\n                                        alt: (_projects_currentIndex3 = projects[currentIndex]) === null || _projects_currentIndex3 === void 0 ? void 0 : _projects_currentIndex3.name,\n                                        width: 750,\n                                        height: 300,\n                                        className: \"object-cover rounded-lg border border-gray-500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-center mt-2 font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent\",\n                                        children: (_projects_currentIndex4 = projects[currentIndex]) === null || _projects_currentIndex4 === void 0 ? void 0 : _projects_currentIndex4.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg text-gray-700 mt-5\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_portabletext_react__WEBPACK_IMPORTED_MODULE_6__.PortableText, {\n                                            value: (_projects_currentIndex5 = projects[currentIndex]) === null || _projects_currentIndex5 === void 0 ? void 0 : _projects_currentIndex5.content\n                                        }, void 0, false, {\n                                            fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cursor-pointer text-xl font-bold ml-4 flex items-center\",\n                            onClick: goToNextProject,\n                            children: \">\"\n                        }, void 0, false, {\n                            fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contact_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Amir/untitled folder/NextJS-Portfolio/app/(site)/page.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"nJ6lXbSnJFzp4Ul+Xo1OvAgUXVk=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oc2l0ZSkvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDYjtBQUNGO0FBQ2U7QUFDTztBQUNDO0FBVXJDLFNBQVNPO1FBaUVEQyx3QkFJUkEseUJBRVFBLHlCQUNBQSx5QkFRTkEseUJBR29CQTs7SUFsRm5DLE1BQU0sQ0FBQ0EsVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3RELE1BQU0sQ0FBQ1MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBRWpERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLGdCQUFnQjtZQUNwQixNQUFNQyxjQUFjLE1BQU1QLGlFQUFXQTtZQUNyQ0csWUFBWUk7UUFDZDtRQUVBRDtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1FLGtCQUFrQjtRQUN0QkgsZ0JBQWdCLENBQUNJLFlBQWMsQ0FBQ0EsWUFBWSxLQUFLUCxTQUFTUSxNQUFNO0lBQ2xFO0lBRUEsTUFBTUMsa0JBQWtCO1FBQ3RCTixnQkFBZ0IsQ0FBQ0ksWUFDZkEsY0FBYyxJQUFJUCxTQUFTUSxNQUFNLEdBQUcsSUFBSUQsWUFBWTtJQUV4RDtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7O29CQUEwQjtvQkFDdkI7a0NBQ2YsOERBQUNFO3dCQUFLRixXQUFVO2tDQUE0Rjs7Ozs7O29CQUVyRztrQ0FFUCw4REFBQ0c7d0JBQ0NILFdBQVU7d0JBQ1ZJLEtBQUk7d0JBQ0pDLEtBQUk7Ozs7Ozs7Ozs7OzswQkFJUiw4REFBQ0M7Z0JBQUVOLFdBQVU7MEJBQTZCOzs7Ozs7MEJBYTFDLDhEQUFDTztnQkFBR0MsSUFBRztnQkFBV1IsV0FBVTswQkFBeUM7Ozs7OzswQkFJckUsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNEOzRCQUNDQyxXQUFVOzRCQUNWUyxTQUFTWDtzQ0FDVjs7Ozs7O3NDQUdELDhEQUFDQzs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ2hCLGlEQUFJQTtnQ0FDSDBCLE1BQU0sR0FBK0IsUUFBNUJyQix5QkFBQUEsUUFBUSxDQUFDRSxhQUFhLGNBQXRCRiw2Q0FBQUEsdUJBQXdCc0IsR0FBRztnQ0FDcENDLFFBQU87Z0NBQ1BDLEtBQUk7O29DQUVIeEIsRUFBQUEsMEJBQUFBLFFBQVEsQ0FBQ0UsYUFBYSxjQUF0QkYsOENBQUFBLHdCQUF3QnlCLEtBQUssbUJBQzVCLDhEQUFDL0Isa0RBQUtBO3dDQUNKcUIsR0FBRyxHQUFFZiwwQkFBQUEsUUFBUSxDQUFDRSxhQUFhLGNBQXRCRiw4Q0FBQUEsd0JBQXdCeUIsS0FBSzt3Q0FDbENULEdBQUcsR0FBRWhCLDBCQUFBQSxRQUFRLENBQUNFLGFBQWEsY0FBdEJGLDhDQUFBQSx3QkFBd0IwQixJQUFJO3dDQUNqQ0MsT0FBTzt3Q0FDUEMsUUFBUTt3Q0FDUmpCLFdBQVU7Ozs7OztrREFJZCw4REFBQ0Q7d0NBQUlDLFdBQVU7bURBQ1pYLDBCQUFBQSxRQUFRLENBQUNFLGFBQWEsY0FBdEJGLDhDQUFBQSx3QkFBd0IwQixJQUFJOzs7Ozs7a0RBRS9CLDhEQUFDaEI7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNkLDZEQUFZQTs0Q0FBQ2dDLEtBQUssR0FBRTdCLDBCQUFBQSxRQUFRLENBQUNFLGFBQWEsY0FBdEJGLDhDQUFBQSx3QkFBd0I4QixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUkxRCw4REFBQ3BCOzRCQUNDQyxXQUFVOzRCQUNWUyxTQUFTZDtzQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS0wsOERBQUNWLHdEQUFXQTs7Ozs7Ozs7Ozs7QUFHbEI7R0FsR3dCRztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHNpdGUpL3BhZ2UudHN4PzA4MWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCIuL2NvbnRhY3QvY29udGFjdFwiO1xuaW1wb3J0IHsgUG9ydGFibGVUZXh0IH0gZnJvbSBcIkBwb3J0YWJsZXRleHQvcmVhY3RcIjtcbmltcG9ydCB7IGdldFByb2plY3RzIH0gZnJvbSBcIkAvc2FuaXR5L3Nhbml0eS11dGlsc1wiO1xuXG5pbnRlcmZhY2UgUHJvamVjdCB7XG4gIF9pZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nO1xuICBjb250ZW50OiBhbnk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGU8UHJvamVjdFtdPihbXSk7XG4gIGNvbnN0IFtjdXJyZW50SW5kZXgsIHNldEN1cnJlbnRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUHJvamVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9qZWN0RGF0YSA9IGF3YWl0IGdldFByb2plY3RzKCk7XG4gICAgICBzZXRQcm9qZWN0cyhwcm9qZWN0RGF0YSk7XG4gICAgfTtcblxuICAgIGZldGNoUHJvamVjdHMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGdvVG9OZXh0UHJvamVjdCA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50SW5kZXgoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCArIDEpICUgcHJvamVjdHMubGVuZ3RoKTtcbiAgfTtcblxuICBjb25zdCBnb1RvUHJldlByb2plY3QgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudEluZGV4KChwcmV2SW5kZXgpID0+XG4gICAgICBwcmV2SW5kZXggPT09IDAgPyBwcm9qZWN0cy5sZW5ndGggLSAxIDogcHJldkluZGV4IC0gMVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIG1pbi1oLXNjcmVlbiBwLThcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTd4bCBmb250LWV4dHJhYm9sZFwiPlxuICAgICAgICBIZWxsbyBJJmFwb3M7bXtcIiBcIn1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNDAwIHZpYS1wdXJwbGUtNTAwIHRvLXB1cnBsZS02MDAgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICBBbWlyXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgIVxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwiLW10LTggdy0zNiBoLTM2IGZsb2F0LXJpZ2h0IHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgc3JjPVwiLi4vaW1hZ2VzL0lNR18wOTA5LkpQR1wiXG4gICAgICAgICAgYWx0PVwiTWVkaXVtIGF2YXRhclwiXG4gICAgICAgIC8+XG4gICAgICA8L2gxPlxuXG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC0zIHRleHQteGwgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICBBY2NvbXBsaXNoZWQgYW5kIGR5bmFtaWMgcHJvZmVzc2lvbmFsIHdpdGggYSBwcm92ZW4gdHJhY2sgcmVjb3JkIG9mXG4gICAgICAgIGlubm92YXRpdmUgd2ViIGRldmVsb3BtZW50LCBzdHJhdGVnaWMgYnVzaW5lc3Mgb3BlcmF0aW9ucywgYW5kIGFkdmFuY2VkXG4gICAgICAgIHByb2JsZW0tc29sdmluZy4gRXhwZXJ0IGluIHRyYW5zbGF0aW5nIGNvbXBsZXggYnVzaW5lc3MgcmVxdWlyZW1lbnRzXG4gICAgICAgIGludG8gdGVjaG5pY2FsIHNvbHV0aW9ucywgZGVsaXZlcmluZyBoaWdoLXF1YWxpdHkgcHJvamVjdHMgdGhhdCBlbmhhbmNlXG4gICAgICAgIG9yZ2FuaXphdGlvbmFsIHBlcmZvcm1hbmNlLiBSZW5vd25lZCBmb3IgZHJpdmluZyBvcGVyYXRpb25hbCBleGNlbGxlbmNlLFxuICAgICAgICBsZXZlcmFnaW5nIGV4dGVuc2l2ZSBleHBlcmllbmNlIGluIEFQSSBpbnRlZ3JhdGlvbiwgYW5kIGN1bHRpdmF0aW5nXG4gICAgICAgIHVzZXItY2VudHJpYyBleHBlcmllbmNlcyB0aGF0IHByb3BlbCBsZWFkaW5nIG9yZ2FuaXphdGlvbnMgdG8gdGhlXG4gICAgICAgIGZvcmVmcm9udCBvZiB0aGVpciBpbmR1c3RyaWVzLiBBIGNvbGxhYm9yYXRpdmUgbGVhZGVyIGFuZCBtZW50b3JcbiAgICAgICAgY29tbWl0dGVkIHRvIGZvc3RlcmluZyB0ZWFtIGdyb3d0aCBhbmQgY2hhbXBpb25pbmcgYWdpbGUgbWV0aG9kb2xvZ2llc1xuICAgICAgICB0byBhY2NlbGVyYXRlIHByb2plY3QgZGVsaXZlcnkgYW5kIGFjaGlldmUgZXhjZXB0aW9uYWwgcmVzdWx0cy5cbiAgICAgIDwvcD5cblxuICAgICAgPGgyIGlkPVwicHJvamVjdHNcIiBjbGFzc05hbWU9XCJtdC0yNCBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCB0ZXh0LTN4bFwiPlxuICAgICAgICBNeSBQcm9qZWN0c1xuICAgICAgPC9oMj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHJlbGF0aXZlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC14bCBmb250LWJvbGQgbXItNFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtnb1RvUHJldlByb2plY3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgJmx0O1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPXtgJHtwcm9qZWN0c1tjdXJyZW50SW5kZXhdPy51cmx9YH1cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtwcm9qZWN0c1tjdXJyZW50SW5kZXhdPy5pbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3RzW2N1cnJlbnRJbmRleF0/LmltYWdlfVxuICAgICAgICAgICAgICAgICAgYWx0PXtwcm9qZWN0c1tjdXJyZW50SW5kZXhdPy5uYW1lfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezc1MH1cbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTIgZm9udC1leHRyYWJvbGQgYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNDAwIHZpYS1wdXJwbGUtNTAwIHRvLXB1cnBsZS02MDAgYmctY2xpcC10ZXh0IHRleHQtdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgICAgICB7cHJvamVjdHNbY3VycmVudEluZGV4XT8ubmFtZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNzAwIG10LTVcIj5cbiAgICAgICAgICAgICAgICA8UG9ydGFibGVUZXh0IHZhbHVlPXtwcm9qZWN0c1tjdXJyZW50SW5kZXhdPy5jb250ZW50fSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LXhsIGZvbnQtYm9sZCBtbC00IGZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2dvVG9OZXh0UHJvamVjdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICAmZ3Q7XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8Q29udGFjdEZvcm0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiTGluayIsIkNvbnRhY3RGb3JtIiwiUG9ydGFibGVUZXh0IiwiZ2V0UHJvamVjdHMiLCJIb21lIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsImN1cnJlbnRJbmRleCIsInNldEN1cnJlbnRJbmRleCIsImZldGNoUHJvamVjdHMiLCJwcm9qZWN0RGF0YSIsImdvVG9OZXh0UHJvamVjdCIsInByZXZJbmRleCIsImxlbmd0aCIsImdvVG9QcmV2UHJvamVjdCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic3BhbiIsImltZyIsInNyYyIsImFsdCIsInAiLCJoMiIsImlkIiwib25DbGljayIsImhyZWYiLCJ1cmwiLCJ0YXJnZXQiLCJyZWwiLCJpbWFnZSIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsInZhbHVlIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(site)/page.tsx\n"));

/***/ })

});