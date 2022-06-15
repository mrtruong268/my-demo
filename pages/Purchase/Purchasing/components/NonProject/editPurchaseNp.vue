<template>
    <div>
        <DxValidationGroup :ref="formValidation">
            <div class="row align-center justify-space-between mb-3">
                <DxTextBox
                    v-model="YeuCauMuaHang.tenNhanVien"
                    styling-mode="outlined"
                    :label="$t('Họ và tên')"
                    label-mode="floating"
                    class="xs2 mr-3"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
                <DxTextBox
                    v-model="YeuCauMuaHang.maNhanVien"
                    styling-mode="outlined"
                    :label="$t('Mã nhân viên')"
                    label-mode="floating"
                    class="xs2 mr-3"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
                <DxTextBox
                    v-model="YeuCauMuaHang.chucVu"
                    styling-mode="outlined"
                    :label="$t('Chức vụ')"
                    label-mode="floating"
                    class="xs2 mr-3"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
                <DxTextBox
                    v-model="YeuCauMuaHang.phongBan"
                    styling-mode="outlined"
                    :label="$t('Phòng ban')"
                    label-mode="floating"
                    class="xs2 mr-3"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
                <DxSelectBox
                    :items="loaiPhuPhi"
                    :value="YeuCauMuaHang.phuPhi"
                    styling-mode="outlined"
                    :label="$t('Phụ phí')"
                    label-mode="floating"
                    class="xs2 mr-3"
                    @selectionChanged="selectPhuPhi"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxSelectBox>
                <DxTextBox
                    v-model="YeuCauMuaHang.maChiPhi"
                    styling-mode="outlined"
                    :label="$t('Mã chi phí')"
                    label-mode="floating"
                    class="xs2"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
            </div>
            <div class="row align-center mb-3">
                <DxDateBox
                    v-model="YeuCauMuaHang.ngayDeTrinh"
                    displayFormat="dd/MM/yyyy"
                    :use-mask-behavior="true"
                    validationMessageMode="always"
                    styling-mode="outlined"
                    :label="$t('Ngày đệ trình')"
                    label-mode="floating"
                    class="xs2 mr-3"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxDateBox>
                <DxDateBox
                    v-model="YeuCauMuaHang.ngayCanHang"
                    displayFormat="dd/MM/yyyy"
                    :use-mask-behavior="true"
                    validationMessageMode="always"
                    styling-mode="outlined"
                    :label="$t('Ngày cần hàng')"
                    class="xs2 mr-3"
                    label-mode="floating"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxDateBox>
                <DxTextBox
                    v-model="YeuCauMuaHang.diaDiemLamViec"
                    styling-mode="outlined"
                    :label="$t('Địa điểm làm việc')"
                    label-mode="floating"
                    class="xs-4 mr-3"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
                <DxTextBox
                    v-model="YeuCauMuaHang.soThamChieu"
                    styling-mode="outlined"
                    :label="$t('Số tham chiếu')"
                    label-mode="floating"
                    class="xs-4"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
            </div>
        </DxValidationGroup>

        <div class="mb-3">
            <div class="row justify-space-between">
                <h3>{{ $t('Danh sách hàng hóa, dịch vụ cần mua') }}</h3>
                <DxButton
                    icon="mdi mdi-plus"
                    class="mb-2"
                    @click="addRow"
                    :text="$t('Thêm')"
                />
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
                height="calc(100vh - 450px)"
                :ref="dataGridRefKey"
                @saved="saved"
                @editorPreparing="editorPreparing"
            >
                <DxEditing
                    :allow-updating="true"
                    :allow-deleting="true"
                    :useIcons="true"
                    :confirm-delete="false"
                    mode="cell"
                    new-row-position="last"
                />
                <DxPaging :enabled="false" />
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
            </DxDataGrid>
        </div>
        <div class="row justify-end">
            <DxButton
                :text="$t('Lưu')"
                type="default"
                styling-mode="contained"
                @click="clickSave"
            />
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
    DxPaging,
    DxEditing,
} from 'devextreme-vue/data-grid'
import { mapGetters, mapState } from 'vuex'
import DxValidator, { DxRequiredRule } from 'devextreme-vue/validator'
import DxValidationGroup from 'devextreme-vue/validation-group'
import { DxAutocomplete } from 'devextreme-vue/autocomplete'

export default {
    components: {
        DxSelectBox,
        DxTextBox,
        DxDateBox,
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxNumberBox,
        DxButton,
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
        }
    },
    watch: {
        suaYeuCauNp: {
            handler(suaYeuCauNp) {
                if (suaYeuCauNp) this.YeuCauMuaHang = { ...suaYeuCauNp }
            },
            deep: true,
        },
        refNumber: {
            handler(refNumber) {
                if (refNumber) {
                    this.YeuCauMuaHang.soThamChieu = refNumber.soThamChieu
                    this.YeuCauMuaHang.maChiPhi = refNumber.maChiPhi
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
                (e) =>
                    (conditionsArray = [
                        e.tenHangHoa_DichVu !== '',
                        e.soLuong !== '',
                        e.donVi !== '',
                        e.donGiaTamTinh !== '',
                        e.soTienTamTinh !== '',
                    ])
            )
            return !conditionsArray.includes(false)
        },
        selectPhuPhi(e) {
            this.YeuCauMuaHang.phuPhi = e.selectedItem
        },
        clickSave() {
            let result = this.validationGroup.validate()
            let result2 = confirm('Do you want to submit?')
            if (result2) {
                if (result.isValid && this.checkArray()) {
                    setTimeout(() => {
                        this.$store.dispatch(
                            'muahang/editDataNp',
                            this.YeuCauMuaHang
                        )
                        this.$emit('invisible')
                    }, 200)
                } else {
                    this.$toast.error(
                        `Failed! One or more validation errors occurred`
                    )
                }
            }
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
    },
    created() {
        this.$store.dispatch('muahang/getItemsNp')
    },
}
</script>

<style scoped>
.btn-add {
    font-size: 28px;
}
.xs-4 {
    flex-basis: 34.6%;
    max-width: 34.6%;
}
</style>
