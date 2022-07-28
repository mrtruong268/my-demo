<template>
    <div>
        <commonNoTab
            :headTitle="'Mua hàng dự án'"
            :headerTitle="headerList"
            :list="danhSach"
        >
            <template slot-scope="{ itemProp }">
                <listPurchase v-if="itemProp.listType === 'all'" />
                <status
                    v-else-if="itemProp.listType === 'wait'"
                    :dataSource="danhSachPheDuyet.data"
                    :isStatus="itemProp"
                    @getData="getApprove"
                />
                <status
                    v-else-if="itemProp.listType === 'approved'"
                    :dataSource="danhSachDaDuyet.data"
                    :isStatus="itemProp"
                    @getData="getApproved"
                />
                <status
                    v-else-if="itemProp.listType === 'reject'"
                    :dataSource="danhSachKhongDuyet.data"
                    :isStatus="itemProp"
                    @getData="getUnApprove"
                />
                <status
                    v-else
                    :dataSource="danhSachHoanThanh.data"
                    :isStatus="itemProp"
                    @getData="getComplete"
                />
            </template>
        </commonNoTab>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import CommonNoTab from '~/components/commonNoTab.vue'
import listPurchase from '../Project/components/listPurchase'
import status from './components/status'

export default {
    layout: 'commonLayout',
    props: {
        itemProp: {
            type: Object,
            default() {
                return {}
            },
        },
    },
    components: {
        CommonNoTab,
        listPurchase,
        status,
    },
    data() {
        return {
            tmpObj: {
                all: 0,
                wait: 0,
                approved: 0,
                reject: 0,
                complete: 0,
            },
        }
    },
    watch: {
        muaHangDuAn() {
            if (this.muaHangDuAn) this.tmpObj.all = this.muaHangDuAn.length
        },
        danhSachPheDuyet() {
            if (this.danhSachPheDuyet.data)
                this.tmpObj.wait = this.danhSachPheDuyet.data.length
        },
        danhSachDaDuyet() {
            if (this.danhSachDaDuyet.data)
                this.tmpObj.approved = this.danhSachDaDuyet.data.length
        },
        danhSachKhongDuyet() {
            if (this.danhSachKhongDuyet.data)
                this.tmpObj.reject = this.danhSachKhongDuyet.data.length
        },
        danhSachHoanThanh() {
            if (this.danhSachHoanThanh.data)
                this.tmpObj.complete = this.danhSachHoanThanh.data.length
        },
        tmpObj: {
            handler(val) {
                this.$store.commit('muahang/SET_LENGTH', val)
            },
            deep: true,
        },
    },
    computed: {
        ...mapState('muahang', ['danhSach', 'headerList', 'muaHangDuAn']),
        ...mapState('pheduyet', [
            'danhSachPheDuyet',
            'danhSachDaDuyet',
            'danhSachKhongDuyet',
            'danhSachHoanThanh',
        ]),
    },
    methods: {
        getApprove() {
            this.$store.dispatch('pheduyet/getApprove')
        },
        getApproved() {
            this.$store.dispatch('pheduyet/getApproved')
        },
        getUnApprove() {
            this.$store.dispatch('pheduyet/getUnApprove')
        },
        getComplete() {
            this.$store.dispatch('pheduyet/getComplete')
        },
    },
    created() {
        this.getApprove()
        this.getApproved()
        this.getUnApprove()
        this.getComplete()
        this.$store.commit('IS_SELECTED', 'all')
    },
}
</script>

<style scoped></style>
