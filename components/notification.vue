<template>
    <div>
        <DxTabPanel height="auto" :data-source="dataTab">
            <template #title="{ data: item }">
                <div>
                    {{ item.title }}
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
        <popup
            :showPopup="popupVisible"
            :showTitle="true"
            :closeOut="true"
            :title="$t('Phê duyệt')"
            :width="'80%'"
        >
            <template #main>
                <approve :item="approveItem" />
            </template>
        </popup>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import DxTabPanel from 'devextreme-vue/tab-panel'
import moment from 'moment'
import popup from './popup.vue'
import approve from './approve.vue'
export default {
    components: {
        DxTabPanel,
        popup,
        approve,
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
            popupVisible: false,
            approveItem: {},
        }
    },
    computed: {
        ...mapState('pheduyet', ['danhSachPheDuyet', 'danhSachPheDuyetNp']),
    },
    methods: {
        clickApprove(e) {
            this.popupVisible = !this.popupVisible
            this.approveItem = e
        },
        timestamp(date) {
            return moment(date).add(7, 'hours').format('HH:mm DD/MM/YYYY')
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
