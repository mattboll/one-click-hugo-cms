// JS Goes here - ES6 supported

import "./css/main.scss";

// $('pre code:not([data-lang])').each(function (i, block) {
//     hljs.highlightBlock(block);
// });

// import hljs from "../node_modules/highlight.js/es";

const hljs = require("../node_modules/highlight.js/lib/common");
hljs.highlightAll();
