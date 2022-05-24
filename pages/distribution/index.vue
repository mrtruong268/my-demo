<template>
    <div class="container">
        <div class="main">
            <h2 class="text-xs-center mb-3">{{ $t('Distribution list') }}</h2>
            <div class="mb-3 row align-center justify-space-between">
                <div>
                    <DxSelectBox
                        id="custom-templates"
                        :data-source="danhSachNhaPhanPhoi"
                        :searchEnabled="true"
                        display-expr="tenHangMuc"
                        value-expr="id"
                        stylingMode="underlined"
                        @selectionChanged="selectionChanged"
                        :label="$t('Categories')"
                        label-mode="floating"
                    />
                </div>
                <div>
                    <DxButton
                        icon="mdi mdi-reload"
                        text="Reload"
                        type="normal"
                        @click="clickReload"
                    />
                    <DxButton
                        icon="mdi mdi-plus"
                        text="Create"
                        type="normal"
                        @click="clickAdd"
                    />
                </div>
            </div>
            <DxDataGrid
                id="gridContainer"
                :data-source="dataSrc"
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
                    :allow-updating="false"
                    :allow-adding="false"
                    :useIcons="true"
                    mode="cell"
                />
                <DxColumn data-field="id" :caption="$t('No')" />
                <DxColumn
                    data-field="tenNcc"
                    :caption="$t('Distributor name')"
                />
                <DxColumn data-field="soLuong" :caption="$t('Quantity')" />
                <DxColumn
                    data-field="donGia"
                    :caption="$t('Estimated unit')"
                    :format="customFormat"
                />

                <DxColumn
                    data-field="tongTien"
                    :caption="$t('Estimated amount')"
                    :format="customFormat"
                    :calculate-cell-value="calculateAmount"
                />
                <DxColumn data-field="vat" caption="Vat(%)">
                    <DxLookup :data-source="vat" />
                </DxColumn>
                <DxColumn
                    data-field="tongTienChuaVat"
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
    </div>
</template>

<script>
import { mapState } from 'vuex'
import DxSelectBox from 'devextreme-vue/select-box'
import {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxEditing,
    DxSelection,
    DxHeaderFilter,
    DxFilterRow,
    DxLookup,
} from 'devextreme-vue/data-grid'
import DxButton from 'devextreme-vue/button'

export default {
    layout: 'commonLayout',
    data() {
        return {
            dataSrc: [],
            vat: [...Array(21).keys()],
        }
    },
    components: {
        DxSelectBox,
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxEditing,
        DxSelection,
        DxHeaderFilter,
        DxLookup,
        DxFilterRow,
        DxButton,
    },
    computed: {
        ...mapState('phanphoi', ['danhSachNhaPhanPhoi']),
    },
    methods: {
        selectionChanged(e) {
            this.dataSrc = e.selectedItem.data
        },
        calculateAmount(e) {
            return e.soLuong * e.donGia
        },
        calculateAmountVat(e) {
            return e.soLuong * e.donGia + (e.soLuong * e.donGia * e.vat) / 100
        },
        customFormat(e) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(e)
        },
    },
}
</script>

<style scoped>
.main {
    margin: 80px auto;
}
</style>
