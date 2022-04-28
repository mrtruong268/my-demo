<template>
    <div>
        <div class="row justify-end">
            <DxButton icon="mdi mdi-reload" @click="clickReload" />
        </div>
        <DxDataGrid
            id="gridContainer"
            :data-source="danhSachPheDuyet.data"
            :show-borders="true"
            height="100%"
            :hover-state-enabled="true"
        >
            <DxHeaderFilter :visible="true" />
            <DxFilterRow :visible="true" />
            <DxPaging :enabled="false" />
            <DxColumn
                data-field="id"
                caption="No"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="soThamChieu"
                caption="Reference number"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="tenNhanVien"
                caption="Name"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="phongBan"
                caption="Department"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="ngayDeTrinh"
                caption="Submission date"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="approvalState"
                caption="Status"
                :allow-header-filtering="true"
            />
            <DxColumn
                :allow-header-filtering="false"
                width="auto"
                cell-template="buttons-cell"
            />
            <template #buttons-cell="{ data }">
                <DxButton icon="mdi mdi-eye" @click="viewDetail(data)" />
            </template>
        </DxDataGrid>
        <popup :showPopup="popupVisible" :showTitle="true" :title="'Details'">
            <template #main>
                <viewApprove :view="editItem" @hiddenPopup="hidePopup" />
            </template>
        </popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxEditing,
    DxSelection,
    DxHeaderFilter,
    DxFilterRow,
} from 'devextreme-vue/data-grid'
import DxButton from 'devextreme-vue/button'
import popup from '~/components/popup.vue'
import viewApprove from './viewApprove.vue'

export default {
    layout: 'commonLayout',
    data() {
        return {
            popupVisible: false,
            editItem: {},
        }
    },
    components: {
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxEditing,
        DxSelection,
        DxHeaderFilter,
        DxFilterRow,
        DxButton,
        popup,
        viewApprove,
    },
    computed: {
        ...mapGetters('pheduyet', ['danhSachPheDuyet']),
    },
    methods: {
        viewDetail(e) {
            this.editItem = e.data
            this.popupVisible = !this.popupVisible
        },
        clickReload() {
            this.$store.dispatch('pheduyet/getApprove')
        },
        hidePopup() {
            this.popupVisible = !this.popupVisible
            this.clickReload()
        },
    },
    created() {
        this.$store.dispatch('pheduyet/getApprove')
    },
}
</script>

<style scoped></style>
