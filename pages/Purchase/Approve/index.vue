<template>
    <div class="container main">
        <h2 class="text-xs-center mb-2">
            {{ $t('Purchase approval') }}
        </h2>
        <DxDataGrid
            id="gridContainer"
            :data-source="approve"
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
                data-field="ngayCanHang"
                caption="ngayCanHang"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="nguoiTao"
                caption="nguoiTao"
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
} from 'devextreme-vue/data-grid'
import DxButton from 'devextreme-vue/button'

export default {
    layout: 'commonLayout',
    components: {
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxEditing,
        DxSelection,
        DxHeaderFilter,
        DxButton,
    },
    computed: {
        ...mapGetters({
            pheDuyet: 'approve',
        }),
        approve: {
            get() {
                return this.pheDuyet
            },
            set(newItem) {
                return newItem
            },
        },
    },
    methods: {
        viewDetail(e) {
            console.log(e.data)
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
