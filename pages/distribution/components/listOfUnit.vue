<template>
    <div>
        <!-- :data-source="dataProp" -->
        <DxDataGrid
            id="gridContainer"
            :show-borders="true"
            height="100%"
            remote-operations="true"
            :allow-column-resizing="true"
            :column-auto-width="true"
            :hover-state-enabled="true"
        >
            <!-- <DxHeaderFilter :visible="true" /> -->
            <DxFilterRow :visible="true" />
            <DxPaging :enabled="false" />
            <DxEditing
                :allow-updating="true"
                :allow-adding="true"
                :useIcons="true"
                mode="cell"
            />
            <DxColumn data-field="id" :caption="$t('No')" />
            <DxColumn
                data-field="tenNcc"
                :caption="$t('Distributor name')"
                :group-index="0"
            />
            <DxColumn data-field="tenMatHang" :caption="$t('Items name')" />
            <DxColumn data-field="soLuong" :caption="$t('Quantity')" />
            <DxColumn
                data-field="donGia"
                :caption="$t('Estimated unit')"
                :format="customFormat"
            />
            <DxColumn data-field="vat" caption="Vat(%)" />
            <DxColumn
                data-field="tongTien"
                :caption="$t('Estimated amount')"
                :format="customFormat"
                :calculate-cell-value="calculateAmount"
            />
            <!-- <DxLookup :data-source="vat" /> -->
            <DxColumn
                data-field="tongTienGomVat"
                :caption="$t('Estimated amount(VAT)')"
                :format="customFormat"
                :calculate-cell-value="calculateAmountVat"
            />
            <DxColumn
                data-field="thoiGianGiaoHang"
                :caption="$t('Delivery time')"
            />
            <DxColumn
                data-field="thoiGianBaoHanh"
                :caption="$t('Warranty period')"
            />
            <DxColumn data-field="dieuKhoan" :caption="$t('Rules')" />
            <DxColumn data-field="ghiChu" :caption="$t('Note')" />
        </DxDataGrid>
    </div>
</template>

<script>
import {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxEditing,
    DxSelection,
    DxHeaderFilter,
    DxFilterRow,
    DxLookup,
    DxGroupPanel,
} from 'devextreme-vue/data-grid'
import DxButton from 'devextreme-vue/button'
export default {
    components: {
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxEditing,
        DxSelection,
        DxHeaderFilter,
        DxFilterRow,
        DxLookup,
        DxGroupPanel,
        DxButton,
    },
    data() {
        return {}
    },
    methods: {
        calculateAmount(e) {
            return e.soLuong * e.donGia
        },
        calculateAmountVat(e) {
            let sum = e.soLuong * e.donGia
            let sumVat = (sum / 100) * e.vat
            return sum + sumVat
        },
        customFormat(e) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(e)
        },
    },
    created() {
        this.$store.dispatch('phanphoi/getSupplier')
        this.$store.dispatch('phanphoi/getApprovalPr')
    },
}
</script>

<style scoped></style>
