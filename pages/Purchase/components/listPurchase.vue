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
                    <DxButton
                        icon="mdi mdi-cart-plus"
                        @click="clickApprove(data)"
                    />
                    <DxButton icon="mdi mdi-eye" @click="clickView(data)" />
                    <DxButton icon="mdi mdi-pencil" @click="clickEdit(data)" />
                    <DxButton
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
        >
            <template #main>
                <addPurchase
                    v-if="isClick == 'edit'"
                    @invisible="hiddenPopup"
                />
                <viewDetail v-else :view="suaYeuCau" />
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
import { mapGetters } from 'vuex'
import addPurchase from './addPurchase.vue'
import viewDetail from './viewDetail.vue'
import Popup from '~/components/popup.vue'

export default {
    props: ['dataProp'],
    components: {
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxHeaderFilter,
        DxButton,
        addPurchase,
        viewDetail,
        Popup,
    },
    data() {
        return {
            popupVisible: false,
            isClick: null,
        }
    },
    computed: {
        ...mapGetters('muahang', ['suaYeuCau']),
    },
    methods: {
        reload() {
            setTimeout(() => {
                this.$store.dispatch('muahang/getData')
            }, 100)
        },
        clickApprove(e) {
            this.$store.dispatch('pheduyet/postData', e.data.id)
        },
        clickView(e) {
            this.popupVisible = !this.popupVisible
            this.$store.dispatch('muahang/getEditData', e.data.id)
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
