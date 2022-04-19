<template>
    <DxDataGrid
        id="gridContainer"
        :data-source="dataProp"
        :show-borders="true"
        height="100%"
    >
        <DxPaging :enabled="false" />
        <DxColumn data-field="no" caption="no" />
        <DxColumn data-field="id" caption="id" />
        <DxColumn data-field="Partner" caption="Partner" />
        <DxColumn data-field="Customer" caption="Customer" />
        <DxColumn data-field="ProjectName" caption="Project Name" />
        <DxColumn data-field="Description" caption="Description" />
        <DxColumn data-field="Category" caption="Category" />
        <DxColumn data-field="Company" caption="Company" />
        <DxColumn data-field="status" caption="Status" />
        <DxColumn data-field="Type" caption="Type" />
        <DxColumn data-field="CreatedDate" caption="Created Date" />
        <DxColumn data-field="CurrentIssue" caption="Current Issue" />
    </DxDataGrid>
</template>

<script>
import { DxDataGrid, DxColumn, DxPaging } from 'devextreme-vue/data-grid'

export default {
    components: {
        DxDataGrid,
        DxColumn,
        DxPaging,
    },
    props: ['dataProp'],
}
</script>

<style scoped></style>
