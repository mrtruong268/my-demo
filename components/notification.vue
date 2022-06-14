<template>
    <div>
        <!-- <div>{{ countNoti }}</div> -->
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {}
    },
    computed: {
        ...mapState('pheduyet', ['danhSachPheDuyet']),
        countNoti() {
            return this.danhSachPheDuyet.data.length
        },
    },
    watch: {
        danhSachPheDuyet(newCount, oldCount) {
            // Our fancy notification (2).
            console.log(`${newCount}, ${oldCount}`)
        },
    },
    methods: {},
    created() {
        this.$store.dispatch('pheduyet/getApprove')
    },
}
</script>

<style scoped></style>
