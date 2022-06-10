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
                <div v-else-if="itemProp.listType === 'sx'">
                    <!-- <listProduct  /> -->
                </div>
                <div v-else-if="itemProp.listType === 'pd'">
                    <listApprove />
                </div>
                <div v-else>
                    <addPurchase v-if="itemProp.listType === 'tmhda'" />
                    <addPurchaseNp v-if="itemProp.listType === 'tmhnda'" />
                    <!-- <addProduction
                        v-else-if="item.listType === 'TaoSanXuat'"
                        :dataProp="item.data"
                    /> -->
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
        addPurchaseNp,
        addPurchase,
        listApprove,
        listPurchaseNp,
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
