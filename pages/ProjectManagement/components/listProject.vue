<template>
    <div>
        <div>
            <DxDataGrid
                id="gridContainer"
                :data-source="dataProp"
                :show-borders="true"
                key-expr="id"
                height="100%"
            >
                <DxEditing
                    :allow-updating="true"
                    :allow-adding="false"
                    :allow-deleting="true"
                    mode="cell"
                />
                <DxPaging :enabled="false" />
                <DxSelection mode="multiple" />
                <DxColumn data-field="no" caption="no" />
                <DxColumn data-field="id" caption="id" />
                <DxColumn data-field="Partner" caption="Partner" />
                <DxColumn data-field="Customer" caption="Customer" />
                <DxColumn data-field="ProjectName" caption="Project Name" />
                <DxColumn data-field="Description" caption="Description" />
                <DxColumn data-field="Category" caption="Category" />
                <DxColumn data-field="Company" caption="Company" />
                <DxColumn
                    data-field="status"
                    caption="Status"
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
                <DxColumn data-field="Type" caption="Type" />
                <DxColumn data-field="CreatedDate" caption="Created Date" />
                <DxColumn data-field="CurrentIssue" caption="Current Issue" />
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
    methods: {},
    props: ['dataProp'],
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
    background-color: orange;
}
.ongoing {
    background-color: #f2f2f2;
}
</style>
