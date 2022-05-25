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
                <div v-if="itemProp.listType === 'project'">
                    <listProject :dataProp="itemProp.data" />
                </div>
                <div v-else-if="itemProp.listType === 'partner'">
                    <listPartner :dataProp="itemProp.data" />
                </div>
                <div v-else-if="itemProp.listType === 'customer'">
                    <listCustomer :dataProp="itemProp.data" />
                </div>
                <div v-else-if="itemProp.listType === 'category'">
                    <listCategory :dataProp="itemProp.data" />
                </div>
                <div v-else-if="itemProp.listType === 'company'">
                    <listCompany :dataProp="itemProp.data" />
                </div>
                <div v-else-if="itemProp.listType === 'view'">
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
                    listType: 'project',
                    data: [
                        {
                            no: 1,
                            id: 'AAD2101',
                            Partner: 'AAD',
                            Customer: 'AAD',
                            ProjectName: 'Service Samsung',
                            Description: '',
                            Category: 'service',
                            Company: 'VNAS Services',
                            status: 'Finish',
                            Type: 'Ngoài hệ thống',
                            CreatedDate: '7/7/2021 8:50:33 AM',
                            CurrentIssue: 'test new',
                        },
                    ],
                },
                {
                    id: this.idv4(),
                    title: 'List of partners',
                    listType: 'partner',
                    data: [
                        {
                            id: 1,
                            PartnerID: 'AUM',
                            Name: 'Aumann',
                            TIN: 2800720339,
                            Address: '48361 Beelen, Deutschland, Đức',
                            Contact: '',
                            Email: '',
                            Phone: 0,
                        },
                    ],
                },
                {
                    id: this.idv4(),
                    title: 'List of customers',
                    listType: 'customer',
                    data: [
                        {
                            id: 1,
                            CustomerID: 'AUM',
                            Name: 'Aumann',
                            TIN: 2800720339,
                            Address: '48361 Beelen, Deutschland, Đức',
                            Contact: '',
                            Email: '',
                            Phone: 0,
                        },
                    ],
                },
                {
                    id: this.idv4(),
                    title: 'List of categories',
                    listType: 'category',
                    data: [
                        {
                            id: 1,
                            name: 'Báo giá',
                        },
                        {
                            id: 2,
                            name: 'Chế tạo, sửa chữa',
                        },
                        {
                            id: 3,
                            name: 'Gia công theo bản vẽ',
                        },

                        {
                            id: 4,
                            name: 'Service',
                        },
                        {
                            id: 5,
                            name: 'Spare part',
                        },
                        {
                            id: 6,
                            name: 'Thương mại',
                        },
                        {
                            id: 7,
                            name: 'Turnkey line',
                        },
                    ],
                },
                {
                    id: this.idv4(),
                    title: 'List of companies',
                    listType: 'company',
                    data: [{}],
                },
                {
                    id: this.idv4(),
                    title: 'List of project views',
                    listType: 'view',
                    data: [
                        {
                            id: 1,
                            Description: 'Basic',
                            ViewMaDuAn: true,
                            ViewDoiTac: true,
                            ViewKhachHang: true,
                            ViewTenDuAn: true,
                            ViewPhanLoai: true,
                            ViewNgayTao: true,
                            ViewTinhTrang: true,
                        },
                    ],
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
    methods: {},
    created() {},
}
</script>

<style scoped></style>
