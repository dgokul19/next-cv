(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1397:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Nunito_9c5fe4', '__Nunito_Fallback_9c5fe4'","fontStyle":"normal"},
	"className": "__className_9c5fe4"
};


/***/ }),

/***/ 8101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"arguments":[{"subsets":["latin"]}],"import":"Nunito","path":"src\\pages\\_app.tsx","variableName":"fontNunito"}
var target_arguments_subsets_latin_import_Nunito_path_src_pages_app_tsx_variableName_fontNunito_ = __webpack_require__(1397);
var target_arguments_subsets_latin_import_Nunito_path_src_pages_app_tsx_variableName_fontNunito_default = /*#__PURE__*/__webpack_require__.n(target_arguments_subsets_latin_import_Nunito_path_src_pages_app_tsx_variableName_fontNunito_);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/styles/common.module.css
var common_module = __webpack_require__(3830);
var common_module_default = /*#__PURE__*/__webpack_require__.n(common_module);
;// CONCATENATED MODULE: ./src/assets/my_logo.jpeg
/* harmony default export */ const my_logo = ({"src":"/_next/static/media/my_logo.ebd12b42.jpeg","height":600,"width":600,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAApgH/xAAcEAACAQUBAAAAAAAAAAAAAAABAwIABAUjQYH/2gAIAQEAAT8AQ29GadBr9JSTBXPK/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/AAy//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAEDAQE/AF2//9k=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/component/Navbar.tsx






function Navbar() {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (common_module_default()).navbarContainer,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `about`,
                            children: "About"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `resume`,
                            children: "Resume"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: (common_module_default()).logo_li,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: my_logo,
                                alt: `Gokul Logo`
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `Portfolio`,
                            children: "Portfolio"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `blog`,
                            children: "Blog"
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/component/Layout.tsx



// Components

function LayoutComponent({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Gokulan Portfolio / CV"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "contentWrapper",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                    children
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/styles/globals.css
var globals = __webpack_require__(108);
;// CONCATENATED MODULE: ./src/pages/_app.tsx





function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            jsx_runtime_.jsx((style_default()), {
                id: "ec56e8b97d870f5",
                dynamic: [
                    (target_arguments_subsets_latin_import_Nunito_path_src_pages_app_tsx_variableName_fontNunito_default()).style.fontFamily
                ],
                children: `html{font-family:${(target_arguments_subsets_latin_import_Nunito_path_src_pages_app_tsx_variableName_fontNunito_default()).style.fontFamily}}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(LayoutComponent, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps,
                    className: style_default().dynamic([
                        [
                            "ec56e8b97d870f5",
                            [
                                (target_arguments_subsets_latin_import_Nunito_path_src_pages_app_tsx_variableName_fontNunito_default()).style.fontFamily
                            ]
                        ]
                    ]) + " " + (pageProps && pageProps.className != null && pageProps.className || "")
                })
            })
        ]
    });
}


/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,61,830], () => (__webpack_exec__(8101)));
module.exports = __webpack_exports__;

})();