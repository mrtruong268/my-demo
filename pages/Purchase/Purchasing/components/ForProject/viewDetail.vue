<template>
    <div>
        <div class="row align-center justify-space-between mb-3">
            <DxTextBox
                v-model="YeuCauMuaHang.tenNhanVien"
                styling-mode="outlined"
                :label="$t('Name')"
                label-mode="floating"
                :read-only="true"
                class="xs2 mr-3"
            />
            <DxTextBox
                v-model="YeuCauMuaHang.maNhanVien"
                styling-mode="outlined"
                :label="$t('Employee code')"
                label-mode="floating"
                :read-only="true"
                class="xs2 mr-3"
            />
            <DxTextBox
                v-model="YeuCauMuaHang.chucVu"
                styling-mode="outlined"
                :label="$t('Position')"
                :read-only="true"
                label-mode="floating"
                class="xs2 mr-3"
            />
            <DxTextBox
                v-model="YeuCauMuaHang.phongBan"
                styling-mode="outlined"
                :label="$t('Department')"
                label-mode="floating"
                :read-only="true"
                class="xs2 mr-3"
            />
            <DxTextBox
                v-model="YeuCauMuaHang.phuPhi"
                styling-mode="outlined"
                :label="$t('Surcharge')"
                label-mode="floating"
                :read-only="true"
                class="xs2 mr-3"
            />
            <DxTextBox
                v-model="YeuCauMuaHang.maChiPhi"
                styling-mode="outlined"
                :label="$t('Expense code')"
                label-mode="floating"
                :read-only="true"
                class="xs2"
            />
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
                :read-only="true"
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
                :read-only="true"
                label-mode="floating"
            />
            <DxTextBox
                v-model="YeuCauMuaHang.diaDiemLamViec"
                styling-mode="outlined"
                :label="$t('Work location')"
                label-mode="floating"
                :read-only="true"
                class="xs-4 mr-3"
            />
            <DxTextBox
                v-model="YeuCauMuaHang.soThamChieu"
                styling-mode="outlined"
                :label="$t('Reference number')"
                label-mode="floating"
                :read-only="true"
                class="xs-4"
            />
        </div>
        <div class="mb-3">
            <div class="row justify-center">
                <h3 class="mb-3">{{ $t('List of goods and services') }}</h3>
            </div>
            <DxDataGrid
                id="gridContainer"
                :data-source="YeuCauMuaHang.yeuCauMuaHangChiTiets"
                :show-borders="true"
                height="100%"
                :remote-operations="true"
                :allow-column-resizing="true"
                :column-auto-width="true"
                :repaint-changes-only="true"
                :ref="dataGridRefKey"
            >
                <DxPaging :enabled="true" />
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
            </DxDataGrid>
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
const dataGridRefKey = 'my-data-grid'

export default {
    props: {
        view: {
            type: Object,
            default: null,
        },
    },
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
    },
    watch: {
        view: {
            handler(view) {
                if (view) this.YeuCauMuaHang = { ...view }
            },
            deep: true,
            immediate: true,
        },
    },
    data() {
        return {
            dataGridRefKey,
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
    methods: {
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
    flex-basis: 34.5%;
    max-width: 34.5%;
}
</style>
