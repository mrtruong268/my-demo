<template>
    <div>
        <div class="row justify-end">
            <div>
                <div class="row">
                    <div
                        @click="checkEdit"
                        class="font-24 btn-tool mdi mdi-pencil mr-2"
                    ></div>
                    <div v-if="disable == false && allowEdit == true">
                        <div
                            @click="clickSave"
                            class="font-24 btn-tool mdi mdi-check mx-2"
                        ></div>
                    </div>
                </div>
            </div>
            <div>
                <div
                    @click="clickClose"
                    class="font-24 btn-tool mdi mdi-close"
                ></div>
            </div>
        </div>
        <dnmh :maNhanVien="mnv" :ycmh="YeuCauMuaHang" />
        <div class="header">
            <DxValidationGroup :ref="formValidation">
                <div class="row">
                    <div class="xs4 mr-4">
                        <div class="row align-center justify-space-between">
                            <p>Tên:</p>
                            <DxTextBox
                                v-model="YeuCauMuaHang.tenNhanVien"
                                styling-mode="underlined"
                                :read-only="true"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxTextBox>
                        </div>
                        <div class="row align-center justify-space-between">
                            <p>Mã nhân viên:</p>
                            <DxTextBox
                                v-model="YeuCauMuaHang.maNhanVien"
                                styling-mode="underlined"
                                :read-only="true"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxTextBox>
                        </div>
                        <div class="row align-center justify-space-between">
                            <p>Ngày đệ trình:</p>
                            <DxDateBox
                                v-model="YeuCauMuaHang.ngayDeTrinh"
                                displayFormat="dd/MM/yyyy"
                                :use-mask-behavior="true"
                                validationMessageMode="always"
                                styling-mode="underlined"
                                :read-only="disable"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxDateBox>
                        </div>
                        <div class="row align-center justify-space-between">
                            <p>Ngày giao hàng:</p>
                            <DxDateBox
                                v-model="YeuCauMuaHang.ngayCanHang"
                                displayFormat="dd/MM/yyyy"
                                :use-mask-behavior="true"
                                validationMessageMode="always"
                                styling-mode="underlined"
                                :read-only="disable"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxDateBox>
                        </div>
                    </div>
                    <div class="xs4 mr-4">
                        <div class="row align-center justify-space-between">
                            <p>Chức vụ:</p>
                            <DxTextBox
                                v-model="YeuCauMuaHang.chucVu"
                                styling-mode="underlined"
                                :read-only="true"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxTextBox>
                        </div>
                        <div class="row align-center justify-space-between">
                            <p>Phòng/Ban:</p>
                            <!-- <div v-if="!disable">
                                <DxSelectBox
                                    v-if="
                                        userInfo.listOfNhanVienPhongBan.length >
                                        1
                                    "
                                    :data-source="
                                        userInfo.listOfNhanVienPhongBan
                                    "
                                    :display-expr="
                                        (item) => {
                                            return (
                                                item &&
                                                item.tenPhongBan +
                                                    ' - ' +
                                                    item.tenCongTy
                                            )
                                        }
                                    "
                                    :wrapItemText="true"
                                    styling-mode="underlined"
                                    @selectionChanged="selectPhongBan"
                                    :read-only="disable"
                                >
                                    <DxValidator>
                                        <DxRequiredRule />
                                    </DxValidator>
                                </DxSelectBox>
                                <DxTextBox
                                    v-else
                                    v-model="YeuCauMuaHang.phongBan"
                                    styling-mode="underlined"
                                    :read-only="disable"
                                >
                                    <DxValidator>
                                        <DxRequiredRule />
                                    </DxValidator>
                                </DxTextBox>
                            </div> -->
                            <DxTextBox
                                v-model="YeuCauMuaHang.phongBan"
                                styling-mode="underlined"
                                :read-only="true"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxTextBox>
                        </div>
                        <div class="row align-center justify-space-between">
                            <p>Địa điểm làm việc:</p>
                            <DxTextBox
                                v-model="YeuCauMuaHang.diaDiemLamViec"
                                styling-mode="underlined"
                                :read-only="disable"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxTextBox>
                        </div>
                    </div>
                    <div class="xs4">
                        <div class="row align-center justify-space-between">
                            <p>Phụ phí:</p>
                            <DxSelectBox
                                :items="loaiPhuPhi"
                                :value="YeuCauMuaHang.phuPhi"
                                styling-mode="underlined"
                                :read-only="disable"
                                @selectionChanged="selectPhuPhi"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxSelectBox>
                        </div>
                        <div class="row align-center justify-space-between">
                            <p>Mã dự án:</p>
                            <DxSelectBox
                                :items="projectCode"
                                :value="YeuCauMuaHang.maDuAn"
                                styling-mode="underlined"
                                :read-only="disable"
                                @selectionChanged="selectDuAn"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxSelectBox>
                        </div>
                        <div class="row align-center justify-space-between">
                            <p>Mã chi phí:</p>
                            <DxTextBox
                                v-model="YeuCauMuaHang.maChiPhi"
                                styling-mode="underlined"
                                :read-only="true"
                                :width="220"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxTextBox>
                        </div>
                        <div class="row align-center justify-space-between">
                            <p>Số tham chiếu:</p>
                            <DxTextBox
                                v-model="YeuCauMuaHang.soThamChieu"
                                styling-mode="underlined"
                                :read-only="true"
                                :width="220"
                            >
                                <DxValidator>
                                    <DxRequiredRule />
                                </DxValidator>
                            </DxTextBox>
                        </div>
                    </div>
                </div>
            </DxValidationGroup>
        </div>
        <div>
            <div class="row justify-space-between align-center">
                <h3 class="my-2 xs4">
                    {{ $t('Danh sách hàng hóa, dịch vụ cần mua') }}
                </h3>
                <div class="row align-center justify-end">
                    <div
                        v-if="allowEdit == true"
                        class="row align-center justify-end"
                    >
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
                            class="mdi mdi-close btn-close mx-1"
                        ></span>
                    </div>

                    <button
                        @click="popupVisible = !popupVisible"
                        style="width: 12%"
                    >
                        {{ $t('Đính kèm') }} ({{
                            typeof this.YeuCauMuaHang.tenFileBanVes ===
                            'undefined'
                                ? 0
                                : this.YeuCauMuaHang.tenFileBanVes.length
                        }})
                    </button>
                    <popup
                        :showPopup="popupVisible"
                        :showTitle="true"
                        :closeOut="false"
                        :title="$t('Đính kèm')"
                        width="30%"
                    >
                        <template #main>
                            <div>
                                <DxSelectBox
                                    :items="YeuCauMuaHang.tenFileBanVes"
                                    styling-mode="outlined"
                                    @selectionChanged="selectFile"
                                    :useItemTextAsTitle="true"
                                />
                                <div
                                    class="row justify-end"
                                    v-if="Object.keys(objFileBanVe).length > 0"
                                >
                                    <span
                                        @click="downloadFile"
                                        class="mdi mdi-download tool-file"
                                    ></span>
                                    <span
                                        @click="deleteFile"
                                        class="mdi mdi-delete tool-file"
                                    ></span>
                                </div>
                            </div>
                        </template>
                    </popup>
                </div>
                <div v-if="disable == false && allowEdit == true">
                    <DxButton
                        icon="mdi mdi-plus"
                        styling-mode="text"
                        @click="addRow"
                        hint="Thêm hàng hoá"
                    />
                </div>
            </div>
            <DxDataGrid
                id="gridContainer"
                :data-source="danhSachHangHoa"
                :show-borders="true"
                :show-column-lines="true"
                :show-row-lines="true"
                :allow-column-resizing="true"
                :column-auto-width="true"
                :hover-state-enabled="true"
                :noDataText="$t('Không có dữ liệu')"
                height="calc(100vh - 450px)"
                :ref="dataGridRefKey"
                @saved="saved"
                @editorPreparing="editorPreparing"
            >
                <DxEditing
                    :allow-updating="allowEdit"
                    :allow-deleting="allowEdit"
                    :useIcons="true"
                    :confirm-delete="false"
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
                <DxSummary>
                    <DxTotalItem
                        column="tenHangHoa_DichVu"
                        summary-type="count"
                        display-format="Tổng tiền ({0} bản ghi):"
                    />
                    <DxTotalItem
                        column="soTienTamTinh"
                        summary-type="sum"
                        display-format="{0}"
                        :valueFormat="customFormat"
                    />
                </DxSummary>
            </DxDataGrid>
        </div>
        <lichSuDuyet :ycmh="YeuCauMuaHang" />
        <div
            v-if="YeuCauMuaHang.approvalStatus === 'MustRevise'"
            class="row align-center"
        >
            <div class="mr-1" style="font-weight: bold">Ghi chú:</div>
            <div>
                {{ YeuCauMuaHang.comment }}
            </div>
        </div>
        <div
            v-if="isApprove === true"
            class="row align-center justify-space-between"
        >
            <div class="xs1" style="font-weight: bold">
                {{ $t('Ghi chú') }}:
            </div>
            <div class="box2">
                <DxTextBox
                    v-model="YeuCauMuaHang.comment"
                    styling-mode="underlined"
                />
            </div>
            <div>
                <div class="row justify-end align-center">
                    <DxButton
                        :text="$t('Không duyệt')"
                        class="mr-3"
                        type="danger"
                        icon="close"
                        styling-mode="outlined"
                        @click="khongDuyet"
                    />
                    <DxButton
                        type="success"
                        icon="check"
                        :text="$t('Phê duyệt')"
                        styling-mode="outlined"
                        @click="duyet"
                    />
                </div>
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
    DxLookup,
    DxSummary,
    DxTotalItem,
    DxEditing,
} from 'devextreme-vue/data-grid'
import { mapGetters, mapState } from 'vuex'
import DxValidator, { DxRequiredRule } from 'devextreme-vue/validator'
import DxValidationGroup from 'devextreme-vue/validation-group'
import { DxAutocomplete } from 'devextreme-vue/autocomplete'
import moment from 'moment'
import dnmh from '~/components/dnmh.vue'
import lichSuDuyet from '~/components/lichSuDuyet.vue'
import Popup from '~/components/popup.vue'

