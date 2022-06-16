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
            :data-source="muaHangDuAn"
            :show-column-lines="true"
            :show-row-lines="true"
            :show-borders="true"
            :row-alternation-enabled="true"
            height="auto"
            :noDataText="$t('Không có dữ liệu')"
            :remote-operations="true"
            :allow-column-resizing="true"
            :column-auto-width="true"
            :hover-state-enabled="false"
            :ref="dataGridRefKey"
        >
            <DxPaging :page-size="8" />
            <DxScrolling mode="standard" row-rendering-mode="standard" />
            <DxPager
                :visible="true"
                :show-page-size-selector="false"
                :show-info="false"
                :show-navigation-buttons="true"
            />
            <DxHeaderFilter :visible="true" />
            <DxFilterRow :visible="true" />
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
                data-field="trangThaiDuyet"
                :caption="$t('Trạng thái duyệt')"
                cell-template="cellTemplate2"
            />
            <template #cellTemplate2="{ data }">
                <div
                    :class="
                        data.value === 'Đang lập'
                            ? ''
                            : data.value === 'Chờ duyệt'
                            ? 'submit'
                            : 'approve'
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
            :showTitle="false"
            :closeOut="false"
            :width="'80%'"
        >
            <template #main>
                <editPurchase @invisible="hiddenPopup" />
            </template>
        </popup>
    </div>
</template>

<script>
import {
    DxDataGrid,
    DxColumn,
    DxHeaderFilter,
    DxFilterRow,
    DxScrolling,
    DxPager,
    DxPaging,
} from 'devextreme-vue/data-grid'
import DxButton from 'devextreme-vue/button'
import Popup from '~/components/popup.vue'
import editPurchase from './editPurchase.vue'
import { mapState } from 'vuex'

export default {
    components: {
        DxDataGrid,
        DxColumn,
        DxScrolling,
        DxPager,
        DxPaging,
        DxHeaderFilter,
        DxFilterRow,
        DxButton,
        Popup,
        editPurchase,
    },
    data() {
        return {
            dataGridRefKey: 'datagridValid',
            popupVisible: false,
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
        clickEdit(e) {
            this.popupVisible = !this.popupVisible
            this.$store.dispatch('muahang/getEditData', e.data.id)
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
.submit {
    color: orange;
    /* background-color: orange; */
}
.approve {
    color: #009900;
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
