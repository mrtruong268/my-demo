<template>
    <div>
        <div class="row justify-end">
            <DxButton
                icon="mdi mdi-reload"
                :text="$t('Tải lại dữ liệu')"
                @click="clickReload"
            />
        </div>
        <DxDataGrid
            id="gridContainer"
            :data-source="baoCaoYcmh"
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
            <DxScrolling mode="standard" row-rendering-mode="standard" />
            <DxPager
                :visible="true"
                :allowed-page-sizes="[15, 30, 'all']"
                :show-page-size-selector="true"
                :show-info="true"
                :show-navigation-buttons="true"
            />
            <DxHeaderFilter :visible="true" :allow-search="true" />
            <DxFilterRow :visible="true" />
            <!-- <DxColumn
                data-field="id"
                :caption="$t('Số')"
                :allow-header-filtering="false"
            /> -->
            <DxColumn
                data-field="tenHangHoa_DichVu"
                :caption="$t('Hàng hóa, dịch vụ')"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="model_MaHieu"
                :caption="$t('Mã hiệu')"
                :allow-header-filtering="true"
            />

            <DxColumn
                data-field="soLuong"
                :caption="$t('Số lượng')"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="donVi"
                :caption="$t('Đơn vị')"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="donGiaTamTinh"
                :caption="$t('Đơn giá')"
                :format="customFormat"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="soTienTamTinh"
                :caption="$t('Tổng tiền')"
                :format="customFormat"
                :allow-header-filtering="false"
            />
            <!-- <DxColumn
                :allow-header-filtering="false"
                cell-template="buttons-cell"
            />
            <template #buttons-cell="{ data }">
                <DxButton
                    icon="mdi mdi-eye"
                    :hint="$t('Phê duyệt')"
                    @click="viewDetail(data)"
                />
            </template> -->
        </DxDataGrid>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import {
    DxDataGrid,
    DxColumn,
    DxScrolling,
    DxPager,
    DxPaging,
    DxEditing,
    DxSelection,
    DxHeaderFilter,
    DxFilterRow,
} from 'devextreme-vue/data-grid'
import DxButton from 'devextreme-vue/button'
export default {
    data() {
        return {}
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
    },
    computed: {
        ...mapState('muahang', ['baoCaoYcmh']),
    },
    methods: {
        clickReload() {
            this.$store.dispatch('muahang/getReportApproval')
        },
        customFormat(e) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(e)
        },
    },
    created() {
        this.$store.dispatch('muahang/getReportApproval')
    },
}
</script>

<style scoped>
</style>
