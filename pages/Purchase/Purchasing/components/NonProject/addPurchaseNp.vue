<template>
    <div>
        <div class="row justify-end">
            <div>
                <div
                    @click="clickClose"
                    class="font-24 btn-tool mdi mdi-close"
                ></div>
            </div>
        </div>
        <DxValidationGroup :ref="formValidation">
            <div class="row align-center justify-space-between mb-3">
                <DxTextBox
                    v-model="YeuCauMuaHang.tenNhanVien"
                    styling-mode="outlined"
                    :label="$t('Họ và tên')"
                    label-mode="floating"
                    class="xs2 mr-3"
                    :read-only="true"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
                <DxTextBox
                    v-model="YeuCauMuaHang.maNhanVien"
                    styling-mode="outlined"
                    :label="$t('Mã nhân viên')"
                    label-mode="floating"
                    class="xs2 mr-3"
                    :read-only="true"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
                <DxTextBox
                    v-model="YeuCauMuaHang.chucVu"
                    styling-mode="outlined"
                    :label="$t('Chức vụ')"
                    label-mode="floating"
                    class="xs2 mr-3"
                    :read-only="true"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
                <DxSelectBox
                    v-if="userInfo.listOfNhanVienPhongBan.length > 1"
                    :data-source="userInfo.listOfNhanVienPhongBan"
                    display-expr="tenPhongBan"
                    styling-mode="outlined"
                    :label="$t('Phòng ban')"
                    label-mode="floating"
                    class="xs2 mr-3"
                    @selectionChanged="selectPhongBan"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxSelectBox>

                <DxTextBox
                    v-model="YeuCauMuaHang.phongBan"
                    styling-mode="outlined"
                    :label="$t('Phòng ban')"
                    label-mode="floating"
                    :read-only="true"
                    class="xs2 mr-3"
                    v-else
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
                <DxSelectBox
                    :items="loaiPhuPhi"
                    styling-mode="outlined"
                    :label="$t('Chi phí')"
                    label-mode="floating"
                    class="xs2 mr-3"
                    @selectionChanged="selectPhuPhi"
                    :ref="selectBoxRefKey"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxSelectBox>
                <DxTextBox
                    v-model="YeuCauMuaHang.maChiPhi"
                    styling-mode="outlined"
                    :label="$t('Mã chi phí')"
                    label-mode="floating"
                    :read-only="true"
                    class="xs2"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
            </div>
            <div class="row align-center mb-2">
                <DxDateBox
                    v-model="YeuCauMuaHang.ngayDeTrinh"
                    displayFormat="dd/MM/yyyy"
                    :use-mask-behavior="true"
                    validationMessageMode="always"
                    styling-mode="outlined"
                    :label="$t('Ngày đệ trình')"
                    label-mode="floating"
                    class="xs2 mr-3"
                    :read-only="true"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxDateBox>
                <DxDateBox
                    v-model="YeuCauMuaHang.ngayCanHang"
                    displayFormat="dd/MM/yyyy"
                    :use-mask-behavior="true"
                    validationMessageMode="always"
                    styling-mode="outlined"
                    :label="$t('Ngày cần hàng')"
                    class="xs2 mr-3"
                    label-mode="floating"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxDateBox>
                <DxTextBox
                    v-model="YeuCauMuaHang.diaDiemLamViec"
                    styling-mode="outlined"
                    :label="$t('Địa điểm làm việc')"
                    label-mode="floating"
                    class="xs-4 mr-3"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
                <DxTextBox
                    v-model="YeuCauMuaHang.soThamChieu"
                    styling-mode="outlined"
                    :label="$t('Số tham chiếu')"
                    label-mode="floating"
                    class="xs-4"
                    :read-only="true"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
            </div>
        </DxValidationGroup>

        <div>
            <div class="row mb-2 justify-space-between align-center">
                <h3>{{ $t('Danh sách hàng hóa, dịch vụ cần mua') }}</h3>
                <div>
                    <input
                        type="file"
                        id="file"
                        ref="file"
                        @change="handleFileUpload()"
                    />
                    <button class="mr-2" @click="submitFile()">
                        {{ $t('Nhập') }}
                    </button>
                    <button @click="$store.dispatch('downloadExcelNp')">
                        {{ $t('Tải mẫu Excel') }}
                    </button>
                </div>
            </div>
            <DxDataGrid
                id="gridContainer"
                :data-source="YeuCauMuaHang.yeuCauMuaHangNoiBoChiTiets"
                :show-borders="true"
                :show-column-lines="true"
                :allow-column-resizing="true"
                :column-auto-width="true"
                height="calc(100vh - 320px)"
                :remote-operations="true"
                :noDataText="$t('Không có dữ liệu')"
                :ref="dataGridRefKey"
                @editorPreparing="editorPreparing"
            >
                <DxEditing
                    :allow-updating="true"
                    :allow-deleting="true"
                    :useIcons="true"
                    :confirmDelete="false"
                    mode="cell"
                    new-row-position="last"
                />
                <DxColumn
                    data-field="tenHangHoa_DichVu"
                    :caption="$t('Hàng hóa, dịch vụ')"
                />
                <DxColumn data-field="model_MaHieu" :caption="$t('Mã hiệu')" />
                <DxColumn data-field="xuatXu_Hang" :caption="$t('Xuất xứ')" />
                <DxColumn data-field="soLuong" :caption="$t('Số lượng')" />
                <DxColumn data-field="donVi" :caption="$t('Đơn vị')" />
                <DxColumn
                    data-field="donGiaTamTinh"
                    :caption="$t('Đơn giá')"
                    :format="customFormat"
                />
                <DxColumn
                    data-field="soTienTamTinh"
                    :caption="$t('Tổng tiền')"
                    :format="customFormat"
                    :calculate-cell-value="calculateAmount"
                />
                <DxColumn
                    data-field="ghiChu"
                    :caption="$t('Ghi chú')"
                    width="250"
                />
            </DxDataGrid>
            <div class="row justify-space-between mt-3">
                <DxButton
                    icon="mdi mdi-plus"
                    @click="addRow"
                    styling-mode="text"
                    :text="$t('Thêm')"
                />
                <DxButton
                    :text="$t('Lưu')"
                    type="default"
                    styling-mode="contained"
                    @click="clickAdd"
                />
            </div>
        </div>
    </div>
