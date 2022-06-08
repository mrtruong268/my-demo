<template>
    <div>
        <div class="row justify-end">
            <DxButton
                icon="mdi mdi-reload"
                @click="reload"
                :text="$t('Reload')"
            />
        </div>
        <DxDataGrid
            id="gridContainer"
            :data-source="muaHangDuAn"
            :show-column-lines="true"
            :show-row-lines="true"
            :show-borders="true"
            :row-alternation-enabled="true"
            height="100%"
            :noDataText="$t('No data to display')"
            remote-operations="true"
            :allow-column-resizing="true"
            :column-auto-width="true"
            :hover-state-enabled="false"
            :ref="dataGridRefKey"
        >
            <DxHeaderFilter :visible="true" />
            <DxFilterRow :visible="true" />
            <DxPaging :enabled="false" />
            <DxColumn
                data-field="id"
                :caption="$t('No')"
                alignment="center"
                :allow-header-filtering="false"
            />
            <DxColumn
                :allow-header-filtering="false"
                data-field="tenNhanVien"
                :caption="$t('Name')"
            />
            <DxColumn
                :allow-header-filtering="false"
                data-field="phongBan"
                :caption="$t('Department')"
            />
            <DxColumn
                :allow-header-filtering="false"
                data-field="soThamChieu"
                :caption="$t('Reference number')"
            />
            <DxColumn
                data-field="ngayDeTrinh"
                :caption="$t('Submission date')"
                data-type="date"
                format="dd/MM/yyyy"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="ngayCanHang"
                :caption="$t('Delivery date')"
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
                width="auto"
                cell-template="buttons-cell"
            />
            <template #buttons-cell="{ data }">
                <div class="row justify-center">
                    <div>
                        <DxButton
                            icon="mdi mdi-printer"
                            :hint="$t('In')"
                            @click="clickPrint(data)"
                        />
                    </div>
                    <div v-if="data.data.approvalState == 'DANG_TAO'">
                        <DxButton
                            icon="mdi mdi-file-check"
                            :hint="$t('Yêu cầu phê duyệt')"
                            @click="clickApprove(data)"
                        />
                    </div>
                    <div v-else>
                        <DxButton
                            icon="mdi mdi-file-remove"
                            :hint="$t('Yêu cầu hoàn duyệt')"
                            @click="clickUnApprove(data)"
                        />
                    </div>
                    <div>
                        <DxButton
                            icon="mdi mdi-eye"
                            :hint="$t('Xem chi tiết yêu cầu')"
                            @click="clickView(data)"
                        />
                    </div>
                    <div>
                        <DxButton
                            icon="mdi mdi-pencil"
                            :hint="$t('Sửa yêu cầu')"
                            @click="clickEdit(data)"
                        />
                    </div>
                    <div>
                        <DxButton
                            icon="mdi mdi-delete"
                            :hint="$t('Xoá yêu cầu')"
                            @click="clickDelete(data)"
                        />
                    </div>
                </div>
            </template>
        </DxDataGrid>
        <popup
            :showPopup="popupVisible"
            :showTitle="isClick == 'edit' ? true : false"
            :closeOut="isClick == 'edit' ? false : true"
            :title="isClick == 'edit' ? $t('Edit requisition') : $t('')"
            :width="'80%'"
        >
            <template #main>
                <editPurchase
                    v-if="isClick == 'edit'"
                    @invisible="hiddenPopup"
                />
                <viewDetail v-else :view="details" />
            </template>
        </popup>
    </div>
</template>

<script>
import {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxHeaderFilter,
    DxFilterRow,
} from 'devextreme-vue/data-grid'
import DxButton from 'devextreme-vue/button'
import Popup from '~/components/popup.vue'
import editPurchase from './editPurchase.vue'
import viewDetail from './viewDetail.vue'
import { mapState } from 'vuex'

export default {
    components: {
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxHeaderFilter,
        DxFilterRow,
        DxButton,
        viewDetail,
        Popup,
        editPurchase,
    },
    data() {
        return {
            dataGridRefKey: 'datagridValid',
            popupVisible: false,
            isClick: null,
            details: null,
        }
    },
    computed: {
        ...mapState('muahang', ['muaHangDuAn']),
    },
    methods: {
        reload() {
            setTimeout(() => {
                this.$store.dispatch('muahang/getData')
            }, 200)
        },
        clickApprove(e) {
            this.$store.dispatch('pheduyet/submitApprove', e.data.id)
            this.reload()
        },
        clickUnApprove(e) {
            this.$store.dispatch('pheduyet/unApprove', e.data.id)
            this.reload()
        },
        clickView(e) {
            this.popupVisible = !this.popupVisible
            this.details = e.data
            this.isClick = 'view'
        },
        clickEdit(e) {
            this.popupVisible = !this.popupVisible
            this.$store.dispatch('muahang/getEditData', e.data.id)
            this.isClick = 'edit'
        },
        clickDelete(e) {
            if (confirm('Do you want to delete?') == true) {
                this.$store.dispatch('muahang/deleteData', e.data.id)
                this.reload()
            }
        },
        clickPrint(e) {
            this.$store.dispatch('exportExcel', e.data.id)
        },
        hiddenPopup() {
            this.popupVisible = !this.popupVisible
            this.reload()
        },
    },
    created() {
        this.$store.dispatch('muahang/getData')
    },
}
</script>

<style scoped>
.none {
    color: red;
    /* background-color: red; */
}
.approval {
    color: #acdf87;
    /* background-color: #acdf87; */
}
.revise {
    color: orange;
    /* background-color: orange; */
}
.submit {
    color: orange;
}
.approve {
    color: #acdf87;
}
.button {
    font-size: 24px;
    margin-right: 12px;
    cursor: pointer;
    transition: all 0.2s linear 0s;
    color: #4d4d4d;
}
.button:hover {
    font-size: 30px;
    transition: all 0.2s linear 0s;
    background-color: #ddd;
    border-radius: 50%;
}
</style>
