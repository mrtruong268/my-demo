<template>
    <div>
        <!-- <div v-for="item in dataSrc" :key="item.id">
            {{ item.tenNhanVien }}
        </div> -->
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            dataSrc: this.danhSachPheDuyet,
        }
    },
    computed: {
        ...mapState('pheduyet', ['danhSachPheDuyet']),
    },
    watch: {
        dataSrc: {
            handler(dataSrc) {
                if (dataSrc) console.log(dataSrc)
            },
            deep: true,
        },
    },
    methods: {},
    created() {
        this.$store.dispatch('pheduyet/getApprove')
    },
}
</script>

<style scoped></style>
