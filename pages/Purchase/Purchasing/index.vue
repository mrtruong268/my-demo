<template>
    <div class="m-80">
        <common
            :headerTitle="$t('Purchase requisition')"
            :classProp="'xs4'"
            :list="danhSach"
            :dataTab="duLieuTab"
            :dataNew="duLieuMoi"
        >
            <template slot-scope="{ itemProp }">
                <div v-if="itemProp.listType === 'muahang'">
                    <listPurchase />
                </div>
                <div v-else-if="itemProp.listType === 'sanxuat'">
                    <!-- <listProduct  /> -->
                </div>
                <div v-else-if="itemProp.listType === 'pheduyet'">
                    <listApprove />
                </div>
                <div v-else>
                    <addPurchase v-if="itemProp.listType === 'TaoMuaHang'" />
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

import ListPurchase from './components/ForProject/listPurchase.vue'
import addPurchase from './components/ForProject/addPurchase.vue'
import listApprove from './components/Approve/listApprove.vue'
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
        ListPurchase,
        addPurchase,
        listApprove,
        Common,
    },
    data() {
        return {
            duLieuTab: [],
        }
    },
    computed: {
        ...mapState(['isSelected']),
        ...mapState('muahang', ['danhSach', 'duLieuMoi']),
    },
}
</script>

<style scoped></style>
