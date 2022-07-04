<template>
    <div>
        <common
            :headerTitle="'Danh sách mua hàng'"
            :list="danhSach"
            :dataTab="duLieuTab"
        >
            <template slot-scope="{ itemProp }">
                <div v-if="itemProp.listType === 'mhda'">
                    <listPurchase />
                </div>
                <div v-else-if="itemProp.listType === 'mhnda'">
                    <listPurchaseNp />
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
        Common,
        ListPurchase,
        listPurchaseNp,
    },
    data() {
        return {
            duLieuTab: [],
        }
    },
    computed: {
        ...mapState('muahang', ['danhSach']),
    },
}
</script>

<style scoped></style>