</template>

<script>
import DxSelectBox from 'devextreme-vue/select-box'
import DxNumberBox from 'devextreme-vue/number-box'
import DxTextBox from 'devextreme-vue/text-box'
import DxDateBox from 'devextreme-vue/date-box'
import DxButton from 'devextreme-vue/button'
import {
    DxDataGrid,
    DxColumn,
    DxScrolling,
    DxPager,
    DxPaging,
    DxLookup,
    DxEditing,
} from 'devextreme-vue/data-grid'
import DxValidator, { DxRequiredRule } from 'devextreme-vue/validator'
import DxValidationGroup from 'devextreme-vue/validation-group'
import { DxAutocomplete } from 'devextreme-vue/autocomplete'
import { mapState } from 'vuex'

export default {
    components: {
        DxSelectBox,
        DxTextBox,
        DxDateBox,
        DxDataGrid,
        DxColumn,
        DxScrolling,
        DxPager,
        DxPaging,
        DxNumberBox,
        DxLookup,
        DxButton,
        DxEditing,
        DxValidator,
        DxRequiredRule,
        DxValidationGroup,
        DxAutocomplete,
    },
    data() {
        return {
            dataGridRefKey: 'datagridValid',
            formValidation: 'formValid',
            selectBoxRefKey: 'BoxRefKey',
            YeuCauMuaHang: {
                id: 0,
                tenNhanVien: '',
                maNhanVien: '',
                chucVu: '',
                phongBan: '',
                ngayDeTrinh: new Date().toISOString(),
                ngayCanHang: new Date().toISOString(),
                diaDiemLamViec: '',
                phuPhi: '',
                maChiPhi: '',
                soThamChieu: '',
                comment: '',
                yeuCauMuaHangNoiBoChiTiets: [],
            },
            loaiPhuPhi: [
                this.$t('VNAS Group'),
                this.$t('VNAS Solutions'),
                this.$t('VNAS Services'),
                this.$t('VNAS Workshop'),
            ],
            file: '',
        }
    },
    watch: {
        refNumberNp: {
            handler(refNumberNp) {
                if (refNumberNp) {
                    this.YeuCauMuaHang.soThamChieu = refNumberNp.soThamChieu
                    this.YeuCauMuaHang.maChiPhi = refNumberNp.maChiPhi
                } else {
                    this.YeuCauMuaHang.soThamChieu = ''
                    this.YeuCauMuaHang.maChiPhi = ''
                }
            },
            immediate: true,
        },
        dataExcelNp: {
            handler(dataExcelNp) {
                if (dataExcelNp) {
                    this.YeuCauMuaHang.yeuCauMuaHangNoiBoChiTiets = JSON.parse(
                        JSON.stringify(dataExcelNp.yeuCauMuaHangNoiBoChiTiets)
                    )
                }
            },
            deep: true,
        },
    },
    computed: {
        ...mapState('muahang', ['listItemNp', 'refNumberNp']),
        ...mapState(['userInfo', 'dataExcelNp']),
        validationGroup() {
            return this.$refs[this.formValidation].instance
        },
        selectBox() {
            return this.$refs[this.selectBoxRefKey].instance
        },
    },
    methods: {
        addRow() {
            let tmpAdd = {
                id: 0,
                ycmhId: 0,
                tenHangHoa_DichVu: '',
                xuatXu_Hang: '',
                model_MaHieu: '',
                soLuong: 0,
                donVi: '',
                donGiaTamTinh: 0,
                ghiChu: '',
            }
            this.YeuCauMuaHang.yeuCauMuaHangNoiBoChiTiets.push(tmpAdd)
        },
        checkArray() {
            let conditionsArray = []
            this.YeuCauMuaHang.yeuCauMuaHangNoiBoChiTiets.forEach(
                (e) =>
                    (conditionsArray = [
                        e.tenHangHoa_DichVu !== '',
                        e.model_MaHieu !== '',
                        e.xuatXu_Hang !== '',
                        e.soLuong !== '',
                        e.donVi !== '',
                    ])
            )
            return !conditionsArray.includes(false)
        },
        clickAdd() {
            var result = confirm('Do you want to submit?')
            let checkEmpty = this.validationGroup.validate()
            let isArrEmpty = this.YeuCauMuaHang.yeuCauMuaHangNoiBoChiTiets
            if (result) {
                if (checkEmpty.isValid && isArrEmpty.length > 0) {
                    setTimeout(() => {
                        if (this.checkArray()) {
                            this.$store.dispatch(
                                'muahang/postDataNp',
                                this.YeuCauMuaHang
                            )
                            this.clickClose()
                        } else {
                            this.$toast.error(
                                `Failed! Not enough information to save!`
                            )
                        }
                    }, 300)
                } else {
                    this.$toast.error(`Failed! Not enough information to save!`)
                }
            }
        },
        selectPhuPhi(e) {
            this.YeuCauMuaHang.phuPhi = e.selectedItem
        },
        calculateAmount(e) {
            return e.soLuong * e.donGiaTamTinh
        },
        customFormat(e) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(e)
        },
        async submitFile() {
            let formData = new FormData()
            formData.append('file', this.file)
            if (this.file !== '')
                this.$store.dispatch('uploadExcelNp', formData)
        },
        handleFileUpload() {
            this.file = this.$refs.file.files[0]
        },
        editorPreparing(e) {
            if (e.dataField === 'tenHangHoa_DichVu') {
                e.editorName = 'dxAutocomplete'
                e.editorOptions = {
                    items: this.listItemNp,
                    valueExpr: 'name',
                    value: e.value,
                    onValueChanged(ev) {
                        e.setValue(ev.value)
                    },
                    onSelectionChanged(x) {
                        let itemSelect = x.selectedItem
                        if (itemSelect === null) return
                        e.row.data.model_MaHieu = itemSelect.model
                        e.row.data.xuatXu_Hang = itemSelect.tenHangSanXuat
                        e.row.data.donVi = itemSelect.donViTinh
                        e.row.data.donGiaTamTinh = itemSelect.donGiaVND
                    },
                }
            }
        },
        clickClose() {
            this.resetData()
            this.$emit('invisible')
        },
        resetData() {
            this.YeuCauMuaHang = {
                id: 0,
                tenNhanVien: this.userInfo.tenNhanVien,
                maNhanVien: this.userInfo.maNhanVien,
                chucVu: this.userInfo.chucVu,
                phongBan: this.userInfo.phongBan,
                ngayDeTrinh: new Date().toISOString(),
                ngayCanHang: new Date().toISOString(),
                diaDiemLamViec: this.userInfo.diaDiemLamViec,
                phuPhi: '',
                maChiPhi: this.refNumberNp.maChiPhi,
                soThamChieu: this.refNumberNp.soThamChieu,
                comment: '',
                yeuCauMuaHangNoiBoChiTiets: [],
            }
            this.selectBox.reset()
        },
    },
    created() {
        this.$store.dispatch('muahang/getItemsNp')
        this.$store.dispatch('muahang/getRefNumberNp')
        this.YeuCauMuaHang.tenNhanVien = this.userInfo.tenNhanVien
        this.YeuCauMuaHang.maNhanVien = this.userInfo.maNhanVien
        this.YeuCauMuaHang.chucVu = this.userInfo.chucVu
        this.YeuCauMuaHang.phongBan = this.userInfo.phongBan
        this.YeuCauMuaHang.diaDiemLamViec = this.userInfo.diaDiemLamViec
        this.YeuCauMuaHang.soThamChieu = this.refNumberNp.soThamChieu
        this.YeuCauMuaHang.maChiPhi = this.refNumberNp.maChiPhi
    },
}
</script>

<style scoped>
.btn-add {
    font-size: 28px;
}
.btn-save {
    background-color: #0986c5;
    color: white;
    padding: 8px 0;
    width: 60px;
    text-align: center;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.2s linear 0s;
}
.btn-save:hover {
    color: #0986c5;
    background-color: #f1f1f1;
    transition: all 0.2s linear 0s;
}
.xs-4 {
    flex-basis: 34.6%;
    max-width: 34.6%;
}
.btn-tool {
    border: 1px solid #ddd;
    padding: 0 5px;
    border-radius: 4px;
    transition: all 0.2s linear 0s;
    cursor: pointer;
}
.btn-tool:hover {
    transition: all 0.2s linear 0s;
    background-color: black;
    color: #ddd;
}
</style>
