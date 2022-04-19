<template>
    <DxDataGrid
        id="gridContainer"
        :data-source="dataProp"
        :show-borders="true"
        height="100%"
    >
        <DxPaging :enabled="false" />
        <DxSelection mode="multiple" />
        <DxColumn data-field="Description" caption="Description" />
        <DxColumn data-field="ViewMaDuAn" caption="ViewMaDuAn" />
        <DxColumn data-field="ViewDoiTac" caption="ViewDoiTac" />
        <DxColumn data-field="ViewKhachHang" caption="ViewKhachHang" />
        <DxColumn data-field="ViewTenDuAn" caption="ViewTenDuAn" />
        <DxColumn data-field="ViewPhanLoai" caption="ViewPhanLoai" />
        <DxColumn data-field="ViewNgayTao" caption="ViewNgayTao" />
        <DxColumn data-field="ViewTinhTrang" caption="ViewTinhTrang" />
    </DxDataGrid>
</template>

<script>
import {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxEditing,
    DxSelection,
} from 'devextreme-vue/data-grid'

export default {
    components: {
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxEditing,
        DxSelection,
    },
    props: ['dataProp'],
}
</script>

<style scoped></style>
