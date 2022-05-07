<template>
    <div>
        <div class="row justify-end">
            <DxButton icon="mdi mdi-reload" @click="reload" text="Reload" />
        </div>
        <DxDataGrid
            id="gridContainer"
            :data-source="dataProp.data"
            :show-borders="true"
            height="100%"
            :hover-state-enabled="true"
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
                <div class="row justify-center">
                    <DxButton
                        type="normal"
                        hint="Submit"
                        styling-mode="text"
                        icon="mdi mdi-file-check"
                        @click="clickApprove(data)"
                    />
                    <DxButton
                        type="normal"
                        hint="View detail"
                        styling-mode="text"
                        icon="mdi mdi-eye"
                        @click="clickView(data)"
                    />
                    <DxButton
                        type="normal"
                        hint="Edit"
                        styling-mode="text"
                        icon="mdi mdi-pencil"
                        @click="clickEdit(data)"
                    />
                    <DxButton
                        type="normal"
                        hint="Delete"
                        styling-mode="text"
                        icon="mdi mdi-delete"
                        @click="clickDelete(data)"
                    />
                </div>
            </template>
        </DxDataGrid>
        <popup
            :showPopup="popupVisible"
            :showTitle="true"
            :title="isClick == 'edit' ? 'Edit requisition' : 'View details'"
            :width="'80%'"
        >
            <template #main>
                <editPurchase
                    v-if="isClick == 'edit'"
                    @invisible="hiddenPopup"
                />
                <viewDetail v-else :view="details" />
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
} from 'devextreme-vue/data-grid'
import DxButton from 'devextreme-vue/button'
import Popup from '~/components/popup.vue'
import editPurchase from './editPurchase.vue'
import viewDetail from './viewDetail.vue'

export default {
    props: ['dataProp'],
    components: {
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxHeaderFilter,
        DxButton,
        viewDetail,
        Popup,
        editPurchase,
    },
    data() {
        return {
            popupVisible: false,
            isClick: null,
            details: null,
        }
    },
    methods: {
        reload() {
            setTimeout(() => {
                this.$store.dispatch('muahang/getData')
            }, 200)
        },
        clickApprove(e) {
            this.$store.dispatch('pheduyet/submitApprove', e.data.id)
        },
        clickView(e) {
            this.popupVisible = !this.popupVisible
            this.details = e.data
            this.isClick = 'view'
        },
        clickEdit(e) {
            this.popupVisible = !this.popupVisible
            this.$store.dispatch('muahang/getEditData', e.data.id)
            this.isClick = 'edit'
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
    created() {
        this.$store.dispatch('muahang/getData')
    },
}
</script>

<style scoped></style>
