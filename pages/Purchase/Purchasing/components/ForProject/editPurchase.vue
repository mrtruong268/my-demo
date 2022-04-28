<template>
    <div>
        <h3 class="mb-2">{{ $t('Information') }}</h3>
        <div class="row align-center justify-space-between mb-3">
            <DxTextBox
                v-model="YeuCauMuaHang.tenNhanVien"
                styling-mode="outlined"
                :label="$t('Name')"
                label-mode="floating"
                class="xs2 mr-3"
            />
            <DxTextBox
                v-model="YeuCauMuaHang.maNhanVien"
                styling-mode="outlined"
                :label="$t('Employee code')"
                label-mode="floating"
                class="xs2 mr-3"
            />
            <DxTextBox
                v-model="YeuCauMuaHang.chucVu"
                styling-mode="outlined"
                :label="$t('Position')"
                label-mode="floating"
                class="xs2 mr-3"
            />
            <DxTextBox
                v-model="YeuCauMuaHang.phongBan"
                styling-mode="outlined"
                :label="$t('Department')"
                label-mode="floating"
                class="xs2 mr-3"
            />
            <DxTextBox
                v-model="YeuCauMuaHang.phuPhi"
                styling-mode="outlined"
                :label="$t('Surcharge')"
                label-mode="floating"
                class="xs2 mr-3"
            />
            <DxTextBox
                v-model="YeuCauMuaHang.maChiPhi"
                styling-mode="outlined"
                :label="$t('Expense code')"
                label-mode="floating"
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
            />
            <DxTextBox
                v-model="YeuCauMuaHang.soThamChieu"
                styling-mode="outlined"
                :label="$t('Reference number')"
                label-mode="floating"
                class="xs-4"
            />
        </div>
        <div class="mb-3">
            <div class="row justify-space-between">
                <h3>{{ $t('Add goods, services') }}</h3>
                <DxButton icon="mdi mdi-plus" class="mb-2" @click="addRow" />
            </div>
            <DxDataGrid
                id="gridContainer"
                :data-source="danhSachHangHoa"
                :show-borders="true"
                height="340px"
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
                    mode="cell"
                />
                <DxPaging :enabled="false" />
                <DxColumn
                    data-field="tenHangHoa_DichVu"
                    width="150"
                    :caption="$t('Name')"
                />
                <DxColumn
                    data-field="soLuong"
                    :caption="$t('Quantity')"
                    width="90"
                />
                <DxColumn data-field="donVi" :caption="$t('Unit')" width="50" />
                <DxColumn
                    data-field="donGiaTamTinh"
                    :caption="$t('Estimated unit price')"
                    width="150"
                    :format="customFormat"
                />
                <DxColumn
                    data-field="maHangMucTrienKhai"
                    :caption="$t('Categories')"
                    width="90"
                />
                <DxColumn
                    data-field="xuatXu_Hang"
                    :caption="$t('Origin')"
                    width="70"
                />
                <DxColumn
                    data-field="model_MaHieu"
                    :caption="$t('Model')"
                    width="70"
                />
                <DxColumn
                    data-field="soTienTamTinh"
                    width="150"
                    :caption="$t('Amount')"
                    :format="customFormat"
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
        <div class="button">
            <DxButton
                text="Lưu"
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
const dataGridRefKey = 'my-data-grid'

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
    },
    methods: {
        addRow() {
            return this.$refs[dataGridRefKey].instance.addRow()
        },
        saved() {
            let tmpData =
                this.$refs[dataGridRefKey].instance.getDataSource()._items
            this.YeuCauMuaHang.yeuCauMuaHangChiTiets = tmpData
        },
        clickSave() {
            setTimeout(() => {
                this.$store.dispatch('muahang/editData', this.YeuCauMuaHang)
            }, 100)
            this.$emit('invisible')
        },
        clickDelete(e) {
            this.$store.dispatch('muahang/deletePrItem', e.data.id)
            setTimeout(() => {
                this.$refs[dataGridRefKey].instance.getDataSource().reload()
            }, 200)
        },
        customFormat(e) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(e)
        },
    },
}
</script>

<style scoped>
.btn-add {
    font-size: 28px;
}
.button {
    position: absolute;
    bottom: 24px;
    right: 24px;
}
.xs-4 {
    flex-basis: 34.6%;
    max-width: 34.6%;
}
</style>
