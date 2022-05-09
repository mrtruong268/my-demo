<template>
    <div>
        <DxList
            :data-source="DanhSachChucNang"
            :grouped="true"
            :collapsible-groups="true"
            height="30vh"
            @itemClick="itemClick"
        >
            <template #group="{ data: item }">
                <div>{{ item.key }}</div>
            </template>
            <template #item="{ data: item }">
                <div>
                    {{ item.title }}
                </div>
            </template>
        </DxList>
        <div class="row align-center">
            <h4>Selected:</h4>
            <p class="ml-1">{{ selectedItem }}</p>
        </div>
        <div class="mt-2">
            <DxDataGrid
                id="gridContainer"
                :data-source="dataSelected"
                :show-borders="true"
                height="100%"
                :ref="dataGridRefKey"
            >
                <DxEditing :allow-updating="true" mode="cell" />
                <DxPaging :enabled="false" />
                <DxColumn data-field="quyen" :caption="$t('Permission')" />
                <DxColumn data-field="allow" :caption="$t('Allow')" />
            </DxDataGrid>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import DxList from 'devextreme-vue/list'
import {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxEditing,
} from 'devextreme-vue/data-grid'
const dataGridRefKey = 'my-data-grid'

export default {
    props: ['edit'],
    components: {
        DxList,
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxEditing,
    },
    data() {
        return {
            dataGridRefKey,
            selectedItem: '',
            dataSelected: [],
        }
    },
    methods: {
        itemClick(e) {
            this.selectedItem = e.itemData.title
            this.dataSelected = e.itemData.dataQuyen
        },
    },
    computed: {
        ...mapState('user', ['DanhSachChucNang']),
    },
}
</script>

<style scoped></style>
