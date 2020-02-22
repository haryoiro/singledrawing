!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e){var n=function(){function t(t,e,n,o){this.width=n,this.height=o,this.canvas=t,this.context=e,this.rect=this.canvas.getBoundingClientRect()}return t.prototype.init=function(t,e,n,o){void 0===o&&(o=!1),this.canvasSize(),this.backgroundColor(e),this.hideMenuHandler(n),this._isImageSmoothing(t,o)},t.prototype.getRect=function(){return this.rect=this.canvas.getBoundingRect()},t.prototype.canvasSize=function(){(this.width||this.height)&&(this.canvas.width=this.width,this.canvas.height=this.height,this.context.width=this.width,this.context.height=this.height)},t.prototype.clearAll=function(){this.context.clearRect(0,0,this.width,this.height),this.context.beginPath()},t.prototype.backgroundColor=function(t){this.context.fillStyle=t,this.context.fillRect(0,0,this.width,this.height)},t.prototype.hideMenuHandler=function(t){document.addEventListener("contextmenu",(function(){return t})),document.addEventListener("MSHoldVisal",(function(){return t}))},t.prototype._isImageSmoothing=function(t,e){t.imageSmoothingEnabled=e},t}(),o=[],i=function(){function t(t,e){this.canvasColor="#000",this.defRad=10,this.dx=void 0,this.dy=void 0,this.distX=void 0,this.distY=void 0,this.lx=void 0,this.ly=void 0,this.capStyle="round",this.element=t,this.context=e,this.eventActivation()}return t.prototype.eventActivation=function(){var t=this;this._supportPointerEvent?(document.addEventListener("pointerdown",(function(e){return t.downPointerHandler(e)}),{passive:!1}),document.addEventListener("pointerup",(function(e){return t.upPointerHandler(e)}),{passive:!1}),document.addEventListener("pointermove",(function(e){return t.movePointerHandler(e)}),{passive:!1}),document.addEventListener("pointerleave",(function(e){return t.leavePointerHandler(e)}),{passive:!1})):(document.addEventListener("pointerdown",(function(e){return t.downMouseHandler(e)})),document.addEventListener("pointerup",(function(e){return t.upMouseHandler(e)})),document.addEventListener("pointermove",(function(e){return t.moveMouseHandler(e)})),document.addEventListener("pointerleave",(function(e){return t.leaveMouseHandler(e)})))},t.prototype.downPointerHandler=function(t){t.preventDefault(),this.drawToggle=!0,o.push(t),o.length<=1?(this.baseX=o[0].pageX,this.baseY=o[0].pageY):o.length>=2&&(this.p1=o[0],this.p2=o[1],this.calclationDistance(this.p1.pageX,this.p1.pageY,this.p2.pageX,this.p2.pageY))},t.prototype.movePointerHandler=function(t){this.judgmentPointerType(t,{pen:this.handlePenMove(t),touch:this.handleTouchMove(t),mouse:this.handleMouseMove(t)})},t.prototype.judgmentPointerType=function(t,e){switch(t.pointerType){case"pen":e.pen;break;case"touch":e.touch;break;case"mouse":e.mouse}},t.prototype.upPointerHandler=function(t){this.drawToggle=!1,this.context.beginPath(),this._removeEventStack(t)},t.prototype.leavePointerHandler=function(t){this.drawToggle=!1},t.prototype.downMouseHandler=function(t){this.drawToggle=!0},t.prototype.moveMouseHandler=function(t){this.handleMouseMove(t)},t.prototype.upMouseHandler=function(t){this.drawToggle=!1,this.context.beginPath()},t.prototype.leaveMouseHandler=function(t){this.drawToggle=!1},t.prototype.handlePenMove=function(t){t.preventDefault(),this.drawToggle&&this.penPencilTool(t)},t.prototype.handleMouseMove=function(t){this.drawToggle&&this.mousePencilTool(t)},t.prototype.handleTouchMove=function(t){t.preventDefault();for(var e=0;e<o.length;e++)o[e].pointerId==t.pointerId&&(o[e]=t);if(o.length>3&&o.splice(0,3),this.p1=o[0],this.p2=o[1],this.drawToggle&&this.touchPencilTool(o[0]),o.length>=2){this.drawToggle=!1,this.lx=this.lx,this.ly=this.ly,this.dx=(this.p1.pageX+this.p2.pageX)/2,this.dy=(this.p1.pageY+this.p2.pageY)/2,this.distX=Math.abs(this.lx-this.dx),this.distY=Math.abs(this.ly-this.dy);var n=this.calclationDistance(this.p1.pageX,this.p1.pageY,this.p2.pageX,this.p2.pageY);this.nowR=n/this.pinchDist}this._pinchHandle()},t.prototype.mousePencilTool=function(t){var e=this.context;this.eraseTool(e),this.settingPenConf(e),this.drawLine(e,t)},t.prototype.penPencilTool=function(t){var e=this.context;this.eraseTool(e),e.lineWidth=this._activatePressure(t),this.settingPenConf(e),this.drawLine(e,t)},t.prototype.settingPenConf=function(t){t.strokeStyle=this.canvasColor,t.fillStyle=this.canvasColor,t.lineCap=this.capStyle},t.prototype.touchPencilTool=function(t){var e=this.context;this.eraseTool(e),e.lineWidth=this.penRadius,this.settingPenConf(e),this.drawLine(e,t)},t.prototype.drawLine=function(t,e){t.lineTo(e.offsetX,e.offsetY),t.stroke(),t.beginPath(),t.moveTo(e.offsetX,e.offsetY)},t.prototype.eraseTool=function(t){this.eraserToggle?t.globalCompositeOperation="destination-out":t.globalCompositeOperation="source-over"},t.prototype.setPencilColor=function(t){this.canvasColor=t},t.prototype.getNowR=function(){return this.nowR},t.prototype.calclationDistance=function(t,e,n,o){var i=Math.abs(t-n)+Math.abs(e-o);return console.log(i),i},t.prototype._activatePressure=function(t){var e=this.defRad;return t.pressure<.995||t.pressure>.05?(t.pressure?e*=t.pressure:e/=t.pressure,e):t.pressure<=.05||t.pressure>.01?.05:void 0},t.prototype._removeEventStack=function(t){for(var e=0;e<o.length;e++)o[e].pointerId==t.pointerId&&o.splice(e,1)},t.prototype._pinchHandle=function(){var t=document.getElementById("canvas").style,e="scale("+this.nowR+","+this.nowR+")";t.left=this.distX+"px",t.top=this.distY+"px",t.transform=e,t.webkitTransform=e},t.prototype._supportPointerEvent=function(){return!!window.PointerEvent},t.prototype._puressurePoints=function(t){return{x:t.offsetX,y:t.offsetY,pressurevent:Math.sin(t.pressure)}},t.prototype._debugLogger=function(t){if(document.getElementById("debug"))document.getElementById("debug").insertAdjacentHTML("afterbegin",t+"<br>");else{var e=document.createElement("div");e.id="debug",e.insertAdjacentHTML("afterbegin",t+"<br>")}},t}(),r=document.querySelector("#canvas"),s=r.getContext("2d"),a=new n(r,s,1920,1080);new i(r,s);a.init(s,"#ffff",!0,!1)}]);
