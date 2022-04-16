<template>
    <div>
        <div>
            <DxDataGrid
                id="gridContainer"
                :data-source="dataProp"
                :show-borders="true"
                height="100%"
            >
                <DxEditing
                    :allow-updating="true"
                    :allow-adding="false"
                    :allow-deleting="true"
                    mode="cell"
                />
                <DxPaging :enabled="false" />
                <!-- <DxSelection mode="multiple" /> -->
                <DxColumn data-field="id" caption="Id" width="100" />
                <DxColumn data-field="name" caption="Name" />
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
