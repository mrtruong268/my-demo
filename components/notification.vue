<template>
    <div>
        <DxTabPanel
            height="auto"
            :data-source="dataTab"
            :loop="false"
            :animation-enabled="true"
            :swipe-enabled="true"
        >
            <template #title="{ data: item }">
                <div
                    v-if="
                        typeof danhSachPheDuyet.data !== 'undefined' &&
                        typeof danhSachPheDuyetNp.data !== 'undefined'
                    "
                >
                    <span
                        >{{ item.title }}({{
                            item.id === 1
                                ? danhSachPheDuyet.data.length
                                : danhSachPheDuyetNp.data.length
                        }})</span
                    >
                </div>
            </template>
            <template #item="{ data: item }">
                <div>
                    <div v-if="item.id === 1">
                        <div
                            v-for="item in danhSachPheDuyet.data"
                            :key="item.id"
                        >
                            <div class="main-noti" @click="clickApprove(item)">
                                <div class="row">
                                    <img
                                        src="~assets/approve.png"
                                        alt=""
                                        class="mx-4"
                                    />
                                    <div class="item-noti">
                                        <p>
                                            Phê duyệt cho
                                            <span>{{ item.tenNhanVien }}</span>
                                        </p>
                                        <p>
                                            Trạng thái:
                                            <span>{{
                                                item.trangThaiDuyet
                                            }}</span>
                                        </p>
                                        <p>
                                            Thời gian yêu cầu:
                                            {{ timestamp(item.ngayDeTrinh) }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div
                            v-for="item in danhSachPheDuyetNp.data"
                            :key="item.id"
                        >
                            <div class="main-noti" @click="clickApprove(item)">
                                <div class="row">
                                    <img
                                        src="~assets/approve.png"
                                        alt=""
                                        class="mx-4"
                                    />
                                    <div class="item-noti">
                                        <p>
                                            Phê duyệt cho
                                            <span>{{ item.tenNhanVien }}</span>
                                        </p>
                                        <p>
                                            Trạng thái:
                                            <span>{{
                                                item.trangThaiDuyet
                                            }}</span>
                                        </p>
                                        <p>
                                            Thời gian yêu cầu:
                                            {{ timestamp(item.ngayDeTrinh) }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DxTabPanel>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import DxTabPanel from 'devextreme-vue/tab-panel'
import moment from 'moment'
export default {
    components: {
        DxTabPanel,
    },
    data() {
        return {
            dataTab: [
                {
                    id: 1,
                    title: 'Mua hàng dự án',
                },
                {
                    id: 2,
                    title: 'Mua hàng ngoài dự án',
                },
            ],
            dataReverse: [],
        }
    },
    computed: {
        ...mapState('pheduyet', ['danhSachPheDuyet', 'danhSachPheDuyetNp']),
    },
    methods: {
        timestamp(date) {
            return moment(date).add(7, 'hours').format('HH:mm:ss DD/MM/YYYY')

        },
        clickApprove(e) {
            if (e.hasOwnProperty('duyetYCMHsNoiBo')) {
                this.$store.commit('IS_SELECTED', 'mhnda')
                this.clickRouter('Purchase/Purchasing', this.routeParams)
            } else {
                this.$store.commit('IS_SELECTED', 'mhda')
                this.clickRouter('Purchase/Purchasing', this.routeParams)
            }
            this.$emit('close')
        },
    },
}
</script>

<style scoped>
img {
    max-width: 14%;
    height: auto;
}
.main-noti {
    padding: 14px 0;
    border-bottom: 1px solid #ddd;
    transition: all 0.2s linear 0s;
    cursor: pointer;
}
.main-noti:hover {
    background-color: #ddd;
    transition: all 0.2s linear 0s;
    border-bottom: 1px solid #ddd;
}
.item-noti span {
    font-weight: bold;
}
</style>
