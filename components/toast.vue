<template>
    <DxToast
        :visible="isVisible"
        :message="
            response == 200 ? 'Thành công' : 'Thất bại! Đã có lỗi xảy ra!'
        "
        :type="response == 200 ? 'success' : 'error'"
    />
</template>

<script>
import { DxToast } from 'devextreme-vue/toast'
import { mapState } from 'vuex'
export default {
    props: {
        response: {
            type: Number,
            default: 0,
        },
    },
    components: {
        DxToast,
    },
    computed: {
        ...mapState(['isVisible']),
    },
    created() {
        this.$store.commit('IS_VISIBLE', false)
        console.log('asdas')
    },
}
</script>

<style scoped></style>
