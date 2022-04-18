<template>
    <div class="container">
        <h2 class="text-xs-center mb-3">
            {{ $t('Purchase requisition') }}
        </h2>
        <div class="toolbar">
            <div class="row align-center justify-space-around">
                <div
                    v-for="item in ListYeuCau"
                    :key="item.id"
                    class="xs5 text-xs-center btn-list"
                    @click="onItemClick(item)"
                >
                    <i class="mdi mdi-format-list-numbered mr-1" />
                    {{ $t(item.title) }}
                </div>
            </div>
            <div class="row align-center justify-space-around">
                <DxButton
                    :text="$t('Create purchase requisition')"
                    type="normal"
                    styling-mode="text"
                    icon="mdi mdi-plus"
                    @click="
                        createNew(
                            $t('Create purchase requisition'),
                            'TaoMuaHang'
                        )
                    "
                    class="xs5"
                />
                <DxButton
                    :text="$t('Create production requisition')"
                    type="normal"
                    styling-mode="text"
                    icon="mdi mdi-plus"
                    @click="
                        createNew(
                            $t('Create production requisition'),
                            'TaoSanXuat'
                        )
                    "
                    class="xs5"
                />
            </div>
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
            <div class="tabPanel">
                <DxTabPanel
                    :data-source="List"
                    height="calc(78vh - 200px)"
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
                                class="mdi mdi-close-circle"
                                @click="closeButtonHandler(listItem)"
                            />
                        </div>
                    </template>
                    <template #itemTemplate="{ data: listItem }">
                        <DxScrollView>
                            <div>
                                <div v-if="listItem.loaiDanhSach === 'muahang'">
                                    <listPurchase :dataProp="listItem.data" />
                                </div>
                                <div
                                    v-else-if="
                                        listItem.loaiDanhSach === 'sanxuat'
                                    "
                                >
                                    <listProduct :dataProp="listItem.data" />
                                </div>
                                <div v-else>
                                    <addPurchase
                                        v-if="
                                            listItem.loaiDanhSach ===
                                            'TaoMuaHang'
                                        "
                                        :dataProp="listItem.data"
                                    />
                                    <addProduction
                                        v-else-if="
                                            listItem.loaiDanhSach ===
                                            'TaoSanXuat'
                                        "
                                        :dataProp="listItem.data"
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
import { DxScrollView } from 'devextreme-vue/scroll-view'
import { mapGetters } from 'vuex'

import ListPurchase from './listPurchase.vue'
import ListProduct from './listProduct.vue'
import addPurchase from './addPurchase.vue'
import addProduction from './addProduction.vue'

export default {
    components: {
        DxTabPanel,
        DxButton,
        DxScrollView,
        ListPurchase,
        ListProduct,
        addPurchase,
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
        createNew(title, loaiDanhSach) {
            let tmpObj = {
                id: this.idv4(),
                title: title,
                loaiDanhSach: loaiDanhSach,
                data: [],
            }
            if (!this.List.find((i) => i.loaiDanhSach === tmpObj.loaiDanhSach))
                this.addItem(tmpObj)
        },
        onItemClick(e) {
            this.addItem(e)
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
.container {
    height: 100%;
    overflow: hidden;
    margin: 80px 0;
}
.container h2 {
    color: #0986c5;
}
>>> .dx-multiview-item-container .dx-empty-message {
    margin-top: 200px;
}
.toolbar {
    border: 1px solid #e7e7e7;
}
.btn-list {
    background-color: white;
    color: black;
    cursor: pointer;
    padding: 10px 0;
}
.btn-list:hover {
    background-color: #e7e7e7;
}
</style>
