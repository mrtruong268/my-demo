<template>
    <div class="container main">
        <div class="mb-2 row justify-space-between align-center">
            <h3>{{ $t('List user') }}</h3>
            <div>
                <DxButton
                    icon="mdi mdi-reload"
                    text="Reload"
                    @click="clickReload"
                    type="normal"
                />
                <DxButton
                    icon="mdi mdi-plus"
                    text="Create"
                    @click="clickAdd"
                    type="normal"
                />
            </div>
        </div>
        <DxDataGrid
            id="gridContainer"
            :data-source="DanhSachNhanVien.data"
            :show-borders="true"
            height="calc(100vh - 230px)"
            :allow-column-resizing="true"
            :column-auto-width="true"
            :hover-state-enabled="true"
            key-expr="id"
        >
            <DxFilterRow :visible="true" />
            <DxGrouping :auto-expand-all="true" />
            <DxPaging :enabled="true" />
            <!-- <DxColumn data-field="id" :caption="$t('No')" /> -->
            <DxColumn data-field="tenNhanVien" :caption="$t('Name')" />
            <DxColumn data-field="maNhanVien" :caption="$t('Employee code')" />
            <DxColumn data-field="email" :caption="$t('Email')" />
            <DxColumn data-field="chucVu" :caption="$t('Position')" />
            <DxColumn data-field="phongBan" :caption="$t('Department')" />
            <DxColumn data-field="username" :caption="$t('User name')" />
            <DxColumn
                data-field="groupName"
                :group-index="0"
                :caption="$t('Group')"
            />
            <DxColumn data-field="congTy" :caption="$t('Company')" />
            <DxColumn data-field="isActive" :caption="$t('Active')" />
            <DxColumn
                data-field="createdDate"
                :caption="$t('Created date')"
                data-type="date"
                format="dd/MM/yyyy"
            />
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
                        @click="clickEdit(data)"
                    ></p>
                    <p
                        class="mdi mdi-delete font-24"
                        style="cursor: pointer"
                        @click="clickDelete(data)"
                    ></p>
                </div>
            </template>
            <DxSummary>
                <DxTotalItem column="tenNhanVien" summary-type="count" />
            </DxSummary>
        </DxDataGrid>
        <popup :showPopup="popupVisible" :showTitle="false">
            <template #header>
                <h2 class="mb-3">User</h2>
            </template>
            <template #main>
                <AddUser :edit="editData" @hiddenPopup="hidePopup" />
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
    DxSummary,
    DxTotalItem,
    DxFilterRow,
} from 'devextreme-vue/data-grid'
import DxButton from 'devextreme-vue/button'
import popup from '~/components/popup.vue'
import AddUser from './components/addUser.vue'

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
        DxSummary,
        DxTotalItem,
        DxFilterRow,
        popup,
        AddUser,
    },
    data() {
        return {
            popupVisible: false,
            editData: null,
        }
    },
    computed: {
        ...mapState('user', ['DanhSachNhanVien']),
    },
    methods: {
        clickAdd() {
            this.popupVisible = !this.popupVisible
        },
        clickReload() {
            setTimeout(() => {
                this.$store.dispatch('user/getAllStaff')
            }, 10)
        },
        clickEdit(e) {
            this.editData = e.data
            this.popupVisible = !this.popupVisible
        },
        clickDelete(e) {
            this.$store.dispatch('user/deleteStaff', e.data.id)
            this.clickReload()
        },
        hidePopup() {
            this.clickAdd()
            this.clickReload()
        },
    },
    created() {
        this.$store.dispatch('user/getAllStaff')
    },
}
</script>

<style scoped>
.main {
    margin-top: 80px;
}
</style>
