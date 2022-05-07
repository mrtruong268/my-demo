<template>
    <div class="container main">
        <div class="mb-2 row justify-space-between align-center">
            <h3>{{ $t('List group') }}</h3>
            <DxButton
                icon="mdi mdi-plus"
                text="Create"
                @click="clickAdd"
                type="normal"
            />
        </div>
        <DxDataGrid
            id="gridContainer"
            :data-source="DanhSachNhom"
            :show-borders="true"
            height="calc(100vh - 240px)"
            :remote-operations="true"
            :allow-column-resizing="true"
            :hover-state-enabled="true"
            :column-auto-width="true"
            :repaint-changes-only="true"
        >
            <DxPaging :enabled="true" />
            <DxColumn data-field="id" :caption="$t('No')" width="60" />
            <DxColumn data-field="groupName" :caption="$t('Group name')" />
            <DxColumn
                data-field="createdDate"
                :caption="$t('Created date')"
                data-type="date"
                format="dd/MM/yyyy"
            />
            <DxColumn
                :allow-header-filtering="false"
                width="auto"
                cell-template="buttons-cell"
            />
            <template #buttons-cell="{ data }">
                <div class="row justify-center">
                    <p
                        class="mdi mdi-pencil font-24 mr-3"
                        style="cursor: pointer"
                        @click="clickEdit(data)"
                    ></p>
                    <p
                        class="mdi mdi-delete font-24"
                        style="cursor: pointer"
                    ></p>
                </div>
            </template>
        </DxDataGrid>
        <popup
            :showPopup="popupVisible"
            :showTitle="true"
            :title="'Group permission'"
            :width="'80%'"
        >
            <template #main>
                <addGroup :edit="editData" />
            </template>
        </popup>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxEditing,
    DxGrouping,
    DxGroupPanel,
} from 'devextreme-vue/data-grid'
import DxButton from 'devextreme-vue/button'
import popup from '~/components/popup.vue'
import addGroup from './components/addGroup.vue'

export default {
    layout: 'commonLayout',
    components: {
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxEditing,
        DxButton,
        DxGrouping,
        DxGroupPanel,
        popup,
        addGroup,
    },
    data() {
        return {
            popupVisible: false,
            editData: {},
        }
    },
    computed: {
        ...mapState('user', ['DanhSachNhom']),
    },
    methods: {
        clickAdd() {
            this.popupVisible = !this.popupVisible
        },
        clickEdit(e) {
            this.popupVisible = !this.popupVisible
            this.editData = e.data
        },
    },
    created() {
        this.$store.dispatch('user/getAllGroup')
    },
}
</script>

<style scoped>
.main {
    margin-top: 80px;
}
</style>
