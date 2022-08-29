<template>
    <div class="purchase">
        <div class="mb-2 row align-center">
            <h3>
                {{ $t(headTitle) }}
            </h3>
            <div class="mdi mdi-filter-variant filter px-2">
                <div class="filter-drop">
                    <p
                        v-for="item in headerTitle"
                        :key="item.id"
                        @click="selectionChanged(item)"
                    >
                        {{ $t(item.title) }}
                    </p>
                </div>
            </div>
        </div>
        <div class="toolbar">
            <div class="row align-center justify-start">
                <div v-for="item in list" :key="item.id" :class="classProp">
                    <div @click="onItemClick(item)" class="btn-list row mr-3">
                        <i class="mdi mdi-format-list-numbered mr-1" />
                        <p class="font-14">
                            {{ $t(item.title) }} ({{ item.length }})
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="row justify-end" v-show="tabData.length > 0">
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
                                :text="$t('Đóng')"
                                type="normal"
                                styling-mode="text"
                                icon="mdi mdi-close"
                                @click="toggle"
                            />
                        </div>
                        <DxTabPanel
                            :data-source="tabData"
                            :height="fullscreen ? 'auto' : 'calc(78vh - 100px)'"
                            :defer-rendering="false"
                            :show-nav-buttons="true"
                            :repaint-changes-only="true"
                            :selectedItem="selectedItem"
                            :noDataText="$t('Không có dữ liệu')"
                            item-title-template="title"
                            item-template="itemTemplate"
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
import DxSelectBox from 'devextreme-vue/select-box'
import { DxScrollView } from 'devextreme-vue/scroll-view'
import { mapState } from 'vuex'

export default {
    props: {
        headerTitle: {
            type: Array,
            default: () => [],
        },
        classProp: {
            type: String,
            default: '',
        },
        headTitle: {
            type: String,
            default: '',
        },
        dataTab: {
            type: Array,
            default: [],
        },
        list: {
            type: Array,
            default: [],
        },
    },
    components: {
        DxTabPanel,
        DxButton,
        DxScrollView,
        DxSelectBox,
    },
    data() {
        return {
            selectedItem: {},
            fullscreen: false,
            tabData: this.dataTab,
        }
    },
    computed: {
        ...mapState(['isSelected', 'routeParams']),
    },
    methods: {
        toggle() {
            this.fullscreen = !this.fullscreen
        },
        selectionChanged(e) {
            if (e == null) return
            this.clickRouter(e.to, this.routeParams)
        },
        onItemClick(e) {
            if (!this.tabData.find((i) => i.listType === e.listType)) {
                if (!this.tabData.find((i) => i.id === e.id)) {
                    this.tabData.push(e)
                }
            }
            this.selectedItem = e
        },
        closeButtonHandler(itemDel) {
            let result = confirm('Do you want to close tab?')
            if (result)
                this.tabData = this.tabData.filter((e) => e.id !== itemDel.id)
        },
        showCloseButton() {
            return this.tabData.length > 0
        },
        clearTab() {
            let result = confirm('Do you want to close all tabs?')
            if (result) this.tabData.splice(0, this.tabData.length)
        },
        addOption() {
            this.list.forEach((e) => {
                if (!this.tabData.find((i) => i.id === e.id)) {
                    if (e.listType === this.isSelected) this.tabData.push(e)
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
.filter:hover .filter-drop {
    display: block;
}
.filter-drop {
    display: none;
    position: absolute;
    min-width: 190px;
    background-color: white;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 2;
}
.filter-drop p {
    padding: 10px 14px;
    text-decoration: none;
    display: block;
    transition: all 0.2s linear 0s;
    cursor: pointer;
}
.filter-drop p:hover {
    background-color: #ddd;
    transition: all 0.2s linear 0s;
}
.toolbar {
    border: 1px solid #e7e7e7;
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
@media only screen and (max-width: 739px) {
    .purchase {
        margin-top: 10px;
    }
}
</style>
