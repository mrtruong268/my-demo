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
            height="100%"
            :noDataText="$t('Không có dữ liệu')"
            remote-operations="true"
            :allow-column-resizing="true"
            :column-auto-width="true"
            :hover-state-enabled="false"
        >
            <DxHeaderFilter :visible="true" />
            <DxFilterRow :visible="true" />
            <DxPaging :enabled="false" />
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
            :closeOut="true"
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
    DxSelection,
    DxHeaderFilter,
    DxFilterRow,
} from 'devextreme-vue/data-grid'
import DxButton from 'devextreme-vue/button'
import popup from '~/components/popup.vue'
import viewApproveNp from './viewApproveNp.vue'

export default {
    layout: 'commonLayout',
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
        this.$store.dispatch('pheduyet/getApproveNp')
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
>>> .dx-datagrid .dx-row > td {
    padding: 8px 16px;
    font-size: 14px;
    line-height: 20px;
}
</style>
