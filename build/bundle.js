!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build",n(n.s=3)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("react-helmet")},function(e,t,n){"use strict";n(4);var r=f(n(5)),u=f(n(0)),l=f(n(6)),o=n(1),i=f(n(7)),a=f(n(2)),c=f(n(8));function f(e){return e&&e.__esModule?e:{default:e}}var d=(0,r.default)(),s=process.env.PORT||3e3;d.use(i.default.json()),d.use(r.default.static("build/public")),d.get("*",function(e,t){var n=l.default.renderToString(u.default.createElement(o.StaticRouter,{location:e.url,context:{}},u.default.createElement(c.default,null))),r=a.default.renderStatic(),i="\n        <html>\n            <head>\n                "+r.meta.toString()+"\n                "+r.title.toString()+'\n            </head>\n            <body>\n                <div id="root">\n                    '+n+'\n                </div>\n                <script src="client_bundle.js"><\/script>\n            </body>\n        </html>\n\n    ';t.send(i)}),d.listen(s,function(){console.log("App is running "+s)})},function(e,t){e.exports=require("babel-polyfill")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("body-parser")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(0)),u=n(1),l=o(n(9));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(u.Switch,null,r.default.createElement(u.Route,{path:"/",render:function(e){return r.default.createElement(l.default,e)}}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(0)),u=l(n(2));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement("div",null,r.default.createElement(u.default,null,r.default.createElement("title",null,"My Page title"),r.default.createElement("meta",{name:"description",content:"This is the home page with place for SEO data"})),r.default.createElement("h1",null,"My Home Page"),r.default.createElement("p",null,"Content"),r.default.createElement("button",{onClick:function(){console.log("Button pressed")}},"Console dummy"))}}]);