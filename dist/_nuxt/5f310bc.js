(window.webpackJsonp=window.webpackJsonp||[]).push([[15,3,4,8,9,10,11,12,13,14],{533:function(t,e,n){var content=n(547);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(150).default)("6afdb69d",content,!0,{sourceMap:!1})},534:function(t,e,n){var content=n(551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(150).default)("06384f3a",content,!0,{sourceMap:!1})},536:function(t,e,n){var content=n(553);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(150).default)("ca7e813a",content,!0,{sourceMap:!1})},539:function(t,e,n){"use strict";n.r(e);var o=n(521),l={components:{DxDataGrid:o.DxDataGrid,DxColumn:o.DxColumn,DxPaging:o.DxPaging},props:["data"]},r=n(91),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("DxDataGrid",{attrs:{id:"gridContainer","data-source":t.data,"show-borders":!0}},[n("DxPaging",{attrs:{enabled:!1}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"no",caption:"no"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"id",caption:"id"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Partner",caption:"Partner"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Customer",caption:"Customer"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"ProjectName",caption:"Project Name"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Description",caption:"Description"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Category",caption:"Category"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Company",caption:"Company"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"status",caption:"Status"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Type",caption:"Type"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"CreatedDate",caption:"Created Date"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"CurrentIssue",caption:"Current Issue"}})],1)}),[],!1,null,"45d2ce87",null);e.default=component.exports},546:function(t,e,n){"use strict";n(533)},547:function(t,e,n){var o=n(149)(!1);o.push([t.i,".finish[data-v-e3245b72]{background-color:#acdf87}.pending[data-v-e3245b72]{background-color:#ff0}.close[data-v-e3245b72]{background-color:red}.ongoing[data-v-e3245b72]{background-color:#f2f2f2}",""]),t.exports=o},550:function(t,e,n){"use strict";n(534)},551:function(t,e,n){var o=n(149)(!1);o.push([t.i,".checkbox[data-v-df9afd1c]{border:1px solid #f2f2f2;padding:16px 24px;border-radius:6px}",""]),t.exports=o},552:function(t,e,n){"use strict";n(536)},553:function(t,e,n){var o=n(149)(!1);o.push([t.i,".footer-header[data-v-52aa6b94]{border:1px solid #f2f2f2;padding:24px 0}.info-project[data-v-52aa6b94]{margin-left:10px;text-align:center}.info-project p[data-v-52aa6b94]{letter-spacing:.5px;font-weight:700}.info-project span[data-v-52aa6b94]{font-size:44px}.detail[data-v-52aa6b94]{color:#0986c5;text-decoration:underline;cursor:pointer}",""]),t.exports=o},561:function(t,e,n){var content=n(589);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(150).default)("2cbad6b5",content,!0,{sourceMap:!1})},567:function(t,e,n){"use strict";n.r(e);var o=n(521),l={components:{DxDataGrid:o.DxDataGrid,DxColumn:o.DxColumn,DxPaging:o.DxPaging,DxEditing:o.DxEditing,DxSelection:o.DxSelection,DxHeaderFilter:o.DxHeaderFilter,DxFilterRow:o.DxFilterRow},methods:{},props:["dataProp"]},r=(n(546),n(91)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("DxDataGrid",{attrs:{id:"gridContainer","data-source":t.dataProp,"show-borders":!0,"key-expr":"id",height:"100%"},scopedSlots:t._u([{key:"cellTemplate",fn:function(e){var data=e.data;return[n("div",{class:"Finish"===data.value?"finish":"Pending"===data.value?"pending":"Closed"===data.value?"close":"ongoing"},[t._v("\n            "+t._s(data.value)+"\n        ")])]}}])},[n("DxHeaderFilter",{attrs:{visible:!0}}),t._v(" "),n("DxPaging",{attrs:{enabled:!1}}),t._v(" "),n("DxSelection",{attrs:{mode:"multiple"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"no",caption:"no",allowHeaderFiltering:!1}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"id",caption:"id"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Partner",caption:"Partner"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Customer",caption:"Customer"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"ProjectName",caption:"Project Name"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Description",caption:"Description",allowHeaderFiltering:!1}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Category",caption:"Category"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Company",caption:"Company"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"status",caption:"Status",alignment:"center","cell-template":"cellTemplate"}}),t._v(" "),t._v(" "),n("DxColumn",{attrs:{"data-field":"Type",caption:"Type",allowHeaderFiltering:!1}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"CreatedDate",caption:"Created Date"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"CurrentIssue",caption:"Current Issue",allowHeaderFiltering:!1}})],1)}),[],!1,null,"e3245b72",null);e.default=component.exports},568:function(t,e,n){"use strict";n.r(e);var o=n(521),l={components:{DxDataGrid:o.DxDataGrid,DxColumn:o.DxColumn,DxPaging:o.DxPaging,DxEditing:o.DxEditing,DxSelection:o.DxSelection},props:["dataProp"]},r=n(91),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("DxDataGrid",{attrs:{id:"gridContainer","data-source":t.dataProp,"show-borders":!0,height:"100%"}},[n("DxPaging",{attrs:{enabled:!1}}),t._v(" "),n("DxSelection",{attrs:{mode:"multiple"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"id",caption:"STT"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"PartnerID",caption:"PartnerID"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Name",caption:"Name"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"TIN",caption:"TIN"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Address",caption:"Address"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Contact",caption:"Contact"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Email",caption:"Email"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Phone",caption:"Phone"}})],1)],1)])}),[],!1,null,"28b93ea8",null);e.default=component.exports},569:function(t,e,n){"use strict";n.r(e);var o=n(521),l={components:{DxDataGrid:o.DxDataGrid,DxColumn:o.DxColumn,DxPaging:o.DxPaging,DxEditing:o.DxEditing,DxSelection:o.DxSelection},props:["dataProp"]},r=n(91),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("DxDataGrid",{attrs:{id:"gridContainer","data-source":t.dataProp,"show-borders":!0,height:"100%"}},[n("DxPaging",{attrs:{enabled:!1}}),t._v(" "),n("DxSelection",{attrs:{mode:"multiple"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"id",caption:"STT"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"CustomerID",caption:"CustomerID"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Name",caption:"Name"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"TIN",caption:"TIN"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Address",caption:"Address"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Contact",caption:"Contact"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Email",caption:"Email"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Phone",caption:"Phone"}})],1)],1)])}),[],!1,null,"099766b8",null);e.default=component.exports},570:function(t,e,n){"use strict";n.r(e);var o=n(521),l={components:{DxDataGrid:o.DxDataGrid,DxColumn:o.DxColumn,DxPaging:o.DxPaging,DxEditing:o.DxEditing,DxSelection:o.DxSelection},props:["dataProp"]},r=n(91),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("DxDataGrid",{attrs:{id:"gridContainer","data-source":t.dataProp,"show-borders":!0,height:"100%"}},[n("DxPaging",{attrs:{enabled:!1}}),t._v(" "),n("DxSelection",{attrs:{mode:"multiple"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"id",caption:"Id",width:"100"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"name",caption:"Name"}})],1)],1)])}),[],!1,null,"70506fb4",null);e.default=component.exports},571:function(t,e,n){"use strict";n.r(e);var o=n(521),l={components:{DxDataGrid:o.DxDataGrid,DxColumn:o.DxColumn,DxPaging:o.DxPaging,DxEditing:o.DxEditing,DxSelection:o.DxSelection},props:["dataProp"]},r=n(91),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("DxDataGrid",{attrs:{id:"gridContainer","data-source":t.dataProp,"show-borders":!0,height:"100%"}},[n("DxPaging",{attrs:{enabled:!1}}),t._v(" "),n("DxSelection",{attrs:{mode:"multiple"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"id",caption:"Id"}})],1)],1)])}),[],!1,null,"7a1787af",null);e.default=component.exports},572:function(t,e,n){"use strict";n.r(e);var o=n(521),l={components:{DxDataGrid:o.DxDataGrid,DxColumn:o.DxColumn,DxPaging:o.DxPaging,DxEditing:o.DxEditing,DxSelection:o.DxSelection},props:["dataProp"]},r=n(91),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("DxDataGrid",{attrs:{id:"gridContainer","data-source":t.dataProp,"show-borders":!0,height:"100%"}},[n("DxPaging",{attrs:{enabled:!1}}),t._v(" "),n("DxSelection",{attrs:{mode:"multiple"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"Description",caption:"Description"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"ViewMaDuAn",caption:"ViewMaDuAn"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"ViewDoiTac",caption:"ViewDoiTac"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"ViewKhachHang",caption:"ViewKhachHang"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"ViewTenDuAn",caption:"ViewTenDuAn"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"ViewPhanLoai",caption:"ViewPhanLoai"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"ViewNgayTao",caption:"ViewNgayTao"}}),t._v(" "),n("DxColumn",{attrs:{"data-field":"ViewTinhTrang",caption:"ViewTinhTrang"}})],1)}),[],!1,null,"d61b8c22",null);e.default=component.exports},573:function(t,e,n){"use strict";n.r(e);var o=n(300),l=n.n(o),r=n(302),d=n.n(r),c=n(548),x=n.n(c),m=n(299),D=n.n(m),v={props:["dataProp"],components:{DxTextBox:l.a,DxSelectBox:d.a,DxTextArea:x.a,DxButton:D.a},methods:{}},f=n(91),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-md"},[n("div",{staticClass:"row mb-4"},[n("div",{staticClass:"xs4"},[n("DxSelectBox",{staticClass:"mr-4",attrs:{"display-expr":"title","value-expr":"id","styling-mode":"outlined","label-mode":"floating",label:"Customer"}})],1),t._v(" "),n("div",{staticClass:"xs4"},[n("DxSelectBox",{staticClass:"mr-4",attrs:{"styling-mode":"outlined","label-mode":"floating",label:"Partner"}})],1),t._v(" "),n("div",{staticClass:"xs4"},[n("DxTextBox",{attrs:{"styling-mode":"outlined","label-mode":"floating",label:"Identifier"}})],1)]),t._v(" "),n("div",{staticClass:"mb-4"},[n("DxTextBox",{attrs:{"styling-mode":"outlined","label-mode":"floating",label:"Project name"}})],1),t._v(" "),n("div",{staticClass:"mb-4"},[n("DxTextArea",{attrs:{height:100,"max-length":null,"styling-mode":"outlined","label-mode":"floating",label:"Description"}})],1),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"xs3"},[n("DxSelectBox",{staticClass:"mr-4",attrs:{"display-expr":"title","value-expr":"id","styling-mode":"outlined","label-mode":"floating",label:"Category"}})],1),t._v(" "),n("div",{staticClass:"xs3 mb-5"},[n("DxSelectBox",{staticClass:"mr-4",attrs:{"styling-mode":"outlined","label-mode":"floating",label:"Company"}})],1),t._v(" "),n("div",{staticClass:"xs3"},[n("DxSelectBox",{staticClass:"mr-4",attrs:{"styling-mode":"outlined","label-mode":"floating",label:"Project type"}})],1),t._v(" "),n("div",{staticClass:"xs3"},[n("DxTextBox",{attrs:{"styling-mode":"outlined","label-mode":"floating",label:"Status"}})],1)]),t._v(" "),n("div",{staticClass:"row justify-end align-center"},[n("DxButton",{attrs:{text:"Lưu",type:"default","styling-mode":"contained"}})],1)])}),[],!1,null,"0c20a1ae",null);e.default=component.exports},574:function(t,e,n){"use strict";n.r(e);var o=n(300),l=n.n(o),r=n(299),d=n.n(r),c={props:["dataProp"],components:{DxTextBox:l.a,DxButton:d.a},methods:{}},x=n(91),component=Object(x.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-md"},[n("div",{staticClass:"row mb-4"},["NewPartner"===t.dataProp.listType?n("div",{staticClass:"xs4"},[n("DxTextBox",{staticClass:"mr-4",attrs:{"display-expr":"title","value-expr":"id","styling-mode":"outlined","label-mode":"floating",label:"Partner ID"}})],1):n("div",{staticClass:"xs4"},[n("DxTextBox",{staticClass:"mr-4",attrs:{"display-expr":"title","value-expr":"id","styling-mode":"outlined","label-mode":"floating",label:"Customer ID"}})],1),t._v(" "),n("div",{staticClass:"xs4"},[n("DxTextBox",{staticClass:"mr-4",attrs:{"styling-mode":"outlined","label-mode":"floating",label:"Name"}})],1),t._v(" "),n("div",{staticClass:"xs4"},[n("DxTextBox",{attrs:{"styling-mode":"outlined","label-mode":"floating",label:"TIN"}})],1)]),t._v(" "),n("div",{staticClass:"mb-4"},[n("DxTextBox",{attrs:{"styling-mode":"outlined","label-mode":"floating",label:"Address"}})],1),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"xs4"},[n("DxTextBox",{staticClass:"mr-4",attrs:{"display-expr":"title","value-expr":"id","styling-mode":"outlined","label-mode":"floating",label:"Contact person"}})],1),t._v(" "),n("div",{staticClass:"xs4 mb-5"},[n("DxTextBox",{staticClass:"mr-4",attrs:{"styling-mode":"outlined","label-mode":"floating",label:"Email"}})],1),t._v(" "),n("div",{staticClass:"xs4"},[n("DxTextBox",{attrs:{"styling-mode":"outlined","label-mode":"floating",label:"Phone"}})],1)]),t._v(" "),n("div",{staticClass:"row justify-end align-center"},[n("DxButton",{attrs:{text:"Lưu",type:"default","styling-mode":"contained"}})],1)])}),[],!1,null,"195bbb95",null);e.default=component.exports},575:function(t,e,n){"use strict";n.r(e);var o=n(300),l=n.n(o),r=n(299),d=n.n(r),c={components:{DxTextBox:l.a,DxButton:d.a}},x=n(91),component=Object(x.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-md"},[n("DxTextBox",{staticClass:"mb-5",attrs:{"display-expr":"title","value-expr":"id","styling-mode":"outlined","label-mode":"floating",label:"Name"}}),t._v(" "),n("div",{staticClass:"row justify-end align-center"},[n("DxButton",{attrs:{text:"Lưu",type:"default","styling-mode":"contained"}})],1)],1)}),[],!1,null,"281360a4",null);e.default=component.exports},576:function(t,e,n){"use strict";n.r(e);var o=n(300),l=n.n(o),r=n(299),d=n.n(r),c={props:["dataProp"],components:{DxCheckBox:n(549).DxCheckBox,DxTextBox:l.a,DxButton:d.a},data:function(){return{checkItem:{ViewMaDuAn:!0,ViewDoiTac:!0,ViewKhachHang:!1,ViewTenDuAn:!1,ViewPhanLoai:!1,ViewNgayTao:null,ViewTinhTrang:null}}}},x=(n(550),n(91)),component=Object(x.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-md"},[n("DxTextBox",{staticClass:"mb-4",attrs:{"display-expr":"title","value-expr":"id","styling-mode":"outlined","label-mode":"floating",label:"Description"}}),t._v(" "),n("h3",{staticClass:"mb-3"},[t._v("Chọn thông tin")]),t._v(" "),n("div",{staticClass:"mb-5 row justify-space-between checkbox"},[n("DxCheckBox",{attrs:{value:t.checkItem.ViewMaDuAn,text:"ViewMaDuAn"}}),t._v(" "),n("DxCheckBox",{attrs:{value:t.checkItem.ViewDoiTac,text:"ViewDoiTac"}}),t._v(" "),n("DxCheckBox",{attrs:{value:t.checkItem.ViewKhachHang,text:"ViewKhachHang"}}),t._v(" "),n("DxCheckBox",{attrs:{value:t.checkItem.ViewTenDuAn,text:"ViewTenDuAn"}}),t._v(" "),n("DxCheckBox",{attrs:{value:t.checkItem.ViewPhanLoai,text:"ViewPhanLoai"}}),t._v(" "),n("DxCheckBox",{attrs:{value:t.checkItem.ViewNgayTao,text:"ViewNgayTao"}}),t._v(" "),n("DxCheckBox",{attrs:{value:t.checkItem.ViewTinhTrang,text:"ViewTinhTrang"}})],1),t._v(" "),n("div",{staticClass:"row justify-end align-center"},[n("DxButton",{attrs:{text:"Lưu",type:"default","styling-mode":"contained"}})],1)],1)}),[],!1,null,"df9afd1c",null);e.default=component.exports},577:function(t,e,n){"use strict";n.r(e);var o=n(535),l=n(106),r=n(539),d={components:{DxPopup:o.DxPopup,statusProject:r.default},data:function(){return{popupVisible:!1,dataDetail:null}},computed:Object(l.c)(["statusItem"]),methods:{openDetail:function(t){this.popupVisible=!this.popupVisible,this.dataDetail=t}},created:function(){this.$store.commit("PROJECT_STATUS")}},c=(n(552),n(91)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-md"},[n("div",{staticClass:"footer-header row justify-space-around"},[t._l(t.statusItem,(function(e){return n("div",{key:e.id,staticClass:"row align-center xs3 justify-center"},[n("div",{staticClass:"info-project"},[n("p",[t._v(t._s(t.$t(e.title)))]),t._v(" "),n("span",[t._v("\n                    "+t._s(e.data.length)+"\n                ")]),t._v(" "),n("p",{staticClass:"detail",on:{click:function(n){return t.openDetail(e.data)}}},[t._v("\n                    "+t._s(t.$t("View details"))+"\n                ")])])])})),t._v(" "),n("DxPopup",{attrs:{visible:t.popupVisible,"drag-enabled":!1,"close-on-outside-click":!1,"show-close-button":!0,"show-title":!0,width:"100%",height:"100%",title:"Details"}},[n("statusProject",{attrs:{data:t.dataDetail}})],1)],2)])}),[],!1,null,"52aa6b94",null);e.default=component.exports},588:function(t,e,n){"use strict";n(561)},589:function(t,e,n){var o=n(149)(!1);o.push([t.i,".main[data-v-5bdd442c]{height:100%;overflow:hidden;padding:24px;margin:80px auto}.main h2[data-v-5bdd442c]{color:#0986c5}[data-v-5bdd442c] .dx-multiview-item-container .dx-empty-message{margin-top:200px}[data-v-5bdd442c] .dx-button-text{text-transform:none;line-height:unset}.toolbar[data-v-5bdd442c]{border:1px solid #e7e7e7}.btn-list[data-v-5bdd442c]{background-color:#fff;color:#000;cursor:pointer;padding:10px 0}.btn-list[data-v-5bdd442c]:hover{background-color:#e7e7e7}",""]),t.exports=o},605:function(t,e,n){"use strict";n.r(e);n(82),n(69),n(76),n(123),n(80),n(124);var o=n(56),l=(n(187),n(46),n(106)),r=n(582),d=n.n(r),c=n(299),x=n.n(c),m=n(531),D=n.n(m),v=n(532),f=n(567),C=n(568),h=n(569),_=n(570),y=n(571),w=n(572),P=n(573),T=n(574),j=n(575),V=n(576),B=n(577);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var N={layout:"commonLayout",components:{DxList:d.a,DxButton:x.a,DxTabPanel:D.a,DxScrollView:v.DxScrollView,listProject:f.default,listPartner:C.default,listCustomer:h.default,listCategory:_.default,listCompany:y.default,listView:w.default,addProject:P.default,addCustomer:T.default,addCategory:j.default,addView:V.default,Dashboard:B.default},data:function(){return{selectedItem:null,dataTaomoi:[{id:this.idv4(),title:"New project",listType:"NewProject",data:[]},{id:this.idv4(),title:"New partner",listType:"NewPartner",data:[]},{id:this.idv4(),title:"New customer",listType:"NewCustomer",data:[]},{id:this.idv4(),title:"New category",listType:"NewCategory",data:[]},{id:this.idv4(),title:"New company",listType:"NewCompany",data:[]},{id:this.idv4(),title:"New view",listType:"NewView",data:[]}]}},computed:S(S(S({},Object(l.b)({QuanLy:"Manage",DanhSachQuanLy:"ListManage"})),Object(l.c)(["isSelected"])),{},{Manage:{get:function(){return this.QuanLy},set:function(t){return t}},ListManage:{get:function(){return this.DanhSachQuanLy},set:function(t){return t}}}),methods:{onItemClick:function(t){this.Manage.find((function(i){return i.listType===t.listType}))||this.$store.commit("ADD_LIST",t),this.$store.commit("ADD_LIST",t),this.selectedItem=t},closeButtonHandler:function(t){confirm("Are you sure to close tab?")&&this.$store.commit("CLICK_DELETE",t.id)},showCloseButton:function(){return this.Manage.length>0},clearTab:function(){confirm("Are you sure to close all tabs?")&&this.$store.commit("CLEAR_DATA")}},created:function(){""!==this.isSelected&&this.$store.commit("ADD_OPTION")},beforeDestroy:function(){this.$store.commit("CLEAR_DATA")}},I=(n(588),n(91)),component=Object(I.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("h2",{staticClass:"text-xs-center mb-2"},[t._v("Project management")]),t._v(" "),n("div",{staticClass:"toolbar"},[n("div",{staticClass:"row align-center justify-space-around"},t._l(t.ListManage,(function(e){return n("div",{key:e.id,staticClass:"xs6 text-xs-center btn-list",on:{click:function(n){return t.onItemClick(e)}}},[n("i",{staticClass:"mdi mdi-format-list-numbered mr-1"}),t._v("\n                "+t._s(t.$t(e.title))+"\n            ")])})),0),t._v(" "),n("div",{staticClass:"row align-center justify-space-around"},t._l(t.dataTaomoi,(function(e){return n("div",{key:e.id,staticClass:"xs6 text-xs-center btn-list",on:{click:function(n){return t.onItemClick(e)}}},[n("i",{staticClass:"mdi mdi-plus-circle mr-1"}),t._v("\n                "+t._s(t.$t(e.title))+"\n            ")])})),0)]),t._v(" "),n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.Manage.length>0,expression:"Manage.length > 0"}],staticClass:"row justify-end"},[n("DxButton",{attrs:{text:"Clear",type:"normal","styling-mode":"text",icon:"mdi mdi-close"},on:{click:t.clearTab}})],1),t._v(" "),n("div",[n("DxTabPanel",{attrs:{"data-source":t.Manage,height:"calc(78vh - 200px)","defer-rendering":!1,"show-nav-buttons":!0,"repaint-changes-only":!0,selectedItem:t.selectedItem,noDataText:"No data to display","item-title-template":"title","item-template":"itemTemplate"},scopedSlots:t._u([{key:"title",fn:function(e){var o=e.data;return[n("div",[n("span",[t._v(t._s(o.title)+" ")]),n("i",{directives:[{name:"show",rawName:"v-show",value:t.showCloseButton(),expression:"showCloseButton()"}],staticClass:"mdi mdi-close-circle",on:{click:function(e){return t.closeButtonHandler(o)}}})])]}},{key:"itemTemplate",fn:function(t){var e=t.data;return[n("DxScrollView",["project"===e.listType?n("div",[n("listProject",{attrs:{dataProp:e.data}})],1):"partner"===e.listType?n("div",[n("listPartner",{attrs:{dataProp:e.data}})],1):"customer"===e.listType?n("div",[n("listCustomer",{attrs:{dataProp:e.data}})],1):"category"===e.listType?n("div",[n("listCategory",{attrs:{dataProp:e.data}})],1):"company"===e.listType?n("div",[n("listCompany",{attrs:{dataProp:e.data}})],1):"view"===e.listType?n("div",[n("listView",{attrs:{dataProp:e.data}})],1):n("div",["NewProject"===e.listType?n("addProject",{attrs:{dataProp:e.data}}):"NewPartner"===e.listType||"NewCustomer"===e.listType?n("addCustomer",{attrs:{dataProp:e}}):"NewCategory"===e.listType?n("addCategory",{attrs:{dataProp:e.data}}):"NewView"===e.listType?n("addView",{attrs:{dataProp:e.data}}):n("dashboard")],1)])]}}])},[t._v("\n                >\n                ")])],1)])])}),[],!1,null,"5bdd442c",null);e.default=component.exports}}]);