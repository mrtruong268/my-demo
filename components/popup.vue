<template>
    <DxPopup
        :visible="showPopup"
        :drag-enabled="false"
        :close-on-outside-click="false"
        :show-close-button="true"
        :show-title="showTitle"
        height="90%"
        :title="title"
    >
        <div class="text-xs-center">
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
    },
    components: {
        DxPopup,
    },
}
</script>

<style scoped></style>