export default {
    components: {
        DxSelectBox,
        DxTextBox,
        DxDateBox,
        DxDataGrid,
        DxColumn,
        DxTotalItem,
        DxNumberBox,
        DxButton,
        DxLookup,
        DxSummary,
        DxEditing,
        DxValidator,
        DxRequiredRule,
        DxValidationGroup,
        DxAutocomplete,
        dnmh,
        lichSuDuyet,
        Popup,
    },
    data() {
        return {
            dataGridRefKey: 'datagridValid',
            formValidation: 'formValid',
            YeuCauMuaHang: {},
            loaiPhuPhi: [this.$t('Phát sinh'), this.$t('Theo tính toán')],
            disable: true,
            allowEdit: false,
            mnv: '',
            payloads: {},
            objFileBanVe: {},
            popupVisible: false,
            files: [],
        }
    },
    watch: {
        suaYeuCau: {
            handler(suaYeuCau) {
                if (suaYeuCau) {
                    this.YeuCauMuaHang = { ...suaYeuCau }
                    this.mnv = this.YeuCauMuaHang.maNhanVien
                }
            },
            immediate: true,
            deep: true,
        },
        refNumber: {
            handler(refNumber) {
                if (refNumber && this.disable == false) {
                    this.YeuCauMuaHang.soThamChieu = refNumber.soThamChieu
                    this.YeuCauMuaHang.maChiPhi = refNumber.maChiPhi
                }
            },
            immediate: true,
        },
    },
    computed: {
        ...mapState('muahang', ['listItem', 'refNumber', 'isApprove']),
        ...mapState(['projectCode', 'hangMucTrienKhai', 'userInfo']),
        ...mapGetters('muahang', ['suaYeuCau', 'danhSachHangHoa']),
        validationGroup() {
            return this.$refs[this.formValidation].instance
        },
    },
    methods: {
        addRow() {
            return this.$refs[this.dataGridRefKey].instance.addRow()
        },
        checkEdit() {
            this.disable = !this.disable
            this.allowEdit = !this.allowEdit
        },
        saved() {
            let tmpData =
                this.$refs[this.dataGridRefKey].instance.getDataSource()._items
            this.YeuCauMuaHang.yeuCauMuaHangChiTiets = tmpData
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
                        e.donGiaTamTinh !== '',
                        e.maHangMucTrienKhai !== '',
                    ])
            )
            return !conditionsArray.includes(false)
        },
        selectPhongBan(e) {
            if (e.selectedItem === null) return
            this.payloads.phongBanId = e.selectedItem.phongBanId
            this.YeuCauMuaHang.phongBan = e.selectedItem.tenPhongBan
            this.YeuCauMuaHang.phongBanId = e.selectedItem.phongBanId
            this.YeuCauMuaHang.chucVu = e.selectedItem.tenChucVu
            this.$store.dispatch('muahang/getRefNumber', this.payloads)
        },
        selectDuAn(e) {
            if (e.selectedItem === null) return
            this.payloads.maDuAn = e.selectedItem
            this.payloads.ycmhId = this.YeuCauMuaHang.id
            this.YeuCauMuaHang.maDuAn = e.selectedItem
            if (this.userInfo.listOfNhanVienPhongBan.length === 1) {
                this.payloads.phongBanId = this.userInfo.phongBanId
                this.$store.dispatch('muahang/getRefNumber', this.payloads)
            } else {
                if (typeof this.payloads.phongBanId !== 'undefined')
                    this.$store.dispatch('muahang/getRefNumber', this.payloads)
            }
            this.$store.dispatch('getHangMuc', e.selectedItem)
        },
        selectPhuPhi(e) {
            this.YeuCauMuaHang.phuPhi = e.selectedItem
        },
        selectFile(e) {
            this.objFileBanVe = {
                linkThuMucBanVeFolder: this.YeuCauMuaHang.linkThuMucBanVe,
                tenFileBanVe: e.selectedItem,
            }
        },
        handleFilesUpload() {
            let uploadedFiles = this.$refs.files.files
            for (var i = 0; i < uploadedFiles.length; i++) {
                this.files.push(uploadedFiles[i])
            }
        },
        removeFile(key) {
            this.files.splice(key, 1)
        },
        downloadFile() {
            if (
                typeof this.objFileBanVe.linkThuMucBanVeFolder ===
                    'undefined' &&
                typeof this.objFileBanVe.tenFileBanVe === 'undefined'
            )
                return
            this.$store.dispatch('muahang/downloadFile', this.objFileBanVe)
        },
        deleteFile() {
            if (
                typeof this.objFileBanVe.linkThuMucBanVeFolder ===
                    'undefined' &&
                typeof this.objFileBanVe.tenFileBanVe === 'undefined'
            )
                return
            this.$store.dispatch('muahang/deleteFile', this.objFileBanVe)
            setTimeout(() => {
                this.$store.dispatch(
                    'muahang/getEditData',
                    this.YeuCauMuaHang.id
                )
            }, 200)
        },
        clickSave() {
            let result2 = confirm('Do you want to submit?')
            let result = this.validationGroup.validate()
            let isArrEmpty = this.YeuCauMuaHang.yeuCauMuaHangChiTiets
            if (result2) {
                if (result.isValid && isArrEmpty.length > 0) {
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
                            // for (
                            //     var i = 0;
                            //     i < this.YeuCauMuaHang.duyetYCMHs.length;
                            //     i++
                            // ) {
                            //     var ct = this.YeuCauMuaHang.duyetYCMHs[i]
                            //     for (var key in ct) {
                            //         formData.append(
                            //             'duyetYCMHs[' + i + '].' + key,
                            //             ct[key]
                            //         )
                            //     }
                            // }
                            this.$store.dispatch('muahang/editData', formData)
                            this.clickClose()
                        } else {
                            this.$toast.error(
                                `Failed! Not enough information to save`
                            )
                        }
                    }, 300)
                } else {
                    this.$toast.error(`Failed! Not enough information to save`)
                }
            }
        },
        duyet() {
            if (confirm('Do you want to submit?') == true) {
                this.$store.dispatch('pheduyet/postApprove', this.YeuCauMuaHang)
                this.clickClose()
            }
        },
        khongDuyet() {
            if (confirm('Do you want to submit?') == true) {
                this.$store.dispatch('pheduyet/postRevise', this.YeuCauMuaHang)
                this.clickClose()
            }
        },
        clickClose() {
            this.$store.dispatch('pheduyet/getApprove')
            this.disable = true
            this.allowEdit = false
            this.objFileBanVe = {}
            this.$emit('invisible')
        },
        customFormat(e) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(e)
        },
        calculateAmount(e) {
            return e.soLuong * e.donGiaTamTinh
        },
        timestamp(date) {
            return moment(date).format('HH:mm DD/MM/YYYY')
        },
    },
    created() {
        this.$store.dispatch('muahang/getItems')
        this.$store.dispatch('getProjectCode')
    },
}
</script>

<style scoped>
.header {
    border: 1px solid black;
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
.box2 {
    width: 100%;
    padding-right: 16px;
}
.tool-file {
    cursor: pointer;
    font-size: 20px;
    border: 1px solid #ddd;
    padding: 0 4px;
    border-radius: 4px;
}
.btn-close {
    cursor: pointer;
    background-color: #f2f2f2;
    padding: 0 2px;
    border-radius: 4px;
}
</style>
