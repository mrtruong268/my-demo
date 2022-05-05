<template>
    <div class="container main">
        <div class="mb-2 row justify-space-between align-center">
            <h3>{{ $t('User group') }}</h3>
            <DxButton
                icon="mdi mdi-plus"
                text="Create"
                @click="clickAdd"
                type="normal"
            />
        </div>
        <DxDataGrid
            id="gridContainer"
            :data-source="DanhSachQuyen"
            :show-borders="true"
            height="100%"
            :remote-operations="true"
            :allow-column-resizing="true"
            :column-auto-width="true"
            :repaint-changes-only="true"
        >
            <DxPaging :enabled="true" />
            <DxColumn data-field="id" :caption="$t('No')" />
            <DxColumn data-field="GroupName" :caption="$t('Name')" />
            <DxColumn data-field="CreatedDate" :caption="$t('CreatedDate')" />
            <DxColumn data-field="Owner" :caption="$t('Owner')" />
            <DxColumn data-field="Admin" :caption="$t('Admin')" />
            <DxColumn data-field="Create" :caption="$t('Create')" />
            <DxColumn data-field="Edit" :caption="$t('Edit')" />
            <DxColumn data-field="Delete" :caption="$t('Delete')" />
            <DxColumn data-field="ViewDoiTac" :caption="$t('ViewDoiTac')" />
            <DxColumn
                data-field="ViewKhachHang"
                :caption="$t('ViewKhachHang')"
            />
            <DxColumn
                data-field="ViewProjectName"
                :caption="$t('ViewProjectName')"
            />
            <DxColumn data-field="ViewPhanLoai" :caption="$t('ViewPhanLoai')" />
            <DxColumn data-field="ViewPIC" :caption="$t('ViewPIC')" />
            <DxColumn
                :allow-header-filtering="false"
                width="auto"
                cell-template="buttons-cell"
            />
            <template #buttons-cell="{ data }">
                <div class="row justify-center">
                    <p
                        class="mdi mdi-pencil font-24 mr-3"
                        style="cursor: pointer"
                    ></p>
                    <p
                        class="mdi mdi-delete font-24"
                        style="cursor: pointer"
                    ></p>
                </div>
            </template>
        </DxDataGrid>
        <popup :showPopup="popupVisible" :showTitle="true" :title="'User'">
            <template #main>
                <AddUser />
            </template>
        </popup>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxEditing,
    DxGrouping,
    DxGroupPanel,
} from 'devextreme-vue/data-grid'
import DxButton from 'devextreme-vue/button'
import popup from '~/components/popup.vue'
// import AddUser from './components/addUser.vue'

export default {
    layout: 'commonLayout',
    components: {
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxEditing,
        DxButton,
        DxGrouping,
        DxGroupPanel,
        popup,
        // AddUser,
    },
    data() {
        return {
            popupVisible: false,
            DanhSachQuyen: [
                {
                    id: 1,
                    GroupName: 'Admin',
                    CreatedDate: '6/6/2021 12:00:00 AM',
                    Owner: false,
                    Admin: true,
                    Create: false,
                    Edit: false,
                    Delete: false,
                    ViewDoiTac: false,
                    ViewKhachHang: false,
                    ViewProjectName: false,
                    ViewPhanLoai: false,
                    ViewPIC: false,
                },
                {
                    id: 2,
                    GroupName: 'Dự Án',
                    CreatedDate: '6/6/2021 12:00:00 AM',
                    Owner: false,
                    Admin: false,
                    Create: false,
                    Edit: true,
                    Delete: false,
                    ViewDoiTac: true,
                    ViewKhachHang: true,
                    ViewProjectName: true,
                    ViewPhanLoai: true,
                    ViewPIC: true,
                },
                {
                    id: 3,
                    GroupName: 'IT',
                    CreatedDate: '6/6/2021 12:00:00 AM',
                    Owner: true,
                    Admin: true,
                    Create: true,
                    Edit: true,
                    Delete: false,
                    ViewDoiTac: false,
                    ViewKhachHang: false,
                    ViewProjectName: false,
                    ViewPhanLoai: false,
                    ViewPIC: false,
                },
            ],
        }
    },
    computed: {
        // ...mapState('user', ['DanhSachNhanVien']),
    },
    methods: {
        clickAdd() {
            this.popupVisible = !this.popupVisible
        },
    },
}
</script>

<style scoped>
.main {
    margin-top: 80px;
}
</style>
