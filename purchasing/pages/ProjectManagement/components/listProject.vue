<template>
    <DxDataGrid
        id="gridContainer"
        :data-source="dataProp"
        :show-borders="true"
        key-expr="id"
        height="100%"
    >
        <DxHeaderFilter :visible="true" />
        <DxPaging :enabled="false" />
        <DxSelection mode="multiple" />
        <DxColumn data-field="no" caption="no" :allowHeaderFiltering="false" />
        <DxColumn data-field="id" caption="id" />
        <DxColumn data-field="Partner" caption="Partner" />
        <DxColumn data-field="Customer" caption="Customer" />
        <DxColumn data-field="ProjectName" caption="Project Name" />
        <DxColumn
            data-field="Description"
            caption="Description"
            :allowHeaderFiltering="false"
        />
        <DxColumn data-field="Category" caption="Category" />
        <DxColumn data-field="Company" caption="Company" />
        <DxColumn
            data-field="status"
            caption="Status"
            alignment="center"
            cell-template="cellTemplate"
        />
        <template #cellTemplate="{ data }">
            <div
                :class="
                    data.value === 'Finish'
                        ? 'finish'
                        : data.value === 'Pending'
                        ? 'pending'
                        : data.value === 'Closed'
                        ? 'close'
                        : 'ongoing'
                "
            >
                {{ data.value }}
            </div>
        </template>
        <DxColumn
            data-field="Type"
            caption="Type"
            :allowHeaderFiltering="false"
        />
        <DxColumn data-field="CreatedDate" caption="Created Date" />
        <DxColumn
            data-field="CurrentIssue"
            caption="Current Issue"
            :allowHeaderFiltering="false"
        />
    </DxDataGrid>
</template>

<script>
import {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxEditing,
    DxSelection,
    DxHeaderFilter,
    DxFilterRow,
} from 'devextreme-vue/data-grid'

export default {
    props: ['dataProp'],
    components: {
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxEditing,
        DxSelection,
        DxHeaderFilter,
        DxFilterRow,
    },
    methods: {},
}
</script>

<style scoped>
.finish {
    background-color: #acdf87;
}
.pending {
    background-color: yellow;
}
.close {
    background-color: red;
}
.ongoing {
    background-color: #f2f2f2;
}
</style>
