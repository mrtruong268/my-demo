<template>
    <div class="container-md">
        <DxTextBox
            display-expr="title"
            value-expr="id"
            styling-mode="outlined"
            label-mode="floating"
            label="Name"
            class="mb-5"
        />
        <div class="row justify-end align-center">
            <DxButton text="Lưu" type="default" styling-mode="contained" />
        </div>
    </div>
</template>

<script>
import DxTextBox from 'devextreme-vue/text-box'
import DxButton from 'devextreme-vue/button'

export default {
    components: {
        DxTextBox,
        DxButton,
    },
}
</script>

<style scoped></style>
