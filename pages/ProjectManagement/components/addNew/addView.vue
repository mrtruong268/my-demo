<template>
    <div class="container-md">
        <DxTextBox
            display-expr="title"
            value-expr="id"
            styling-mode="outlined"
            label-mode="floating"
            label="Description"
            class="mb-4"
        />
        <h3 class="mb-3">Chọn thông tin</h3>
        <div class="mb-5 row justify-space-evenly">
            <DxCheckBox :value="checkItem.ViewMaDuAn" text="ViewMaDuAn" />
            <DxCheckBox :value="checkItem.ViewDoiTac" text="ViewDoiTac" />
            <DxCheckBox :value="checkItem.ViewKhachHang" text="ViewKhachHang" />
            <DxCheckBox
                :value="checkItem.ViewProjectName"
                text="ViewProjectName"
            />
            <DxCheckBox :value="checkItem.ViewPhanLoai" text="ViewPhanLoai" />
            <DxCheckBox :value="checkItem.ViewNgayTao" text="ViewNgayTao" />
            <DxCheckBox :value="checkItem.ViewTinhTrang" text="ViewTinhTrang" />
        </div>
        <div class="row justify-end align-center">
            <DxButton text="Lưu" type="default" styling-mode="contained" />
        </div>
    </div>
</template>

<script>
import DxTextBox from 'devextreme-vue/text-box'
import DxButton from 'devextreme-vue/button'
import { DxCheckBox } from 'devextreme-vue/check-box'

export default {
    props: ['dataProp'],
    components: { DxCheckBox, DxTextBox, DxButton },
    data() {
        return {
            checkItem: {
                ViewMaDuAn: true,
                ViewDoiTac: true,
                ViewKhachHang: false,
                ViewProjectName: false,
                ViewPhanLoai: false,
                ViewNgayTao: null,
                ViewTinhTrang: null,
            },
        }
    },
}
</script>

<style scoped></style>
