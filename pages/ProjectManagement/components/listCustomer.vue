<template>
    <div>
        <div>
            <DxDataGrid
                id="gridContainer"
                :data-source="dataProp"
                :show-borders="true"
                height="100%"
            >
                <DxPaging :enabled="false" />
                <DxSelection mode="multiple" />
                <DxColumn data-field="id" caption="STT" />
                <DxColumn data-field="CustomerID" caption="CustomerID" />
                <DxColumn data-field="Name" caption="Name" />
                <DxColumn data-field="TIN" caption="TIN" />
                <DxColumn data-field="Address" caption="Address" />
                <DxColumn data-field="Contact" caption="Contact" />
                <DxColumn data-field="Email" caption="Email" />
                <DxColumn data-field="Phone" caption="Phone" />
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
