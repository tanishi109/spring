
          window.__NEXT_REGISTER_PAGE('/page4', function() {
            var comp = module.exports=webpackJsonp([5],{110:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(2),u=i(n),r=a(193),l=i(r);e.default=function(){return u.default.createElement("div",null,u.default.createElement("p",null,"線じゃなくて図形にしてみる"),u.default.createElement(l.default,null))}},191:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(14),u=i(n),r=a(12),l=i(r),s=a(10),d=i(s),c=a(0),f=i(c),o=a(1),h=i(o),v=a(74),y=i(v),g=a(25),p=((0,g.throttle)(function(t){console.log(t)},500),function(){var t=0;return function(){return t++}}()),x=function(){function t(e,a,i){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];(0,f.default)(this,t),this.id=p(),this.x=e,this.y=a,this.r=i,this.spring=.1,this.friction=.8,this.vx=0,this.vy=0,this.gravity=1,this.chainTo=n,this.distance=60}return(0,h.default)(t,[{key:"render",value:function(t){var e=this;t.beginPath(),this.chainTo.forEach(function(a){var i=e.getAccel(a),n=(0,d.default)(i,2),u=n[0],r=n[1];e.vx+=u,e.vx*=e.friction,e.x+=e.vx,e.vy+=e.gravity,e.vy+=r,e.vy*=e.friction,e.y+=e.vy;var s=new l.default([e.id,a.id]);e.isCalculated(s)||(t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(a.x,a.y),t.lineWidth=2,t.strokeStyle="rgba(155, 187, 89, 0.8)",t.stroke(),t.closePath()),y.default.calcHistory.push(s)}),this.checkFloor(this),t.arc(this.x,this.y,this.r,0,2*Math.PI,!0),t.fillStyle="rgba(155, 187, 89, 0.8)",t.fill()}},{key:"getTarget",value:function(t){var e=t.x-this.x,a=t.y-this.y,i=Math.atan2(a,e);return[t.x-Math.cos(i)*this.distance,t.y-Math.sin(i)*this.distance]}},{key:"getAccel",value:function(t){var e=this.getTarget(t),a=(0,d.default)(e,2),i=a[0],n=a[1];return[(i-this.x)*this.spring,(n-this.y)*this.spring]}},{key:"checkFloor",value:function(t){var e=t.y+t.r;if(e>y.default.height){var a=e-y.default.height;t.y-=a}}},{key:"toRadian",value:function(t){return t*(Math.PI/180)}},{key:"toDegree",value:function(t){return 180*t/Math.PI}},{key:"isCalculated",value:function(t){return y.default.calcHistory.some(function(e){return 0===[].concat((0,u.default)(t)).filter(function(t){return!e.has(t)}).length})}}]),t}();e.default=x},192:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),u=i(n),r=a(1),l=i(r),s=a(74),d=i(s),c=function(){function t(e){(0,u.default)(this,t),this.contents=e,this.fit()}return(0,l.default)(t,[{key:"fit",value:function(){this.width=d.default.width,this.height=d.default.height,d.default.canvas.setAttribute("width",this.width),d.default.canvas.setAttribute("height",this.height),this.render()}},{key:"render",value:function(){d.default.ctx.clearRect(0,0,this.width,this.height),d.default.calcHistory=[],this.contents.forEach(function(t){t.render(d.default.ctx)}),requestAnimationFrame(this.render.bind(this))}}]),t}();e.default=c},193:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(5),u=i(n),r=a(0),l=i(r),s=a(1),d=i(s),c=a(7),f=i(c),o=a(6),h=i(o),v=a(21),y=i(v),g=a(2),p=i(g),x=a(16),m=i(x),w=a(192),_=i(w),k=a(191),b=i(k),E=a(74),M=i(E),j=function(t){function e(){return(0,l.default)(this,e),(0,f.default)(this,(e.__proto__||(0,u.default)(e)).apply(this,arguments))}return(0,h.default)(e,t),(0,d.default)(e,[{key:"componentDidMount",value:function(){this.initVars(),this.initHanlder(),this.initDatGUI(M.default.stage)}},{key:"initVars",value:function(){var t=document.getElementById("stage"),e=t.getContext("2d"),a=document.getElementById("wrapper").clientWidth,i=document.getElementById("wrapper").clientHeight;M.default.canvas=t,M.default.ctx=e,M.default.width=a,M.default.height=i;var n=new b.default(50,50,10),u=new b.default(50,100,10),r=new b.default(50,150,10);n.chainTo=[u,r,M.default.cursor],u.chainTo=[n,r],r.chainTo=[u,n];var l=new _.default([n,u,r]);M.default.stage=l}},{key:"initHanlder",value:function(){window.addEventListener("resize",function(){M.default.stage.fit()}),window.addEventListener("mousemove",function(t){M.default.cursor.x=t.offsetX,M.default.cursor.y=t.offsetY})}},{key:"initDatGUI",value:function(t){var e=new dat.GUI;t.contents.forEach(function(t){e.add(t,"r",1,10)})}},{key:"render",value:function(){return p.default.createElement("div",{id:"wrapper",className:"wrapper","data-jsx":2533452986},this.head(),p.default.createElement("canvas",{id:"stage",className:"stage","data-jsx":2533452986}),p.default.createElement(y.default,{styleId:3943408242,css:'div[data-jsx="2533452986"]{width:calc(100vw - 50px);height:100vh;margin:25px}canvas[data-jsx="2533452986"]{width:calc(100vw - 25px - 25px);height:calc(100vh - 25px - 25px);border:1px solid #000;border-radius:2px}'}),p.default.createElement(y.default,{styleId:2071694925,css:"html,body{margin:0;padding:0}"}))}},{key:"head",value:function(){return p.default.createElement(m.default,null,p.default.createElement("script",{type:"text/javascript",src:"https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.5/dat.gui.min.js"}))}}]),e}(p.default.Component);e.default=j},225:function(t,e,a){t.exports=a(110)},74:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(0),n=function(t){return t&&t.__esModule?t:{default:t}}(i),u=function t(){(0,n.default)(this,t),this.canvas,this.ctx,this.width,this.height,this.stage,this.cursor={x:0,y:0,id:-1},this.calcHistory=[]};e.default=new u}},[225]);
            return { page: comp.default }
          })
        