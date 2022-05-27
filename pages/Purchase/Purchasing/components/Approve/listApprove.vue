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
            remote-operations="true"
            :allow-column-resizing="true"
            :column-auto-width="true"
            :hover-state-enabled="true"
        >
            <DxHeaderFilter :visible="true" />
            <DxFilterRow :visible="true" />
            <DxPaging :enabled="false" />
            <DxColumn
                data-field="id"
                :caption="$t('No')"
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
                :allow-header-filtering="true"
                data-field="approvalState"
                :caption="$t('Approval state')"
                cell-template="cellTemplate"
            />
            <template #cellTemplate="{ data }">
                <div
                    :class="
                        data.value === 'DANG_TAO'
                            ? ''
                            : data.value === 'SUBMITED'
                            ? 'submit'
                            : 'approve'
                    "
                >
                    {{ data.value }}
                </div>
            </template>
            <DxColumn
                :allow-header-filtering="true"
                data-field="approvalStatus"
                :caption="$t('Approval status')"
                cell-template="cellTemplate2"
            />
            <template #cellTemplate2="{ data }">
                <div
                    :class="
                        data.value === 'None'
                            ? 'none'
                            : data.value === 'Approval'
                            ? 'approval'
                            : 'revise'
                    "
                >
                    {{ data.value }}
                </div>
            </template>
            <DxColumn
                :allow-header-filtering="false"
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
import { mapState } from 'vuex'

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
        ...mapState('pheduyet', ['danhSachPheDuyet']),
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

<style scoped>
.none {
    color: white;
    background-color: red;
}
.approval {
    color: white;
    background-color: #acdf87;
}
.revise {
    color: white;
    background-color: orange;
}
.submit {
    color: orange;
}
.approve {
    color: #acdf87;
}
</style>
