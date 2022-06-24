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
        <dnmh :maNhanVien="mnv" :ycmh="YeuCauMuaHang" />
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
                            <p>Mã dự án:</p>
                            <DxSelectBox
                                :items="projectCode"
                                :value="YeuCauMuaHang.maDuAn"
                                styling-mode="underlined"
                                :read-only="disable"
                                @selectionChanged="selectDuAn"
                                :ref="selectBoxRefKey"
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
                                :width="220"
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
                                :width="220"
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
                <h3 class="my-1">
                    {{ $t('Danh sách hàng hóa, dịch vụ cần mua') }}
                </h3>
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
                :data-source="danhSachHangHoa"
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
                    data-field="maHangMucTrienKhai"
                    :caption="$t('Mã hạng mục triển khai')"
                >
                    <DxLookup :data-source="hangMucTrienKhai" />
                </DxColumn>
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
        <lichSuDuyet :ycmh="YeuCauMuaHang" />
        <div class="row">
            <div class="mr-1" style="font-weight: bold">Lịch sử huỷ duyệt:</div>
            <div v-for="yc in YeuCauMuaHang.duyetYCMHs" :key="yc.id">
                <div v-if="yc.approvalStatus == 'MustRevise'" class="row">
                    <div class="mr-2">
                        ({{ yc.tenNhanVien }}: {{ yc.comment }})
                    </div>
                </div>
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
    DxTotalItem,
    DxEditing,
} from 'devextreme-vue/data-grid'
import { mapGetters, mapState } from 'vuex'
import DxValidator, { DxRequiredRule } from 'devextreme-vue/validator'
import DxValidationGroup from 'devextreme-vue/validation-group'
import { DxAutocomplete } from 'devextreme-vue/autocomplete'
import dnmh from '~/components/dnmh.vue'
import lichSuDuyet from '~/components/lichSuDuyet.vue'
import moment from 'moment'

export default {
    components: {
        DxSelectBox,
        DxTextBox,
        DxDateBox,
        DxDataGrid,
        DxColumn,
        DxTotalItem,
        DxNumberBox,
        DxButton,
        DxLookup,
        DxSummary,
        DxEditing,
        DxValidator,
        DxRequiredRule,
        DxValidationGroup,
        DxAutocomplete,
        dnmh,
        lichSuDuyet,
    },
    data() {
        return {
            dataGridRefKey: 'datagridValid',
            formValidation: 'formValid',
            selectBoxRefKey: 'BoxRefKey',
            YeuCauMuaHang: {},
            loaiPhuPhi: [this.$t('Phát sinh'), this.$t('Theo tính toán')],
            disable: true,
            allowEdit: false,
            mnv: '',
        }
    },
    watch: {
        suaYeuCau: {
            handler(suaYeuCau) {
                if (suaYeuCau) {
                    this.YeuCauMuaHang = { ...suaYeuCau }
                    this.mnv = this.YeuCauMuaHang.maNhanVien
                }
            },
            immediate: true,
            deep: true,
        },
        refNumber: {
            handler(refNumber) {
                if (refNumber && this.disable == false) {
                    this.YeuCauMuaHang.soThamChieu = refNumber.soThamChieu
                    this.YeuCauMuaHang.maChiPhi = refNumber.maChiPhi
                }
            },
            immediate: true,
        },
    },
    computed: {
        ...mapState('muahang', ['listItem', 'refNumber']),
        ...mapState(['projectCode', 'hangMucTrienKhai']),
        ...mapGetters('muahang', ['suaYeuCau', 'danhSachHangHoa']),
        validationGroup() {
            return this.$refs[this.formValidation].instance
        },
        selectBox() {
            return this.$refs[this.selectBoxRefKey].instance
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
            this.YeuCauMuaHang.yeuCauMuaHangChiTiets = tmpData
        },
        editorPreparing(e) {
            if (e.dataField === 'tenHangHoa_DichVu') {
                e.editorName = 'dxAutocomplete'
                e.editorOptions = {
                    items: this.listItem,
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
            this.YeuCauMuaHang.yeuCauMuaHangChiTiets.forEach(
                (e) =>
                    (conditionsArray = [
                        e.tenHangHoa_DichVu !== '',
                        e.model_MaHieu !== '',
                        e.xuatXu_Hang !== '',
                        e.soLuong !== '',
                        e.donVi !== '',
                        e.donGiaTamTinh !== '',
                        e.maHangMucTrienKhai !== '',
                    ])
            )
            return conditionsArray.includes(true)
        },
        selectDuAn(e) {
            this.YeuCauMuaHang.maDuAn = e.selectedItem
            if (e.selectedItem !== null) {
                this.$store.dispatch('muahang/getRefNumber', e.selectedItem)
                this.$store.dispatch('getHangMuc', e.selectedItem)
            }
        },
        selectPhuPhi(e) {
            this.YeuCauMuaHang.phuPhi = e.selectedItem
        },
        clickSave() {
            let result2 = confirm('Do you want to submit?')
            let result = this.validationGroup.validate()
            let isArrEmpty = this.YeuCauMuaHang.yeuCauMuaHangChiTiets
            if (result2) {
                if (result.isValid && isArrEmpty.length > 0) {
                    setTimeout(() => {
                        if (this.checkArray()) {
                            this.$store.dispatch(
                                'muahang/editData',
                                this.YeuCauMuaHang
                            )
                            this.clickClose()
                        } else {
                            this.$toast.error(
                                `Failed! Not enough information to save`
                            )
                        }
                    }, 300)
                } else {
                    this.$toast.error(`Failed! Not enough information to save`)
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
            return moment(date).format('DD-MM-YYYY')
        },
    },
    created() {
        this.$store.dispatch('muahang/getItems')
        this.$store.dispatch('getProjectCode')
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
    padding: 9px;
    border-bottom: 1px solid black;
}
.bot {
    padding: 9px;
}
.xs-4 {
    flex-basis: 34.6%;
    max-width: 34.6%;
}
</style>
