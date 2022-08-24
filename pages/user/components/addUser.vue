<template>
    <div>
        <i class="mdi mdi-close font-24 close" @click="clickClose"></i>
        <div class="mb-2">
            <div class="row justify-space-between">
                <DxTextBox
                    v-model="NhanVien.tenNhanVien"
                    styling-mode="outlined"
                    :label="$t('Họ và tên')"
                    label-mode="floating"
                    class="mb-3 mr-3 xs6"
                />
                <DxTextBox
                    v-model="NhanVien.maNhanVien"
                    styling-mode="outlined"
                    :label="$t('Mã nhân viên')"
                    class="mb-3 xs6"
                    label-mode="floating"
                />
            </div>
            <div class="row justify-space-between">
                <DxTextBox
                    v-model="NhanVien.email"
                    styling-mode="outlined"
                    :label="$t('Email')"
                    class="mb-3 mr-3 xs6"
                    label-mode="floating"
                />
                <DxTextBox
                    v-model="NhanVien.username"
                    styling-mode="outlined"
                    :label="$t('Tài khoản')"
                    class="mb-3 xs6"
                    label-mode="floating"
                />
            </div>
            <div class="row justify-space-between">
                <DxTextBox
                    v-model="NhanVien.diaDiemLamViec"
                    styling-mode="outlined"
                    :label="$t('Địa điểm làm việc')"
                    class="mb-3 mr-3 xs6"
                    label-mode="floating"
                />
                <DxDateBox
                    v-model="NhanVien.createdDate"
                    displayFormat="dd/MM/yyyy"
                    :use-mask-behavior="true"
                    validationMessageMode="always"
                    styling-mode="outlined"
                    :label="$t('Thời gian tạo')"
                    label-mode="floating"
                    class="mb-3 xs6"
                />
            </div>
            <DxDataGrid
                id="gridContainer"
                :data-source="phongBanCongTy"
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
                    :allow-updating="allowUpdate"
                    :allow-deleting="true"
                    :useIcons="true"
                    :confirm-delete="false"
                    mode="cell"
                    new-row-position="last"
                />
                <DxColumn data-field="tenCongTy" :caption="$t('Công ty')" />
                <DxColumn data-field="tenPhongBan" :caption="$t('Phòng ban')" />
                <DxColumn data-field="tenChucVu" :caption="$t('Chức vụ')" />
                <DxColumn data-field="kiemNhiem" :caption="$t('Kiêm nhiệm')" />
            </DxDataGrid>
            <div class="row justify-space-between mt-1">
                <DxButton
                    icon="mdi mdi-plus"
                    styling-mode="text"
                    :text="$t('Thêm')"
                    @click="addRow"
                />
                <DxCheckBox
                    v-model="NhanVien.isActive"
                    :text="$t('Đang hoạt động')"
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
    DxFilterRow,
} from 'devextreme-vue/data-grid'
import { DxCheckBox } from 'devextreme-vue/check-box'
import { mapState } from 'vuex'

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
        DxNumberBox,
        DxCheckBox,
        DxButton,
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxLookup,
        DxEditing,
        DxFilterRow,
    },
    data() {
        return {
            dataGridRefKey: 'datagridValid',
            NhanVien: {
                id: 0,
                tenNhanVien: '',
                maNhanVien: '',
                email: '',
                chucVuId: 0,
                chucVu: '',
                phongBanId: 0,
                phongBan: '',
                congTyId: 0,
                congTy: '',
                diaDiemLamViec: '',
                username: '',
                password: '',
                groupId: 0,
                groupName: '',
                createdDate: new Date(),
                avatarUrl: '',
                isActive: true,
                listOfNhanVienPhongBan: [],
            },
            phongBanCongTy: [],
            allowUpdate: true,
        }
    },
    watch: {
        edit: {
            handler(edit) {
                if (edit) {
                    let editCopy = JSON.parse(JSON.stringify(edit))
                    if (!editCopy) return {}
                    this.NhanVien = editCopy
                    this.phongBanCongTy = editCopy.listOfNhanVienPhongBan
                    this.allowUpdate = false
                }
            },
            immediate: true,
            deep: true,
        },
    },
    computed: {
        ...mapState('user', [
            'DanhSachChucVu',
            'DanhSachCongTy',
            'DanhSachPhongBan',
            'DanhSachNhom',
            'DsPhongBanCongTy',
        ]),
    },
    methods: {
        addRow() {
            let tmpAdd = {
                id: 0,
                phongBanId: 0,
                maPhongBan: '',
                tenPhongBan: '',
                congTyId: 0,
                tenCongTy: '',
                chucVuId: 0,
                tenChucVu: '',
                nhanVienId: 0,
                kiemNhiem: true,
            }
            this.phongBanCongTy.push(tmpAdd)
        },
        clickSave() {
            this.$store.dispatch('user/postStaff', this.NhanVien)
            this.clickClose()
        },
        saved() {
            let tmpData =
                this.$refs[this.dataGridRefKey].instance.getDataSource()._items
            this.NhanVien.listOfNhanVienPhongBan = tmpData
        },
        editorPreparing(e) {
            let self = this
            if (e.dataField === 'tenCongTy') {
                e.editorName = 'dxSelectBox'
                e.editorOptions = {
                    items: self.DanhSachCongTy,
                    valueExpr: 'name',
                    displayExpr: 'name',
                    value: e.value,
                    onValueChanged(ev) {
                        e.setValue(ev.value)
                    },
                    onSelectionChanged(x) {
                        if (x.selectedItem === null) return {}
                        e.row.data.congTyId = x.selectedItem.id
                    },
                    onFocusOut() {
                        self.$store.dispatch(
                            'user/getDivisionByCom',
                            e.row.data.congTyId
                        )
                    },
                }
            }
            if (e.dataField === 'tenPhongBan') {
                e.editorName = 'dxSelectBox'
                e.editorOptions = {
                    items: self.DsPhongBanCongTy,
                    valueExpr: 'name',
                    displayExpr: 'name',
                    value: e.value,
                    onValueChanged(ev) {
                        e.setValue(ev.value)
                    },
                    onFocusIn() {
                        setTimeout(() => {
                            self.$store.dispatch(
                                'user/getDivisionByCom',
                                e.row.data.congTyId
                            )
                        }, 200)
                    },
                    onSelectionChanged(pb) {
                        e.row.data.phongBanId = pb.selectedItem.id
                    },
                }
            }
            if (e.dataField === 'tenChucVu') {
                e.editorName = 'dxSelectBox'
                e.editorOptions = {
                    items: self.DanhSachChucVu,
                    valueExpr: 'ten',
                    displayExpr: 'ten',
                    value: e.value,
                    onValueChanged(ev) {
                        e.setValue(ev.value)
                    },
                    onSelectionChanged(cv) {
                        e.row.data.chucVuId = cv.selectedItem.id
                    },
                }
            }
        },
        clickClose() {
            this.phongBanCongTy = []
            this.allowUpdate = true
            this.NhanVien = {
                id: 0,
                tenNhanVien: '',
                maNhanVien: '',
                email: '',
                chucVuId: 0,
                chucVu: '',
                phongBanId: 0,
                phongBan: '',
                congTyId: 0,
                congTy: '',
                diaDiemLamViec: '',
                username: '',
                password: '',
                groupId: 0,
                groupName: '',
                createdDate: new Date(),
                avatarUrl: '',
                isActive: true,
                listOfNhanVienPhongBan: [],
            }
            this.$emit('hiddenPopup')
        },
    },
    created() {
        this.$store.dispatch('user/getAllPosition')
        this.$store.dispatch('user/getAllCompany')
        this.$store.dispatch('user/getAllDivision')
    },
}
</script>

<style scoped>
.close {
    position: absolute;
    top: 10px;
    right: 24px;
    cursor: pointer;
}
.dx-editor-outlined.dx-texteditor-with-floating-label {
    margin-top: 0px;
}
</style>
