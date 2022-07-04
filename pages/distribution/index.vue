<template>
    <div class="m-80">
        <common
            :headerTitle="$t('Distribution list')"
            :classProp="'xs6'"
            :dataTab="duLieuTab"
            :dataNew="duLieuMoi"
            :list="danhSach"
        >
            <template slot-scope="{ itemProp }">
                <div v-if="itemProp.listType == 1">
                    <listOfUnit />
                </div>
                <div v-else>
                    <listOfItems />
                </div>
            </template>
        </common>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import common from '~/components/common'
import listOfUnit from './components/listOfUnit'
import listOfItems from './components/listOfItems'

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
        common,
        listOfUnit,
        listOfItems,
    },
    data() {
        return {
            duLieuTab: [],
        }
    },
    computed: {
        ...mapState('phanphoi', ['danhSach', 'duLieuMoi']),
    },
    methods: {},
}
</script>

<style scoped></style>
