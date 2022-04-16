<template>
    <div class="container">
        <h3 class="text-xs-center mb-2">Project management</h3>
        <div class="row align-center toolbar">
            <DxList
                :data-source="ListDuAn"
                height="100%"
                class="xs12 text-xs-center"
                display-expr="title"
                @itemClick="onItemClick"
            />
        </div>
        <div class="row align-center">
            <DxButton
                text="New project"
                type="normal"
                styling-mode="text"
                icon="mdi mdi-plus"
                @click="showPopup"
                class="xs12"
            />
            <DxButton
                text="New partner"
                type="normal"
                styling-mode="text"
                icon="mdi mdi-plus"
                @click="showPopup"
                class="xs12"
            />
            <DxButton
                text="New customer"
                type="normal"
                styling-mode="text"
                icon="mdi mdi-plus"
                @click="showPopup"
                class="xs12"
            />
            <DxButton
                text="New category"
                type="normal"
                styling-mode="text"
                icon="mdi mdi-plus"
                @click="showPopup"
                class="xs12"
            />
            <DxButton
                text="New company"
                type="normal"
                styling-mode="text"
                icon="mdi mdi-plus"
                @click="showPopup"
                class="xs12"
            />
            <DxButton
                text="New view"
                type="normal"
                styling-mode="text"
                icon="mdi mdi-plus"
                @click="showPopup"
                class="xs12"
            />
        </div>
        <div>
            <div class="row justify-end" v-show="Project.length > 0">
                <DxButton
                    text="Clear"
                    type="normal"
                    styling-mode="text"
                    icon="mdi mdi-close"
                    @click="clearTab"
                />
            </div>
            <DxTabPanel
                :data-source="Project"
                height="calc(78vh - 200px)"
                :defer-rendering="false"
                :show-nav-buttons="true"
                :repaint-changes-only="true"
                :selectedItem="selectedItem"
                noDataText="No data to display"
                item-title-template="title"
                item-template="itemTemplate"
                :ref="tabRefKey"
            >
                >
                <template #title="{ data: projectItem }">
                    <div>
                        <span>{{ projectItem.title }} </span
                        ><i
                            v-show="showCloseButton()"
                            class="mdi mdi-close"
                            @click="closeButtonHandler(projectItem)"
                        />
                    </div>
                </template>
                <template #itemTemplate="{ data: projectItem }">
                    <DxScrollView>
                        <div>
                            <div v-if="projectItem.loaiDanhSach === 'project'">
                                <listProject :dataProp="projectItem.data" />
                            </div>
                            <div
                                v-else-if="
                                    projectItem.loaiDanhSach === 'partner'
                                "
                            >
                                <listPartner :dataProp="projectItem.data" />
                            </div>
                            <div
                                v-else-if="
                                    projectItem.loaiDanhSach === 'customer'
                                "
                            >
                                <listCustomer :dataProp="projectItem.data" />
                            </div>
                            <div
                                v-else-if="
                                    projectItem.loaiDanhSach === 'category'
                                "
                            >
                                <listCategory :dataProp="projectItem.data" />
                            </div>
                            <div
                                v-else-if="
                                    projectItem.loaiDanhSach === 'company'
                                "
                            >
                                <listCompany :dataProp="projectItem.data" />
                            </div>
                            <div
                                v-else-if="projectItem.loaiDanhSach === 'view'"
                            >
                                <listView :dataProp="projectItem.data" />
                            </div>
                        </div>
                    </DxScrollView>
                </template>
            </DxTabPanel>
        </div>
    </div>
    <!-- <DxPopup
            :visible="popupVisible"
            :drag-enabled="false"
            :close-on-outside-click="false"
            :show-close-button="true"
            container=".dx-viewport"
            :show-title="true"
            title="Tạo mới"
            width="90%"
            height="90%"
        >
            <div>abc</div>
        </DxPopup> -->
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import DxList from 'devextreme-vue/list'
import DxButton from 'devextreme-vue/button'
import DxTabPanel from 'devextreme-vue/tab-panel'
import { DxScrollView } from 'devextreme-vue/scroll-view'
// import { DxPopup } from 'devextreme-vue/popup'
import listProject from './components/listProject.vue'
import listPartner from './components/listPartner.vue'
import listCustomer from './components/listCustomer.vue'
import listCategory from './components/listCategory.vue'
import listCompany from './components/listCompany.vue'
import listView from './components/listView.vue'
const tabRefKey = 'tab-ref-key'

export default {
    layout: 'commonLayout',
    components: {
        DxList,
        DxButton,
        DxTabPanel,
        // DxPopup,
        listProject,
        listPartner,
        listCustomer,
        listCategory,
        listCompany,
        listView,
        DxScrollView,
    },
    data() {
        return {
            popupVisible: false,
            selectedItem: null,
            tabRefKey,
        }
    },
    computed: {
        ...mapGetters({
            DuAn: 'Project',
            DanhSachDuAn: 'ListDuAn',
        }),
        ...mapState(['isSelected']),
        ListDuAn: {
            get() {
                return this.DanhSachDuAn
            },
            set(newItem) {
                return newItem
            },
        },
        Project: {
            get() {
                return this.DuAn
            },
            set(newItem) {
                return newItem
            },
        },
        tabPanel: function () {
            return this.$refs[tabRefKey].instance
        },
    },
    methods: {
        onItemClick(e) {
            if (!this.Project.find((i) => i.id === e.itemData.id)) {
                this.$store.commit('ADD_LIST', e.itemData)
            }
            this.selectedItem = e.itemData
        },
        closeButtonHandler(itemDel) {
            let result = confirm('Are you sure to close tab?')
            if (result) this.$store.commit('CLICK_DELETE', itemDel.id)
        },
        showCloseButton() {
            return this.Project.length > 0
        },
        showPopup() {
            this.popupVisible = !this.popupVisible
        },
        clearTab() {
            let result = confirm('Are you sure to close all tabs?')
            if (result) this.$store.commit('CLEAR_DATA')
        },
    },
    created() {
        this.$store.commit('CATEGORY_ADD')
    },
}
</script>

<style scoped>
.container {
    height: 100%;
    overflow: hidden;
    margin: 80px 0;
}
.container h3 {
    color: #0986c5;
}
>>> .dx-scrollview-content {
    display: flex;
}
>>> .dx-list-item {
    border: none;
    margin: 0;
}
.toolbar {
    background-color: #ebebeb;
}
>>> .dx-multiview-item-container .dx-empty-message {
    margin-top: 200px;
}
</style>
