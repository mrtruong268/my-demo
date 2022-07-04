<template>
    <div>
        <common
            :headerTitle="'Báo cáo'"
            :classProp="'xs12'"
            :list="danhSach"
            :dataTab="duLieuTab"
            :dataNew="duLieuMoi"
        >
            <template slot-scope="{ itemProp }">
                <div v-if="itemProp.listType === 'dsmhcm'">
                    <reportApprove />
                </div>
            </template>
        </common>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Common from '~/components/common'
import ReportApprove from './components/reportApprove.vue'

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
        ReportApprove,
    },
    data() {
        return {
            duLieuTab: [],
        }
    },
    computed: {
        ...mapState('baocao', ['danhSach', 'duLieuMoi']),
    },
}
</script>

<style scoped></style>
