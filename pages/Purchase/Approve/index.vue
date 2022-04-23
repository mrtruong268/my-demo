<template>
    <div class="container main">
        <h2 class="text-xs-center mb-2">
            {{ $t('Purchase approval') }}
        </h2>
        <DxDataGrid
            id="gridContainer"
            :data-source="pheDuyet"
            :show-borders="true"
            height="100%"
            :hover-state-enabled="true"
        >
            <DxHeaderFilter :visible="true" />
            <DxPaging :enabled="false" />
            <DxColumn
                data-field="id"
                caption="Id"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="soThamChieu"
                caption="soThamChieu"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="ngayDeTrinh"
                caption="ngayDeTrinh"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="tenNhanVien"
                caption="tenNhanVien"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="phongBan"
                caption="phongBan"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="ghiChu"
                caption="ghiChu"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="trangThai"
                caption="status"
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
        <DxPopup
            :visible="popupVisible"
            :drag-enabled="false"
            :close-on-outside-click="false"
            :show-close-button="true"
            :show-title="true"
            width="90%"
            title="Details"
        >
            <viewDetail :edit="editItem" />
        </DxPopup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { DxPopup } from 'devextreme-vue/popup'

import {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxEditing,
    DxSelection,
    DxHeaderFilter,
} from 'devextreme-vue/data-grid'
import DxButton from 'devextreme-vue/button'
import addPurchase from '../components/addPurchase.vue'
import viewDetail from '../components/common/viewDetail.vue'

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
        DxPopup,
        DxButton,
        addPurchase,
        viewDetail,
    },
    computed: {
        ...mapGetters({
            pd: 'pheDuyet',
        }),
        pheDuyet: {
            get() {
                return this.pd
            },
            set(newItem) {
                return newItem
            },
        },
    },
    methods: {
        viewDetail(e) {
            this.editItem = e.data
            console.log(
                '🚀 ~ file: index.vue ~ line 129 ~ this.editItem',
                this.editItem
            )
            this.popupVisible = !this.popupVisible
        },
    },
}
</script>

<style scoped>
.main {
    margin: 80px auto;
}
.main h2 {
    color: #0986c5;
}
.dx-data-row .column-button-hover:hover {
    background-color: #0986c5;
    width: 100%;
}
</style>
