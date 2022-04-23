<template>
    <commonIndex :tabPanel="muaDuAn" :List="danhSachMuaDuAn" />
</template>

<script>
import { mapGetters } from 'vuex'
import commonIndex from '../components/common/commonIndex.vue'

export default {
    components: { commonIndex },
    layout: 'commonLayout',
    computed: {
        ...mapGetters('muahang', ['muaDuAn', 'danhSachMuaDuAn']),
    },
}
</script>

<style scoped></style>
