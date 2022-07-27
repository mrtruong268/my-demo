<template>
    <div>
        <div class="row justify-end">
            <DxButton
                icon="mdi mdi-reload"
                @click="clickReload"
                :text="$t('Tải lại')"
            />
        </div>
        <DxDataGrid
            id="gridContainer"
            :data-source="dataSource"
            :show-column-lines="true"
            :show-row-lines="true"
            :show-borders="true"
            :row-alternation-enabled="true"
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
                :show-navigation-buttons="false"
            />
            <DxHeaderFilter :visible="true" :allow-search="true" />
            <DxFilterRow :visible="true" />
            <DxColumn
                data-field="id"
                alignment="center"
                :caption="$t('Số')"
                :allow-header-filtering="false"
                width="70"
            />
            <DxColumn
                data-field="tenNhanVien"
                :caption="$t('Họ và tên')"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="phongBan"
                :caption="$t('Phòng ban')"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="soThamChieu"
                :caption="$t('Số tham chiếu')"
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
                data-field="trangThaiDuyet"
                :caption="$t('Trạng thái')"
                cell-template="cellTemplate"
            />
            <template #cellTemplate="{ data }">
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
                <div>
                    <DxButton
                        icon="mdi mdi-eye"
                        :hint="$t('Xem chi tiết')"
                        @click="viewDetail(data)"
                    />
                    <DxButton
                        v-if="data.data.trangThaiDuyet === 'MH đã duyệt'"
                        icon="mdi mdi-check"
                        :hint="$t('Đã mua hàng')"
                        @click="checkComplete(data)"
                    />
                </div>
            </template>
        </DxDataGrid>
        <popup
            :showPopup="popupVisible"
            :showTitle="true"
            :closeOut="true"
            :title="$t('Phê duyệt')"
            :width="'80%'"
        >
            <template #main>
                <approve
                    v-if="isWait === true"
                    :item="editItem"
                    @close="hidePopup"
                />
                <viewDetails v-else :item="editItem" @close="hidePopup" />
            </template>
        </popup>
    </div>
</template>

<script>
import {
    DxDataGrid,
    DxColumn,
    DxPager,
    DxScrolling,
    DxPaging,
    DxEditing,
    DxSelection,
    DxHeaderFilter,
    DxFilterRow,
} from 'devextreme-vue/data-grid'
import DxButton from 'devextreme-vue/button'
import popup from '~/components/popup'
import approve from '~/components/approve'
import viewDetails from '~/components/viewDetails'
export default {
    layout: 'commonLayout',
    props: {
        dataSource: {
            type: Array,
            default: () => [],
        },
        isWait: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            popupVisible: false,
            editItem: {},
        }
    },
    components: {
        DxDataGrid,
        DxColumn,
        DxScrolling,
        DxPager,
        DxPaging,
        DxEditing,
        DxSelection,
        DxHeaderFilter,
        DxFilterRow,
        DxButton,
        popup,
        approve,
        viewDetails,
    },
    methods: {
        viewDetail(e) {
            this.editItem = e.data
            this.popupVisible = !this.popupVisible
        },
        checkComplete(e) {
            var result = confirm('Do you want to submit?')
            if (result) {
                this.$store.dispatch('muahang/checkCompleteNp', e.data.id)
                this.clickReload()
            }
        },
        clickReload() {
            setTimeout(() => {
                this.$emit('getData')
            }, 200)
        },
        hidePopup() {
            this.popupVisible = !this.popupVisible
            this.clickReload()
        },
    },
    created() {
        this.$emit('getData')
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
