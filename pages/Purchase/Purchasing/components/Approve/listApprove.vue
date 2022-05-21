<template>
    <div>
        <div class="row justify-end">
            <DxButton
                icon="mdi mdi-reload"
                @click="clickReload"
                :text="$t('Reload')"
            />
        </div>
        <DxDataGrid
            id="gridContainer"
            :data-source="danhSachPheDuyet.data"
            :show-borders="true"
            height="100%"
            :hover-state-enabled="true"
        >
            <DxHeaderFilter :visible="true" />
            <DxFilterRow :visible="true" />
            <DxPaging :enabled="false" />
            <DxColumn
                data-field="id"
                :caption="$t('No')"
                width="70"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="tenNhanVien"
                :caption="$t('Name')"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="maNhanVien"
                :caption="$t('Employee code')"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="soThamChieu"
                :caption="$t('Reference number')"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="chucVu"
                :caption="$t('Position')"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="phongBan"
                :caption="$t('Department')"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="ngayDeTrinh"
                :caption="$t('Submission date')"
                format="dd/MM/yyyy"
                data-type="date"
                :allow-header-filtering="false"
            />
            <DxColumn
                :allow-header-filtering="false"
                width="auto"
                cell-template="buttons-cell"
            />
            <template #buttons-cell="{ data }">
                <p
                    class="mdi mdi-eye font-24"
                    style="cursor: pointer"
                    @click="viewDetail(data)"
                ></p>
            </template>
        </DxDataGrid>
        <popup
            :showPopup="popupVisible"
            :showTitle="true"
            :title="$t('View details')"
            :width="'80%'"
        >
            <template #main>
                <viewApprove :view="editItem" @hiddenPopup="hidePopup" />
            </template>
        </popup>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

import {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxEditing,
    DxSelection,
    DxHeaderFilter,
    DxFilterRow,
} from 'devextreme-vue/data-grid'
import DxButton from 'devextreme-vue/button'
import popup from '~/components/popup.vue'
import viewApprove from './viewApprove.vue'

export default {
    layout: 'commonLayout',
    data() {
        return {
            popupVisible: false,
            editItem: {},
        }
    },
    components: {
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxEditing,
        DxSelection,
        DxHeaderFilter,
        DxFilterRow,
        DxButton,
        popup,
        viewApprove,
    },
    computed: {
        ...mapGetters('pheduyet', ['danhSachPheDuyet']),
    },
    methods: {
        viewDetail(e) {
            this.editItem = e.data
            this.popupVisible = !this.popupVisible
        },
        clickReload() {
            setTimeout(() => {
                this.$store.dispatch('pheduyet/getApprove')
            }, 200)
        },
        hidePopup() {
            this.popupVisible = !this.popupVisible
            this.clickReload()
        },
    },
    created() {
        this.$store.dispatch('pheduyet/getApprove')
    },
}
</script>

<style scoped></style>
