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
                    :read-only="true"
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
                    :read-only="true"
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
                    :read-only="true"
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
                    :read-only="true"
                >
                    <!-- <DxValidator>
                        <DxRequiredRule />
                    </DxValidator> -->
                </DxTextBox>
                <DxSelectBox
                    :items="loaiPhuPhi"
                    styling-mode="outlined"
                    :label="$t('Surcharge')"
                    label-mode="floating"
                    class="xs2 mr-3"
                    @selectionChanged="selectPhuPhi"
                />
                <!-- <DxValidator>
                        <DxRequiredRule validationMessageMode="auto" />
                    </DxValidator> -->
                <DxTextBox
                    v-model="YeuCauMuaHang.maChiPhi"
                    styling-mode="outlined"
                    :label="$t('Expense code')"
                    label-mode="floating"
                    :read-only="true"
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
                    :read-only="true"
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
                    :read-only="true"
                >
                    <!-- <DxValidator>
                        <DxRequiredRule />
                    </DxValidator> -->
                </DxTextBox>
                <DxSelectBox
                    :items="projectCode"
                    styling-mode="outlined"
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
                    :read-only="true"
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
                :show-column-lines="true"
                :allow-column-resizing="true"
                :column-auto-width="true"
                height="100%"
                :noDataText="$t('No data to display')"
                :ref="dataGridRefKey"
                @editorPreparing="editorPreparing"
            >
                <DxEditing
                    :allow-updating="true"
                    :allow-deleting="true"
                    :useIcons="true"
                    :confirmDelete="false"
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
    DxLookup,
    DxEditing,
} from 'devextreme-vue/data-grid'
import DxValidator, { DxRequiredRule } from 'devextreme-vue/validator'
import DxValidationGroup from 'devextreme-vue/validation-group'
import { DxAutocomplete } from 'devextreme-vue/autocomplete'
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
        DxLookup,
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
            selectBoxRefKey: 'BoxRefKey',
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
                maDuAn: '',
                soThamChieu: '',
                comment: '',
                yeuCauMuaHangChiTiets: [],
            },
            loaiPhuPhi: ['Phát sinh', 'Theo tính toán'],
        }
    },
    watch: {
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
        ...mapState(['userInfo', 'projectCode', 'hangMucTrienKhai']),
        validationGroup() {
            return this.$refs[this.formValidation].instance
        },
    },
    methods: {
        addRow() {
            let tmpAdd = {
                id: 0,
                ycmhId: 0,
                tenHangHoa_DichVu: '',
                xuatXu_Hang: '',
                model_MaHieu: '',
                soLuong: 0,
                donVi: '',
                donGiaTamTinh: 0,
                maHangMucTrienKhai: '',
                ghiChu: '',
            }
            this.YeuCauMuaHang.yeuCauMuaHangChiTiets.push(tmpAdd)
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
            var result = confirm('Do you want to submit?')
            // let result = this.validationGroup.validate()
            if (result) {
                if (this.checkArray()) {
                    setTimeout(() => {
                        this.$store.dispatch(
                            'muahang/postData',
                            this.YeuCauMuaHang
                        )
                        this.resetData()
                    }, 200)
                } else {
                    this.$toast.error(
                        `Failed! One or more validation errors occurred`
                    )
                }
            }
        },
        selectDuAn(e) {
            this.YeuCauMuaHang.maDuAn = e.selectedItem
            this.$store.dispatch('muahang/getRefNumber', e.selectedItem)
            this.$store.dispatch('getHangMuc', e.selectedItem)
        },
        selectPhuPhi(e) {
            this.YeuCauMuaHang.phuPhi = e.selectedItem
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
        resetData() {
            this.YeuCauMuaHang = {
                id: 0,
                tenNhanVien: this.userInfo.tenNhanVien,
                maNhanVien: this.userInfo.maNhanVien,
                chucVu: this.userInfo.chucVu,
                phongBan: this.userInfo.phongBan,
                ngayDeTrinh: new Date().toISOString(),
                ngayCanHang: new Date().toISOString(),
                diaDiemLamViec: this.userInfo.diaDiemLamViec,
                phuPhi: '',
                maChiPhi: '',
                maDuAn: '',
                soThamChieu: '',
                comment: '',
                yeuCauMuaHangChiTiets: [],
            }
        },
    },
    created() {
        this.$store.dispatch('muahang/getItems')
        this.$store.dispatch('getProjectCode')
        this.YeuCauMuaHang.tenNhanVien = this.userInfo.tenNhanVien
        this.YeuCauMuaHang.maNhanVien = this.userInfo.maNhanVien
        this.YeuCauMuaHang.chucVu = this.userInfo.chucVu
        this.YeuCauMuaHang.phongBan = this.userInfo.phongBan
        this.YeuCauMuaHang.diaDiemLamViec = this.userInfo.diaDiemLamViec
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
