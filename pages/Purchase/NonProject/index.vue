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
                    v-else
                    :dataSource="danhSachKhongDuyetNp.data"
                    :isWait="checkStatus"
                    @getData="getUnApprove"
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
        }
    },
    computed: {
        ...mapState('muahang', ['danhSach', 'headerList']),
        ...mapState('pheduyet', [
            'danhSachPheDuyetNp',
            'danhSachDaDuyetNp',
            'danhSachKhongDuyetNp',
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
    },
    created() {
        this.$store.commit('IS_SELECTED', 'all')
    },
}
</script>

<style scoped></style>
