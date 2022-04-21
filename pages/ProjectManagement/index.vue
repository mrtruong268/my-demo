<template>
    <div class="main">
        <h2 class="text-xs-center mb-2">Project management</h2>
        <div class="toolbar">
            <div class="row align-center justify-space-around">
                <div
                    v-for="item in danhSachQuanLy"
                    :key="item.id"
                    class="xs6 text-xs-center btn-list"
                    @click="onItemClick(item)"
                >
                    <i class="mdi mdi-format-list-numbered mr-1" />
                    {{ $t(item.title) }}
                </div>
            </div>
            <div class="row align-center justify-space-around">
                <div
                    v-for="item in dataTaomoi"
                    :key="item.id"
                    class="xs6 text-xs-center btn-list"
                    @click="onItemClick(item)"
                >
                    <i class="mdi mdi-plus-circle mr-1" />
                    {{ $t(item.title) }}
                </div>
            </div>
        </div>
        <div>
            <div class="row justify-end" v-show="quanLy.length > 0">
                <DxButton
                    text="Clear"
                    type="normal"
                    styling-mode="text"
                    icon="mdi mdi-close"
                    @click="clearTab"
                />
            </div>
            <div>
                <DxTabPanel
                    :data-source="quanLy"
                    height="calc(78vh - 200px)"
                    :defer-rendering="false"
                    :show-nav-buttons="true"
                    :repaint-changes-only="true"
                    :selectedItem="selectedItem"
                    noDataText="No data to display"
                    item-title-template="title"
                    item-template="itemTemplate"
                >
                    >
                    <template #title="{ data: item }">
                        <div>
                            <span>{{ item.title }} </span
                            ><i
                                v-show="showCloseButton()"
                                class="mdi mdi-close-circle"
                                @click="closeButtonHandler(item)"
                            />
                        </div>
                    </template>
                    <template #itemTemplate="{ data: item }">
                        <DxScrollView>
                            <div v-if="item.listType === 'project'">
                                <listProject :dataProp="item.data" />
                            </div>
                            <div v-else-if="item.listType === 'partner'">
                                <listPartner :dataProp="item.data" />
                            </div>
                            <div v-else-if="item.listType === 'customer'">
                                <listCustomer :dataProp="item.data" />
                            </div>
                            <div v-else-if="item.listType === 'category'">
                                <listCategory :dataProp="item.data" />
                            </div>
                            <div v-else-if="item.listType === 'company'">
                                <listCompany :dataProp="item.data" />
                            </div>
                            <div v-else-if="item.listType === 'view'">
                                <listView :dataProp="item.data" />
                            </div>
                            <div v-else>
                                <addProject
                                    v-if="item.listType === 'NewProject'"
                                    :dataProp="item.data"
                                />
                                <addCustomer
                                    v-else-if="
                                        item.listType === 'NewPartner' ||
                                        item.listType === 'NewCustomer'
                                    "
                                    :dataProp="item"
                                />
                                <addCategory
                                    v-else-if="item.listType === 'NewCategory'"
                                    :dataProp="item.data"
                                />
                                <addView
                                    v-else-if="item.listType === 'NewView'"
                                    :dataProp="item.data"
                                />
                                <dashboard v-else />
                            </div>
                        </DxScrollView>
                    </template>
                </DxTabPanel>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import DxList from 'devextreme-vue/list'
import DxButton from 'devextreme-vue/button'
import DxTabPanel from 'devextreme-vue/tab-panel'
import { DxScrollView } from 'devextreme-vue/scroll-view'
import listProject from './components/listProject.vue'
import listPartner from './components/listPartner.vue'
import listCustomer from './components/listCustomer.vue'
import listCategory from './components/listCategory.vue'
import listCompany from './components/listCompany.vue'
import listView from './components/listView.vue'
import addProject from './components/addNew/addProject.vue'
import addCustomer from './components/addNew/addCustomer.vue'
import addCategory from './components/addNew/addCategory.vue'
import addView from './components/addNew/addView.vue'
import Dashboard from './components/dashboard.vue'

export default {
    layout: 'commonLayout',
    components: {
        DxList,
        DxButton,
        DxTabPanel,
        DxScrollView,
        listProject,
        listPartner,
        listCustomer,
        listCategory,
        listCompany,
        listView,
        addProject,
        addCustomer,
        addCategory,
        addView,
        Dashboard,
    },
    data() {
        return {
            selectedItem: null,
            dataTaomoi: [
                {
                    id: this.idv4(),
                    title: 'New project',
                    listType: 'NewProject',
                    data: [],
                },
                {
                    id: this.idv4(),
                    title: 'New partner',
                    listType: 'NewPartner',
                    data: [],
                },
                {
                    id: this.idv4(),
                    title: 'New customer',
                    listType: 'NewCustomer',
                    data: [],
                },
                {
                    id: this.idv4(),
                    title: 'New category',
                    listType: 'NewCategory',
                    data: [],
                },
                {
                    id: this.idv4(),
                    title: 'New company',
                    listType: 'NewCompany',
                    data: [],
                },
                {
                    id: this.idv4(),
                    title: 'New view',
                    listType: 'NewView',
                    data: [],
                },
            ],
        }
    },
    computed: {
        ...mapGetters({
            ql: 'quanLy',
            dsql: 'danhSachQuanLy',
        }),
        ...mapState(['isSelected']),
        quanLy: {
            get() {
                return this.ql
            },
            set(newItem) {
                return newItem
            },
        },
        danhSachQuanLy: {
            get() {
                return this.dsql
            },
            set(newItem) {
                return newItem
            },
        },
    },
    methods: {
        onItemClick(e) {
            if (!this.quanLy.find((i) => i.listType === e.listType)) {
                this.$store.commit('ADD_LIST', e)
            }
            this.$store.commit('ADD_LIST', e)
            this.selectedItem = e
        },
        closeButtonHandler(itemDel) {
            let result = confirm('Are you sure to close tab?')
            if (result) this.$store.commit('CLICK_DELETE', itemDel.id)
        },
        showCloseButton() {
            return this.quanLy.length > 0
        },
        clearTab() {
            let result = confirm('Are you sure to close all tabs?')
            if (result) this.$store.commit('CLEAR_DATA')
        },
    },
    created() {
        if (this.isSelected !== '') this.$store.commit('ADD_OPTION')
    },
    beforeDestroy() {
        this.$store.commit('CLEAR_DATA')
    },
}
</script>

<style scoped>
.main {
    height: 100%;
    overflow: hidden;
    padding: 24px;
    margin: 80px auto;
}
.main h2 {
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
