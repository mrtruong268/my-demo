<template>
    <div>
        <h3 class="mb-2">Thông tin yêu cầu</h3>
        <div @click="logAarr">ac</div>
    </div>
</template>

<script>
import DxSelectBox from 'devextreme-vue/select-box'
import DxTextBox from 'devextreme-vue/text-box'
import DxDateBox from 'devextreme-vue/date-box'
import DxButton from 'devextreme-vue/button'
import {
    DxDataGrid,
    DxColumn,
    DxPaging,
    DxEditing,
} from 'devextreme-vue/data-grid'

export default {
    props: ['dataProduct'],
    components: {
        DxSelectBox,
        DxTextBox,
        DxDateBox,
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxButton,
        DxEditing,
    },
    data() {
        return {
            methods: {},
        }
    },
    methods: {
        logAarr() {
            let tmpObj = {
                id: this.idv4(),
                tenYeuCau: 'san xuat 1',
                dayChuyen: 'san xuat 1',
                nhanCong: 300,
            }
            this.dataProduct.push(tmpObj)
            this.dataProduct.forEach((e) => console.log(e))
        },
    },
}
</script>

<style scoped></style>
