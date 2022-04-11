/*! For license information please see bundle.js.LICENSE.txt */
(()=>{var t={17:()=>{!function(){"use strict";var t,e=!1,n=[],o=!1;function r(){window.WebComponents.ready=!0,document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}function i(){window.customElements&&customElements.polyfillWrapFlushCallback&&customElements.polyfillWrapFlushCallback((function(e){t=e,o&&t()}))}function c(){window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(window.document),e=!0,a().then(r)}function a(){o=!1;var e=n.map((function(t){return t instanceof Function?t():t}));return n=[],Promise.all(e).then((function(){o=!0,t&&t()})).catch((function(t){console.error(t)}))}window.WebComponents=window.WebComponents||{},window.WebComponents.ready=window.WebComponents.ready||!1,window.WebComponents.waitFor=window.WebComponents.waitFor||function(t){t&&(n.push(t),e&&a())},window.WebComponents._batchCustomElements=i;var s="webcomponents-loader.js",l=[];(!("attachShadow"in Element.prototype)||!("getRootNode"in Element.prototype)||window.ShadyDOM&&window.ShadyDOM.force)&&l.push("sd"),window.customElements&&!window.customElements.forcePolyfill||l.push("ce");var d=function(){var t=document.createElement("template");if(!("content"in t))return!0;if(!(t.content.cloneNode()instanceof DocumentFragment))return!0;var e=document.createElement("template");e.content.appendChild(document.createElement("div")),t.content.appendChild(e);var n=t.cloneNode(!0);return 0===n.content.childNodes.length||0===n.content.firstChild.content.childNodes.length}();if(window.Promise&&Array.from&&window.URL&&window.Symbol&&!d||(l=["sd-ce-pf"]),l.length){var u,p="bundles/webcomponents-"+l.join("-")+".js";if(window.WebComponents.root)u=window.WebComponents.root+p;else{var m=document.querySelector('script[src*="'+s+'"]');u=m.src.replace(s,p)}var w=document.createElement("script");w.src=u,"loading"===document.readyState?(w.setAttribute("onload","window.WebComponents._batchCustomElements()"),document.write(w.outerHTML),document.addEventListener("DOMContentLoaded",c)):(w.addEventListener("load",(function(){i(),c()})),w.addEventListener("error",(function(){throw new Error("Could not load polyfill bundle"+u)})),document.head.appendChild(w))}else"complete"===document.readyState?(e=!0,r()):(window.addEventListener("load",c),window.addEventListener("DOMContentLoaded",(function(){window.removeEventListener("load",c),c()})))}()}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}(()=>{"use strict";n(17);var t,e=(t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)});const o=function(t){function n(){var e=t.call(this)||this;return e.create(),e}return e(n,t),n.prototype.create=function(){this.createShadowDOM(),this.createStyleElement()},n.prototype.createShadowDOM=function(){this.shadowDOM=this.attachShadow({mode:"open"})},n.prototype.createStyleElement=function(){this.styleElement=document.createElement("style"),this.shadowDOM.appendChild(this.styleElement)},n}(HTMLElement);var r=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();window.WebComponents=window.WebComponents||{},window.WebComponents.root="node_modules/@webcomponents/webcomponentsjs/";var i,c,a,s,l,d,u=("hello-world",c=(i={props:["name"],render:function(){return"\n      <div>Hello ".concat(this.name||"World","!</div>\n    ")}}).props,a=i.created,s=i.beforeDestroy,l=i.render,d=function(t){function e(){return t.call(this)||this}return r(e,t),Object.defineProperty(e,"observedAttributes",{get:function(){return c},enumerable:!1,configurable:!0}),e.prototype.connectedCallback=function(){this.render(),a&&a.call(this)},e.prototype.disconnectedCallback=function(){s&&s.call(this)},e.prototype.attributeChangedCallback=function(t,e,n){this.render(),console.log("attributeChangedCallback",t,e,n)},e.prototype.render=function(){this.shadowDOM.innerHTML=l.call(this)},e}(o),c.forEach((function(t){return Object.defineProperty(d.prototype,t,{get:function(){return this.getAttribute(t)},set:function(e){this.setAttribute(t,e)}})})),customElements.define("hello-world",d),d);document.body.appendChild(new u)})()})();
//# sourceMappingURL=bundle.js.map