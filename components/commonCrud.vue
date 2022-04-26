<template>
    <popup :showPopup="popupVisible">
        <template #header>
            <h2>{{ title }}</h2>
        </template>
        <template #footer>
            <div class="footer row justify-space-between">
                <DxButton
                    text="Close"
                    type="default"
                    styling-mode="text"
                    @click="onClose($event)"
                />
                <DxButton
                    text="Save"
                    type="default"
                    styling-mode="contained"
                    @click="onSave($event)"
                    class="btn-save"
                />
            </div>
        </template>
    </popup>
</template>

<script>
import DxButton from 'devextreme-vue/button'
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        popupVisible: {
            type: Boolean,
            default: false,
        },
    },
    components: { DxButton },
    methods: {},
}
</script>

<style scoped>
.footer {
    position: absolute;
    bottom: 24px;
}
.btn-save {
    margin-right: 40px;
}
</style>
