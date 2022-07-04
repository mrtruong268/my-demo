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
                <div v-if="itemProp.listType === 'projects'">
                    <listProject :dataProp="itemProp.data" />
                </div>
                <div v-else-if="itemProp.listType === 'partners'">
                    <listPartner :dataProp="itemProp.data" />
                </div>
                <div v-else-if="itemProp.listType === 'customers'">
                    <listCustomer :dataProp="itemProp.data" />
                </div>
                <div v-else-if="itemProp.listType === 'categories'">
                    <listCategory :dataProp="itemProp.data" />
                </div>
                <div v-else-if="itemProp.listType === 'companies'">
                    <listCompany :dataProp="itemProp.data" />
                </div>
                <div v-else-if="itemProp.listType === 'views'">
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
                    listType: 'projects',
                    data: [],
                },
                {
                    id: this.idv4(),
                    title: 'List of partners',
                    listType: 'partners',
                    data: [],
                },
                {
                    id: this.idv4(),
                    title: 'List of customers',
                    listType: 'customers',
                    data: [],
                },
                {
                    id: this.idv4(),
                    title: 'List of categories',
                    listType: 'categories',
                    data: [],
                },
                {
                    id: this.idv4(),
                    title: 'List of companies',
                    listType: 'companies',
                    data: [],
                },
                {
                    id: this.idv4(),
                    title: 'List of project views',
                    listType: 'views',
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
        ...mapState(['isSelected']),
        ...mapState('quanly', [
            'dataProject',
            'dataPartner',
            'dataCustomer',
            'dataCategory',
            'dataCompany',
            'dataView',
        ]),
    },
    methods: {},
    created() {
        this.danhSach.forEach((e) => {
            e.listType == 'projects'
                ? (e.data = this.dataProject)
                : e.listType == 'partners'
                ? (e.data = this.dataPartner)
                : e.listType == 'customers'
                ? (e.data = this.dataCustomer)
                : e.listType == 'categories'
                ? (e.data = this.dataCategory)
                : e.listType == 'companies'
                ? (e.data = this.dataCompany)
                : (e.data = this.dataView)
        })
    },
}
</script>

<style scoped></style>
