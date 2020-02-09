!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t){const n=document.getElementById("canvas"),o=n.getContext("2d"),a={radius:10,pType:null,rect:null,mx:0,my:0,pointToggle:!1,w:1024,h:768,undoStack:[],redoStack:[],eraserToggle:!1,eC:[]};function r(e){a.rect=e.target.getBoundingClientRect(),a.mx=e.clientX-Math.floor(a.rect.left),a.my=e.clientY-Math.floor(a.rect.top)}function d(e){a.eraserToggle?o.globalCompositeOperation="destination-out":(o.globalCompositeOperation="source-over",o.strokeStyle="#FF6566"),a.pointToggle&&(r(e),o.lineCap="round",o.lineTo(a.mx,a.my),o.stroke(),o.beginPath(),o.moveTo(a.mx,a.my))}function i(e){a.pointToggle=!0,d(e)}function c(){a.pointToggle=!1}function l(){o.clearRect(0,0,1080,1920),o.beginPath()}function u(e){a.eC.push(e),o.beginPath(),a.pointToggle=!0,a.pType=e.pointerType}function s(e){a.pointToggle=!1,function(e){for(let t=0;t<eC.length;t++)if(a.eC[t].pointerId==e.pointerId){a.eC.splice(t,1);break}}(e),e.target.style.background="white",e.target.style.border="1px solid black",a.eC.length<2&&(prevDiff=-1)}function g(e){switch(a.pType){case"mouse":a.pType="mouse",d(e);break;case"touch":a.pType="touch",e.preventDefault(),d(e);break;case"pen":a.pType="pen",d(e),e.preventDefault()}}window.addEventListener("load",(()=>{const e=document.getElementById("canvas"),t=e.getContext("2d");w(1240,720),!0&&(document.body.style.overflow="hidden",document.addEventListener("contextmenu",e=>{e.preventDefault()}),document.addEventListener("MSHoldVisal",e=>{e.preventDefault()})),function(e,t){t||(t=!0);e.mozImageSmoothingEnabled=t,e.webkitImageSmoothingEnabled=t,e.msImageSmoothingEnabled=t,e.imageSmoothingEnabled=t}(t,!1),document.getElementById("clear").addEventListener("click",l);document.getElementById("era").addEventListener("click",()=>{a.eraserToggle=!0}),document.getElementById("pen").addEventListener("click",()=>{a.eraserToggle=!1});window.PointerEvent?(e.addEventListener("pointerdown",u,{passive:!1}),e.addEventListener("pointerup",s,{passive:!1}),e.addEventListener("pointermove",g,{passive:!1}),e.addEventListener("pointerleave",s,{passive:!1})):(e.addEventListener("mousedown",i,{passive:!1}),e.addEventListener("mousemove",d,{passive:!1}),e.addEventListener("mouseup",c,{passive:!1}),e.addEventListener("mouseover",c,{passive:!1}))})());let m=["#FF6566","#FFD965","#92D050","#06C0C5","#7C7AA1","Black","Gray","rgb(241, 240, 240)"];for(let e=0,t=m.length;e<t;e++){let t=document.createElement("div");t.className="swatch",t.style.backgroundColor=m[e],t.addEventListener("click",p),document.getElementById("colors").appendChild(t)}function p(e){var t=e.target;!function(e){o.fillStyle=e,o.strokeStyle=e;var t=document.getElementsByClassName("active")[0];t&&(t.className="swatch")}(t.style.backgroundColor),t.className+=" active"}p({target:document.getElementsByClassName("swatch")[0]});let f=1,v=20,y=1,E=1;function h(e){e<f?e=f:e>v&&(e=v),a.radius=e,o.lineWidth=2*a.radius,radSpan.innerHTML=a.radius}function k(){a.redoStack=[],a.undoStack.length>=100&&a.undoStack.pop(),a.undoStack.unshift(o.getImageData(0,0,a.w,a.h)),console.log("r"+a.redoStack+":"+a.undoStack)}function b(){if(a.undoStack.length<=0)return;a.redoStack.unshift(o.getImageData(0,0,a.w,a.h));let e=a.undoStack.shift();o.putImageData(e,0,0),console.log("undo")}function S(){if(a.redoStack.length<=0)return;a.undoStack.unshift(o.getImageData(0,0,a.w,a.h));let e=a.redoStack.shift();o.putImageData(e,0,0),console.log("redo")}function w(e,t){a.w=e,a.h=t,n.width=a.w,n.height=a.h}radSpan=document.getElementById("radval"),decRad=document.getElementById("decrad").addEventListener("click",(function(){h(a.radius-E)})),incRad=document.getElementById("incrad").addEventListener("click",(function(){h(a.radius+E)})),h(y),(()=>{const e=document.getElementById("canvas");e.getContext("2d");document.getElementById("undo").addEventListener("click",b),document.getElementById("redo").addEventListener("click",S),window.PointerEvent?e.addEventListener("pointerdown",k):e.addEventListener("mouseudown",k)})()}]);