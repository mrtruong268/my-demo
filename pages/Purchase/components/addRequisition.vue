<template>
    <div class="container">
        <div class="row">
            <div class="xs9">
                <div class="row mb-2">
                    <div class="xs6 mr-3">
                        <DxSelectBox
                            display-expr="title"
                            value-expr="id"
                            styling-mode="outlined"
                            :label="$t('Purchase form')"
                            label-mode="floating"
                            class="pa-1"
                        />
                    </div>
                    <div class="xs6 mr-3">
                        <DxTextBox
                            styling-mode="outlined"
                            label="Name"
                            label-mode="floating"
                            class="pa-1"
                        />
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="xs4 mr-3">
                        <DxTextBox
                            styling-mode="outlined"
                            label="Employee id"
                            label-mode="floating"
                            class="pa-1"
                        />
                    </div>
                    <div class="xs4 mr-3">
                        <DxTextBox
                            styling-mode="outlined"
                            label="Position"
                            label-mode="floating"
                            class="pa-1"
                        />
                    </div>
                    <div class="xs4 mr-3">
                        <DxTextBox
                            styling-mode="outlined"
                            label="Department"
                            label-mode="floating"
                            class="pa-1"
                        />
                    </div>
                </div>
                <div class="row mb-2">
                    <div class="xs6 mr-3">
                        <DxDateBox
                            styling-mode="outlined"
                            label="Submission date"
                            label-mode="floating"
                            class="pa-1"
                        />
                    </div>
                    <div class="xs6 mr-3">
                        <DxDateBox
                            styling-mode="outlined"
                            label="Delivery date"
                            label-mode="floating"
                            class="pa-1"
                        />
                    </div>
                </div>
            </div>

            <div class="xs3">
                <div class="pb-2">
                    <DxTextBox
                        styling-mode="outlined"
                        label="Surcharge"
                        label-mode="floating"
                        class="pa-1"
                    />
                </div>
                <div class="pb-2">
                    <DxTextBox
                        styling-mode="outlined"
                        label="Expense code"
                        label-mode="floating"
                        class="pa-1"
                    />
                </div>
                <div class="pb-2">
                    <DxTextBox
                        styling-mode="outlined"
                        label="Reference number"
                        label-mode="floating"
                        class="pa-1"
                    />
                </div>
            </div>
        </div>
        <div class="mb-3">
            <DxTextBox
                styling-mode="outlined"
                label="Work location"
                label-mode="floating"
                class="pa-1"
            />
        </div>
        <div class="mb-3">
            <h3>Add goods, services</h3>
            <DxDataGrid
                id="gridContainer"
                :data-source="HangHoa"
                :show-borders="true"
                height="100%"
            >
                <DxEditing
                    :allow-updating="true"
                    :allow-adding="true"
                    :allow-deleting="true"
                    :confirmDelete="false"
                    :useIcons="true"
                    mode="cell"
                />
                <DxPaging :enabled="false" />
                <DxColumn data-field="idHangHoa" caption="Id" width="30" />
                <DxColumn data-field="tenHangHoa" caption="Goods, services" />
                <DxColumn data-field="soluong" caption="Quantity" width="70" />
                <DxColumn data-field="donVi" caption="Unit" width="50" />
                <DxColumn data-field="hangMuc" caption="Categories" />
                <DxColumn data-field="xuatXu" caption="Origin" />
                <DxColumn data-field="maHieu" caption="Model" />
                <DxColumn data-field="tongCong" caption="Total" width="60" />
                <DxColumn
                    data-field="soTien"
                    caption="Amount of money"
                    width="100"
                />
                <DxColumn data-field="ghiChu" caption="Note" />
            </DxDataGrid>
        </div>
        <div class="row justify-end align-center footer">
            <DxButton text="Lưu" type="default" styling-mode="contained" />
        </div>
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
            HangHoa: [
                {
                    idHangHoa: 1,
                    tenHangHoa: 'hang hoa 1',
                    soluong: 10,
                    ghiChu: 'sadsadsadasdad',
                },
                {
                    idHangHoa: 2,
                    tenHangHoa: 'hang hoa 2',
                    soluong: 20,
                    ghiChu: 'wqewqewqewe',
                },
                {
                    idHangHoa: 2,
                    tenHangHoa: 'hang hoa 2',
                    soluong: 20,
                    ghiChu: 'wqewqewqewe',
                },
            ],
            methods: {},
        }
    },
    mounted() {},
}
</script>

<style scoped></style>
