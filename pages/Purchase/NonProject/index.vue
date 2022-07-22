<template>
    <div>
        <common
            :headTitle="'Mua hàng ngoài dự án'"
            :headerTitle="headerList"
            :list="danhSach"
            :dataTab="duLieuTab"
        >
            <template slot-scope="{ itemProp }">
                <listPurchaseNp v-if="itemProp.listType === 'all'" />
                <statusNp
                    v-else-if="itemProp.listType === 'wait'"
                    :dataSource="danhSachPheDuyetNp.data"
                    :isWait="checkStatus"
                    @getData="getApprove"
                />
                <statusNp
                    v-else-if="itemProp.listType === 'approved'"
                    :dataSource="danhSachDaDuyetNp.data"
                    :isWait="checkStatus"
                    @getData="getApproved"
                />
                <statusNp
                    v-else-if="itemProp.listType === 'reject'"
                    :dataSource="danhSachKhongDuyetNp.data"
                    :isWait="checkStatus"
                    @getData="getUnApprove"
                />
                <statusNp
                    v-else
                    :dataSource="danhSachHoanThanhNp.data"
                    :isWait="checkStatus"
                    @getData="getComplete"
                />
            </template>
        </common>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import common from '~/components/common'
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
        common,
        listPurchaseNp,
        statusNp,
    },
    data() {
        return {
            duLieuTab: [],
            checkStatus: false,
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
            this.checkStatus = !this.checkStatus
        },
        getApproved() {
            this.$store.dispatch('pheduyet/getApprovedNp')
            this.checkStatus = false
        },
        getUnApprove() {
            this.$store.dispatch('pheduyet/getUnApproveNp')
            this.checkStatus = false
        },
        getComplete() {
            this.$store.dispatch('pheduyet/getCompleteNp')
            this.checkStatus = false
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
