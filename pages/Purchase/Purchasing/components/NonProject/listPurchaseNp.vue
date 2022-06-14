<template>
    <div>
        <div class="row justify-end">
            <DxButton
                icon="mdi mdi-reload"
                @click="reload"
                :text="$t('Tải lại dữ liệu')"
            />
        </div>
        <DxDataGrid
            id="gridContainer"
            :data-source="muaHangNgoaiDuAn"
            :show-column-lines="true"
            :show-row-lines="true"
            :show-borders="true"
            :row-alternation-enabled="true"
            height="100%"
            :noDataText="$t('Không có dữ liệu')"
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
                :caption="$t('Số')"
                alignment="center"
                :allow-header-filtering="false"
            />
            <DxColumn
                :allow-header-filtering="false"
                data-field="tenNhanVien"
                :caption="$t('Họ và tên')"
            />
            <DxColumn
                :allow-header-filtering="false"
                data-field="phongBan"
                :caption="$t('Phòng ban')"
            />
            <DxColumn
                :allow-header-filtering="false"
                data-field="soThamChieu"
                :caption="$t('Số tham chiếu')"
            />
            <DxColumn
                data-field="ngayDeTrinh"
                :caption="$t('Ngày đệ trình')"
                data-type="date"
                format="dd/MM/yyyy"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="ngayCanHang"
                :caption="$t('Ngày cần hàng')"
                format="dd/MM/yyyy"
                data-type="date"
                :allow-header-filtering="false"
            />
            <DxColumn
                :allow-header-filtering="true"
                data-field="approvalState"
                :caption="$t('Bước duyệt')"
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
                :caption="$t('Trạng thái duyệt')"
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
                            icon="mdi mdi-file-sign"
                            :hint="$t('Phê duyệt mua hàng')"
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
                            :hint="$t('Xem chi tiết')"
                            @click="clickView(data)"
                        />
                    </div>
                    <div>
                        <DxButton
                            icon="mdi mdi-pencil"
                            :hint="$t('Sửa')"
                            @click="clickEdit(data)"
                        />
                    </div>
                    <div>
                        <DxButton
                            icon="mdi mdi-delete"
                            :hint="$t('Xoá')"
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
            :title="isClick == 'edit' ? $t('Sửa') : $t('')"
            :width="'80%'"
        >
            <template #main>
                <editPurchaseNp
                    v-if="isClick == 'edit'"
                    @invisible="hiddenPopup"
                />
                <viewDetailNp v-else :view="viewItem" />
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
import editPurchaseNp from './editPurchaseNp.vue'
import viewDetailNp from './viewDetailNp.vue'
import { mapState } from 'vuex'

export default {
    components: {
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxHeaderFilter,
        DxFilterRow,
        DxButton,
        Popup,
        viewDetailNp,
        editPurchaseNp,
    },
    data() {
        return {
            dataGridRefKey: 'datagridValid',
            popupVisible: false,
            isClick: null,
            viewItem: null,
        }
    },
    computed: {
        ...mapState('muahang', ['muaHangNgoaiDuAn']),
    },
    methods: {
        reload() {
            setTimeout(() => {
                this.$store.dispatch('muahang/getDataNp')
            }, 200)
        },
        clickApprove(e) {
            this.$store.dispatch('pheduyet/submitApproveNp', e.data.id)
            this.reload()
        },
        clickUnApprove(e) {
            this.$store.dispatch('pheduyet/unApproveNp', e.data.id)
            this.reload()
        },
        clickView(e) {
            this.popupVisible = !this.popupVisible
            this.viewItem = e.data
            this.isClick = 'view'
        },
        clickEdit(e) {
            this.popupVisible = !this.popupVisible
            this.$store.dispatch('muahang/getEditDataNp', e.data.id)
            this.isClick = 'edit'
        },
        clickDelete(e) {
            if (confirm('Do you want to delete?') == true) {
                this.$store.dispatch('muahang/deleteDataNp', e.data.id)
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
        this.$store.dispatch('muahang/getDataNp')
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
>>> .dx-datagrid .dx-row > td {
    padding: 8px 16px;
    font-size: 14px;
    line-height: 20px;
}
</style>
