<template>
    <div>
        <div>
            <DxDataGrid
                id="gridContainer"
                :data-source="dataView"
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
    props: ['dataView'],
}
</script>

<style scoped></style>
