<template>
    <div>
        <div class="row justify-end">
            <DxButton
                icon="mdi mdi-plus"
                @click="clickAdd"
                :text="$t('Tạo mới')"
            />
            <DxButton
                icon="mdi mdi-reload"
                @click="reload"
                :text="$t('Tải lại')"
            />
        </div>
        <DxDataGrid
            id="gridContainer"
            :data-source="muaHangNgoaiDuAn"
            :show-column-lines="true"
            :show-row-lines="true"
            :show-borders="true"
            :row-alternation-enabled="true"
            :noDataText="$t('Không có dữ liệu')"
            :height="fullscreen ? '100%' : 'calc(80vh - 90px)'"
            :remote-operations="true"
            :allow-column-resizing="true"
            :column-auto-width="true"
            :hover-state-enabled="false"
        >
            <DxPaging :page-size="30" />
            <DxColumnFixing :enabled="false" />
            <DxScrolling column-rendering-mode="virtual" />
            <DxPager
                :visible="true"
                :allowed-page-sizes="[15, 30, 'all']"
                :show-page-size-selector="true"
                :show-info="true"
                :show-navigation-buttons="false"
            />
            <DxHeaderFilter :visible="true" :allow-search="true" />
            <DxFilterRow :visible="true" />
            <DxColumn
                data-field="id"
                :caption="$t('Số')"
                alignment="center"
                :allow-header-filtering="false"
                :width="50"
            />
            <DxColumn
                :allow-header-filtering="false"
                data-field="tenNhanVien"
                :caption="$t('Họ và tên')"
            />
            <DxColumn
                :allow-header-filtering="true"
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
                data-field="thoiDiemDuyet"
                :caption="$t('Thời gian duyệt')"
                :format="timestamp"
                data-type="date"
                :allow-header-filtering="false"
            />
            <DxColumn
                :allow-header-filtering="true"
                data-field="trangThaiDuyet"
                :caption="$t('Trạng thái')"
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
            :width="isAdd === false ? '90%' : '80%'"
        >
            <template #main>
                <addPurchaseNp v-if="isAdd === true" @invisible="hiddenPopup" />
                <editPurchaseNp v-else @invisible="hiddenPopup" />
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
    DxColumnFixing,
    DxPaging,
} from 'devextreme-vue/data-grid'
import { mapState } from 'vuex'
import DxButton from 'devextreme-vue/button'
import Popup from '~/components/popup.vue'
import editPurchaseNp from './editPurchaseNp.vue'
import addPurchaseNp from './addPurchaseNp.vue'
import moment from 'moment'

export default {
    components: {
        DxDataGrid,
        DxColumn,
        DxScrolling,
        DxColumnFixing,
        DxPager,
        DxPaging,
        DxHeaderFilter,
        DxFilterRow,
        DxButton,
        Popup,
        editPurchaseNp,
        addPurchaseNp,
    },
    data() {
        return {
            popupVisible: false,
            isAdd: false,
        }
    },
    computed: {
        ...mapState('muahang', ['muaHangNgoaiDuAn']),
        ...mapState(['fullscreen']),
    },
    methods: {
        reload() {
            setTimeout(() => {
                this.$store.dispatch('muahang/getDataNp')
            }, 200)
        },
        clickAdd() {
            this.isAdd = true
            this.popupVisible = !this.popupVisible
        },
        clickApprove(e) {
            this.$store.dispatch('pheduyet/submitApproveNp', e.data.id)
            this.reload()
        },
        clickUnApprove(e) {
            this.$store.dispatch('pheduyet/unApproveNp', e.data.id)
            this.reload()
        },
        clickEdit(e) {
            this.isAdd = false
            this.popupVisible = !this.popupVisible
            this.$store.dispatch('muahang/getEditDataNp', e.data.id)
            this.$store.dispatch('muahang/checkApproveNp', e.data.id)
        },
        clickDelete(e) {
            if (confirm('Do you want to delete?') == true) {
                this.$store.dispatch('muahang/deleteDataNp', e.data.id)
                this.reload()
            }
        },
        clickPrint(e) {
            this.$store.dispatch('exportExcelNp', e.data)
        },
        hiddenPopup() {
            this.popupVisible = !this.popupVisible
            this.reload()
        },
        timestamp(date) {
            return moment(date).format('HH:mm DD/MM/YYYY')
        },
    },
    created() {
        this.$store.dispatch('muahang/getDataNp')
    },
}
</script>

<style scoped>
.submit {
    color: orange;
}
.approve {
    color: #009900;
}
</style>
