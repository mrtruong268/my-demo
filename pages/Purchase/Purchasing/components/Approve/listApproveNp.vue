<template>
    <div>
        <div class="row justify-end">
            <DxButton
                icon="mdi mdi-reload"
                @click="clickReload"
                :text="$t('Tải lại dữ liệu')"
            />
        </div>
        <DxDataGrid
            id="gridContainer"
            :data-source="danhSachPheDuyetNp.data"
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
        >
            <DxPaging :page-size="30" />
            <DxScrolling column-rendering-mode="virtual" />
            <DxPager
                :visible="true"
                :allowed-page-sizes="[15, 30, 'all']"
                :show-page-size-selector="true"
                :show-info="true"
                :show-navigation-buttons="true"
            />
            <DxHeaderFilter :visible="true" :allow-search="true" />
            <DxFilterRow :visible="true" />
            <DxColumn
                data-field="id"
                :caption="$t('Số')"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="tenNhanVien"
                :caption="$t('Họ và tên')"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="maNhanVien"
                :caption="$t('Mã nhân viên')"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="soThamChieu"
                :caption="$t('Số tham chiếu')"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="chucVu"
                :caption="$t('Chức vụ')"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="phongBan"
                :caption="$t('Phòng ban')"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="ngayDeTrinh"
                :caption="$t('Ngày đệ trình')"
                format="dd/MM/yyyy"
                data-type="date"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="thoiDiemDuyet"
                :caption="$t('Thời gian duyệt')"
                format="HH:mm dd/MM/yyyy"
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
                cell-template="buttons-cell"
            />
            <template #buttons-cell="{ data }">
                <DxButton
                    icon="mdi mdi-eye"
                    :hint="$t('Phê duyệt')"
                    @click="viewDetail(data)"
                />
            </template>
        </DxDataGrid>
        <popup
            :showPopup="popupVisible"
            :showTitle="false"
            :closeOut="false"
            :title="$t('Xem chi tiết')"
            :width="'80%'"
        >
            <template #main>
                <viewApproveNp :view="viewItem" @hiddenPopup="hidePopup" />
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
    DxScrolling,
    DxPager,
    DxSelection,
    DxHeaderFilter,
    DxFilterRow,
} from 'devextreme-vue/data-grid'
import DxButton from 'devextreme-vue/button'
import popup from '~/components/popup.vue'
import viewApproveNp from './viewApproveNp.vue'

export default {
    data() {
        return {
            popupVisible: false,
            viewItem: {},
        }
    },
    components: {
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxScrolling,
        DxPager,
        DxEditing,
        DxSelection,
        DxHeaderFilter,
        DxFilterRow,
        DxButton,
        popup,
        viewApproveNp,
    },
    computed: {
        ...mapState('pheduyet', ['danhSachPheDuyetNp']),
    },
    methods: {
        viewDetail(e) {
            this.viewItem = e.data
            this.popupVisible = !this.popupVisible
        },
        clickReload() {
            setTimeout(() => {
                this.$store.dispatch('pheduyet/getApproveNp')
            }, 200)
        },
        hidePopup() {
            this.popupVisible = !this.popupVisible
            this.clickReload()
        },
    },
    created() {
        this.clickReload()
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
>>> .dx-datagrid .dx-row > td {
    padding: 8px 16px;
    font-size: 14px;
    line-height: 20px;
}
</style>
