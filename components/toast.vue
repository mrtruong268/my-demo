<template>
    <DxToast
        :visible="isVisible"
        message="Success"
        type="success"
        :position="position"
        width="20vw"
    />
</template>

<script>
import { DxToast } from 'devextreme-vue/toast'
import { mapState } from 'vuex'
export default {
    // props: {
    //     errCode: {
    //         type: Number,
    //         default: 0,
    //     },
    // },
    components: {
        DxToast,
    },
    data() {
        return {
            position: {
                my: 'top right',
                at: 'top right',
                offset: '-24 60',
            },
        }
    },
    computed: {
        ...mapState(['isVisible']),
    },
}
</script>

<style scoped></style>
