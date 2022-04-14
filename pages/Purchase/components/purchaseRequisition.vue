<template>
    <div class="main">
        <div class="container">
            <h3 class="text-xs-center mb-2">{{ $t('Purchase requisition') }}</h3>
            <div class="row align-center toolbar">
                <DxList
                    :data-source="ListYeuCau"
                    height="100%"
                    class="xs12 text-xs-center"
                    @itemClick="onItemClick"
                >
                    <template #item="{ data: item }">
                        {{ $t(item.title) }}
                    </template>
                </DxList>
            </div>
            <div class="row align-center">
                <DxButton
                    :text="$t('Create purchase requisition')"
                    type="normal"
                    styling-mode="outlined"
                    icon="mdi mdi-plus"
                    @click="addPurchase"
                    class="xs6"
                />
                <DxButton
                    :text="$t('Create production requisition')"
                    type="normal"
                    styling-mode="outlined"
                    icon="mdi mdi-plus"
                    @click="addProduct"
                    class="xs6"
                />
            </div>
            <div>
                <div class="row justify-end" v-show="List.length > 0">
                    <DxButton
                        :text="$t('Clear')"
                        type="normal"
                        styling-mode="text"
                        icon="mdi mdi-close"
                        @click="clearTab"
                    />
                </div>
                <DxTabPanel
                    :data-source="List"
                    height="443px"
                    :defer-rendering="false"
                    :show-nav-buttons="true"
                    :repaint-changes-only="true"
                    :selectedItem="selectedItem"
                    :noDataText="$t('No data to display')"
                    item-title-template="title"
                    item-template="itemTemplate"
                >
                    <template #title="{ data: listItem }">
                        <div>
                            <span>{{ $t(listItem.title) }} </span
                            ><i
                                v-show="showCloseButton()"
                                class="mdi mdi-close"
                                @click="closeButtonHandler(listItem)"
                            />
                        </div>
                    </template>
                    <template #itemTemplate="{ data: listItem }">
                        <DxScrollView>
                            <div>
                                <div v-if="listItem.loaiDanhSach === 'muahang'">
                                    <listPurchase
                                        :dataPurchase="listItem.dataMuahang"
                                    />
                                </div>
                                <div
                                    v-else-if="
                                        listItem.loaiDanhSach === 'sanxuat'
                                    "
                                >
                                    <listProduct
                                        :dataProduct="listItem.dataSanXuat"
                                    />
                                </div>
                                <div v-else>
                                    <addRequisition
                                        v-if="listItem.loaiDanhSach === 'tmh'"
                                        :dataPurchase="listItem.dataMuahang"
                                    />
                                    <addProduction
                                        v-else-if="
                                            listItem.loaiDanhSach === 'tsx'
                                        "
                                        :dataProduct="listItem.dataSanXuat"
                                    />
                                </div>
                            </div>
                        </DxScrollView>
                    </template>
                </DxTabPanel>
            </div>
        </div>
    </div>
</template>

<script>
import DxTabPanel from 'devextreme-vue/tab-panel'
import DxButton from 'devextreme-vue/button'
import DxList from 'devextreme-vue/list'
import { DxScrollView } from 'devextreme-vue/scroll-view'
import { mapGetters } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

import ListPurchase from './listPurchase.vue'
import ListProduct from './listProduct.vue'
import addRequisition from './addRequisition.vue'
import addProduction from './addProduction.vue'

export default {
    components: {
        DxTabPanel,
        DxButton,
        DxList,
        DxScrollView,
        ListPurchase,
        ListProduct,
        addRequisition,
        addProduction,
    },
    data() {
        return {
            selectedItem: null,
        }
    },
    computed: {
        ...mapGetters({
            DanhSach: 'List',
            DanhSachYeuCau: 'ListYeuCau',
        }),
        List: {
            get() {
                return this.DanhSach
            },
            set(newItem) {
                return newItem
            },
        },
        ListYeuCau: {
            get() {
                return this.DanhSachYeuCau
            },
            set(newItem) {
                return newItem
            },
        },
    },
    methods: {
        addItem(data) {
            if (!this.List.find((i) => i.id === data.id))
                this.$store.commit('ADD_LIST', data)
            this.selectedItem = data
        },
        addPurchase(e) {
            let ObjMua = {
                id: uuidv4(),
                title: e.element.ariaLabel,
                loaiDanhSach: 'tmh',
                dataMuahang: [],
            }
            if (!this.List.find((i) => i.loaiDanhSach === ObjMua.loaiDanhSach))
                this.addItem(ObjMua)
        },
        addProduct(e) {
            let ObjSx = {
                id: uuidv4(),
                title: e.element.ariaLabel,
                loaiDanhSach: 'tsx',
                dataSanXuat: [],
            }
            if (!this.List.find((i) => i.loaiDanhSach === ObjSx.loaiDanhSach))
                this.addItem(ObjSx)
        },
        onItemClick(e) {
            this.addItem(e.itemData)
        },
        closeButtonHandler(itemDel) {
            let result = confirm('Are you sure to close tab?')
            if (result) this.$store.commit('CLICK_DELETE', itemDel.id)
        },
        showCloseButton() {
            return this.List.length > 0
        },
        showPopup() {
            this.popupVisible = !this.popupVisible
        },
        clearTab() {
            let result = confirm('Are you sure to close all tabs?')
            if (result) this.$store.commit('CLEAR_DATA')
        },
    },
}
</script>

<style scoped>
.main {
    margin-top: 90px;
    margin-bottom: 40px;
}
.container h3 {
    color: #0986c5;
}
>>> .dx-scrollview-content {
    display: flex;
}
>>> .dx-list-item {
    border: none;
}
.toolbar {
    background-color: #ebebeb;
}
</style>
