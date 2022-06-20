<template>
    <div>
        <div class="row justify-end">
            <div>
                <div class="row">
                    <div
                        @click="checkEdit"
                        class="font-24 btn-tool mdi mdi-pencil mr-2"
                    ></div>
                    <div v-if="disable == false && allowEdit == true">
                        <div
                            @click="clickSave"
                            class="font-24 btn-tool mdi mdi-check mx-2"
                        ></div>
                    </div>
                </div>
            </div>
            <div>
                <div
                    @click="clickClose"
                    class="font-24 btn-tool mdi mdi-close"
                ></div>
            </div>
        </div>
        <div class="header row align-center">
            <div class="xs4 container-xs" style="border-right: 1px solid black">
                <div class="row align-center">
                    <div class="mx-2">
                        <img
                            src="~assets/logo.png"
                            width="90px"
                            height="auto"
                        />
                    </div>
                    <div v-if="mnv.includes('VNASWO')">
                        <p class="font-12" style="font-weight: bold">
                            Công ty cổ phần VNAS Workshop
                        </p>
                        <p class="font-12">
                            Điểm công nghiệp Di Trạch, Di Trạch, Hoài Đức, Hà
                            Nội
                        </p>
                        <p class="font-12">MST: 0109687775</p>
                    </div>
                    <div v-else-if="mnv.includes('VNASSE')">
                        <p class="font-12" style="font-weight: bold">
                            Công ty cổ phần VNAS SERVICES
                        </p>
                        <p class="font-12">
                            Xóm 12, Thôn Hậu Ái, Xã Vân Canh, Huyện Hoài Đức,
                            Thành Phố Hà Nội
                        </p>
                        <p class="font-12">MST: 0109529056</p>
                    </div>
                    <div v-else>
                        <p class="font-12" style="font-weight: bold">
                            Công ty Cổ phần tập đoàn Việt Nam Auto Solutions
                        </p>
                        <p class="font-12">
                            Số 16, ngách 53/59/50 đường Ngọa Long, phường Minh
                            Khai, Bắc Từ Liêm, Hà Nội
                        </p>
                        <p class="font-12">MST: 0108326399</p>
                    </div>
                </div>
            </div>
            <div class="xs6 text-xs-center" style="">
                <h1>
                    PHIẾU ĐỀ NGHỊ MUA <br />
                    HÀNG HÓA,DỊCH VỤ
                </h1>
            </div>
            <div class="xs2 right-content">
                <div class="top">
                    <p>Form: VNAS-TC-MH</p>
                    <p>ĐNMH-000000</p>
                </div>
                <div class="bot">
                    <p>Số: {{ YeuCauMuaHang.id }}</p>
                </div>
            </div>
        </div>
        <div class="header">
            <DxValidationGroup :ref="formValidation">
                <div class="row">
                    <div class="xs4 mr-4">
                        <div class="row align-center justify-space-between">
                            <p>Tên:</p>
                            <DxTextBox
                                v-model="YeuCauMuaHang.tenNhanVien"
                                styling-mode="underlined"
                                :read-only="disable"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxTextBox>
                        </div>
                        <div class="row align-center justify-space-between">
                            <p>Mã nhân viên:</p>
                            <DxTextBox
                                v-model="YeuCauMuaHang.maNhanVien"
                                styling-mode="underlined"
                                :read-only="disable"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxTextBox>
                        </div>
                        <div class="row align-center justify-space-between">
                            <p>Ngày đệ trình:</p>
                            <DxDateBox
                                v-model="YeuCauMuaHang.ngayDeTrinh"
                                displayFormat="dd/MM/yyyy"
                                :use-mask-behavior="true"
                                validationMessageMode="always"
                                styling-mode="underlined"
                                :read-only="disable"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxDateBox>
                        </div>
                        <div class="row align-center justify-space-between">
                            <p>Ngày giao hàng:</p>
                            <DxDateBox
                                v-model="YeuCauMuaHang.ngayCanHang"
                                displayFormat="dd/MM/yyyy"
                                :use-mask-behavior="true"
                                validationMessageMode="always"
                                styling-mode="underlined"
                                :read-only="disable"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxDateBox>
                        </div>
                    </div>
                    <div class="xs4 mr-4">
                        <div class="row align-center justify-space-between">
                            <p>Chức vụ:</p>
                            <DxTextBox
                                v-model="YeuCauMuaHang.chucVu"
                                styling-mode="underlined"
                                :read-only="disable"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxTextBox>
                        </div>
                        <div class="row align-center justify-space-between">
                            <p>Phòng/Ban:</p>
                            <DxTextBox
                                v-model="YeuCauMuaHang.phongBan"
                                styling-mode="underlined"
                                :read-only="disable"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxTextBox>
                        </div>
                        <div class="row align-center justify-space-between">
                            <p>Địa điểm làm việc:</p>
                            <DxTextBox
                                v-model="YeuCauMuaHang.diaDiemLamViec"
                                styling-mode="underlined"
                                :read-only="disable"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxTextBox>
                        </div>
                    </div>
                    <div class="xs4">
                        <div class="row align-center justify-space-between">
                            <p>Phụ phí:</p>
                            <DxSelectBox
                                :items="loaiPhuPhi"
                                :value="YeuCauMuaHang.phuPhi"
                                styling-mode="underlined"
                                :read-only="disable"
                                @selectionChanged="selectPhuPhi"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxSelectBox>
                        </div>
                        <div class="row align-center justify-space-between">
                            <p>Mã chi phí:</p>
                            <DxTextBox
                                v-model="YeuCauMuaHang.maChiPhi"
                                styling-mode="underlined"
                                :read-only="disable"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxTextBox>
                        </div>
                        <div class="row align-center justify-space-between">
                            <p>Số tham chiếu:</p>
                            <DxTextBox
                                v-model="YeuCauMuaHang.soThamChieu"
                                styling-mode="underlined"
                                :read-only="disable"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxTextBox>
                        </div>
                    </div>
                </div>
            </DxValidationGroup>
        </div>

        <div>
            <div class="row justify-space-between align-center">
                <h3>{{ $t('Danh sách hàng hóa, dịch vụ cần mua') }}</h3>
                <div v-if="disable == false && allowEdit == true">
                    <DxButton
                        icon="mdi mdi-plus"
                        styling-mode="text"
                        @click="addRow"
                        hint="Thêm hàng hoá"
                    />
                </div>
            </div>
            <DxDataGrid
                id="gridContainer"
                :data-source="danhSachHangHoaNp"
                :show-borders="true"
                :show-column-lines="true"
                :allow-column-resizing="true"
                :column-auto-width="true"
                :hover-state-enabled="true"
                :noDataText="$t('Không có dữ liệu')"
                height="calc(100vh - 470px)"
                :ref="dataGridRefKey"
                @saved="saved"
                @editorPreparing="editorPreparing"
            >
                <DxEditing
                    :allow-updating="allowEdit"
                    :allow-deleting="allowEdit"
                    :useIcons="true"
                    :confirm-delete="false"
                    mode="cell"
                    new-row-position="last"
                />
                <DxColumn
                    data-field="tenHangHoa_DichVu"
                    :caption="$t('Hàng hóa, dịch vụ')"
                />
                <DxColumn data-field="model_MaHieu" :caption="$t('Mã hiệu')" />
                <DxColumn data-field="xuatXu_Hang" :caption="$t('Xuất xứ')" />
                <DxColumn data-field="soLuong" :caption="$t('Số lượng')" />
                <DxColumn data-field="donVi" :caption="$t('Đơn vị')" />
                <DxColumn
                    data-field="donGiaTamTinh"
                    :caption="$t('Đơn giá')"
                    :format="customFormat"
                />
                <DxColumn
                    data-field="soTienTamTinh"
                    :caption="$t('Tổng tiền')"
                    :format="customFormat"
                    :calculate-cell-value="calculateAmount"
                />
                <DxColumn
                    data-field="ghiChu"
                    :caption="$t('Ghi chú')"
                    width="250"
                />
                <DxSummary>
                    <DxTotalItem
                        column="tenHangHoa_DichVu"
                        summary-type="count"
                        display-format="Tổng tiền:"
                    />
                    <DxTotalItem
                        column="soTienTamTinh"
                        summary-type="sum"
                        display-format="{0}"
                        :valueFormat="customFormat"
                    />
                </DxSummary>
            </DxDataGrid>
        </div>
        <div class="row align-center mb-2">
            <div
                class="footer-content column justify-space-between text-xs-center xs3"
            >
                <p style="text-decoration: underline">Người yêu cầu:</p>
                <div>
                    <span>{{ YeuCauMuaHang.tenNhanVien }}</span>
                    <p>
                        Thời gian:
                        <span>{{ timestamp(YeuCauMuaHang.ngayDeTrinh) }}</span>
                    </p>
                </div>
            </div>
            <div
                :class="yc.approvalStatus === 'MustRevise' ? 'hide xs3' : 'xs3'"
                v-for="yc in YeuCauMuaHang.duyetYCMHsNoiBo"
                :key="yc.id"
                :style="
                    yc.approvalState === 'NVTC_DUYET'
                        ? 'display:none'
                        : yc.approvalState === 'MH_DUYET'
                        ? 'display:none'
                        : ''
                "
            >
                <div
                    v-if="
                        yc.approvalState === 'TBP_DUYET' &&
                        yc.approvalStatus === 'None'
                    "
                >
                    <p>{{ yc.tenNhanVien }}...</p>
                </div>
                <div
                    v-else
                    class="footer-content column justify-space-between text-xs-center"
                >
                    <p style="text-decoration: underline">
                        {{
                            yc.approvalState == 'TBP_DUYET'
                                ? 'Trưởng bộ phận'
                                : yc.approvalState == 'GDTC_DUYET'
                                ? 'Bộ phận tài chính'
                                : yc.approvalState == 'TGD_DUYET'
                                ? 'Ban giám đốc'
                                : yc.approvalState == 'PMH_DUYET'
                                ? 'Bộ phận mua hàng'
                                : ''
                        }}:
                    </p>
                    <p>
                        {{
                            yc.approvalStatus == 'Approval'
                                ? '(Approved by VNAS App)'
                                : ''
                        }}
                    </p>
                    <div>
                        <span>{{ yc.tenNhanVien }}</span>
                        <p>
                            Thời gian:
                            <span>{{ timestamp(yc.ngayDuyet) }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div v-for="yc in YeuCauMuaHang.duyetYCMHsNoiBo" :key="yc.id">
            <div v-if="yc.approvalStatus == 'MustRevise'">
                <p style="font-weight: bold">
                    (Lịch sử duyệt:
                    <span style="font-weight: normal"
                        >Đã huỷ duyệt bởi: {{ yc.tenNhanVien }} vào lúc
                        {{ timestamp(yc.ngayDuyet) }})</span
                    >
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import DxSelectBox from 'devextreme-vue/select-box'
import DxNumberBox from 'devextreme-vue/number-box'
import DxTextBox from 'devextreme-vue/text-box'
import DxDateBox from 'devextreme-vue/date-box'
import DxButton from 'devextreme-vue/button'
import {
    DxDataGrid,
    DxColumn,
    DxLookup,
    DxSummary,
    DxPaging,
    DxTotalItem,
    DxEditing,
} from 'devextreme-vue/data-grid'
import { mapGetters, mapState } from 'vuex'
import DxValidator, { DxRequiredRule } from 'devextreme-vue/validator'
import DxValidationGroup from 'devextreme-vue/validation-group'
import { DxAutocomplete } from 'devextreme-vue/autocomplete'
import moment from 'moment'

export default {
    components: {
        DxSelectBox,
        DxTextBox,
        DxDateBox,
        DxDataGrid,
        DxColumn,
        DxTotalItem,
        DxPaging,
        DxNumberBox,
        DxButton,
        DxSummary,
        DxLookup,
        DxEditing,
        DxValidator,
        DxRequiredRule,
        DxValidationGroup,
        DxAutocomplete,
    },
    data() {
        return {
            dataGridRefKey: 'datagridValid',
            formValidation: 'formValid',
            YeuCauMuaHang: {},
            loaiPhuPhi: [this.$t('Phát sinh'), this.$t('Theo tính toán')],
            disable: true,
            allowEdit: false,
            mnv: '',
        }
    },
    watch: {
        suaYeuCauNp: {
            handler(suaYeuCauNp) {
                if (suaYeuCauNp) {
                    this.YeuCauMuaHang = { ...suaYeuCauNp }
                    this.mnv = this.YeuCauMuaHang.maNhanVien
                }
            },
            deep: true,
        },
        refNumberNp: {
            handler(refNumberNp) {
                if (refNumberNp) {
                    this.YeuCauMuaHang.soThamChieu = refNumberNp.soThamChieu
                    this.YeuCauMuaHang.maChiPhi = refNumberNp.maChiPhi
                }
            },
            immediate: true,
        },
    },
    computed: {
        ...mapState('muahang', ['listItemNp', 'refNumberNp']),
        ...mapGetters('muahang', ['suaYeuCauNp', 'danhSachHangHoaNp']),
        validationGroup() {
            return this.$refs[this.formValidation].instance
        },
    },
    methods: {
        addRow() {
            return this.$refs[this.dataGridRefKey].instance.addRow()
        },
        checkEdit() {
            this.disable = !this.disable
            this.allowEdit = !this.allowEdit
        },
        saved() {
            let tmpData =
                this.$refs[this.dataGridRefKey].instance.getDataSource()._items
            this.YeuCauMuaHang.yeuCauMuaHangNoiBoChiTiets = tmpData
        },
        editorPreparing(e) {
            if (e.dataField === 'tenHangHoa_DichVu') {
                e.editorName = 'dxAutocomplete'
                e.editorOptions = {
                    items: this.listItemNp,
                    valueExpr: 'name',
                    value: e.value,
                    onValueChanged(ev) {
                        e.setValue(ev.value)
                    },
                    onSelectionChanged(x) {
                        let itemSelect = x.selectedItem
                        if (itemSelect.model == null) return
                        e.row.data.model_MaHieu = itemSelect.model
                        e.row.data.xuatXu_Hang = itemSelect.tenHangSanXuat
                        e.row.data.donVi = itemSelect.donViTinh
                        e.row.data.donGiaTamTinh = itemSelect.donGiaVND
                    },
                }
            }
        },
        checkArray() {
            let conditionsArray = []
            this.YeuCauMuaHang.yeuCauMuaHangNoiBoChiTiets.forEach(
                (e) => (conditionsArray = [e.tenHangHoa_DichVu !== ''])
            )
            return !conditionsArray.includes(false)
        },
        selectPhuPhi(e) {
            this.YeuCauMuaHang.phuPhi = e.selectedItem
        },
        clickSave() {
            let result = this.validationGroup.validate()
            let result2 = confirm('Do you want to submit?')
            let isArrEmpty = this.YeuCauMuaHang.yeuCauMuaHangNoiBoChiTiets
            if (result2) {
                if (
                    result.isValid &&
                    this.checkArray() &&
                    isArrEmpty.length > 0
                ) {
                    setTimeout(() => {
                        this.$store.dispatch(
                            'muahang/editDataNp',
                            this.YeuCauMuaHang
                        )
                        this.clickClose()
                    }, 200)
                } else {
                    this.$toast.error(
                        `Failed! One or more validation errors occurred`
                    )
                }
            }
        },
        clickClose() {
            this.disable = true
            this.allowEdit = false
            this.$emit('invisible')
        },
        customFormat(e) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(e)
        },
        calculateAmount(e) {
            return e.soLuong * e.donGiaTamTinh
        },
        timestamp(date) {
            return moment(date).format('HH:mm DD-MM-YYYY')
        },
    },
    created() {
        this.$store.dispatch('muahang/getItemsNp')
    },
}
</script>

<style scoped>
.header {
    border: 1px solid black;
}
.btn-tool {
    background-color: #ddd;
    padding: 0 4px;
    border-radius: 50%;
    transition: all 0.2s linear 0s;
    cursor: pointer;
}
.btn-tool:hover {
    transition: all 0.2s linear 0s;
    background-color: black;
    color: #ddd;
}
.border-box {
    margin: 0 auto;
}
.right-content {
    font-style: italic;
    border-left: 1px solid black;
}
.top {
    padding: 6px;
    border-bottom: 1px solid black;
}
.bot {
    padding: 6px;
}
.footer-content p {
    font-weight: bold;
}
.footer-content span {
    font-weight: normal;
}
.footer-content {
    height: 100px;
    border: 1px solid black;
    padding: 8px;
}
.xs-4 {
    flex-basis: 34.6%;
    max-width: 34.6%;
}
.hide {
    display: none;
}
</style>
