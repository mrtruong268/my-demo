<template>
    <div class="purchase">
        <h2 class="text-xs-center mb-2">
            {{ $t('Purchase requisition') }}
        </h2>
        <div class="toolbar">
            <div class="row align-center justify-space-around">
                <div v-for="item in List" :key="item.id" class="xs4">
                    <p class="header">{{ item.header }}</p>
                    <div @click="onItemClick(item)" class="btn-list">
                        <i class="mdi mdi-format-list-numbered mr-1" />
                        {{ $t(item.title) }}
                    </div>
                </div>
            </div>
            <div class="row align-center">
                <div
                    v-for="item in dataNew"
                    :key="item.id"
                    class="xs4 btn-list"
                    @click="onItemClick(item)"
                >
                    <i class="mdi mdi-plus-circle mr-1" />
                    {{ $t(item.title) }}
                </div>
            </div>
        </div>
        <div>
            <div class="row justify-end" v-show="tabPanel.length > 0">
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
                    :data-source="tabPanel"
                    height="calc(78vh - 210px)"
                    :defer-rendering="false"
                    :show-nav-buttons="true"
                    :repaint-changes-only="true"
                    :selectedItem="selectedItem"
                    :noDataText="$t('No data to display')"
                    item-title-template="title"
                    item-template="itemTemplate"
                    @titleClick="titleClick"
                >
                    <template #title="{ data: item }">
                        <div>
                            <span>{{ $t(item.title) }} </span
                            ><i
                                v-show="showCloseButton()"
                                class="mdi mdi-close-circle"
                                @click="closeButtonHandler(item)"
                            />
                        </div>
                    </template>
                    <template #itemTemplate="{ data: item }">
                        <DxScrollView>
                            <div>
                                <div v-if="item.listType === 'muahang'">
                                    <listPurchase :dataProp="item.data" />
                                </div>
                                <div v-else-if="item.listType === 'sanxuat'">
                                    <listProduct :dataProp="item.data" />
                                </div>
                                <div v-else-if="item.listType === 'pheduyet'">
                                    <listApprove :dataProp="item.data" />
                                </div>
                                <div v-else>
                                    <addPurchase
                                        v-if="item.listType === 'TaoMuaHang'"
                                        :dataProp="item.data"
                                    />
                                    <addProduction
                                        v-else-if="
                                            item.listType === 'TaoSanXuat'
                                        "
                                        :dataProp="item.data"
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

import ListPurchase from './ForProject/listPurchase.vue'
import addPurchase from './ForProject/addPurchase.vue'
import listApprove from '../components/Approve/listApprove.vue'

export default {
    props: {
        tabPanel: {
            type: Array,
            default: null,
        },
        List: {
            type: Array,
            default: null,
        },
    },
    components: {
        DxTabPanel,
        DxButton,
        DxScrollView,
        ListPurchase,
        addPurchase,
        listApprove,
    },
    data() {
        return {
            selectedItem: null,
            dataNew: [
                {
                    id: this.idv4(),
                    title: 'Create purchase requisition',
                    listType: 'TaoMuaHang',
                    data: [],
                },
                {
                    id: this.idv4(),
                    title: 'Create production requisition',
                    listType: 'TaoSanXuat',
                    data: [],
                },
            ],
        }
    },
    methods: {
        onItemClick(e) {
            if (!this.tabPanel.find((i) => i.listType === e.listType)) {
                this.$store.commit('muahang/ADD_LIST', e)
            }
            this.$store.commit('muahang/ADD_LIST', e)
            this.selectedItem = e
        },
        closeButtonHandler(itemDel) {
            let result = confirm('Are you sure to close tab?')
            if (result) this.$store.commit('muahang/CLICK_DELETE', itemDel.id)
        },
        showCloseButton() {
            return this.tabPanel.length > 0
        },
        clearTab() {
            let result = confirm('Are you sure to close all tabs?')
            if (result) this.$store.commit('muahang/CLEAR_DATA')
        },
        titleClick() {
            this.$store.dispatch('muahang/getData')
        },
    },
    beforeDestroy() {
        this.$store.commit('muahang/CLEAR_DATA')
    },
}
</script>

<style scoped>
.purchase {
    height: 100%;
    overflow: hidden;
    margin: 80px 0;
    padding: 24px;
}
.purchase h2 {
    color: #0986c5;
}
>>> .dx-multiview-item-container .dx-empty-message {
    margin-top: 200px;
}
>>> .dx-button-text {
    text-transform: none;
    line-height: unset;
}
.toolbar {
    border: 1px solid #e7e7e7;
    padding: 0 24px;
}
.header{
    padding: 6px 0;
    font-weight: bold;
}
.btn-list {
    background-color: white;
    color: black;
    cursor: pointer;
    padding: 6px 0;
}
.btn-list:hover {
    background-color: #e7e7e7;
}
</style>
