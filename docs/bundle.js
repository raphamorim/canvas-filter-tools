!function(t){var e={};function n(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:a})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="pnOm")}({hmTW:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t,e){const n=function(t){const e=document.createElement("canvas");return e.width=t.naturalWidth||t.width,e.height=t.naturalHeight||t.height,e.getContext("2d").drawImage(t,0,0),e}(t);if(!e)return n.toDataURL();const{generate:a}=e;return"function"==typeof a?(a(n,n.getContext("2d")),n.toDataURL("image/jpeg")):void 0};var r={name:"sepia",generate:function(t,e){const n=e.getImageData(0,0,t.width,t.height),a=n.data;for(let t=0;t<a.length;t+=4){var r=a[t],o=a[t+1],c=a[t+2];a[t]=.393*r+.769*o+.189*c,a[t+1]=.349*r+.686*o+.168*c,a[t+2]=.272*r+.534*o+.131*c}e.putImageData(n,0,0)}};var o={name:"raphael",generate:function(t,e){const n=e.getImageData(0,0,t.width,t.height),a=n.data;for(let t=0;t<a.length;t+=4){const e=a[t],n=a[t+1],r=a[t+2],o=a[t+3];a[t]=.2*e,a[t+1]=1*n,a[t+2]=1*r,a[t+3]=1*o}e.putImageData(n,0,0)}};const c={name:"blackAndWhite",generate:function(t,e){const n=e.getImageData(0,0,t.width,t.height),a=n.data;for(var r=0,o=a.length;r<o;r+=4){const t=.3*a[r]+.59*a[r+1]+.11*a[r+2];a[r]=t,a[r+1]=t,a[r+2]=t}e.putImageData(n,0,0)}};e.blackAndWhite=c;const i=r;e.sepia=i;const u=o;e.raphael=u;e.default=a},pnOm:function(t,e,n){"use strict";var a,r=n("hmTW"),o=(a=r)&&a.__esModule?a:{default:a};var c=document.querySelector("#image"),i=document.querySelector("#black-and-white"),u=document.querySelector("#sepia"),d=document.querySelector("#raphael");i.addEventListener("click",function(t){c.src=(0,o.default)(c,r.blackAndWhite)}),u.addEventListener("click",function(t){c.src=(0,o.default)(c,r.sepia)}),d.addEventListener("click",function(t){c.src=(0,o.default)(c,r.raphael)})}});