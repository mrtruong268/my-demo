<template>
    <div class="container mt-80">
        <div class="mb-2 row justify-space-between align-center">
            <h3>{{ $t('Quy trình') }}</h3>
            <div>
                <DxButton
                    icon="mdi mdi-reload"
                    :text="$t('Tải lại')"
                    @click="clickReload"
                    type="normal"
                />
                <DxButton
                    icon="mdi mdi-plus"
                    :text="$t('Tạo mới')"
                    @click="popupVisible = !popupVisible"
                    type="normal"
                />
            </div>
        </div>
        <DxDataGrid
            id="gridContainer"
            :data-source="danhSachQuyTrinh"
            :show-borders="true"
            height="calc(100vh - 190px)"
            :allow-column-resizing="true"
            :column-auto-width="true"
            :hover-state-enabled="true"
            key-expr="id"
        >
            <DxFilterRow :visible="true" />
            <DxGrouping :auto-expand-all="true" />
            <DxPaging :enabled="true" />
            <DxColumn data-field="idQuyTrinh" :caption="$t('idQuyTrinh')" />
            <DxColumn
                data-field="tenCongTyTaoDon"
                :caption="$t('tenCongTyTaoDon')"
            />
            <DxColumn
                data-field="tenCongTyDuyetDon"
                :caption="$t('tenCongTyDuyetDon')"
            />
            <DxColumn
                data-field="tenPhongDuyetDon"
                :caption="$t('tenPhongDuyetDon')"
            />
            <DxColumn data-field="vaiTroDuyet" :caption="$t('vaiTroDuyet')" />
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
                </div>
            </template>
            <DxSummary>
                <DxTotalItem column="tenNhanVien" summary-type="count" />
            </DxSummary>
        </DxDataGrid>

        <!-- popup tao moi -->

        <popup
            :showPopup="popupVisible"
            :showTitle="true"
            :width="'50%'"
            :title="$t('Quy trình')"
        >
            <template #main>
                <addProcedure :edit="editData" @hiddenPopup="hidePopup" />
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
    DxSummary,
    DxTotalItem,
    DxFilterRow,
} from 'devextreme-vue/data-grid'
import popup from '~/components/popup.vue'
import DxButton from 'devextreme-vue/button'
import addProcedure from './components/addProcedure.vue'

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
        DxSummary,
        DxTotalItem,
        DxFilterRow,
        popup,
        addProcedure,
    },
    data() {
        return {
            popupVisible: false,
        }
    },
    computed: {
        ...mapState('quytrinh', ['danhSachQuyTrinh']),
    },
    methods: {
        clickEdit(e) {
            this.popupVisible = !this.popupVisible
        },
    },
    created() {
        this.$store.dispatch('quytrinh/getAllAps')
    },
}
</script>

<style scoped></style>
