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
                    <listDistribution :dataProp="itemProp.data" />
                </div>
                <div v-else>
                    <listGoods :dataProp="itemProp.data" />
                </div>
            </template>
        </common>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import Common from '~/components/common.vue'
import ListDistribution from './components/listDistribution.vue'
import ListGoods from './components/listGoods.vue'

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
        ListDistribution,
        ListGoods,
    },
    data() {
        return {
            duLieuTab: [],
            danhSach: [
                {
                    id: this.idv4(),
                    title: 'List of units participating in the bid',
                    listType: 1,
                    data: [
                        {
                            id: 0,
                            tenNcc: 'NCC 1',
                            tenMatHang: '',
                            soLuong: 1,
                            donGia: 0,
                            vat: 0,
                            tongTien: 0,
                            tongTienGomVat: 0,
                            thoiGianGiaoHang: new Date(),
                            thoiGianBaoHanh: new Date(),
                            dieuKhoan: '',
                            ghiChu: '',
                        },
                    ],
                },
                {
                    id: this.idv4(),
                    title: 'List of items by supplier',
                    listType: 2,
                    data: [],
                },
            ],
            duLieuMoi: [],
        }
    },
    methods: {},
    created() {},
}
</script>

<style scoped></style>
