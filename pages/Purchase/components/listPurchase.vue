<template>
    <div>
        <div class="row justify-end">
            <DxButton icon="mdi mdi-reload" @click="reload" />
        </div>
        <DxDataGrid
            id="gridContainer"
            :data-source="dataProp.data"
            :show-borders="true"
            height="100%"
        >
            <DxPaging :enabled="false" />
            <DxColumn
                data-field="id"
                caption="No"
                width="60"
                alignment="center"
            />
            <DxColumn data-field="tenNhanVien" caption="Name" />
            <DxColumn data-field="phongBan" caption="Department" />
            <DxColumn data-field="soThamChieu" caption="Reference number" />
            <DxColumn
                data-field="ngayDeTrinh"
                caption="Date of submission"
                data-type="date"
                format="dd/MM/yyyy"
            />
            <DxColumn
                data-field="ngayCanHang"
                caption="Delivery date"
                format="dd/MM/yyyy"
                data-type="date"
            />

            <DxColumn
                :allow-header-filtering="false"
                width="auto"
                cell-template="buttons-cell"
            />
            <template #buttons-cell="{ data }">
                <div>
                    <DxButton icon="mdi mdi-eye" @click="clickView(data)" />
                    <DxButton icon="mdi mdi-pencil" @click="clickEdit(data)" />
                    <DxButton
                        icon="mdi mdi-delete"
                        @click="clickDelete(data)"
                    />
                </div>
            </template>
        </DxDataGrid>
        <DxPopup
            :visible="popupVisible"
            :drag-enabled="false"
            :close-on-outside-click="false"
            :show-close-button="true"
            :show-title="true"
            title="Edit requisition"
        >
            <addPurchase :edit="suaYeuCau" @invisible="hiddenPopup" />
        </DxPopup>
        <DxPopup
            :visible="popupVisible2"
            :drag-enabled="false"
            :close-on-outside-click="false"
            :show-close-button="true"
            :show-title="true"
            title="View requisition"
        >
            <viewPurchase :view="suaYeuCau" />
        </DxPopup>
    </div>
</template>

<script>
import { DxPopup } from 'devextreme-vue/popup'
import {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxHeaderFilter,
} from 'devextreme-vue/data-grid'
import DxButton from 'devextreme-vue/button'
import addPurchase from './addPurchase.vue'
import { mapState } from 'vuex'
import viewPurchase from './viewPurchase.vue'

export default {
    props: ['dataProp'],
    components: {
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxHeaderFilter,
        DxPopup,
        DxButton,
        addPurchase,
        viewPurchase,
    },
    data() {
        return {
            popupVisible: false,
            popupVisible2: false,
        }
    },
    computed: {
        ...mapState('muahang', ['suaYeuCau']),
    },
    methods: {
        reload() {
            setTimeout(() => {
                this.$store.dispatch('muahang/getData')
            }, 10)
        },
        clickView(e) {
            this.popupVisible2 = !this.popupVisible2
            this.$store.dispatch('muahang/getEditData', e.data.id)
        },
        clickEdit(e) {
            this.popupVisible = !this.popupVisible
            this.$store.dispatch('muahang/getEditData', e.data.id)
        },
        clickDelete(e) {
            this.$store.dispatch('muahang/deleteData', e.data.id)
            this.reload()
        },
        hiddenPopup() {
            this.popupVisible = !this.popupVisible
            this.reload()
        },
    },
}
</script>

<style scoped>
>>> .dx-datagrid .dx-row > td {
    padding: 8px;
    font-size: 14px;
    line-height: 20px;
}
</style>
