<template>
    <div>
        <div>
            <DxDataGrid
                id="gridContainer"
                :data-source="dataPurchase"
                :show-borders="true"
                height="100%"
            >
                <DxHeaderFilter :visible="true" />
                <DxEditing
                    :allow-updating="true"
                    :allow-adding="false"
                    :allow-deleting="true"
                    mode="cell"
                />
                <DxPaging :enabled="false" />
                <DxSelection mode="multiple" />
                <DxColumn
                    data-field="id"
                    caption="Id"
                    :allow-header-filtering="false"
                />
                <DxColumn
                    data-field="tenYeuCau"
                    caption="Request name"
                    :allow-header-filtering="false"
                />
                <DxColumn
                    data-field="soLuong"
                    caption="Amount"
                    :allow-header-filtering="false"
                />
                <DxColumn
                    data-field="thoiGian"
                    caption="Time"
                    :allow-header-filtering="false"
                />
                <DxColumn
                    data-field="loaiMuaHang"
                    caption="Purchase form"
                    :allow-header-filtering="true"
                />
            </DxDataGrid>
        </div>
    </div>
</template>

<script>
import {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxEditing,
    DxSelection,
    DxHeaderFilter,
} from 'devextreme-vue/data-grid'

export default {
    components: {
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxEditing,
        DxSelection,
        DxHeaderFilter,
    },
    props: ['dataPurchase'],
}
</script>

<style scoped></style>
