(window.webpackJsonp=window.webpackJsonp||[]).push([[39,7,37,38],{703:function(e,t,n){var content=n(720);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(132).default)("3ea5f096",content,!0,{sourceMap:!1})},711:function(e,t,n){"use strict";n.r(t);n(79),n(59),n(105),n(106);var r=n(50),o=(n(267),n(42),n(78),n(545),n(66),n(214)),l=n.n(o),c=n(313),d=n.n(c),f=n(321),h=n(95),m=n(18),v=n(718),y=n.n(v);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}m.default.use(y.a);var w={props:{headerTitle:{type:String,default:""},classProp:{type:String,default:""},dataTab:{type:Array,default:[]},list:{type:Array,default:[]}},components:{DxTabPanel:l.a,DxButton:d.a,DxScrollView:f.DxScrollView},data:function(){return{selectedItem:{},fullscreen:!1,tabData:this.dataTab}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(h.c)(["isSelected"])),methods:{toggle:function(){this.fullscreen=!this.fullscreen},onItemClick:function(e){this.tabData.find((function(i){return i.listType===e.listType}))||this.tabData.find((function(i){return i.id===e.id}))||this.tabData.push(e),this.selectedItem=e},closeButtonHandler:function(e){confirm("Do you want to close tab?")&&(this.tabData=this.tabData.filter((function(t){return t.id!==e.id})))},showCloseButton:function(){return this.tabData.length>0},clearTab:function(){confirm("Do you want to close all tabs?")&&this.tabData.splice(0,this.tabData.length)},titleClick:function(e){var t=e.itemData.listType;"mhda"==t?this.$store.dispatch("muahang/getData"):"pd"==t?this.$store.dispatch("pheduyet/getApprove"):"mhnda"==t?this.$store.dispatch("muahang/getDataNp"):"pdnda"==t&&this.$store.dispatch("pheduyet/getApproveNp")},addOption:function(){var e=this;this.list.forEach((function(t){e.tabData.find((function(i){return i.id===t.id}))||t.listType===e.isSelected&&e.tabData.push(t)}))}},created:function(){""!==this.isSelected&&this.addOption()},beforeDestroy:function(){this.$store.commit("IS_SELECTED","")}},D=w,O=(n(719),n(77)),component=Object(O.a)(D,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"purchase"},[n("h3",{staticClass:"text-xs-center mb-2"},[e._v("\n        "+e._s(e.$t(e.headerTitle))+"\n    ")]),e._v(" "),n("div",{staticClass:"toolbar"},[n("div",{staticClass:"row align-center justify-start"},e._l(e.list,(function(t){return n("div",{key:t.id,class:e.classProp},[n("div",{staticClass:"btn-list row mr-3",on:{click:function(n){return e.onItemClick(t)}}},[n("i",{staticClass:"mdi mdi-format-list-numbered mr-1"}),e._v(" "),n("p",{staticClass:"font-14"},[e._v("\n                        "+e._s(e.$t(t.title))+"\n                    ")])])])})),0)]),e._v(" "),n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:e.tabData.length>0,expression:"tabData.length > 0"}],staticClass:"row justify-end"},[n("DxButton",{attrs:{type:"normal","styling-mode":"text",icon:"mdi mdi-overscan"},on:{click:e.toggle}}),e._v(" "),n("DxButton",{attrs:{type:"normal","styling-mode":"text",icon:"mdi mdi-close"},on:{click:e.clearTab}})],1),e._v(" "),n("div",{staticClass:"tabPanel"},[n("fullscreen",{attrs:{"page-only":!0,teleport:!0},model:{value:e.fullscreen,callback:function(t){e.fullscreen=t},expression:"fullscreen"}},[n("div",{class:e.fullscreen?"fullscreen":""},[e.fullscreen?n("div",{staticClass:"row justify-end"},[n("DxButton",{attrs:{text:e.$t("Đóng"),type:"normal","styling-mode":"text",icon:"mdi mdi-close"},on:{click:e.toggle}})],1):e._e(),e._v(" "),n("DxTabPanel",{attrs:{"data-source":e.tabData,height:e.fullscreen?"auto":"calc(78vh - 100px)","defer-rendering":!1,"show-nav-buttons":!0,"repaint-changes-only":!0,selectedItem:e.selectedItem,noDataText:e.$t("Không có dữ liệu"),"item-title-template":"title","item-template":"itemTemplate"},on:{titleClick:e.titleClick},scopedSlots:e._u([{key:"title",fn:function(t){var r=t.data;return[n("div",[n("span",[e._v(e._s(e.$t(r.title))+" ")]),n("i",{directives:[{name:"show",rawName:"v-show",value:e.showCloseButton(),expression:"showCloseButton()"}],staticClass:"mdi mdi-close-circle",on:{click:function(t){return e.closeButtonHandler(r)}}})])]}},{key:"itemTemplate",fn:function(t){var r=t.data;return[n("DxScrollView",[n("div",{class:e.fullscreen?"item-temp":""},[e._t("default",null,{itemProp:r})],2)])]}}],null,!0)})],1)])],1)])])}),[],!1,null,"0c78e886",null);t.default=component.exports},718:function(e,t,n){e.exports=function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,n){"use strict";function i(){var e={},t=!1,n=0,r=arguments.length;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);n<r;n++)!function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=i(!0,e[r],n[r]):e[r]=n[r])}(arguments[n]);return e}t.a=i},function(e,t){!function(){"use strict";var t="undefined"!=typeof window&&void 0!==window.document?window.document:{},n=void 0!==e&&e.exports,i=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i=0,r=n.length,o={};i<r;i++)if((e=n[i])&&e[1]in t){for(i=0;i<e.length;i++)o[n[0][i]]=e[i];return o}return!1}(),r={change:i.fullscreenchange,error:i.fullscreenerror},o={request:function(e,n){return new Promise(function(r,o){var s=function(){this.off("change",s),r()}.bind(this);this.on("change",s);var l=(e=e||t.documentElement)[i.requestFullscreen](n);l instanceof Promise&&l.then(s).catch(o)}.bind(this))},exit:function(){return new Promise(function(e,n){if(this.isFullscreen){var r=function(){this.off("change",r),e()}.bind(this);this.on("change",r);var o=t[i.exitFullscreen]();o instanceof Promise&&o.then(r).catch(n)}else e()}.bind(this))},toggle:function(e,t){return this.isFullscreen?this.exit():this.request(e,t)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var i=r[e];i&&t.addEventListener(i,n,!1)},off:function(e,n){var i=r[e];i&&t.removeEventListener(i,n,!1)},raw:i};i?(Object.defineProperties(o,{isFullscreen:{get:function(){return Boolean(t[i.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[i.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(t[i.fullscreenEnabled])}}}),n?e.exports=o:window.screenfull=o):n?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}}()},function(e,t,n){"use strict";function i(e,t){e.style.position=t.position,e.style.left=t.left,e.style.top=t.top,e.style.width=t.width,e.style.height=t.height}function r(e){var t=e.element;t&&(t.classList.remove(e.options.fullscreenClass),(e.options.teleport||e.options.pageOnly)&&(e.options.teleport&&a&&(a.insertBefore(t,u),a.removeChild(u)),t.__styleCache&&i(t,t.__styleCache)))}var o=n(1),s=n.n(o),l=n(0),c={callback:function(){},fullscreenClass:"fullscreen",pageOnly:!1,teleport:!1},u=void 0,a=void 0,d={options:null,element:null,isFullscreen:!1,isEnabled:s.a.isEnabled,toggle:function(e,t,n){return void 0===n?this.isFullscreen?this.exit():this.request(e,t):n?this.request(e,t):this.exit()},request:function(e,t){var o=this;if(this.isFullscreen)return Promise.resolve();if(e||(e=document.body),this.options=n.i(l.a)({},c,t),e===document.body&&(this.options.teleport=!1),s.a.isEnabled||(this.options.pageOnly=!0),e.classList.add(this.options.fullscreenClass),this.options.teleport||this.options.pageOnly){var d=e.style,f=d.position,p=d.left,h=d.top,m=d.width,v=d.height;e.__styleCache={position:f,left:p,top:h,width:m,height:v},i(e,{position:"fixed",left:"0",top:"0",width:"100%",height:"100%"})}if(this.options.teleport&&(a=e.parentNode)&&(u=document.createComment("fullscreen-token"),a.insertBefore(u,e),document.body.appendChild(e)),this.options.pageOnly){var b=function e(t){"Escape"===t.key&&(document.removeEventListener("keyup",e),o.exit())};return this.isFullscreen=!0,this.element=e,document.removeEventListener("keyup",b),document.addEventListener("keyup",b),this.options.callback&&this.options.callback(this.isFullscreen),Promise.resolve()}var y=function t(){s.a.isFullscreen||(s.a.off("change",t),r(o)),o.isFullscreen=s.a.isFullscreen,o.options.teleport?o.element=e||null:o.element=s.a.element,o.options.callback&&o.options.callback(s.a.isFullscreen)};return s.a.on("change",y),s.a.request(this.options.teleport?document.body:e)},exit:function(){return this.isFullscreen?this.options.pageOnly?(r(this),this.isFullscreen=!1,this.element=null,this.options.callback&&this.options.callback(this.isFullscreen),Promise.resolve()):s.a.exit():Promise.resolve()}};d.support=d.isEnabled,d.getState=function(){return d.isFullscreen},d.enter=d.request,t.a=d},function(e,t,n){"use strict";function i(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}var r=n(2),o=n(0),s=function(e,t){var s=function(){var e=void 0,s={teleport:t.modifiers.teleport,pageOnly:t.modifiers.pageOnly};if(t.value)if("string"==typeof t.value)e=t.value;else{var l=t.value,c=l.target,u=i(l,["target"]);e=c,s=n.i(o.a)(s,u)}"string"==typeof e&&(e=document.querySelector(e)),r.a.toggle(e,s)};e._onClickFullScreen&&e.removeEventListener("click",e._onClickFullScreen),e.addEventListener("click",s),e._onClickFullScreen=s};t.a=s},function(e,t,n){var i=n(7)(n(6),n(8),null,null);e.exports=i.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),r=n.n(i),o=n(2),s=n(3),l=n(1),c=n.n(l),u=n(0);n.d(t,"screenfull",(function(){return c.a})),n.d(t,"api",(function(){return o.a})),n.d(t,"directive",(function(){return s.a})),n.d(t,"component",(function(){return r.a})),t.default={install:function(e){var i=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).name||"fullscreen";e.component(i,n.i(u.a)(r.a,{name:i})),e.prototype["$"+i]=o.a,e.directive(i,s.a)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=n.n(i);t.default={props:{value:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},exitOnClickWrapper:{type:Boolean,default:!0},fullscreenClass:{type:String,default:"fullscreen"},pageOnly:{type:Boolean,default:!1},teleport:{type:Boolean,default:!1}},data:function(){return{isFullscreen:!1,isEnabled:!1}},computed:{support:function(){return this.isEnabled},isPageOnly:function(){return this.pageOnly||!r.a.isEnabled},wrapperStyle:function(){return(this.isPageOnly||this.teleport)&&this.isFullscreen?{position:"fixed",left:"0",top:"0",width:"100%",height:"100%"}:void 0}},methods:{toggle:function(e){void 0===e?this.isFullscreen?this.exit():this.request():e?this.request():this.exit()},request:function(){if(this.isPageOnly?(this.isFullscreen=!0,this.onChangeFullScreen(),document.removeEventListener("keyup",this.keypressCallback),document.addEventListener("keyup",this.keypressCallback)):(r.a.off("change",this.fullScreenCallback),r.a.on("change",this.fullScreenCallback),r.a.request(this.teleport?document.body:this.$el)),this.teleport){if(this.$el.parentNode===document.body)return;this.__parentNode=this.$el.parentNode,this.__token=document.createComment("fullscreen-token"),this.__parentNode.insertBefore(this.__token,this.$el),document.body.appendChild(this.$el)}},exit:function(){this.isFullscreen&&(this.isPageOnly?(this.isFullscreen=!1,this.onChangeFullScreen(),document.removeEventListener("keyup",this.keypressCallback)):r.a.exit())},shadeClick:function(e){e.target===this.$el&&this.exitOnClickWrapper&&this.exit()},fullScreenCallback:function(){r.a.isFullscreen||r.a.off("change",this.fullScreenCallback),this.isFullscreen=r.a.isFullscreen,this.onChangeFullScreen()},keypressCallback:function(e){"Escape"===e.key&&this.exit()},onChangeFullScreen:function(){this.isFullscreen||this.teleport&&this.__parentNode&&(this.__parentNode.insertBefore(this.$el,this.__token),this.__parentNode.removeChild(this.__token)),this.$emit("change",this.isFullscreen),this.$emit("update:fullscreen",this.isFullscreen),this.$emit("input",this.isFullscreen)},enter:function(){this.request()},getState:function(){return this.isFullscreen}},watch:{value:function(e){e!==this.isFullscreen&&(e?this.request():this.exit())},fullscreen:function(e){e!==this.isFullscreen&&(e?this.request():this.exit())}},created:function(){this.isEnabled=r.a.isEnabled}}},function(e,t){e.exports=function(e,t,n,i){var r,o=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(r=e,o=e.default);var l="function"==typeof o?o.options:o;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),n&&(l._scopeId=n),i){var c=Object.create(l.computed||null);Object.keys(i).forEach((function(e){var t=i[e];c[e]=function(){return t}})),l.computed=c}return{esModule:r,exports:o,options:l}}},function(e,t){e.exports={render:function(){var e,t=this,n=t.$createElement;return(t._self._c||n)("div",t._b({ref:"wrapper",class:(e={},e[t.fullscreenClass]=t.isFullscreen,e),style:t.wrapperStyle,on:{click:function(e){return t.shadeClick(e)}}},"div",t.$attrs,!1),[t._t("default")],2)},staticRenderFns:[]}}])},719:function(e,t,n){"use strict";n(703)},720:function(e,t,n){var r=n(131)(!1);r.push([e.i,".fullscreen[data-v-0c78e886]{background-color:#fff;position:relative;z-index:4}.item-temp[data-v-0c78e886]{overflow-y:auto;height:90vh}.purchase[data-v-0c78e886]{height:100%;overflow:hidden;margin-top:100px;padding:0 24px}.toolbar[data-v-0c78e886]{border:1px solid #e7e7e7}.header[data-v-0c78e886]{font-weight:700;font-size:14px}.btn-list[data-v-0c78e886]{background-color:#fff;color:#000;cursor:pointer;padding:4px 0}#btn-new[data-v-0c78e886]:hover,.btn-list[data-v-0c78e886]:hover{background-color:#e7e7e7}@media only screen and (max-width:739px){.purchase[data-v-0c78e886]{margin-top:10px}}",""]),e.exports=r},780:function(e,t,n){"use strict";n.r(t);var r=n(697),o=n(313),l=n.n(o),c={components:{DxDataGrid:r.DxDataGrid,DxColumn:r.DxColumn,DxPaging:r.DxPaging,DxEditing:r.DxEditing,DxSelection:r.DxSelection,DxHeaderFilter:r.DxHeaderFilter,DxFilterRow:r.DxFilterRow,DxLookup:r.DxLookup,DxGroupPanel:r.DxGroupPanel,DxButton:l.a},data:function(){return{}},methods:{calculateAmount:function(e){return e.soLuong*e.donGia},calculateAmountVat:function(e){var t=e.soLuong*e.donGia;return t+t/100*e.vat},customFormat:function(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)}},created:function(){this.$store.dispatch("phanphoi/getSupplier"),this.$store.dispatch("phanphoi/getApprovalPr")}},d=n(77),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("DxDataGrid",{attrs:{id:"gridContainer","show-borders":!0,height:"100%","remote-operations":"true","allow-column-resizing":!0,"column-auto-width":!0,"hover-state-enabled":!0}},[n("DxFilterRow",{attrs:{visible:!0}}),e._v(" "),n("DxPaging",{attrs:{enabled:!1}}),e._v(" "),n("DxEditing",{attrs:{"allow-updating":!0,"allow-adding":!0,useIcons:!0,mode:"cell"}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"id",caption:e.$t("No")}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"tenNcc",caption:e.$t("Distributor name"),"group-index":0}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"tenMatHang",caption:e.$t("Items name")}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"soLuong",caption:e.$t("Quantity")}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"donGia",caption:e.$t("Estimated unit"),format:e.customFormat}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"vat",caption:"Vat(%)"}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"tongTien",caption:e.$t("Estimated amount"),format:e.customFormat,"calculate-cell-value":e.calculateAmount}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"tongTienGomVat",caption:e.$t("Estimated amount(VAT)"),format:e.customFormat,"calculate-cell-value":e.calculateAmountVat}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"thoiGianGiaoHang",caption:e.$t("Delivery time")}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"thoiGianBaoHanh",caption:e.$t("Warranty period")}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"dieuKhoan",caption:e.$t("Rules")}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"ghiChu",caption:e.$t("Note")}})],1)],1)}),[],!1,null,"dce8108c",null);t.default=component.exports},781:function(e,t,n){"use strict";n.r(t);var r={},o=n(77),component=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,"d4f42092",null);t.default=component.exports},821:function(e,t,n){"use strict";n.r(t);n(79),n(59),n(78),n(42),n(105),n(66),n(106);var r=n(50),o=n(95),l=n(711),c=n(780),d=n(781);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var h={props:{itemProp:{type:Object,default:function(){return{}}}},layout:"commonLayout",components:{common:l.default,listOfUnit:c.default,listOfItems:d.default},data:function(){return{duLieuTab:[]}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)("phanphoi",["danhSach","duLieuMoi"])),methods:{}},m=h,v=n(77),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"m-80"},[n("common",{attrs:{headerTitle:e.$t("Distribution list"),classProp:"xs6",dataTab:e.duLieuTab,dataNew:e.duLieuMoi,list:e.danhSach},scopedSlots:e._u([{key:"default",fn:function(e){return[1==e.itemProp.listType?n("div",[n("listOfUnit")],1):n("div",[n("listOfItems")],1)]}}])})],1)}),[],!1,null,"7805bfee",null);t.default=component.exports;installComponents(component,{Common:n(711).default})}}]);