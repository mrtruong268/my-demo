<template>
    <div class="container-md">
        <div class="row">
            <div class="xs9">
                <div class="row mb-3">
                    <div class="xs6 mr-3">
                        <DxTextBox
                            v-model="newItem.nguoiTao"
                            styling-mode="outlined"
                            :label="$t('Name')"
                            label-mode="floating"
                            class="pa-1"
                        />
                    </div>
                    <div class="xs6 mr-3">
                        <DxTextBox
                            v-model="newItem.nguoiTao"
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
                            v-model="newItem.phongBan"
                            styling-mode="outlined"
                            :label="$t('Position')"
                            label-mode="floating"
                            class="pa-1"
                        />
                    </div>
                    <div class="xs6 mr-3">
                        <DxTextBox
                            v-model="newItem.phongBan"
                            styling-mode="outlined"
                            :label="$t('Department')"
                            label-mode="floating"
                            class="pa-1"
                        />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="xs6 mr-3">
                        <DxTextBox
                            v-model="newItem.ngayDeTrinh"
                            styling-mode="outlined"
                            :label="$t('Submission date')"
                            label-mode="floating"
                            class="pa-1"
                        />
                    </div>
                    <div class="xs6 mr-3">
                        <DxTextBox
                            v-model="newItem.ngayCanHang"
                            styling-mode="outlined"
                            :label="$t('Delivery date')"
                            label-mode="floating"
                            class="pa-1"
                        />
                    </div>
                </div>
            </div>

            <div class="xs3">
                <div class="pb-3">
                    <DxTextBox
                        v-model="newItem.nguoiTao"
                        styling-mode="outlined"
                        :label="$t('Surcharge')"
                        label-mode="floating"
                        class="pa-1"
                    />
                </div>
                <div class="pb-3">
                    <DxTextBox
                        v-model="newItem.nguoiTao"
                        styling-mode="outlined"
                        :label="$t('Expense code')"
                        label-mode="floating"
                        class="pa-1"
                    />
                </div>
                <div class="pb-3">
                    <DxTextBox
                        v-model="newItem.soThamChieu"
                        styling-mode="outlined"
                        :label="$t('Reference number')"
                        label-mode="floating"
                        class="pa-1"
                    />
                </div>
            </div>
        </div>
        <div class="mb-3">
            <DxTextBox
                v-model="newItem.nguoiTao"
                styling-mode="outlined"
                :label="$t('Work location')"
                label-mode="floating"
                class="pa-1"
            />
        </div>
        <div class="mb-3">
            <div class="row justify-space-between">
                <h3>{{ $t('Add goods, services') }}</h3>
                <DxButton icon="mdi mdi-plus" class="mb-2" @click="addRow" />
            </div>
            <DxDataGrid
                id="gridContainer"
                :data-source="newItem.HangHoa"
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
                    data-field="idHangHoa"
                    :caption="$t('Id')"
                    width="60"
                />
                <DxColumn
                    data-field="tenHangHoa"
                    width="200"
                    :caption="$t('Goods, services')"
                />
                <DxColumn
                    data-field="soluong"
                    :caption="$t('Quantity')"
                    width="90"
                />
                <DxColumn data-field="donVi" :caption="$t('Unit')" width="80" />
                <DxColumn
                    data-field="hangMuc"
                    :caption="$t('Categories')"
                    width="100"
                />
                <DxColumn
                    data-field="xuatXu"
                    :caption="$t('Origin')"
                    width="100"
                />
                <DxColumn
                    data-field="maHieu"
                    :caption="$t('Model')"
                    width="100"
                />
                <DxColumn
                    data-field="tongCong"
                    :caption="$t('Total')"
                    width="100"
                />
                <DxColumn
                    data-field="soTien"
                    width="100"
                    :caption="$t('Amount of money')"
                />
                <DxColumn data-field="ghiChu" :caption="$t('Note')" />
            </DxDataGrid>
        </div>
        <div class="row justify-end align-center footer">
            <DxButton text="Lưu" type="default" styling-mode="contained" />
        </div>
    </div>
</template>

<script>
import DxSelectBox from 'devextreme-vue/select-box'
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
        DxButton,
        DxEditing,
    },
    data() {
        return {
            dataGridRefKey,
            newItem: {
                id: this.idv4(),
                soThamChieu: '',
                ngayDeTrinh: '',
                ngayCanHang: '',
                nguoiTao: '',
                phongBan: '',
                ghiChu: '',
                trangThai: '',
                HangHoa: [
                    {
                        tenHangHoa: '',
                        xuatXu: '',
                        maHieu: 0,
                        soluong: 0,
                        soTien: 0,
                        ghiChu: '',
                    },
                ],
            },
        }
    },
    watch: {
        edit() {
            if (this.edit) {
                this.newItem = Object.assign({}, this.edit)
            } else {
                this.newItem = {}
            }
        },
    },
    methods: {
        addRow() {
            return this.$refs[dataGridRefKey].instance.addRow()
        },
    },
}
</script>

<style scoped>
.btn-add {
    font-size: 28px;
}
</style>
