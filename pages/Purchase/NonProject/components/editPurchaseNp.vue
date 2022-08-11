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
                                    :read-only="disable"
                                    @selectionChanged="selectPhongBan"
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
                            <p>Chi phí:</p>
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
                            <p>Mã chi phí:</p>
                            <DxTextBox
                                v-model="YeuCauMuaHang.maChiPhi"
                                styling-mode="underlined"
                                :read-only="true"
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
                <h3 class="my-2">
                    {{ $t('Danh sách hàng hóa, dịch vụ cần mua') }}
                </h3>
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
                :data-source="danhSachHangHoaNp"
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
            v-if="isApproveNp === true"
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
    DxPaging,
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

export default {
    components: {
        DxSelectBox,
        DxTextBox,
        DxDateBox,
        DxDataGrid,
        DxColumn,
        DxTotalItem,
        DxPaging,
        DxNumberBox,
        DxButton,
        DxSummary,
        DxLookup,
        DxEditing,
        DxValidator,
        DxRequiredRule,
        DxValidationGroup,
        DxAutocomplete,
        dnmh,
        lichSuDuyet,
    },
    data() {
        return {
            dataGridRefKey: 'datagridValid',
            formValidation: 'formValid',
            YeuCauMuaHang: {},
            loaiPhuPhi: [
                this.$t('VNAS Group'),
                this.$t('VNAS Solutions'),
                this.$t('VNAS Services'),
                this.$t('VNAS Workshop'),
            ],
            disable: true,
            allowEdit: false,
            mnv: '',
        }
    },
    watch: {
        suaYeuCauNp: {
            handler(suaYeuCauNp) {
                if (suaYeuCauNp) {
                    this.YeuCauMuaHang = { ...suaYeuCauNp }
                    this.mnv = this.YeuCauMuaHang.maNhanVien
                }
            },
            immediate: true,
            deep: true,
        },
        refNumberNp: {
            handler(refNumberNp) {
                if (refNumberNp) {
                    this.YeuCauMuaHang.soThamChieu = refNumberNp.soThamChieu
                    this.YeuCauMuaHang.maChiPhi = refNumberNp.maChiPhi
                }
            },
            immediate: true,
        },
    },
    computed: {
        ...mapState(['userInfo']),
        ...mapState('muahang', ['listItemNp', 'refNumberNp', 'isApproveNp']),
        ...mapGetters('muahang', ['suaYeuCauNp', 'danhSachHangHoaNp']),
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
            this.YeuCauMuaHang.yeuCauMuaHangNoiBoChiTiets = tmpData
        },
        editorPreparing(e) {
            if (e.dataField === 'tenHangHoa_DichVu') {
                e.editorName = 'dxAutocomplete'
                e.editorOptions = {
                    items: this.listItemNp,
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
        selectPhongBan(e) {
            if (e.selectedItem === null) return
            this.YeuCauMuaHang.phongBan = e.selectedItem.tenPhongBan
            this.YeuCauMuaHang.chucVu = e.selectedItem.tenChucVu
            let payloads = {
                phongBanId: e.selectedItem.phongBanId,
                ycmhId: this.YeuCauMuaHang.id,
            }
            this.$store.dispatch('muahang/getRefNumberNp', payloads)
        },
        selectPhuPhi(e) {
            this.YeuCauMuaHang.phuPhi = e.selectedItem
        },
        clickSave() {
            let result2 = confirm('Do you want to submit?')
            let result = this.validationGroup.validate()
            let isArrEmpty = this.YeuCauMuaHang.yeuCauMuaHangNoiBoChiTiets
            if (result2) {
                if (result.isValid && isArrEmpty.length > 0) {
                    setTimeout(() => {
                        if (this.checkArray()) {
                            this.$store.dispatch(
                                'muahang/editDataNp',
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
                    this.$toast.error(`Failed! Not enough information to save`)
                }
            }
        },
        duyet() {
            if (confirm('Do you want to submit?') == true) {
                this.$store.dispatch(
                    'pheduyet/postApproveNp',
                    this.YeuCauMuaHang
                )
                this.clickClose()
            }
        },
        khongDuyet() {
            if (confirm('Do you want to submit?') == true) {
                this.$store.dispatch(
                    'pheduyet/postReviseNp',
                    this.YeuCauMuaHang
                )
                this.clickClose()
            }
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
        clickClose() {
            this.$store.dispatch('pheduyet/getApproveNp')
            this.disable = true
            this.allowEdit = false
            this.$emit('invisible')
        },
    },
    created() {
        this.$store.dispatch('muahang/getItemsNp')
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
</style>
