<template>
    <div>
        <div class="row justify-end">
            <div>
                <div
                    @click="resetData"
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
                    :display-expr="
                        (item) => {
                            return (
                                item &&
                                item.tenPhongBan + ' - ' + item.tenCongTy
                            )
                        }
                    "
                    :wrapItemText="true"
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
                    :ref="textMaChiPhi"
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
                    :ref="textSoThamChieu"
                >
                    <DxValidator>
                        <DxRequiredRule />
                    </DxValidator>
                </DxTextBox>
            </div>
        </DxValidationGroup>

        <div>
            <div class="row mb-2">
                <h3>{{ $t('Danh sách hàng hóa, dịch vụ cần mua') }}</h3>
            </div>
            <div class="row mb-2 align-center">
                <div class="xs5">
                    <input
                        type="file"
                        id="file"
                        ref="file"
                        @change="handleFileUpload()"
                    />
                    <button @click="$store.dispatch('downloadExcel')">
                        {{ $t('Tải mẫu Excel') }}
                    </button>
                </div>
                <div class="row align-center justify-end xs7">
                    <p class="mr-1">{{ $t('Đính kèm') }}</p>
                    <input
                        type="file"
                        id="files"
                        ref="files"
                        multiple
                        @change="handleFilesUpload()"
                    />
                    <DxSelectBox
                        :data-source="files"
                        display-expr="name"
                        styling-mode="outlined"
                        :useItemTextAsTitle="true"
                    />
                    <span
                        @click="removeFile(key)"
                        class="mdi mdi-close btn-close ml-1"
                    ></span>
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
                    width="250"
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
                    :caption="$t('Mã HMTK')"
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
            textSoThamChieu: 'textSoThamChieu',
            textMaChiPhi: 'textMaChiPhi',
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
                upCacBanVes: [],
                yeuCauMuaHangChiTiets: [],
            },
            loaiPhuPhi: [this.$t('Phát sinh'), this.$t('Theo tính toán')],
            file: '',
            files: [],
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
        refThamChieu() {
            return this.$refs[this.textSoThamChieu].instance
        },
        refChiPhi() {
            return this.$refs[this.textMaChiPhi].instance
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
            this.payloads.ycmhId = 0
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
                    valueExpr: 'keyName',
                    value: e.value,
                    wrapItemText: true,
                    onValueChanged(ev) {
                        e.setValue(ev.value)
                    },
                    onSelectionChanged(x) {
                        let itemSelect = x.selectedItem
                        if (itemSelect === null) return
                        e.row.data.tenHangHoa_DichVu = itemSelect.name
                        e.row.data.model_MaHieu = itemSelect.model
                        e.row.data.xuatXu_Hang = itemSelect.tenHangSanXuat
                        e.row.data.donVi = itemSelect.donViTinh
                        e.row.data.donGiaTamTinh = itemSelect.donGiaVND
                    },
                }
            }
        },
        removeFile(key) {
            this.files.splice(key, 1)
            // this.files.splice(0, this.files.length)
        },
        handleFileUpload() {
            this.file = this.$refs.file.files[0]
            let formData = new FormData()
            formData.append('file', this.file)
            if (this.file !== '') this.$store.dispatch('uploadExcel', formData)
        },
        handleFilesUpload() {
            let uploadedFiles = this.$refs.files.files
            for (var i = 0; i < uploadedFiles.length; i++) {
                this.files.push(uploadedFiles[i])
            }
        },
        clickAdd() {
            var result = confirm('Do you want to submit?')
            let checkEmpty = this.validationGroup.validate()
            let isArrEmpty = this.YeuCauMuaHang.yeuCauMuaHangChiTiets
            if (result) {
                if (checkEmpty.isValid && isArrEmpty.length > 0) {
                    setTimeout(() => {
                        if (this.checkArray()) {
                            let formData = new FormData()
                            for (var i = 0; i < this.files.length; i++) {
                                let file = this.files[i]
                                formData.append('upCacBanVes', file)
                            }
                            for (var key in this.YeuCauMuaHang) {
                                if (
                                    key.localeCompare(
                                        'yeuCauMuaHangChiTiets'
                                    ) != 0 &&
                                    key.localeCompare('upCacBanVes') != 0
                                ) {
                                    formData.append(
                                        key,
                                        this.YeuCauMuaHang[key]
                                    )
                                }
                            }
                            for (
                                var i = 0;
                                i <
                                this.YeuCauMuaHang.yeuCauMuaHangChiTiets.length;
                                i++
                            ) {
                                var ct =
                                    this.YeuCauMuaHang.yeuCauMuaHangChiTiets[i]
                                for (var key in ct) {
                                    formData.append(
                                        'yeuCauMuaHangChiTiets[' +
                                            i +
                                            '].' +
                                            key,
                                        ct[key]
                                    )
                                }
                            }
                            this.$store.dispatch('muahang/postData', formData)
                            this.resetData()
                        } else {
                            this.$toast.error(
                                `Failed! Not enough information to save`
                            )
                        }
                    }, 200)
                } else {
                    this.$toast.error(`Failed! Not enough information to save!`)
                }
            }
        },
        resetData() {
            this.refDuAn.reset()
            this.refPhuPhi.reset()
            if (this.userInfo.listOfNhanVienPhongBan.length > 1) {
                this.refChiPhi.reset()
                this.refThamChieu.reset()
                this.refPhongBan.reset()
            }
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
                maDuAn: '',
                maChiPhi: '',
                soThamChieu: '',
                comment: '',
                yeuCauMuaHangChiTiets: [],
            }
            this.files = []
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
.btn-close {
    cursor: pointer;
    background-color: #f2f2f2;
    padding: 0 2px;
    border-radius: 4px;
}
</style>
