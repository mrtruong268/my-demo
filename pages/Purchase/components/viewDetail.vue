<template>
    <div class="mt-3">
        <h3 class="mb-2">{{ $t('Information') }}</h3>
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
                class="xs2 mr-3"
            />
            <DxNumberBox
                v-model="YeuCauMuaHang.tongTienTamTinh"
                styling-mode="outlined"
                :label="$t('Estimated amount')"
                label-mode="floating"
                :read-only="true"
                class="xs2"
            />
        </div>
        <div class="mb-3">
            <div class="row justify-space-between">
                <h3 class="mb-3">{{ $t('Add goods, services') }}</h3>
            </div>
            <DxDataGrid
                id="gridContainer"
                :data-source="YeuCauMuaHang.yeuCauMuaHangChiTiets"
                :show-borders="true"
                height="100%"
                :ref="dataGridRefKey"
            >
                <DxPaging :enabled="false" />
                <DxColumn
                    data-field="tenHangHoa_DichVu"
                    width="200"
                    :caption="$t('Goods, services')"
                />
                <DxColumn
                    data-field="soLuong"
                    :caption="$t('Quantity')"
                    width="90"
                />
                <DxColumn data-field="donVi" :caption="$t('Unit')" width="80" />
                <DxColumn
                    data-field="maHangMucTrienKhai"
                    :caption="$t('Categories')"
                    width="120"
                />
                <DxColumn
                    data-field="xuatXu_Hang"
                    :caption="$t('Origin')"
                    width="100"
                />
                <DxColumn
                    data-field="model_MaHieu"
                    :caption="$t('Model')"
                    width="100"
                />
                <DxColumn
                    data-field="soTienTamTinh"
                    width="150"
                    :caption="$t('Amount of money')"
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
        view() {
            if (this.view) {
                this.YeuCauMuaHang = Object.assign({}, this.view.data)
            } else {
                this.resetData()
            }
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
                        maHangMucTrienKhai: '',
                        ghiChu: '',
                    },
                ],
            },
        }
    },
    methods: {
        resetData() {
            this.YeuCauMuaHang = {
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
                        maHangMucTrienKhai: '',
                        ghiChu: '',
                    },
                ],
            }
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
