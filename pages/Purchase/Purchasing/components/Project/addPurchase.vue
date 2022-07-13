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

                <DxSelectBox
                    v-if="userInfo.listOfNhanVienPhongBan.length > 1"
                    :data-source="userInfo.listOfNhanVienPhongBan"
                    display-expr="tenPhongBan"
                    styling-mode="outlined"
                    :label="$t('Phòng ban')"
                    label-mode="floating"
                    class="xs2 mr-3"
                    :ref="selectBoxPhongBan"
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
                    :items="loaiPhuPhi"
                    styling-mode="outlined"
                    :label="$t('Phụ phí')"
                    label-mode="floating"
                    class="xs2 mr-3"
                    :ref="selectBoxPhuPhi"
                    @selectionChanged="selectPhuPhi"
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

                <DxSelectBox
                    :items="projectCode"
                    styling-mode="outlined"
                    :label="$t('Mã dự án')"
                    label-mode="floating"
                    class="xs2 mr-3"
                    :search-enabled="true"
                    search-mode="contains"
                    :search-timeout="200"
                    :min-search-length="0"
                    :ref="selectBoxDuAn"
                    @selectionChanged="selectDuAn"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxSelectBox>

                <DxTextBox
                    v-model="YeuCauMuaHang.soThamChieu"
                    styling-mode="outlined"
                    :label="$t('Số tham chiếu')"
                    label-mode="floating"
                    class="xs2"
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
                    <button @click="$store.dispatch('downloadExcel')">
                        {{ $t('Tải mẫu Excel') }}
                    </button>
                </div>
            </div>
            <DxDataGrid
                id="gridContainer"
                :data-source="YeuCauMuaHang.yeuCauMuaHangChiTiets"
                :show-borders="true"
                :show-column-lines="true"
                :show-row-lines="true"
                :allow-column-resizing="true"
                :column-auto-width="true"
                height="calc(100vh - 320px)"
                :noDataText="$t('Không có dữ liệu')"
                :remote-operations="true"
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
                    data-field="maHangMucTrienKhai"
                    :caption="$t('Mã hạng mục triển khai')"
                >
                    <DxLookup :data-source="hangMucTrienKhai" />
                </DxColumn>
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
            formValidation: 'formValid',
            selectBoxDuAn: 'BoxRefKey',
            selectBoxPhuPhi: 'BoxPhuPhi',
            selectBoxPhongBan: 'BoxPhongBan',
            YeuCauMuaHang: {
                id: 0,
                tenNhanVien: '',
                maNhanVien: '',
                chucVu: '',
                phongBan: '',
                phongBanId: 0,
                ngayDeTrinh: new Date().toISOString(),
                ngayCanHang: new Date().toISOString(),
                diaDiemLamViec: '',
                phuPhi: '',
                maChiPhi: '',
                maDuAn: '',
                soThamChieu: '',
                comment: '',
                yeuCauMuaHangChiTiets: [],
            },
            loaiPhuPhi: [this.$t('Phát sinh'), this.$t('Theo tính toán')],
            file: '',
            payloads: {},
        }
    },
    watch: {
        refNumber: {
            handler(refNumber) {
                if (typeof refNumber !== 'undefined') {
                    this.YeuCauMuaHang.soThamChieu = refNumber.soThamChieu
                    this.YeuCauMuaHang.maChiPhi = refNumber.maChiPhi
                } else return {}
            },
            immediate: true,
        },
        dataExcel: {
            handler(dataExcel) {
                if (dataExcel) {
                    this.YeuCauMuaHang.yeuCauMuaHangChiTiets = JSON.parse(
                        JSON.stringify(dataExcel.yeuCauMuaHangChiTiets)
                    )
                }
            },
            deep: true,
        },
    },
    computed: {
        ...mapState('muahang', ['listItem', 'refNumber']),
        ...mapState([
            'userInfo',
            'projectCode',
            'hangMucTrienKhai',
            'dataExcel',
        ]),
        validationGroup() {
            return this.$refs[this.formValidation].instance
        },
        refDuAn() {
            return this.$refs[this.selectBoxDuAn].instance
        },
        refPhuPhi() {
            return this.$refs[this.selectBoxPhuPhi].instance
        },
        refPhongBan() {
            return this.$refs[this.selectBoxPhongBan].instance
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
                maHangMucTrienKhai: '',
                ghiChu: '',
            }
            this.YeuCauMuaHang.yeuCauMuaHangChiTiets.push(tmpAdd)
        },
        checkArray() {
            let conditionsArray = []
            this.YeuCauMuaHang.yeuCauMuaHangChiTiets.forEach(
                (e) =>
                    (conditionsArray = [
                        e.tenHangHoa_DichVu !== '',
                        e.model_MaHieu !== '',
                        e.xuatXu_Hang !== '',
                        e.soLuong !== '',
                        e.donVi !== '',
                        e.maHangMucTrienKhai !== '',
                        e.donGiaTamTinh !== '',
                    ])
            )
            return !conditionsArray.includes(false)
        },
        selectPhongBan(e) {
            if (e.selectedItem === null) return
            this.payloads.phongBanId = e.selectedItem.phongBanId
            this.YeuCauMuaHang.phongBanId = e.selectedItem.phongBanId
            this.YeuCauMuaHang.phongBan = e.selectedItem.tenPhongBan
            this.YeuCauMuaHang.chucVu = e.selectedItem.tenChucVu
            this.$store.dispatch('muahang/getRefNumber', this.payloads)
        },
        selectDuAn(e) {
            if (e.selectedItem === null) return
            this.payloads.maDuAn = e.selectedItem
            this.YeuCauMuaHang.maDuAn = e.selectedItem
            this.$store.dispatch('muahang/getRefNumber', this.payloads)
            this.$store.dispatch('getHangMuc', e.selectedItem)
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
        editorPreparing(e) {
            if (e.dataField === 'tenHangHoa_DichVu') {
                e.editorName = 'dxAutocomplete'
                e.editorOptions = {
                    items: this.listItem,
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
        async submitFile() {
            let formData = new FormData()
            formData.append('file', this.file)
            if (this.file !== '') this.$store.dispatch('uploadExcel', formData)
        },
        handleFileUpload() {
            this.file = this.$refs.file.files[0]
        },
        clickAdd() {
            var result = confirm('Do you want to submit?')
            let checkEmpty = this.validationGroup.validate()
            let isArrEmpty = this.YeuCauMuaHang.yeuCauMuaHangChiTiets
            if (result) {
                if (checkEmpty.isValid && isArrEmpty.length > 0) {
                    setTimeout(() => {
                        if (this.checkArray()) {
                            this.$store.dispatch(
                                'muahang/postData',
                                this.YeuCauMuaHang
                            )
                            this.clickClose()
                        } else {
                            this.$toast.error(
                                `Failed! Not enough information to save`
                            )
                        }
                    }, 300)
                } else {
                    this.$toast.error(`Failed! Not enough information to save!`)
                }
            }
        },
        resetData() {
            this.refDuAn.reset()
            this.refPhuPhi.reset()
            if (this.userInfo.listOfNhanVienPhongBan.length > 1)
                this.refPhongBan.reset()
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
                maChiPhi: '',
                maDuAn: '',
                soThamChieu: '',
                comment: '',
                yeuCauMuaHangChiTiets: [],
            }
        },
        clickClose() {
            this.resetData()
            this.$emit('invisible')
        },
    },
    created() {
        this.$store.dispatch('muahang/getItems')
        this.$store.dispatch('getProjectCode')
        this.YeuCauMuaHang.tenNhanVien = this.userInfo.tenNhanVien
        this.YeuCauMuaHang.maNhanVien = this.userInfo.maNhanVien
        this.YeuCauMuaHang.chucVu = this.userInfo.chucVu
        this.YeuCauMuaHang.phongBan = this.userInfo.phongBan
        if (this.userInfo.listOfNhanVienPhongBan.length === 1) {
            this.YeuCauMuaHang.phongBanId = this.userInfo.phongBanId
            this.payloads.phongBanId = this.userInfo.phongBanId
        }
        this.YeuCauMuaHang.diaDiemLamViec = this.userInfo.diaDiemLamViec
    },
}
</script>

<style scoped>
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
