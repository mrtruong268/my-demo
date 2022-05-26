<template>
    <DxPopup
        :visible="showPopup"
        :drag-enabled="false"
        :close-on-outside-click="closeOut"
        :show-close-button="true"
        :show-title="showTitle"
        height="auto"
        :width="width"
        :title="title"
    >
        <div>
            <slot name="header"></slot>
        </div>
        <div>
            <slot name="main"></slot>
        </div>
        <div>
            <slot name="footer"></slot>
        </div>
    </DxPopup>
</template>

<script>
import { DxPopup } from 'devextreme-vue/popup'

export default {
    props: {
        showPopup: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '',
        },
        showTitle: {
            type: Boolean,
            default: false,
        },
        closeOut: {
            type: Boolean,
            default: false,
        },
        width: {
            type: String,
            default: 'auto',
        },
    },
    components: {
        DxPopup,
    },
}
</script>

<style scoped></style>
