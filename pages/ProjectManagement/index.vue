<template>
    <div class="m-80">
        <common
            :headerTitle="$t('Project management')"
            :classProp="'xs4'"
            :dataTab="duLieuTab"
            :dataNew="duLieuMoi"
            :list="danhSach"
        >
            <template slot-scope="{ itemProp }">
                <div v-if="itemProp.listType === 1">
                    <listProject :dataProp="itemProp.data" />
                </div>
                <div v-else-if="itemProp.listType === 2">
                    <listPartner :dataProp="itemProp.data" />
                </div>
                <div v-else-if="itemProp.listType === 3">
                    <listCustomer :dataProp="itemProp.data" />
                </div>
                <div v-else-if="itemProp.listType === 4">
                    <listCategory :dataProp="itemProp.data" />
                </div>
                <div v-else-if="itemProp.listType === 5">
                    <listCompany :dataProp="itemProp.data" />
                </div>
                <div v-else-if="itemProp.listType === 6">
                    <listView :dataProp="itemProp.data" />
                </div>
                <div v-else>
                    <addProject
                        v-if="itemProp.listType === 'NewProject'"
                        :dataProp="itemProp.data"
                    />
                    <addCustomer
                        v-else-if="
                            itemProp.listType === 'NewPartner' ||
                            itemProp.listType === 'NewCustomer'
                        "
                        :dataProp="itemProp"
                    />
                    <addCategory
                        v-else-if="itemProp.listType === 'NewCategory'"
                        :dataProp="itemProp.data"
                    />
                    <addView
                        v-else-if="itemProp.listType === 'NewView'"
                        :dataProp="itemProp.data"
                    />
                    <dashboard v-else />
                </div>
            </template>
        </common>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

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
import Common from '~/components/common.vue'

export default {
    props: {
        itemProp: {
            type: Object,
            default() {
                return {}
            },
        },
    },
    layout: 'commonLayout',
    components: {
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
        Common,
    },
    data() {
        return {
            duLieuTab: [],
            danhSach: [
                {
                    id: this.idv4(),
                    title: 'List of projects',
                    listType: 1,
                    data: [],
                },
                {
                    id: this.idv4(),
                    title: 'List of partners',
                    listType: 2,
                    data: [],
                },
                {
                    id: this.idv4(),
                    title: 'List of customers',
                    listType: 3,
                    data: [],
                },
                {
                    id: this.idv4(),
                    title: 'List of categories',
                    listType: 4,
                    data: [],
                },
                {
                    id: this.idv4(),
                    title: 'List of companies',
                    listType: 5,
                    data: [],
                },
                {
                    id: this.idv4(),
                    title: 'List of project views',
                    listType: 6,
                    data: [],
                },
            ],
            duLieuMoi: [
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
        ...mapState('quanly', [
            'dataProject',
            'dataPartner',
            'dataCustomer',
            'dataCategory',
            'dataCompany',
            'dataView',
        ]),
    },
    methods: {
        toDashboard() {
            let newObj = {
                id: this.idv4(),
                title: 'Dashboard',
                listType: 7,
                data: [],
            }
            if (!this.duLieuTab.find((i) => i.id === newObj.id)) {
                this.duLieuTab.push(newObj)
            }
        },
    },
    created() {
        this.toDashboard()
        this.danhSach.forEach((e) => {
            e.listType == 1
                ? (e.data = this.dataProject)
                : e.listType == 2
                ? (e.data = this.dataPartner)
                : e.listType == 3
                ? (e.data = this.dataCustomer)
                : e.listType == 4
                ? (e.data = this.dataCategory)
                : e.listType == 5
                ? (e.data = this.dataCompany)
                : (e.data = this.dataView)
        })
    },
}
</script>

<style scoped></style>
