<template>
    <div>
        <div class="mb-2">
            <div class="row align-center mb-2">
                <DxSelectBox
                    :items="maQuyTrinh"
                    styling-mode="outlined"
                    :label="$t('Mã quy trình')"
                    label-mode="floating"
                    class="mr-3 xs6"
                    :ref="refMaQuyTrinh"
                    @selectionChanged="selectMaQuyTrinh"
                />
                <DxSelectBox
                    :dataSource="DanhSachCongTy"
                    displayExpr="name"
                    styling-mode="outlined"
                    :label="$t('Công ty tạo đơn')"
                    label-mode="floating"
                    class="xs6"
                    :ref="refCongTyTaoDon"
                    @selectionChanged="selectCongTyTaoDon"
                />
            </div>
            <div class="row align-center mb-2">
                <DxSelectBox
                    :dataSource="DanhSachCongTy"
                    displayExpr="name"
                    styling-mode="outlined"
                    :label="$t('Công ty duyệt đơn')"
                    label-mode="floating"
                    class="mr-3 xs6"
                    :ref="refCongTyDuyetDon"
                    @selectionChanged="selectCongTyDuyetDon"
                />
                <DxSelectBox
                    :dataSource="DsPhongBanCongTy"
                    displayExpr="name"
                    styling-mode="outlined"
                    :label="$t('Phòng duyệt đơn')"
                    label-mode="floating"
                    class="xs6"
                    :ref="refPhongDuyetDon"
                    @selectionChanged="selectPhongDuyetDon"
                />
            </div>
            <div class="row mb-3">
                <DxTextBox
                    v-model="quyTrinh.vaiTroDuyet"
                    styling-mode="outlined"
                    :label="$t('Vai trò duyệt')"
                    class="xs12"
                    label-mode="floating"
                />
            </div>
            <DxDataGrid
                id="gridContainer"
                :data-source="quyTrinhDuyetNoiBo"
                :show-borders="true"
                :show-column-lines="true"
                :show-row-lines="true"
                :allow-column-resizing="true"
                :column-auto-width="true"
                :hover-state-enabled="true"
                :noDataText="$t('Không có dữ liệu')"
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
                <DxColumn
                    data-field="tenPhongBanDuyetDon"
                    :caption="$t('Phòng ban')"
                />
                <DxColumn
                    data-field="tenNhanVienDuyetDon"
                    :caption="$t('Họ và tên')"
                />
                <DxColumn
                    data-field="chucVuNhanVienDuyetDon"
                    :caption="$t('Chức vụ')"
                />
                <DxColumn
                    data-field="idProjectFilter"
                    :caption="$t('idProjectFilter')"
                />
            </DxDataGrid>
            <div class="row justify-space-between mt-1">
                <DxButton
                    icon="mdi mdi-plus"
                    styling-mode="text"
                    :text="$t('Thêm')"
                    @click="addRow"
                />
            </div>
        </div>
        <div class="row justify-end">
            <DxButton
                :text="$t('Lưu')"
                type="default"
                styling-mode="contained"
                @click="clickSave"
            />
        </div>
    </div>
</template>

<script>
import DxSelectBox from 'devextreme-vue/select-box'
import DxTextBox from 'devextreme-vue/text-box'
import {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxEditing,
    DxLookup,
    DxFilterRow,
} from 'devextreme-vue/data-grid'
import DxButton from 'devextreme-vue/button'

import { mapState } from 'vuex'

export default {
    components: {
        DxSelectBox,
        DxTextBox,
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxEditing,
        DxLookup,
        DxFilterRow,
        DxButton,
    },
    data() {
        return {
            quyTrinh: [
                {
                    id: 0,
                    idQuyTrinh: '',
                    idCongTyTaoDon: 0,
                    tenCongTyTaoDon: '',
                    idCongTyDuyetDon: 0,
                    tenCongTyDuyetDon: '',
                    idPhongBanDuyetDon: 0,
                    tenPhongDuyetDon: '',
                    buocDuyetThuocCongTy: 0,
                    vaiTroDuyet: '',
                    listOfQuyTrinhDuyetNoiBoPhong: [],
                },
            ],
            quyTrinhDuyetNoiBo: [],
        }
    },
    computed: {
        ...mapState('quytrinh', ['maQuyTrinh']),
        ...mapState('user', ['DanhSachCongTy', 'DsPhongBanCongTy']),
    },
    methods: {
        addRow() {
            let tmpAdd = {
                id: 0,
                idQuyTrinhDuyetNoiBoCongTy: 0,
                idPhongBanDuyetDon: 0,
                tenPhongBanDuyetDon: '',
                idNhanVien_PhongBanDuyet: 0,
                tenNhanVienDuyetDon: '',
                chucVuNhanVienDuyetDon: '',
                idProjectFilter: '',
                buocDuyetThuocPhong: 0,
            }
            this.quyTrinhDuyetNoiBo.push(tmpAdd)
        },
        editorPreparing(e) {
            let self = this
            if (e.dataField === 'tenPhongBanDuyetDon') {
                e.editorName = 'dxSelectBox'
                e.editorOptions = {
                    items: self.DsPhongBanCongTy,
                    valueExpr: 'name',
                    displayExpr: 'name',
                    value: e.value,
                    onValueChanged(ev) {
                        e.setValue(ev.value)
                    },
                    onSelectionChanged(x) {
                        if (x.selectedItem === null) return {}
                        e.row.data.idPhongBanDuyetDon = x.selectedItem.id
                    },
                    onFocusOut() {
                        // self.$store.dispatch(
                        //     'user/getStaffByDepartment',
                        //     e.row.data.idPhongBanDuyetDon
                        // )
                    },
                }
            }
        },
        saved() {
            let tmpData =
                this.$refs[this.dataGridRefKey].instance.getDataSource()._items
            this.quyTrinh.listOfQuyTrinhDuyetNoiBoPhong = tmpData
        },
        selectMaQuyTrinh(e) {
            this.quyTrinh.idQuyTrinh = e.selectedItem
        },
        selectCongTyTaoDon(e) {
            this.quyTrinh.idCongTyTaoDon = e.selectedItem.id
            this.quyTrinh.tenCongTyTaoDon = e.selectedItem.name
        },
        selectCongTyDuyetDon(e) {
            this.$store.dispatch('user/getDivisionByCom', e.selectedItem.id)
            this.quyTrinh.idCongTyDuyetDon = e.selectedItem.id
            this.quyTrinh.tenCongTyDuyetDon = e.selectedItem.name
            this.quyTrinh.buocDuyetThuocCongTy = e.selectedItem.id
        },
        selectPhongDuyetDon(e) {
            this.quyTrinh.idPhongBanDuyetDon = e.selectedItem.id
            this.quyTrinh.tenPhongDuyetDon = e.selectedItem.name
        },
    },
    created() {
        this.$store.dispatch('quytrinh/getIdAps')
        this.$store.dispatch('user/getAllCompany')
    },
}
</script>

<style scoped></style>
