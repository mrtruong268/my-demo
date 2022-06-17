<template>
    <div>
        <div v-for="item in dataSrc" :key="item.id">
            <p>
                {{ item.tenNhanVien }}
            </p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            dataSrc: [],
        }
    },
    computed: {
        ...mapState('pheduyet', ['danhSachPheDuyet']),
    },
    watch: {
        danhSachPheDuyet: {
            handler(danhSachPheDuyet) {
                if (danhSachPheDuyet) this.dataSrc = this.danhSachPheDuyet.data
            },
            deep: true,
        },
    },
    methods: {},
    created() {
        // this.$store.dispatch('pheduyet/getApprove')
    },
}
</script>

<style scoped></style>
