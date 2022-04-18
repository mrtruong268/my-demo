<template>
    <div class="container-md">
        <div class="row mb-4">
            <div class="xs4" v-if="dataProp.loaiDanhSach === 'NewPartner'">
                <DxTextBox
                    display-expr="title"
                    value-expr="id"
                    styling-mode="outlined"
                    label-mode="floating"
                    label="Partner ID"
                    class="mr-4"
                />
            </div>
            <div class="xs4" v-else>
                <DxTextBox
                    display-expr="title"
                    value-expr="id"
                    styling-mode="outlined"
                    label-mode="floating"
                    label="Customer ID"
                    class="mr-4"
                />
            </div>
            <div class="xs4">
                <DxTextBox
                    styling-mode="outlined"
                    label-mode="floating"
                    class="mr-4"
                    label="Name"
                />
            </div>
            <div class="xs4">
                <DxTextBox
                    styling-mode="outlined"
                    label-mode="floating"
                    label="TIN"
                />
            </div>
        </div>
        <div class="mb-4">
            <DxTextBox
                styling-mode="outlined"
                label-mode="floating"
                label="Address"
            />
        </div>
        <div class="row">
            <div class="xs4">
                <DxTextBox
                    display-expr="title"
                    value-expr="id"
                    styling-mode="outlined"
                    label-mode="floating"
                    label="Contact person"
                    class="mr-4"
                />
            </div>
            <div class="xs4 mb-5">
                <DxTextBox
                    styling-mode="outlined"
                    label-mode="floating"
                    class="mr-4"
                    label="Email"
                />
            </div>
            <div class="xs4">
                <DxTextBox
                    styling-mode="outlined"
                    label-mode="floating"
                    label="Phone"
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
import DxButton from 'devextreme-vue/button'

export default {
    props: ['dataProp'],
    components: {
        DxTextBox,
        DxButton,
    },
    methods: {},
}
</script>

<style scoped></style>
