<template>
    <div class="purchase">
        <h3 class="text-xs-center mb-2">
            {{ $t('Purchase requisition') }}
        </h3>
        <div class="toolbar">
            <div class="row align-center justify-space-around">
                <div v-for="item in List" :key="item.id" class="xs4">
                    <p class="header">{{ $t(item.header) }}</p>
                    <div @click="onItemClick(item)" class="btn-list row">
                        <i class="mdi mdi-format-list-numbered mr-1" />
                        <p class="font-14">
                            {{ $t(item.title) }}
                        </p>
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
                    <div class="row">
                        <i class="mdi mdi-plus-circle mr-1" />
                        <p class="font-14">
                            {{ $t(item.title) }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="row justify-end" v-show="tabPanel.length > 0">
                <DxButton
                    type="normal"
                    styling-mode="text"
                    icon="mdi mdi-overscan"
                    @click="toggle"
                />
                <DxButton
                    type="normal"
                    styling-mode="text"
                    icon="mdi mdi-close"
                    @click="clearTab"
                />
            </div>
            <div class="tabPanel">
                <fullscreen
                    v-model="fullscreen"
                    :page-only="true"
                    :teleport="true"
                >
                    <div :class="fullscreen ? 'fullscreen' : ''">
                        <div v-if="fullscreen" class="row justify-end">
                            <DxButton
                                :text="$t('Close')"
                                type="normal"
                                styling-mode="text"
                                icon="mdi mdi-close"
                                @click="toggle"
                            />
                        </div>
                        <DxTabPanel
                            :data-source="tabPanel"
                            :height="fullscreen ? 'auto' : 'calc(80vh - 180px)'"
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
                                    <div :class="fullscreen ? 'item-temp' : ''">
                                        <div v-if="item.listType === 'muahang'">
                                            <listPurchase
                                                :dataProp="item.data"
                                            />
                                        </div>
                                        <div
                                            v-else-if="
                                                item.listType === 'sanxuat'
                                            "
                                        >
                                            <!-- <listProduct :dataProp="item.data" /> -->
                                        </div>
                                        <div
                                            v-else-if="
                                                item.listType === 'pheduyet'
                                            "
                                        >
                                            <listApprove
                                                :dataProp="item.data"
                                            />
                                        </div>
                                        <div v-else>
                                            <addPurchase
                                                v-if="
                                                    item.listType ===
                                                    'TaoMuaHang'
                                                "
                                                :dataProp="item.data"
                                            />
                                            <!-- <addProduction
                                        v-else-if="
                                            item.listType === 'TaoSanXuat'
                                        "
                                        :dataProp="item.data"
                                    /> -->
                                        </div>
                                    </div>
                                </DxScrollView>
                            </template>
                        </DxTabPanel>
                    </div>
                </fullscreen>
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
import { mapState } from 'vuex'
import Vue from 'vue'
import VueFullscreen from 'vue-fullscreen'
Vue.use(VueFullscreen)
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
            fullscreen: false,
        }
    },
    computed: {
        ...mapState('muahang', ['isSelected']),
    },
    methods: {
        toggle() {
            this.fullscreen = !this.fullscreen
        },
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
            this.$store.dispatch('pheduyet/getApprove')
        },
    },
    created() {
        if (this.isSelected !== '') this.$store.commit('muahang/ADD_OPTION')
    },
    beforeDestroy() {
        this.$store.commit('muahang/CLEAR_DATA')
    },
}
</script>

<style scoped>
.fullscreen {
    background-color: white;
    position: relative;
    z-index: 4;
}
.item-temp {
    overflow-y: auto;
    height: 90vh;
}
.purchase {
    height: 100%;
    overflow: hidden;
    margin-top: 100px;
    padding: 0 24px;
}
.toolbar {
    border: 1px solid #e7e7e7;
    padding: 0 24px;
}
.header {
    padding: 4px 0;
    font-weight: bold;
    font-size: 14px;
}
.btn-list {
    background-color: white;
    color: black;
    cursor: pointer;
    padding: 4px 0;
}
.btn-list:hover {
    background-color: #e7e7e7;
}
</style>
