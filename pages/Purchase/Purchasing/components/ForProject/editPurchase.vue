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
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
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
                <DxTextBox
                    v-model="YeuCauMuaHang.phuPhi"
                    styling-mode="outlined"
                    :label="$t('Surcharge')"
                    label-mode="floating"
                    class="xs2 mr-3"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
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
                <DxTextBox
                    v-model="YeuCauMuaHang.maDuAn"
                    styling-mode="outlined"
                    :label="$t('Project code')"
                    label-mode="floating"
                    class="xs2 mr-3"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
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
                height="calc(100vh - 450px)"
                :ref="dataGridRefKey"
                :allow-column-resizing="true"
                :column-auto-width="true"
                :hover-state-enabled="true"
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
                />
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
        }
    },
    watch: {
        suaYeuCau: {
            handler(suaYeuCau) {
                if (suaYeuCau) this.YeuCauMuaHang = { ...suaYeuCau }
            },
            deep: true,
        },
    },
    computed: {
        ...mapState('muahang', ['listItem']),
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
            let arrTmp = []
            this.listItem.forEach((x) => arrTmp.push(x.name))
            if (e.dataField === 'tenHangHoa_DichVu') {
                e.editorName = 'dxAutocomplete'
                e.editorOptions = {
                    items: arrTmp,
                    value: e.value,
                    onValueChanged: function (ev) {
                        e.setValue(ev.value)
                    },
                }
                let found = this.listItem.find((q) => q.name == e.value)
                if (typeof found !== 'undefined') {
                    this.danhSachHangHoa.forEach((y) => {
                        y.model_MaHieu = found.model
                        y.donVi = found.donViTinh
                        y.donGiaTamTinh = found.donGiaVND
                    })
                } else {
                    this.danhSachHangHoa.forEach((y) => {
                        y.model_MaHieu = ''
                        y.donVi = ''
                        y.donGiaTamTinh = 0
                    })
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
                    ])
            )
            return !conditionsArray.includes(false)
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
