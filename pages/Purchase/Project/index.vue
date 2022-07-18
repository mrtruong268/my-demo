<template>
    <div>
        <common
            :headTitle="'Mua hàng dự án'"
            :headerTitle="headerList"
            :list="danhSach"
            :dataTab="duLieuTab"
        >
            <template slot-scope="{ itemProp }">
                <listPurchase v-if="itemProp.listType === 'all'" />
                <status
                    v-else-if="itemProp.listType === 'wait'"
                    :dataSource="danhSachPheDuyet.data"
                    :isWait="checkStatus"
                    @getData="getApprove"
                />
                <status
                    v-else-if="itemProp.listType === 'approved'"
                    :dataSource="danhSachDaDuyet.data"
                    :isWait="checkStatus"
                    @getData="getApproved"
                />
                <status
                    v-else
                    :dataSource="danhSachKhongDuyet.data"
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
        common,
        listPurchase,
        status,
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
            'danhSachPheDuyet',
            'danhSachDaDuyet',
            'danhSachKhongDuyet',
        ]),
    },
    methods: {
        getApprove() {
            this.$store.dispatch('pheduyet/getApprove')
            this.checkStatus = !this.checkStatus
        },
        getApproved() {
            this.$store.dispatch('pheduyet/getApproved')
            this.checkStatus = false
        },
        getUnApprove() {
            this.$store.dispatch('pheduyet/getUnApprove')
            this.checkStatus = false
        },
    },
    created() {
        this.$store.commit('IS_SELECTED', 'all')
    },
}
</script>

<style scoped></style>
