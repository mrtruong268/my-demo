<template>
    <div>
        <div v-for="item in dataReverse" :key="item.id">
            <div class="main-noti" @click="clickApprove">
                <div class="row">
                    <img src="~assets/approve.png" alt="" class="mx-4" />
                    <div class="item-noti">
                        <p>
                            Phê duyệt cho <span>{{ item.tenNhanVien }}</span>
                        </p>
                        <p>
                            Trạng thái: <span>{{ item.trangThaiDuyet }}</span>
                        </p>
                        <p>
                            Thời gian yêu cầu: {{ timestamp(item.ngayDeTrinh) }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
export default {
    props: {
        data: {
            type: Array,
            default() {
                return []
            },
        },
    },
    data() {
        return {
            dataReverse: [],
        }
    },
    watch: {
        data: {
            handler(data) {
                if (data) {
                    this.dataReverse = [...data]
                    return this.dataReverse.reverse()
                }
            },
        },
    },
    methods: {
        timestamp(date) {
            return moment(date).format('DD-MM-YYYY')
        },
        clickApprove() {
            this.$store.commit('IS_SELECTED', 'pd')
            this.clickRouter('Purchase/Purchasing', this.routeParams)
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
