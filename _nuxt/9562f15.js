(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{724:function(e,t,n){var content=n(735);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(132).default)("2032afb2",content,!0,{sourceMap:!1})},734:function(e,t,n){"use strict";n(724)},735:function(e,t,n){var o=n(131)(!1);o.push([e.i,".btn-add[data-v-4d87e7b1]{font-size:28px}.btn-save[data-v-4d87e7b1]{background-color:#0986c5;color:#fff;padding:8px 0;width:60px;text-align:center;cursor:pointer;border-radius:6px}.btn-save[data-v-4d87e7b1],.btn-save[data-v-4d87e7b1]:hover{transition:all .2s linear 0s}.btn-save[data-v-4d87e7b1]:hover{color:#0986c5;background-color:#f1f1f1}.xs-4[data-v-4d87e7b1]{flex-basis:34.6%;max-width:34.6%}.btn-tool[data-v-4d87e7b1]{border:1px solid #ddd;padding:0 5px;border-radius:4px;cursor:pointer}.btn-tool[data-v-4d87e7b1],.btn-tool[data-v-4d87e7b1]:hover{transition:all .2s linear 0s}.btn-tool[data-v-4d87e7b1]:hover{background-color:#000;color:#ddd}",""]),e.exports=o},745:function(e,t,n){"use strict";n.r(t);n(79),n(59),n(78),n(105),n(106);var o=n(16),l=n(707),r=n(50),c=(n(80),n(42),n(66),n(113),n(133),n(169),n(315)),d=n.n(c),h=n(704),m=n.n(h),x=n(314),f=n.n(x),C=n(705),D=n.n(C),v=n(313),y=n.n(v),H=n(697),M=n(708),V=n.n(M),P=n(709),T=n.n(P),$=n(710),w=n(95);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function Y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var B={components:{DxSelectBox:d.a,DxTextBox:f.a,DxDateBox:D.a,DxDataGrid:H.DxDataGrid,DxColumn:H.DxColumn,DxScrolling:H.DxScrolling,DxPager:H.DxPager,DxPaging:H.DxPaging,DxNumberBox:m.a,DxLookup:H.DxLookup,DxButton:y.a,DxEditing:H.DxEditing,DxValidator:V.a,DxRequiredRule:M.DxRequiredRule,DxValidationGroup:T.a,DxAutocomplete:$.DxAutocomplete},data:function(){return{dataGridRefKey:"datagridValid",formValidation:"formValid",selectBoxRefKey:"BoxRefKey",selectBoxPhuPhi:"BoxPhuPhi",YeuCauMuaHang:{id:0,tenNhanVien:"",maNhanVien:"",chucVu:"",phongBan:"",ngayDeTrinh:(new Date).toISOString(),ngayCanHang:(new Date).toISOString(),diaDiemLamViec:"",phuPhi:"",maChiPhi:"",maDuAn:"",soThamChieu:"",comment:"",yeuCauMuaHangChiTiets:[]},loaiPhuPhi:[this.$t("Phát sinh"),this.$t("Theo tính toán")],file:""}},watch:{refNumber:{handler:function(e){e?(this.YeuCauMuaHang.soThamChieu=e.soThamChieu,this.YeuCauMuaHang.maChiPhi=e.maChiPhi):(this.YeuCauMuaHang.soThamChieu="",this.YeuCauMuaHang.maChiPhi="")}},dataExcel:{handler:function(e){e&&(this.YeuCauMuaHang.yeuCauMuaHangChiTiets=JSON.parse(JSON.stringify(e.yeuCauMuaHangChiTiets)))},deep:!0}},computed:Y(Y(Y({},Object(w.c)("muahang",["listItem","refNumber"])),Object(w.c)(["userInfo","projectCode","hangMucTrienKhai","dataExcel"])),{},{validationGroup:function(){return this.$refs[this.formValidation].instance},selectBox:function(){return this.$refs[this.selectBoxRefKey].instance},RefPhuPhi:function(){return this.$refs[this.selectBoxPhuPhi].instance}}),methods:{addRow:function(){this.YeuCauMuaHang.yeuCauMuaHangChiTiets.push({id:0,ycmhId:0,tenHangHoa_DichVu:"",xuatXu_Hang:"",model_MaHieu:"",soLuong:0,donVi:"",donGiaTamTinh:0,maHangMucTrienKhai:"",ghiChu:""})},checkArray:function(){return this.YeuCauMuaHang.yeuCauMuaHangChiTiets.forEach((function(e){return e.tenHangHoa_DichVu,e.model_MaHieu,e.xuatXu_Hang,e.soLuong,e.donVi,e.maHangMucTrienKhai,e.donGiaTamTinh,Object(l.a)("conditionsArray")})),![].includes(!1)},clickAdd:function(){var e=this,t=confirm("Do you want to submit?"),n=this.validationGroup.validate(),o=this.YeuCauMuaHang.yeuCauMuaHangChiTiets;t&&(n.isValid&&o.length>0?setTimeout((function(){e.checkArray()?(e.$store.dispatch("muahang/postData",e.YeuCauMuaHang),e.clickClose()):e.$toast.error("Failed! Not enough information to save")}),300):this.$toast.error("Failed! Not enough information to save!"))},selectDuAn:function(e){this.YeuCauMuaHang.maDuAn=e.selectedItem,null!==e.selectedItem&&(this.$store.dispatch("muahang/getRefNumber",e.selectedItem),this.$store.dispatch("getHangMuc",e.selectedItem))},selectPhongBan:function(e){this.YeuCauMuaHang.phongBan=e.selectedItem.tenPhongBan},selectPhuPhi:function(e){this.YeuCauMuaHang.phuPhi=e.selectedItem},calculateAmount:function(e){return e.soLuong*e.donGiaTamTinh},customFormat:function(e){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(e)},editorPreparing:function(e){"tenHangHoa_DichVu"===e.dataField&&(e.editorName="dxAutocomplete",e.editorOptions={items:this.listItem,valueExpr:"name",value:e.value,onValueChanged:function(t){e.setValue(t.value)},onSelectionChanged:function(t){var n=t.selectedItem;if(null==n.model)return"";e.row.data.model_MaHieu=n.model,e.row.data.xuatXu_Hang=n.tenHangSanXuat,e.row.data.donVi=n.donViTinh,e.row.data.donGiaTamTinh=n.donGiaVND}})},submitFile:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(n=new FormData).append("file",e.file),""!==e.file&&e.$store.dispatch("uploadExcel",n);case 3:case"end":return t.stop()}}),t)})))()},handleFileUpload:function(){this.file=this.$refs.file.files[0]},clickClose:function(){this.resetData(),this.$emit("invisible")},resetData:function(){this.YeuCauMuaHang={id:0,tenNhanVien:this.userInfo.tenNhanVien,maNhanVien:this.userInfo.maNhanVien,chucVu:this.userInfo.chucVu,phongBan:this.userInfo.phongBan,ngayDeTrinh:(new Date).toISOString(),ngayCanHang:(new Date).toISOString(),diaDiemLamViec:this.userInfo.diaDiemLamViec,phuPhi:"",maChiPhi:"",maDuAn:"",soThamChieu:"",comment:"",yeuCauMuaHangChiTiets:[]},this.selectBox.reset(),this.RefPhuPhi.reset()}},created:function(){this.$store.dispatch("muahang/getItems"),this.$store.dispatch("getProjectCode"),this.YeuCauMuaHang.tenNhanVien=this.userInfo.tenNhanVien,this.YeuCauMuaHang.maNhanVien=this.userInfo.maNhanVien,this.YeuCauMuaHang.chucVu=this.userInfo.chucVu,this.YeuCauMuaHang.phongBan=this.userInfo.phongBan,this.YeuCauMuaHang.diaDiemLamViec=this.userInfo.diaDiemLamViec}},R=(n(734),n(77)),component=Object(R.a)(B,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"row justify-end"},[n("div",[n("div",{staticClass:"font-24 btn-tool mdi mdi-close",on:{click:e.clickClose}})])]),e._v(" "),n("DxValidationGroup",{ref:e.formValidation},[n("div",{staticClass:"row align-center justify-space-between mb-3"},[n("DxTextBox",{staticClass:"xs2 mr-3",attrs:{"styling-mode":"outlined",label:e.$t("Họ và tên"),"label-mode":"floating","read-only":!0},model:{value:e.YeuCauMuaHang.tenNhanVien,callback:function(t){e.$set(e.YeuCauMuaHang,"tenNhanVien",t)},expression:"YeuCauMuaHang.tenNhanVien"}},[n("DxValidator",[n("DxRequiredRule")],1)],1),e._v(" "),n("DxTextBox",{staticClass:"xs2 mr-3",attrs:{"styling-mode":"outlined",label:e.$t("Mã nhân viên"),"label-mode":"floating","read-only":!0},model:{value:e.YeuCauMuaHang.maNhanVien,callback:function(t){e.$set(e.YeuCauMuaHang,"maNhanVien",t)},expression:"YeuCauMuaHang.maNhanVien"}},[n("DxValidator",[n("DxRequiredRule")],1)],1),e._v(" "),n("DxTextBox",{staticClass:"xs2 mr-3",attrs:{"styling-mode":"outlined",label:e.$t("Chức vụ"),"label-mode":"floating","read-only":!0},model:{value:e.YeuCauMuaHang.chucVu,callback:function(t){e.$set(e.YeuCauMuaHang,"chucVu",t)},expression:"YeuCauMuaHang.chucVu"}},[n("DxValidator",[n("DxRequiredRule")],1)],1),e._v(" "),e.userInfo.listOfNhanVienPhongBan.length>1?n("DxSelectBox",{staticClass:"xs2 mr-3",attrs:{"data-source":e.userInfo.listOfNhanVienPhongBan,"display-expr":"tenPhongBan","styling-mode":"outlined",label:e.$t("Phòng ban"),"label-mode":"floating"},on:{selectionChanged:e.selectPhongBan}},[n("DxValidator",[n("DxRequiredRule")],1)],1):n("DxTextBox",{staticClass:"xs2 mr-3",attrs:{"styling-mode":"outlined",label:e.$t("Phòng ban"),"label-mode":"floating","read-only":!0},model:{value:e.YeuCauMuaHang.phongBan,callback:function(t){e.$set(e.YeuCauMuaHang,"phongBan",t)},expression:"YeuCauMuaHang.phongBan"}},[n("DxValidator",[n("DxRequiredRule")],1)],1),e._v(" "),n("DxSelectBox",{ref:e.selectBoxPhuPhi,staticClass:"xs2 mr-3",attrs:{items:e.loaiPhuPhi,"styling-mode":"outlined",label:e.$t("Phụ phí"),"label-mode":"floating"},on:{selectionChanged:e.selectPhuPhi}},[n("DxValidator",[n("DxRequiredRule")],1)],1),e._v(" "),n("DxTextBox",{staticClass:"xs2",attrs:{"styling-mode":"outlined",label:e.$t("Mã chi phí"),"label-mode":"floating","read-only":!0},model:{value:e.YeuCauMuaHang.maChiPhi,callback:function(t){e.$set(e.YeuCauMuaHang,"maChiPhi",t)},expression:"YeuCauMuaHang.maChiPhi"}},[n("DxValidator",[n("DxRequiredRule")],1)],1)],1),e._v(" "),n("div",{staticClass:"row align-center mb-2"},[n("DxDateBox",{staticClass:"xs2 mr-3",attrs:{displayFormat:"dd/MM/yyyy","use-mask-behavior":!0,validationMessageMode:"always","styling-mode":"outlined",label:e.$t("Ngày đệ trình"),"label-mode":"floating","read-only":!0},model:{value:e.YeuCauMuaHang.ngayDeTrinh,callback:function(t){e.$set(e.YeuCauMuaHang,"ngayDeTrinh",t)},expression:"YeuCauMuaHang.ngayDeTrinh"}},[n("DxValidator",[n("DxRequiredRule")],1)],1),e._v(" "),n("DxDateBox",{staticClass:"xs2 mr-3",attrs:{displayFormat:"dd/MM/yyyy","use-mask-behavior":!0,validationMessageMode:"always","styling-mode":"outlined",label:e.$t("Ngày cần hàng"),"label-mode":"floating"},model:{value:e.YeuCauMuaHang.ngayCanHang,callback:function(t){e.$set(e.YeuCauMuaHang,"ngayCanHang",t)},expression:"YeuCauMuaHang.ngayCanHang"}},[n("DxValidator",[n("DxRequiredRule")],1)],1),e._v(" "),n("DxTextBox",{staticClass:"xs-4 mr-3",attrs:{"styling-mode":"outlined",label:e.$t("Địa điểm làm việc"),"label-mode":"floating"},model:{value:e.YeuCauMuaHang.diaDiemLamViec,callback:function(t){e.$set(e.YeuCauMuaHang,"diaDiemLamViec",t)},expression:"YeuCauMuaHang.diaDiemLamViec"}},[n("DxValidator",[n("DxRequiredRule")],1)],1),e._v(" "),n("DxSelectBox",{ref:e.selectBoxRefKey,staticClass:"xs2 mr-3",attrs:{items:e.projectCode,"styling-mode":"outlined",label:e.$t("Mã dự án"),"label-mode":"floating","search-enabled":!0,"search-mode":"contains","search-timeout":200,"min-search-length":0},on:{selectionChanged:e.selectDuAn}},[n("DxValidator",[n("DxRequiredRule")],1)],1),e._v(" "),n("DxTextBox",{staticClass:"xs2",attrs:{"styling-mode":"outlined",label:e.$t("Số tham chiếu"),"label-mode":"floating","read-only":!0},model:{value:e.YeuCauMuaHang.soThamChieu,callback:function(t){e.$set(e.YeuCauMuaHang,"soThamChieu",t)},expression:"YeuCauMuaHang.soThamChieu"}},[n("DxValidator",[n("DxRequiredRule")],1)],1)],1)]),e._v(" "),n("div",[n("div",{staticClass:"row mb-2 justify-space-between align-center"},[n("h3",[e._v(e._s(e.$t("Danh sách hàng hóa, dịch vụ cần mua")))]),e._v(" "),n("div",[n("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:function(t){return e.handleFileUpload()}}}),e._v(" "),n("button",{staticClass:"mr-2",on:{click:function(t){return e.submitFile()}}},[e._v("\n                    "+e._s(e.$t("Nhập"))+"\n                ")]),e._v(" "),n("button",{on:{click:function(t){return e.$store.dispatch("downloadExcel")}}},[e._v("\n                    "+e._s(e.$t("Tải mẫu Excel"))+"\n                ")])])]),e._v(" "),n("DxDataGrid",{ref:e.dataGridRefKey,attrs:{id:"gridContainer","data-source":e.YeuCauMuaHang.yeuCauMuaHangChiTiets,"show-borders":!0,"show-column-lines":!0,"allow-column-resizing":!0,"column-auto-width":!0,height:"calc(100vh - 320px)",noDataText:e.$t("Không có dữ liệu"),"remote-operations":!0},on:{editorPreparing:e.editorPreparing}},[n("DxEditing",{attrs:{"allow-updating":!0,"allow-deleting":!0,useIcons:!0,confirmDelete:!1,mode:"cell","new-row-position":"last"}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"tenHangHoa_DichVu",caption:e.$t("Hàng hóa, dịch vụ")}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"model_MaHieu",caption:e.$t("Mã hiệu")}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"xuatXu_Hang",caption:e.$t("Xuất xứ")}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"soLuong",caption:e.$t("Số lượng")}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"donVi",caption:e.$t("Đơn vị")}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"donGiaTamTinh",caption:e.$t("Đơn giá"),format:e.customFormat}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"soTienTamTinh",caption:e.$t("Tổng tiền"),format:e.customFormat,"calculate-cell-value":e.calculateAmount}}),e._v(" "),n("DxColumn",{attrs:{"data-field":"maHangMucTrienKhai",caption:e.$t("Mã hạng mục triển khai")}},[n("DxLookup",{attrs:{"data-source":e.hangMucTrienKhai}})],1),e._v(" "),n("DxColumn",{attrs:{"data-field":"ghiChu",caption:e.$t("Ghi chú"),width:"250"}})],1),e._v(" "),n("div",{staticClass:"row justify-space-between mt-3"},[n("DxButton",{attrs:{icon:"mdi mdi-plus","use-submit-behavior":!0,"styling-mode":"text",text:e.$t("Thêm")},on:{click:e.addRow}}),e._v(" "),n("DxButton",{attrs:{text:e.$t("Lưu"),type:"default","styling-mode":"contained"},on:{click:e.clickAdd}})],1)],1)],1)}),[],!1,null,"4d87e7b1",null);t.default=component.exports}}]);