<template>
    <div>
        <!-- <div>{{ dataSrc }}</div> -->
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
            handler(newValue, oldValue) {
                if (newValue) {
                    this.dataSrc.push(newValue.data)
                }
            },
            deep: true,
        },
    },
    methods: {},
}
</script>

<style scoped></style>
