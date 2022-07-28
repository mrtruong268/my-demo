<template>
    <div>
        <commonNoTab
            :headTitle="'Mua hàng ngoài dự án'"
            :headerTitle="headerList"
            :list="danhSach"
        >
            <template slot-scope="{ itemProp }">
                <listPurchaseNp v-if="itemProp.listType === 'all'" />
                <statusNp
                    v-else-if="itemProp.listType === 'wait'"
                    :dataSource="danhSachPheDuyetNp.data"
                    :isStatus="itemProp"
                    @getData="getApprove"
                />
                <statusNp
                    v-else-if="itemProp.listType === 'approved'"
                    :dataSource="danhSachDaDuyetNp.data"
                    :isStatus="itemProp"
                    @getData="getApproved"
                />
                <statusNp
                    v-else-if="itemProp.listType === 'reject'"
                    :dataSource="danhSachKhongDuyetNp.data"
                    :isStatus="itemProp"
                    @getData="getUnApprove"
                />
                <statusNp
                    v-else
                    :dataSource="danhSachHoanThanhNp.data"
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
import listPurchaseNp from '../NonProject/components/listPurchaseNp'
import statusNp from './components/statusNp'

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
        listPurchaseNp,
        statusNp,
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
        muaHangNgoaiDuAn() {
            if (this.muaHangNgoaiDuAn)
                this.tmpObj.all = this.muaHangNgoaiDuAn.length
        },
        danhSachPheDuyetNp() {
            if (this.danhSachPheDuyetNp.data)
                this.tmpObj.wait = this.danhSachPheDuyetNp.data.length
        },
        danhSachDaDuyetNp() {
            if (this.danhSachDaDuyetNp.data)
                this.tmpObj.approved = this.danhSachDaDuyetNp.data.length
        },
        danhSachKhongDuyetNp() {
            if (this.danhSachKhongDuyetNp.data)
                this.tmpObj.reject = this.danhSachKhongDuyetNp.data.length
        },
        danhSachHoanThanhNp() {
            if (this.danhSachHoanThanhNp.data)
                this.tmpObj.complete = this.danhSachHoanThanhNp.data.length
        },
        tmpObj: {
            handler(val) {
                this.$store.commit('muahang/SET_LENGTH_NP', val)
            },
            deep: true,
        },
    },
    computed: {
        ...mapState('muahang', ['danhSach', 'headerList', 'muaHangNgoaiDuAn']),
        ...mapState('pheduyet', [
            'danhSachPheDuyetNp',
            'danhSachDaDuyetNp',
            'danhSachKhongDuyetNp',
            'danhSachHoanThanhNp',
        ]),
    },
    methods: {
        getApprove() {
            this.$store.dispatch('pheduyet/getApproveNp')
        },
        getApproved() {
            this.$store.dispatch('pheduyet/getApprovedNp')
        },
        getUnApprove() {
            this.$store.dispatch('pheduyet/getUnApproveNp')
        },
        getComplete() {
            this.$store.dispatch('pheduyet/getCompleteNp')
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
