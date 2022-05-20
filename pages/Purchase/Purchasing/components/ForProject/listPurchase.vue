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
            <DxHeaderFilter :visible="true" />
            <DxFilterRow :visible="true" />
            <DxPaging :enabled="false" />
            <DxColumn
                data-field="id"
                caption="No"
                width="60"
                alignment="center"
                :allow-header-filtering="false"
            />
            <DxColumn
                :allow-header-filtering="false"
                data-field="tenNhanVien"
                caption="Name"
            />
            <DxColumn
                :allow-header-filtering="false"
                data-field="phongBan"
                caption="Department"
            />
            <DxColumn
                :allow-header-filtering="false"
                data-field="soThamChieu"
                caption="Reference number"
            />
            <DxColumn
                data-field="ngayDeTrinh"
                caption="Date of submission"
                data-type="date"
                format="dd/MM/yyyy"
                :allow-header-filtering="false"
            />
            <DxColumn
                data-field="ngayCanHang"
                caption="Delivery date"
                format="dd/MM/yyyy"
                data-type="date"
                :allow-header-filtering="false"
            />
            <DxColumn
                :allow-header-filtering="true"
                data-field="approvalState"
                caption="Approval state"
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
                caption="Approval status"
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
                width="auto"
                cell-template="buttons-cell"
            />
            <template #buttons-cell="{ data }">
                <div class="row justify-center">
                    <div
                        class="mdi mdi-eye button"
                        @click="clickView(data)"
                    ></div>
                    <div
                        class="mdi mdi-pencil button"
                        @click="clickEdit(data)"
                    ></div>
                    <div
                        class="mdi mdi-file-check button"
                        @click="clickApprove(data)"
                    ></div>
                    <div
                        class="mdi mdi-delete button"
                        @click="clickDelete(data)"
                    ></div>
                    <!-- <DxButton
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
                    /> -->
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
    DxFilterRow,
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
        DxFilterRow,
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
            this.$toast.success('Success!')
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
            this.$toast.success('Success!')
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

<style scoped>
.none {
    color: white;
    background-color: red;
}
.approval {
    color: white;
    background-color: #acdf87;
}
.revise {
    color: white;
    background-color: orange;
}
.submit {
    color: orange;
}
.approve {
    color: #acdf87;
}
.button {
    font-size: 24px;
    margin-right: 12px;
    cursor: pointer;
    transition: all 0.2s linear 0s;
    color: #4d4d4d;
}
.button:hover {
    font-size: 30px;
    transition: all 0.2s linear 0s;
    background-color: #ddd;
    border-radius: 50%;
}
</style>
