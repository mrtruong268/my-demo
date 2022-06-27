<template>
    <div>
        <common
            :headerTitle="'Yêu cầu mua hàng'"
            :classProp="'xs3'"
            :list="danhSach"
            :dataTab="duLieuTab"
            :dataNew="duLieuMoi"
        >
            <template slot-scope="{ itemProp }">
                <div v-if="itemProp.listType === 'mhda'">
                    <listPurchase />
                </div>
                <div v-else-if="itemProp.listType === 'mhnda'">
                    <listPurchaseNp />
                </div>
                <div v-else-if="itemProp.listType === 'pd'">
                    <listApprove />
                </div>
                <div v-else-if="itemProp.listType === 'bc'">
                    <reportApprove />
                </div>
                <div v-else>
                    <addPurchase v-if="itemProp.listType === 'tmhda'" />
                    <addPurchaseNp v-else-if="itemProp.listType === 'tmhnda'" />
                    <listApproveNp v-else-if="itemProp.listType === 'pdnda'" />
                </div>
            </template>
        </common>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Common from '~/components/common'

import ListPurchase from './components/ForProject/listPurchase'
import listPurchaseNp from './components/NonProject/listPurchaseNp'
import addPurchaseNp from './components/NonProject/addPurchaseNp'
import listApprove from './components/Approve/listApprove'
import addPurchase from './components/ForProject/addPurchase'
import listApproveNp from './components/Approve/listApproveNp'
import reportApprove from './components/Report/reportApprove.vue'

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
        Common,
        ListPurchase,
        listPurchaseNp,
        addPurchase,
        addPurchaseNp,
        listApprove,
        listApproveNp,
        reportApprove,
    },
    data() {
        return {
            duLieuTab: [],
        }
    },
    computed: {
        ...mapState('muahang', ['danhSach', 'duLieuMoi']),
    },
}
</script>

<style scoped></style>
