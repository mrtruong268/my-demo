<template>
    <commonIndex :tabPanel="muaNoiBo" :List="danhSachMuaNoiBo" />
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import commonIndex from '../components/common/commonIndex.vue'

export default {
    components: { commonIndex },
    layout: 'commonLayout',
    computed: {
        ...mapState(['listDemo']),
        ...mapGetters({
            mnb: 'muaNoiBo',
            dsmnb: 'danhSachMuaNoiBo',
        }),
        muaNoiBo: {
            get() {
                return this.mnb
            },
            set(newItem) {
                return newItem
            },
        },
        danhSachMuaNoiBo: {
            get() {
                return this.dsmnb
            },
            set(newItem) {
                return newItem
            },
        },
    },
    beforeMount() {
        console.log(this.listDemo)
    },
    created() {
        this.$store.dispatch('getData')
    },
}
</script>

<style scoped></style>
