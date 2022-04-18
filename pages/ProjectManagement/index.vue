<template>
    <div class="main">
        <h2 class="text-xs-center mb-3">Project management</h2>
        <div class="toolbar">
            <div class="row align-center justify-space-around">
                <div
                    v-for="item in ListDuAn"
                    :key="item.id"
                    class="xs6 text-xs-center btn-list"
                    @click="onItemClick(item)"
                >
                    <i class="mdi mdi-format-list-numbered mr-1" />
                    {{ $t(item.title) }}
                </div>
            </div>
            <div class="row align-center">
                <DxButton
                    text="New project"
                    type="normal"
                    styling-mode="text"
                    icon="mdi mdi-plus"
                    @click="addButton($t('New project'), 'NewProject')"
                    class="xs12"
                />
                <DxButton
                    text="New partner"
                    type="normal"
                    styling-mode="text"
                    icon="mdi mdi-plus"
                    @click="addButton($t('New partner'), 'NewPartner')"
                    class="xs12"
                />
                <DxButton
                    text="New customer"
                    type="normal"
                    styling-mode="text"
                    icon="mdi mdi-plus"
                    @click="addButton($t('New customer'), 'NewCustomer')"
                    class="xs12"
                />
                <DxButton
                    text="New category"
                    type="normal"
                    styling-mode="text"
                    icon="mdi mdi-plus"
                    @click="addButton($t('New category'), 'NewCategory')"
                    class="xs12"
                />
                <DxButton
                    text="New company"
                    type="normal"
                    styling-mode="text"
                    icon="mdi mdi-plus"
                    @click="addButton($t('New company'), 'NewCompany')"
                    class="xs12"
                />
                <DxButton
                    text="New view"
                    type="normal"
                    styling-mode="text"
                    icon="mdi mdi-plus"
                    @click="addButton($t('New view'), 'NewView')"
                    class="xs12"
                />
            </div>
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
            <div>
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
                >
                    >
                    <template #title="{ data: projectItem }">
                        <div>
                            <span>{{ projectItem.title }} </span
                            ><i
                                v-show="showCloseButton()"
                                class="mdi mdi-close-circle"
                                @click="closeButtonHandler(projectItem)"
                            />
                        </div>
                    </template>
                    <template #itemTemplate="{ data: projectItem }">
                        <DxScrollView>
                            <div>
                                <div
                                    v-if="
                                        projectItem.loaiDanhSach === 'project'
                                    "
                                >
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
                                    <listCustomer
                                        :dataProp="projectItem.data"
                                    />
                                </div>
                                <div
                                    v-else-if="
                                        projectItem.loaiDanhSach === 'category'
                                    "
                                >
                                    <listCategory
                                        :dataProp="projectItem.data"
                                    />
                                </div>
                                <div
                                    v-else-if="
                                        projectItem.loaiDanhSach === 'company'
                                    "
                                >
                                    <listCompany :dataProp="projectItem.data" />
                                </div>
                                <div
                                    v-else-if="
                                        projectItem.loaiDanhSach === 'view'
                                    "
                                >
                                    <listView :dataProp="projectItem.data" />
                                </div>
                                <div v-else>
                                    <addProject
                                        v-if="
                                            projectItem.loaiDanhSach ===
                                            'NewProject'
                                        "
                                        :dataProp="projectItem.data"
                                    />
                                    <addCustomer
                                        v-if="
                                            projectItem.loaiDanhSach ===
                                                'NewPartner' ||
                                            projectItem.loaiDanhSach ===
                                                'NewCustomer'
                                        "
                                        :dataProp="projectItem"
                                    />
                                    <addCategory
                                        v-if="
                                            projectItem.loaiDanhSach ===
                                            'NewCategory'
                                        "
                                        :dataProp="projectItem.data"
                                    />
                                    <addView
                                        v-if="
                                            projectItem.loaiDanhSach ===
                                            'NewView'
                                        "
                                        :dataProp="projectItem.data"
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
    },
    data() {
        return {
            selectedItem: null,
        }
    },
    computed: {
        ...mapGetters({
            DanhSachDuAn: 'ListDuAn',
            DuAn: 'Project',
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
    },
    methods: {
        addItem(data) {
            if (!this.Project.find((i) => i.id === data.id))
                this.$store.commit('ADD_LIST', data)
            this.selectedItem = data
        },
        onItemClick(e) {
            this.addItem(e)
        },
        addButton(title, loaiDanhSach) {
            let tmpObj = {
                id: this.idv4(),
                title: title,
                loaiDanhSach: loaiDanhSach,
                data: [],
            }
            if (
                !this.Project.find(
                    (i) => i.loaiDanhSach === tmpObj.loaiDanhSach
                )
            )
                this.addItem(tmpObj)
        },
        closeButtonHandler(itemDel) {
            let result = confirm('Are you sure to close tab?')
            if (result) this.$store.commit('CLICK_DELETE', itemDel.id)
        },
        showCloseButton() {
            return this.Project.length > 0
        },
        clearTab() {
            let result = confirm('Are you sure to close all tabs?')
            if (result) this.$store.commit('CLEAR_DATA')
        },
    },
    created() {
        if (this.isSelected !== '') this.$store.commit('CATEGORY_ADD')
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
