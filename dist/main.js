(()=>{"use strict";var r,n,e,t,o,i,a,c,s,l,d,u,p,f,h={28:(r,n,e)=>{e.d(n,{Z:()=>p});var t=e(81),o=e.n(t),i=e(645),a=e.n(i),c=e(667),s=e.n(c),l=new URL(e(107),e.b),d=a()(o()),u=s()(l);d.push([r.id,"@font-face{\r\n    font-family: custom;\r\n    src: url("+u+");\r\n}\r\n\r\n*{\r\n    margin: 0;\r\n    padding: 0;\r\n    font-family: custom, Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\n:root{\r\n    --dark-background: rgb(0, 11, 20);\r\n    --light-background: rgb(0, 18, 32);\r\n    --highlight-color: #187cc9;\r\n    --light-blue: rgb(63, 207, 207);\r\n    --shadow: 0px 0px 5px 3px var(--highlight-color);\r\n}\r\n\r\nbody{\r\n    height: 100vh;\r\n    width: 100vw;\r\n    display: flex;\r\n    justify-content: center;\r\n    background-color: var(--dark-background);\r\n}\r\n\r\ndiv#wrapper{\r\n    height: 100%;\r\n    width: min(100%, 1300px);\r\n    display: grid;\r\n    grid-template-columns: min(35%, 400px) calc(100% - min(35%, 400px));\r\n    grid-template-rows: 15% 85%;\r\n    border: solid 1px var(--highlight-color);\r\n    box-shadow: var(--shadow);\r\n}\r\n\r\ndiv#header{\r\n    grid-area: 1 / 1 / 2 / 3;\r\n    background-color: var(--light-blue);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-size: 40px;\r\n}\r\n\r\ndiv#side-bar{\r\n    grid-area: 2 / 1 / 3 / 2;\r\n    background-color: var(--light-background);\r\n    color: whitesmoke;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nform#project-form{\r\n    width: 100%;\r\n    padding: 10px;\r\n}\r\n\r\nform#project-form > fieldset{\r\n    border: none;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    width: 100%;\r\n}\r\n\r\nform#project-form > fieldset > legend{\r\n    font-size: 32px;\r\n}\r\n\r\ndiv.form-input{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\n\r\ntextarea#description{\r\n    /* -5px makes the right side of box line up correctly \r\n    not sure why this is*/\r\n\r\n    width: calc(100% - 5px);\r\n}\r\n\r\ndiv#form-button-container{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\nbutton#submit{\r\n    height: 30px;\r\n    width: 80px;\r\n    background-color: var(--light-blue);\r\n    border: var(--highlight-color) solid 1px;\r\n    border-radius: 30px;\r\n    box-shadow: var(--shadow);\r\n}\r\n\r\ndiv#content{\r\n    grid-area: 2 / 2 / 3 / 3;\r\n    background-color: var(--dark-background);\r\n}",""]);const p=d},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,i){"string"==typeof r&&(r=[[null,r,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<r.length;l++){var d=[].concat(r[l]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:r=>{r.exports=function(r,n){return n||(n={}),r?(r=String(r.__esModule?r.default:r),/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),n.hash&&(r+=n.hash),/["'() \t\n]|(%20)/.test(r)||n.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r):r}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var i={},a=[],c=0;c<r.length;c++){var s=r[c],l=t.base?s[0]+t.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=e(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var i=t(r=r||[],o=o||{});return function(r){r=r||[];for(var a=0;a<i.length;a++){var c=e(i[a]);n[c].references--}for(var s=t(r,o),l=0;l<i.length;l++){var d=e(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=s}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},107:(r,n,e)=>{r.exports=e.p+"e90fcfc620f3d9f3ccd4.ttf"}},g={};function m(r){var n=g[r];if(void 0!==n)return n.exports;var e=g[r]={id:r,exports:{}};return h[r](e,e.exports,m),e.exports}m.m=h,m.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return m.d(n,{a:n}),n},m.d=(r,n)=>{for(var e in n)m.o(n,e)&&!m.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),m.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),(()=>{var r;m.g.importScripts&&(r=m.g.location+"");var n=m.g.document;if(!r&&n&&(n.currentScript&&(r=n.currentScript.src),!r)){var e=n.getElementsByTagName("script");if(e.length)for(var t=e.length-1;t>-1&&!r;)r=e[t--].src}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=r})(),m.b=document.baseURI||self.location.href,m.nc=void 0,r=m(379),n=m.n(r),e=m(795),t=m.n(e),o=m(569),i=m.n(o),a=m(565),c=m.n(a),s=m(216),l=m.n(s),d=m(589),u=m.n(d),p=m(28),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=t(),f.insertStyleElement=l(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals})();