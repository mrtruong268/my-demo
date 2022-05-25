<template>
    <div class="container-md">
        <DxValidationGroup :ref="formValidation">
            <div class="row align-center justify-space-between mb-3">
                <DxTextBox
                    v-model="YeuCauMuaHang.tenNhanVien"
                    styling-mode="outlined"
                    :label="$t('Name')"
                    label-mode="floating"
                    class="xs2 mr-3"
                >
                    <!-- <DxValidator>
                        <DxRequiredRule />
                    </DxValidator> -->
                </DxTextBox>
                <DxTextBox
                    v-model="YeuCauMuaHang.maNhanVien"
                    styling-mode="outlined"
                    :label="$t('Employee code')"
                    label-mode="floating"
                    class="xs2 mr-3"
                >
                    <!-- <DxValidator>
                        <DxRequiredRule />
                    </DxValidator> -->
                </DxTextBox>
                <DxTextBox
                    v-model="YeuCauMuaHang.chucVu"
                    styling-mode="outlined"
                    :label="$t('Position')"
                    label-mode="floating"
                    class="xs2 mr-3"
                >
                    <!-- <DxValidator>
                        <DxRequiredRule />
                    </DxValidator> -->
                </DxTextBox>
                <DxTextBox
                    v-model="YeuCauMuaHang.phongBan"
                    styling-mode="outlined"
                    :label="$t('Department')"
                    label-mode="floating"
                    class="xs2 mr-3"
                >
                    <!-- <DxValidator>
                        <DxRequiredRule />
                    </DxValidator> -->
                </DxTextBox>
                <DxTextBox
                    v-model="YeuCauMuaHang.phuPhi"
                    styling-mode="outlined"
                    :label="$t('Surcharge')"
                    label-mode="floating"
                    class="xs2 mr-3"
                >
                    <!-- <DxValidator>
                        <DxRequiredRule />
                    </DxValidator> -->
                </DxTextBox>
                <DxTextBox
                    v-model="YeuCauMuaHang.maChiPhi"
                    styling-mode="outlined"
                    :label="$t('Expense code')"
                    label-mode="floating"
                    class="xs2"
                >
                    <!-- <DxValidator>
                        <DxRequiredRule />
                    </DxValidator> -->
                </DxTextBox>
            </div>
            <div class="row align-center mb-2">
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
                    <!-- <DxValidator>
                        <DxRequiredRule />
                    </DxValidator> -->
                </DxTextBox>
                <DxTextBox
                    v-model="YeuCauMuaHang.soThamChieu"
                    styling-mode="outlined"
                    :label="$t('Reference number')"
                    label-mode="floating"
                    class="xs-4"
                >
                    <!-- <DxValidator>
                        <DxRequiredRule />
                    </DxValidator> -->
                </DxTextBox>
            </div>
        </DxValidationGroup>

        <div>
            <div class="row mb-2 justify-center">
                <h3>{{ $t('List of goods and services') }}</h3>
            </div>
            <DxDataGrid
                id="gridContainer"
                :data-source="YeuCauMuaHang.yeuCauMuaHangChiTiets"
                :show-borders="true"
                height="100%"
                remote-operations="true"
                :allow-column-resizing="true"
                :column-auto-width="true"
                :ref="dataGridRefKey"
            >
                <!-- @saving="saving" -->
                <DxEditing
                    :allow-updating="true"
                    :allow-deleting="true"
                    :confirmDelete="false"
                    :useIcons="true"
                    mode="cell"
                    new-row-position="last"
                />
                <DxPaging :enabled="false" />
                <DxColumn
                    data-field="tenHangHoa_DichVu"
                    :caption="$t('Goods, services')"
                >
                    <DxLookup
                        :data-source="listItem"
                        display-expr="name"
                        value-expr="name"
                    />
                </DxColumn>
                <DxColumn data-field="model_MaHieu" :caption="$t('Model')">
                </DxColumn>
                <DxColumn data-field="xuatXu_Hang" :caption="$t('Origin')">
                </DxColumn>
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
                <DxColumn data-field="maDuAn" :caption="$t('Project code')" />
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
            <DxButton
                icon="mdi mdi-plus"
                :use-submit-behavior="true"
                @click="addRow"
                styling-mode="text"
                :text="$t('Add')"
            />
        </div>

        <div class="row justify-end">
            <DxButton
                :text="$t('Save')"
                type="default"
                styling-mode="contained"
                @click="clickAdd"
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
    DxLookup,
} from 'devextreme-vue/data-grid'
import DxValidator, { DxRequiredRule } from 'devextreme-vue/validator'
import DxValidationGroup from 'devextreme-vue/validation-group'
import { mapState } from 'vuex'

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
        DxLookup,
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
    computed: {
        ...mapState('muahang', ['listItem']),
        ...mapState(['userInfo']),
        validationGroup() {
            return this.$refs[this.formValidation].instance
        },
    },
    methods: {
        addRow() {
            return this.$refs[this.dataGridRefKey].instance.addRow()
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
        clickAdd() {
            if (this.checkArray()) {
                this.$store.dispatch('muahang/postData', this.YeuCauMuaHang)
                this.$toast.success('Success!')
                this.resetData()
            } else {
                this.$toast.error('One or more validation errors occurred!')
            }
        },
        calculateAmount(e) {
            return e.soLuong * e.donGiaTamTinh
        },
        customFormat(e) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(e)
        },
        // saving(e) {
        //     if (e.parentType == 'dataRow' && e.dataField == 'CustomerID') {
        //         e.editorOptions.onValueChanged = function (arg) {
        //             e.setValue(arg.value)
        //             var entireObject = arg.component.option('selectedItem')
        //             e.component.cellValue(
        //                 e.row.rowIndex,
        //                 'ShipCountry',
        //                 entireObject.CustomerID +
        //                     ' ' +
        //                     entireObject.CustomerName
        //             )
        //         }
        //     }
        // },
        resetData() {
            this.YeuCauMuaHang = {
                id: 0,
                tenNhanVien: this.userInfo.tenNhanVien,
                maNhanVien: this.userInfo.maNhanVien,
                chucVu: this.userInfo.chucVu,
                phongBan: this.userInfo.phongBan,
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
            }
        },
    },
    created() {
        this.$store.dispatch('muahang/getItems')
        this.YeuCauMuaHang.tenNhanVien = this.userInfo.tenNhanVien
        this.YeuCauMuaHang.maNhanVien = this.userInfo.maNhanVien
        this.YeuCauMuaHang.chucVu = this.userInfo.chucVu
        this.YeuCauMuaHang.phongBan = this.userInfo.phongBan
    },
}
</script>

<style scoped>
.btn-add {
    font-size: 28px;
}
.btn-save {
    background-color: #0986c5;
    color: white;
    padding: 8px 0;
    width: 60px;
    text-align: center;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.2s linear 0s;
}
.btn-save:hover {
    color: #0986c5;
    background-color: #f1f1f1;
    transition: all 0.2s linear 0s;
}
.xs-4 {
    flex-basis: 34.6%;
    max-width: 34.6%;
}
</style>
