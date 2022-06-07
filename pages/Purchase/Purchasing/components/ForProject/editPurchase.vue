<template>
    <div>
        <DxValidationGroup :ref="formValidation">
            <div class="row align-center justify-space-between mb-3">
                <DxTextBox
                    v-model="YeuCauMuaHang.tenNhanVien"
                    styling-mode="outlined"
                    :label="$t('Name')"
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
                    :label="$t('Employee code')"
                    label-mode="floating"
                    class="xs2 mr-3"
                >
                </DxTextBox>
                <DxTextBox
                    v-model="YeuCauMuaHang.chucVu"
                    styling-mode="outlined"
                    :label="$t('Position')"
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
                    :label="$t('Department')"
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
                    :label="$t('Surcharge')"
                    label-mode="floating"
                    class="xs2 mr-3"
                    @selectionChanged="selectPhuPhi"
                />
                <DxTextBox
                    v-model="YeuCauMuaHang.maChiPhi"
                    styling-mode="outlined"
                    :label="$t('Expense code')"
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
                    :label="$t('Submission date')"
                    label-mode="floating"
                    class="xs2 mr-3"
                />
                <DxDateBox
                    v-model="YeuCauMuaHang.ngayCanHang"
                    displayFormat="dd/MM/yyyy"
                    :use-mask-behavior="true"
                    validationMessageMode="always"
                    styling-mode="outlined"
                    :label="$t('Delivery date')"
                    class="xs2 mr-3"
                    label-mode="floating"
                />
                <DxTextBox
                    v-model="YeuCauMuaHang.diaDiemLamViec"
                    styling-mode="outlined"
                    :label="$t('Work location')"
                    label-mode="floating"
                    class="xs-4 mr-3"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
                <DxSelectBox
                    :items="projectCode"
                    styling-mode="outlined"
                    :value="YeuCauMuaHang.maDuAn"
                    :label="$t('Project code')"
                    label-mode="floating"
                    class="xs2 mr-3"
                    @selectionChanged="selectDuAn"
                    :ref="selectBoxRefKey"
                />
                <DxTextBox
                    v-model="YeuCauMuaHang.soThamChieu"
                    styling-mode="outlined"
                    :label="$t('Reference number')"
                    label-mode="floating"
                    class="xs2"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
            </div>
        </DxValidationGroup>

        <div class="mb-3">
            <div class="row justify-space-between">
                <h3>{{ $t('List of goods and services') }}</h3>
                <DxButton
                    icon="mdi mdi-plus"
                    class="mb-2"
                    @click="addRow"
                    :text="$t('Add')"
                />
            </div>
            <DxDataGrid
                id="gridContainer"
                :data-source="danhSachHangHoa"
                :show-borders="true"
                :show-column-lines="true"
                :allow-column-resizing="true"
                :column-auto-width="true"
                :hover-state-enabled="true"
                :noDataText="$t('No data to display')"
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
                    :caption="$t('Goods, services')"
                />
                <DxColumn data-field="model_MaHieu" :caption="$t('Model')" />
                <DxColumn data-field="xuatXu_Hang" :caption="$t('Origin')" />
                <DxColumn data-field="soLuong" :caption="$t('Quantity')" />
                <DxColumn data-field="donVi" :caption="$t('Unit')" />
                <DxColumn
                    data-field="donGiaTamTinh"
                    :caption="$t('Estimated unit')"
                    :format="customFormat"
                />
                <DxColumn
                    data-field="soTienTamTinh"
                    :caption="$t('Estimated amount')"
                    :format="customFormat"
                    :calculate-cell-value="calculateAmount"
                />
                <DxColumn
                    data-field="maHangMucTrienKhai"
                    :caption="$t('Deployment category')"
                >
                    <DxLookup :data-source="hangMucTrienKhai" />
                </DxColumn>
                <DxColumn
                    data-field="ghiChu"
                    :caption="$t('Note')"
                    width="250"
                />
            </DxDataGrid>
        </div>
        <div class="row justify-end">
            <DxButton
                :text="$t('Save')"
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
            loaiPhuPhi: ['Phát sinh', 'Theo tính toán'],
        }
    },
    watch: {
        suaYeuCau: {
            handler(suaYeuCau) {
                if (suaYeuCau) this.YeuCauMuaHang = { ...suaYeuCau }
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
        ...mapState('muahang', ['listItem', 'refNumber']),
        ...mapState(['projectCode', 'hangMucTrienKhai']),
        ...mapGetters('muahang', ['suaYeuCau', 'danhSachHangHoa']),
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
            this.YeuCauMuaHang.yeuCauMuaHangChiTiets = tmpData
        },
        editorPreparing(e) {
            console.log(this.danhSachHangHoa)
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
                        e.donVi !== '',
                        e.soTienTamTinh !== '',
                        e.donGiaTamTinh !== '',
                        e.maHangMucTrienKhai !== '',
                    ])
            )
            return !conditionsArray.includes(false)
        },
        selectDuAn(e) {
            this.YeuCauMuaHang.maDuAn = e.selectedItem
            this.$store.dispatch('muahang/getRefNumber', e.selectedItem)
            this.$store.dispatch('getHangMuc', e.selectedItem)
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
                            'muahang/editData',
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
        this.$store.dispatch('muahang/getItems')
        this.$store.dispatch('getProjectCode')
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
