<template>
    <div class="container-md">
        <div class="row mb-4">
            <div class="xs4">
                <DxSelectBox
                    display-expr="title"
                    value-expr="id"
                    styling-mode="outlined"
                    label-mode="floating"
                    label="Customer"
                    class="mr-4"
                />
            </div>
            <div class="xs4">
                <DxSelectBox
                    styling-mode="outlined"
                    label-mode="floating"
                    class="mr-4"
                    label="Partner"
                />
            </div>
            <div class="xs4">
                <DxTextBox
                    styling-mode="outlined"
                    label-mode="floating"
                    label="Identifier"
                />
            </div>
        </div>
        <div class="mb-4">
            <DxTextBox
                styling-mode="outlined"
                label-mode="floating"
                label="Project name"
            />
        </div>
        <div class="mb-4">
            <DxTextArea
                :height="100"
                :max-length="null"
                styling-mode="outlined"
                label-mode="floating"
                label="Description"
            />
        </div>
        <div class="row">
            <div class="xs3">
                <DxSelectBox
                    display-expr="title"
                    value-expr="id"
                    styling-mode="outlined"
                    label-mode="floating"
                    label="Category"
                    class="mr-4"
                />
            </div>
            <div class="xs3 mb-5">
                <DxSelectBox
                    styling-mode="outlined"
                    label-mode="floating"
                    class="mr-4"
                    label="Company"
                />
            </div>
            <div class="xs3">
                <DxSelectBox
                    styling-mode="outlined"
                    label-mode="floating"
                    class="mr-4"
                    label="Project type"
                />
            </div>
            <div class="xs3">
                <DxTextBox
                    styling-mode="outlined"
                    label-mode="floating"
                    label="Status"
                />
            </div>
        </div>
        <div class="row justify-end align-center">
            <DxButton text="Lưu" type="default" styling-mode="contained" />
        </div>
    </div>
</template>

<script>
import DxTextBox from 'devextreme-vue/text-box'
import DxSelectBox from 'devextreme-vue/select-box'
import DxTextArea from 'devextreme-vue/text-area'
import DxButton from 'devextreme-vue/button'

export default {
    props: ['dataProp'],
    components: {
        DxTextBox,
        DxSelectBox,
        DxTextArea,
        DxButton,
    },
    methods: {},
}
</script>

<style scoped></style>
