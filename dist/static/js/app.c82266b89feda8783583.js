webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=a("VU/8")({name:"App"},i,!1,function(t){a("ixBq")},null,null).exports,s=a("/ocq"),o=a("Cx91"),l={name:"Axis",data:function(){return{width:2e3,height:4e3,margin:{top:80,right:0,bottom:0,left:80},menuItems:[{value:"层位解释"},{value:"层位解释"}]}},methods:{init:function(){this.initSvg()},initSvg:function(){var t=this,e=o.d(".axis").append("svg").attr("width",this.width).attr("height",this.height),a=o.c().range([0,this.width-this.margin.left-20]).domain([0,(this.width-this.margin.left-20)/20]),n=o.c().range([0,this.height-this.margin.top-20]).domain([0,(this.height-this.margin.top-20)/2]);e.append("g").attr("transform","translate("+this.margin.top+", "+this.margin.left+")").attr("class","grid").call(function(e){return e.attr("stroke","currentColor").attr("stroke-opacity",.1).call(function(e){return e.append("g").selectAll("line").data(n.ticks((t.height-t.margin.top-20)/40)).join("line").attr("y1",function(t){return.5+n(t)}).attr("y2",function(t){return.5+n(t)}).attr("x1",0).attr("x2",t.width-t.margin.left-20)})}),e.append("rect").attr("class","coverTop").attr("width",this.width).attr("height",80).style("fill","#fff"),e.append("rect").attr("class","coverLeft").attr("width",80).attr("height",this.height).style("fill","#fff"),e.append("g").attr("class","xAxis").attr("transform","translate("+this.margin.top+", "+this.margin.left+")").call(function(e){return e.call(o.b().scale(a).ticks((t.width-t.margin.left-20)/20).tickFormat(function(t){return t%3==0&&0!=t?t:""})).call(function(t){return t.append("text").attr("x",60).attr("y",-20).attr("fill","currentColor").attr("text-anchor","end").text("XLine →")})}),e.append("g").attr("class","yAxis").attr("transform","translate("+this.margin.top+", "+this.margin.left+")").call(function(e){return e.call(o.a().scale(n).ticks((t.height-t.margin.top-20)/4).tickFormat(function(t){return t%20==0&&0!=t?t:""})).call(function(t){return t.append("text").attr("x",-20).attr("y",20).attr("fill","currentColor").attr("text-anchor","end").text("Time[ms] ↓")})}),e.append("rect").attr("class","inner").attr("transform","translate("+this.margin.top+", "+this.margin.left+")").attr("width",this.width).attr("height",this.height).style("fill","rgba(255, 255, 255, 0)"),o.d(".axis").on("scroll",function(t){var e=document.querySelector("svg");o.d(".coverTop").attr("transform","translate(0, "+-e.getBoundingClientRect().top+")"),o.d(".coverLeft").attr("transform","translate("+-e.getBoundingClientRect().left+", 0)"),o.d(".xAxis").attr("transform","translate(80, "+(80-e.getBoundingClientRect().top)+")"),o.d(".yAxis").attr("transform","translate("+(80-e.getBoundingClientRect().left)+", 80)")}),o.d(".inner").on("mousemove",function(e){var a=document.querySelector(".cross-x"),n=document.querySelector(".cross-y"),i=t.getMouseXY(e);a.style.top=i.y+"px",n.style.left=i.x+"px"}),o.d(".inner").on("contextmenu",function(e){e.preventDefault();var a=t.getMouseXY(e),n=document.querySelector(".UIMenu");n.style.display="block",n.style.left=a.x+"px",n.style.top=a.y+"px"}),o.d(".inner").on("mousedown",function(t){t.preventDefault(),1==t.button&&console.log("鼠标滚轮!")}),o.d(".inner").on("mouseup",function(t){t.preventDefault(),1==t.button&&console.log("鼠标滚轮!")}),window.addEventListener("click",function(t){document.querySelector(".UIMenu").style.display="none"})},getMouseXY:function(t){var e=0,a=0;return t.pageX||t.pageY?(e=t.pageX,a=t.pageY):(t.clientX||t.clientY)&&(e=event.clientX+document.documentElement.scrollLeft+document.body.scrollLeft,a=event.clientY+document.documentElement.scrollTop+document.body.scrollTop),{x:e,y:a}}},mounted:function(){this.init()}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"cover"}),this._v(" "),e("div",{staticClass:"cross-x"}),this._v(" "),e("div",{staticClass:"cross-y"}),this._v(" "),e("div",{staticClass:"axis"}),this._v(" "),e("UIMenu",{attrs:{menu_items:this.menuItems}})],1)},staticRenderFns:[]};var c=a("VU/8")(l,d,!1,function(t){a("OePC")},"data-v-cd450a68",null).exports,u={name:"Index",data:function(){return{clienWidth:document.body.clientWidth,clienHeight:document.body.clientHeight,x:0,y:0,l:0,t:0,isDraging:!1,isDragLeftGhost:!1,isDragRightGhost:!1,isDragFloat:!0,dragList:[{id:0,title:"色表",isDraging:!1,isVisible:!0}],$float_drag_el:null}},methods:{init:function(){var t=this;this.$float_drag_el=document.querySelector(".float_drag"),window.addEventListener("mousemove",function(e){if(1==t.isDraging){var a=document.getElementsByClassName("docIndicator");a[0].style.transform="translate(0, 60px)",a[1].style.transform="translate(-60px, 0)",a[2].style.transform="translate(0, -60px)",a[3].style.transform="translate(60px, 0)";var n=e.clientX,i=e.clientY,r=n-(t.x-t.l),s=i-(t.y-t.t);t.$float_drag_el.style.left=r+"px",t.$float_drag_el.style.top=s+"px"}},!1)},onIndicatorMouseenter:function(t){"li"==t.target.nodeName.toLowerCase()&&(2==t.target.dataset.index?(this.isDragRightGhost=!0,document.querySelector("#right_aside").style.width="200px"):4==t.target.dataset.index&&(this.isDragLeftGhost=!0,document.querySelector("#left_aside").style.width="200px"))},onIndicatorMouseleave:function(t){"li"==t.target.nodeName.toLowerCase()&&(2==t.target.dataset.index?(this.isDragRightGhost=!1,document.querySelector("#right_aside").style.width="0"):4==t.target.dataset.index&&(this.isDragLeftGhost=!1,document.querySelector("#left_aside").style.width="0"))},onIndicatorMouseup:function(t){this.isDraging=!1;var e=this.$float_drag_el.parentNode,a=document.querySelector("#left_aside"),n=document.querySelector("#right_aside");e.removeChild(this.$float_drag_el),2==t.target.dataset.index?n.appendChild(this.$float_drag_el):4==t.target.dataset.index&&a.appendChild(this.$float_drag_el),this.$float_drag_el.className="fixed_drag",this.$float_drag_el.style.cursor="default",this.isDragFloat=!1},onDragMousedown:function(t){if("header"==t.target.nodeName.toLowerCase()||"header"==t.target.parentNode.nodeName.toLowerCase()){var e=document.querySelector(".Index");document.querySelector("#left_aside"),document.querySelector("#right_aside");this.isDraging=!0,this.isDragFloat?(this.x=t.clientX,this.y=t.clientY,this.l=this.$float_drag_el.offsetLeft,this.t=this.$float_drag_el.offsetTop,this.$float_drag_el.style.cursor="move"):(this.isDragLeftGhost=!1,this.isDragRightGhost=!1,this.$float_drag_el.parentNode.removeChild(this.$float_drag_el),e.appendChild(this.$float_drag_el),this.$float_drag_el.className="float_drag",this.$float_drag_el.style.top=t.clientY-(this.y-this.t)+"px",this.$float_drag_el.style.cursor="move",document.querySelector("#right_aside").style.width="0",document.querySelector("#left_aside").style.width="0",this.isDragFloat=!0)}},onDragMouseup:function(t){this.isDraging&&(this.isDraging=!1,this.$float_drag_el.style.cursor="default")}},mounted:function(){this.init()}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Index"},[a("el-container",[a("el-header",[t._v("Header")]),t._v(" "),a("el-container",[a("el-aside",{attrs:{id:"left_aside",width:"0"}}),t._v(" "),a("el-main",[t._v("Main")]),t._v(" "),a("el-aside",{attrs:{id:"right_aside",width:"0"}})],1),t._v(" "),a("el-footer",[t._v("Footer")])],1),t._v(" "),a("Drag",{staticClass:"float_drag",nativeOn:{mousedown:function(e){return e.preventDefault(),t.onDragMousedown(e)},mouseup:function(e){return t.onDragMouseup(e)}},scopedSlots:t._u([{key:"header",fn:function(){return[a("span",[t._v("色表")])]},proxy:!0},{key:"main",fn:function(){return[a("div",[t._v("内容")])]},proxy:!0}])}),t._v(" "),t.isDraging?a("ul",{staticClass:"indicator",on:{mouseover:t.onIndicatorMouseenter,mouseout:t.onIndicatorMouseleave,mouseup:t.onIndicatorMouseup}},[a("li",{staticClass:"docIndicator",attrs:{"data-index":"1"}}),t._v(" "),a("li",{staticClass:"docIndicator",attrs:{"data-index":"2"}}),t._v(" "),a("li",{staticClass:"docIndicator",attrs:{"data-index":"3"}}),t._v(" "),a("li",{staticClass:"docIndicator",attrs:{"data-index":"4"}})]):t._e()],1)},staticRenderFns:[]};var f=a("VU/8")(u,h,!1,function(t){a("XtIl")},"data-v-1e81f650",null).exports;n.a.use(s.a);var g=new s.a({routes:[{path:"/",name:"Index",component:f},{path:"/axis",name:"Axis",component:c}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:g,components:{App:r},template:"<App/>"})},OePC:function(t,e){},XtIl:function(t,e){},ixBq:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c82266b89feda8783583.js.map