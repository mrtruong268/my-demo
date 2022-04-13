<template>
    <div>
        <div>
            <DxDataGrid
                id="gridContainer"
                :data-source="dataCategory"
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
                <DxSelection mode="multiple" />
                <DxColumn data-field="id" caption="Id" />
                <DxColumn data-field="ten" caption="Name" />
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
    props: ['dataCategory'],
}
</script>

<style scoped></style>
