<template>
    <div class="container-md">
        <div class="row">
            <div class="xs9">
                <div class="row mb-3">
                    <div class="xs6 mr-3">
                        <DxTextBox
                            v-model="YeuCauMuaHang.tenNhanVien"
                            styling-mode="outlined"
                            :label="$t('Name')"
                            label-mode="floating"
                            class="pa-1"
                        />
                    </div>
                    <div class="xs6 mr-3">
                        <DxTextBox
                            v-model="YeuCauMuaHang.maNhanVien"
                            styling-mode="outlined"
                            :label="$t('Employee code')"
                            label-mode="floating"
                            class="pa-1"
                        />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="xs6 mr-3">
                        <DxTextBox
                            v-model="YeuCauMuaHang.chucVu"
                            styling-mode="outlined"
                            :label="$t('Position')"
                            label-mode="floating"
                            class="pa-1"
                        />
                    </div>
                    <div class="xs6 mr-3">
                        <DxTextBox
                            v-model="YeuCauMuaHang.phongBan"
                            styling-mode="outlined"
                            :label="$t('Department')"
                            label-mode="floating"
                            class="pa-1"
                        />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="xs6 mr-3">
                        <DxDateBox
                            v-model="YeuCauMuaHang.ngayDeTrinh"
                            displayFormat="dd/MM/yyyy"
                            :use-mask-behavior="true"
                            validationMessageMode="always"
                            styling-mode="outlined"
                            :label="$t('Submission date')"
                            label-mode="floating"
                            class="pa-1"
                        >
                        </DxDateBox>
                    </div>
                    <div class="xs6 mr-3">
                        <DxDateBox
                            v-model="YeuCauMuaHang.ngayCanHang"
                            displayFormat="dd/MM/yyyy"
                            :use-mask-behavior="true"
                            validationMessageMode="always"
                            styling-mode="outlined"
                            :label="$t('Submission date')"
                            label-mode="floating"
                            class="pa-1"
                        >
                        </DxDateBox>
                    </div>
                </div>
            </div>

            <div class="xs3">
                <div class="pb-3">
                    <DxTextBox
                        v-model="YeuCauMuaHang.phuPhi"
                        styling-mode="outlined"
                        :label="$t('Surcharge')"
                        label-mode="floating"
                        class="pa-1"
                    />
                </div>
                <div class="pb-3">
                    <DxTextBox
                        v-model="YeuCauMuaHang.maChiPhi"
                        styling-mode="outlined"
                        :label="$t('Expense code')"
                        label-mode="floating"
                        class="pa-1"
                    />
                </div>
                <div class="pb-3">
                    <DxTextBox
                        v-model="YeuCauMuaHang.soThamChieu"
                        styling-mode="outlined"
                        :label="$t('Reference number')"
                        label-mode="floating"
                        class="pa-1"
                    />
                </div>
            </div>
        </div>

        <div class="mb-3 row">
            <div class="xs9 mr-3">
                <DxTextBox
                    v-model="YeuCauMuaHang.diaDiemLamViec"
                    styling-mode="outlined"
                    :label="$t('Work location')"
                    label-mode="floating"
                    class="pa-1"
                />
            </div>
            <div class="xs3">
                <DxNumberBox
                    v-model="YeuCauMuaHang.tongTienTamTinh"
                    :show-spin-buttons="true"
                    styling-mode="outlined"
                    :label="$t('Estimated total amount')"
                    label-mode="floating"
                    class="pa-1"
                />
            </div>
        </div>

        <div class="mb-3">
            <div class="row justify-space-between">
                <h3>{{ $t('Add goods, services') }}</h3>
                <DxButton icon="mdi mdi-plus" class="mb-2" @click="addRow" />
            </div>
            <DxDataGrid
                id="gridContainer"
                :data-source="YeuCauMuaHang.yeuCauMuaHangChiTiets"
                :show-borders="true"
                height="100%"
                :ref="dataGridRefKey"
            >
                <DxEditing
                    :allow-updating="true"
                    :allow-deleting="true"
                    :confirmDelete="false"
                    :useIcons="true"
                    mode="cell"
                />
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
                    width="100"
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
                    width="100"
                    :caption="$t('Amount of money')"
                />
                <DxColumn data-field="ghiChu" :caption="$t('Note')" />
            </DxDataGrid>
        </div>
        <div class="row justify-end align-center footer">
            <div v-if="YeuCauMuaHang.trangThai === 'Approved'">
                <DxButton
                    @click="clickAdd"
                    text="Hoàn duyệt"
                    type="default"
                    styling-mode="contained"
                    class="mr-4"
                />
            </div>
            <div v-else>
                <DxButton
                    @click="clickAdd"
                    text="Duyệt"
                    type="success"
                    styling-mode="contained"
                    class="mr-4"
                />
                <DxButton
                    @click="clickAdd"
                    text="Không duyệt"
                    type="danger"
                    styling-mode="contained"
                />
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
    DxPaging,
    DxEditing,
} from 'devextreme-vue/data-grid'
const dataGridRefKey = 'my-data-grid'

export default {
    props: {
        edit: {
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
    watch: {
        edit() {
            if (this.edit) {
                this.YeuCauMuaHang = Object.assign({}, this.edit)
            } else {
                this.YeuCauMuaHang = {}
            }
        },
    },
    methods: {
        addRow() {
            return this.$refs[dataGridRefKey].instance.addRow()
        },
        clickAdd() {
            this.$store.dispatch('postData', this.YeuCauMuaHang)
        },
    },
}
</script>

<style scoped>
.btn-add {
    font-size: 28px;
}
</style>
