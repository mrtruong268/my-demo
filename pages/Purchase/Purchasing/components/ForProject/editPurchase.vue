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
                    v-model="YeuCauMuaHang.soThamChieu"
                    styling-mode="outlined"
                    :label="$t('Reference number')"
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
                <h3>{{ $t('List of goods and services') }}</h3>
                <DxButton icon="mdi mdi-plus" class="mb-2" @click="addRow" />
            </div>
            <DxDataGrid
                id="gridContainer"
                :data-source="danhSachHangHoa"
                :show-borders="true"
                height="calc(100vh - 450px)"
                :ref="dataGridRefKey"
                :remote-operations="true"
                :allow-column-resizing="true"
                :column-auto-width="true"
                :repaint-changes-only="true"
                :hover-state-enabled="true"
                @saved="saved"
            >
                <DxEditing
                    :allow-updating="true"
                    :allow-deleting="true"
                    :useIcons="true"
                    :confirm-delete="false"
                    new-row-position="last"
                    mode="cell"
                />
                <DxPaging :enabled="false" />
                <DxColumn
                    data-field="tenHangHoa_DichVu"
                    width="150"
                    :caption="$t('Goods, services')"
                >
                    <!-- <DxLookup
                        :data-source="getFilteredCities"
                        display-expr="Name"
                        value-expr="ID"
                    /> -->
                </DxColumn>
                <DxColumn
                    data-field="model_MaHieu"
                    :caption="$t('Model')"
                    width="80"
                >
                </DxColumn>
                <DxColumn
                    data-field="xuatXu_Hang"
                    :caption="$t('Origin')"
                    width="70"
                >
                </DxColumn>
                <DxColumn
                    data-field="soLuong"
                    :caption="$t('Quantity')"
                    width="90"
                />
                <DxColumn data-field="donVi" :caption="$t('Unit')" width="70">
                </DxColumn>
                <DxColumn
                    data-field="donGiaTamTinh"
                    :caption="$t('Estimated unit')"
                    width="150"
                    :format="customFormat"
                />
                <DxColumn
                    data-field="soTienTamTinh"
                    :caption="$t('Estimated amount')"
                    width="180"
                    :format="customFormat"
                    :calculate-cell-value="calculateAmount"
                />
                <DxColumn
                    data-field="maDuAn"
                    :caption="$t('Project code')"
                    width="120"
                />
                <DxColumn
                    data-field="maHangMucTrienKhai"
                    :caption="$t('Deployment category')"
                    width="170"
                />
                <DxColumn data-field="ghiChu" :caption="$t('Note')" />
                <!-- <DxColumn
                    :allow-header-filtering="false"
                    width="40"
                    cell-template="buttons-cell"
                />
                <template #buttons-cell="{ data }">
                    <p
                        class="mdi mdi-delete font-24"
                        style="cursor: pointer"
                        @click="clickDelete(data)"
                    ></p>
                </template> -->
            </DxDataGrid>
        </div>
        <div class="row justify-end">
            <DxButton
                text="Save"
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
import { mapGetters } from 'vuex'
import DxValidator, { DxRequiredRule } from 'devextreme-vue/validator'
import DxValidationGroup from 'devextreme-vue/validation-group'

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
    },
    data() {
        return {
            dataGridRefKey: 'datagridValid',
            formValidation: 'formValid',
            YeuCauMuaHang: {
                id: 0,
                tenNhanVien: '',
                maNhanVien: '',
                chucVu: '',
                phongBan: '',
                ngayDeTrinh: new Date().toISOString(),
                ngayCanHang: new Date().toISOString(),
                diaDiemLamViec: '',
                phuPhi: '',
                maChiPhi: '',
                soThamChieu: '',
                comment: '',
                tongTienTamTinh: 0,
                yeuCauMuaHangChiTiets: [
                    {
                        id: 0,
                        ycmhId: 0,
                        tenHangHoa_DichVu: '',
                        xuatXu_Hang: '',
                        model_MaHieu: '',
                        soLuong: 0,
                        donVi: '',
                        soTienTamTinh: 0,
                        donGiaTamTinh: 0,
                        maHangMucTrienKhai: '',
                        ghiChu: '',
                    },
                ],
            },
        }
    },
    watch: {
        suaYeuCau: {
            handler(suaYeuCau) {
                if (suaYeuCau) this.YeuCauMuaHang = { ...suaYeuCau.data }
            },
            deep: true,
        },
    },
    computed: {
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
        clickSave() {
            let result = this.validationGroup.validate()
            let checkEmpty = this.YeuCauMuaHang.yeuCauMuaHangChiTiets.some(
                (e) => e.tenHangHoa_DichVu !== ''
            )
            if (result.isValid && checkEmpty) {
                setTimeout(() => {
                    this.$store.dispatch('muahang/editData', this.YeuCauMuaHang)
                }, 100)
                this.$toast.success('Success!')
                this.$emit('invisible')
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
