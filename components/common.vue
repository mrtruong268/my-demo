<template>
    <div class="purchase">
        <h3 class="text-xs-center mb-2">
            {{ $t(headerTitle) }}
        </h3>
        <div class="toolbar">
            <div class="row align-center justify-space-around">
                <div v-for="item in list" :key="item.id" :class="classProp">
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
                    id="btn-new"
                    v-for="item in dataNew"
                    :key="item.id"
                    style="cursor: pointer; padding: 4px 0"
                    :class="classProp"
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
            <div class="row justify-end" v-show="dataTab.length > 0">
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
                            :data-source="dataTab"
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
                                        <slot :itemProp="item" />
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
import { mapState } from 'vuex'

import Vue from 'vue'
import VueFullscreen from 'vue-fullscreen'

Vue.use(VueFullscreen)

export default {
    props: {
        headerTitle: {
            type: String,
            default: '',
        },
        classProp: {
            type: String,
            default: '',
        },
        dataTab: {
            type: Array,
            default: [],
        },
        list: {
            type: Array,
            default: null,
        },
        dataNew: {
            type: Array,
            default: null,
        },
    },
    components: {
        DxTabPanel,
        DxButton,
        DxScrollView,
    },
    data() {
        return {
            selectedItem: {},
            fullscreen: false,
        }
    },
    computed: {
        ...mapState(['isSelected']),
    },
    methods: {
        toggle() {
            this.fullscreen = !this.fullscreen
        },
        onItemClick(e) {
            if (!this.dataTab.find((i) => i.listType === e.listType)) {
                if (!this.dataTab.find((i) => i.id === e.id)) {
                    this.dataTab.push(e)
                }
            }
            this.selectedItem = e
        },
        closeButtonHandler(itemDel) {
            let result = confirm('Do you want to close tab?')
            if (result)
                this.dataTab = this.dataTab.filter((e) => e.id !== itemDel.id)
        },
        showCloseButton() {
            return this.dataTab.length > 0
        },
        clearTab() {
            let result = confirm('Do you want to close all tabs?')
            if (result) this.dataTab.splice(0, this.dataTab.length)
        },
        titleClick(e) {
            let check = e.itemData.listType
            if (check == 'muahang') {
                this.$store.dispatch('muahang/getData')
            } else if (check == 'pheduyet') {
                this.$store.dispatch('pheduyet/getApprove')
            }
        },
        addOption() {
            this.list.forEach((e) => {
                if (!this.dataTab.find((i) => i.id === e.id)) {
                    if (e.listType === this.isSelected) {
                        this.dataTab.push(e)
                    }
                }
            })
        },
    },
    created() {
        if (this.isSelected !== '') this.addOption()
    },
    beforeDestroy() {
        this.$store.commit('IS_SELECTED', '')
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
#btn-new:hover {
    background-color: #e7e7e7;
}
</style>
