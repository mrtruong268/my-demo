<template>
    <div>
        <div class="info-user header">
            <div class="row">
                <div class="xs4 mr-4">
                    <div class="row align-center justify-space-between">
                        <p>Tên:</p>
                        <DxTextBox
                            v-model="yeuCauMuaHang.tenNhanVien"
                            styling-mode="underlined"
                            :read-only="true"
                        />
                    </div>
                    <div class="row align-center justify-space-between">
                        <p>Mã nhân viên:</p>
                        <DxTextBox
                            v-model="yeuCauMuaHang.maNhanVien"
                            styling-mode="underlined"
                            :read-only="true"
                        />
                    </div>
                    <div class="row align-center justify-space-between">
                        <p>Ngày đệ trình:</p>
                        <DxDateBox
                            v-model="yeuCauMuaHang.ngayDeTrinh"
                            displayFormat="dd/MM/yyyy"
                            :use-mask-behavior="true"
                            validationMessageMode="always"
                            styling-mode="underlined"
                            :read-only="true"
                        />
                    </div>
                    <div class="row align-center justify-space-between">
                        <p>Ngày giao hàng:</p>
                        <DxDateBox
                            v-model="yeuCauMuaHang.ngayCanHang"
                            displayFormat="dd/MM/yyyy"
                            :use-mask-behavior="true"
                            validationMessageMode="always"
                            styling-mode="underlined"
                            :read-only="true"
                        />
                    </div>
                </div>
                <div class="xs4 mr-4">
                    <div class="row align-center justify-space-between">
                        <p>Chức vụ:</p>
                        <DxTextBox
                            v-model="yeuCauMuaHang.chucVu"
                            styling-mode="underlined"
                            :read-only="true"
                        />
                    </div>
                    <div class="row align-center justify-space-between">
                        <p>Phòng/Ban:</p>
                        <DxTextBox
                            v-model="yeuCauMuaHang.phongBan"
                            styling-mode="underlined"
                            :read-only="true"
                        />
                    </div>
                    <div class="row align-center justify-space-between">
                        <p>Địa điểm làm việc:</p>
                        <DxTextBox
                            v-model="yeuCauMuaHang.diaDiemLamViec"
                            styling-mode="underlined"
                            :read-only="true"
                        />
                    </div>
                </div>
                <div class="xs4">
                    <div class="row align-center justify-space-between">
                        <p v-if="yeuCauMuaHang.hasOwnProperty('duyetYCMHs')">
                            Phụ phí:
                        </p>
                        <p v-else>Chi phí</p>
                        <DxTextBox
                            v-model="yeuCauMuaHang.phuPhi"
                            styling-mode="underlined"
                            :read-only="true"
                        />
                    </div>
                    <div
                        class="row align-center justify-space-between"
                        v-if="yeuCauMuaHang.hasOwnProperty('duyetYCMHs')"
                    >
                        <p>Mã dự án:</p>
                        <DxTextBox
                            v-model="yeuCauMuaHang.maDuAn"
                            styling-mode="underlined"
                            :read-only="true"
                        />
                    </div>
                    <div class="row align-center justify-space-between">
                        <p>Mã chi phí:</p>
                        <DxTextBox
                            v-model="yeuCauMuaHang.maChiPhi"
                            styling-mode="underlined"
                            :read-only="true"
                            :width="220"
                        />
                    </div>
                    <div class="row align-center justify-space-between">
                        <p>Số tham chiếu:</p>
                        <DxTextBox
                            v-model="yeuCauMuaHang.soThamChieu"
                            styling-mode="underlined"
                            :read-only="true"
                            :width="220"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div>
            <DxDataGrid
                id="gridContainer"
                :data-source="
                    yeuCauMuaHang.hasOwnProperty('duyetYCMHs')
                        ? yeuCauMuaHang.yeuCauMuaHangChiTiets
                        : yeuCauMuaHang.yeuCauMuaHangNoiBoChiTiets
                "
                :show-borders="true"
                :show-column-lines="true"
                :show-row-lines="true"
                :allow-column-resizing="true"
                :column-auto-width="true"
                :hover-state-enabled="true"
                height="calc(100vh - 450px)"
            >
                <DxColumn
                    data-field="tenHangHoa_DichVu"
                    caption="Hàng hóa, dịch vụ"
                />
                <DxColumn data-field="model_MaHieu" caption="Mã hiệu" />
                <DxColumn data-field="xuatXu_Hang" caption="Xuất xứ" />
                <DxColumn data-field="soLuong" caption="Số lượng" />
                <DxColumn data-field="donVi" caption="Đơn vị" />
                <DxColumn
                    data-field="donGiaTamTinh"
                    :caption="$t('Đơn giá')"
                    :format="customFormat"
                />
                <DxColumn
                    data-field="soTienTamTinh"
                    caption="Số tiền tạm tính"
                    :format="customFormat"
                    :calculate-cell-value="calculateAmount"
                />
                <DxColumn
                    data-field="maHangMucTrienKhai"
                    caption="Mã hạng mục triển khai"
                />
                <DxColumn data-field="ghiChu" caption="Ghi chú" width="250" />
                <DxSummary>
                    <DxTotalItem
                        column="tenHangHoa_DichVu"
                        summary-type="count"
                        display-format="Tổng tiền:"
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
        <lichSuDuyet :ycmh="yeuCauMuaHang" />
        <div class="row align-center justify-space-between">
            <div class="xs1" style="font-weight: bold">
                {{ $t('Ghi chú') }}:
            </div>
            <div class="box2">
                <DxTextBox
                    v-model="yeuCauMuaHang.comment"
                    styling-mode="underlined"
                />
            </div>
            <div>
                <div class="row justify-end align-center">
                    <DxButton
                        class="mr-3"
                        type="danger"
                        icon="close"
                        :text="$t('Không duyệt')"
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
import DxTextBox from 'devextreme-vue/text-box'
import DxDateBox from 'devextreme-vue/date-box'
import DxButton from 'devextreme-vue/button'
import {
    DxDataGrid,
    DxColumn,
    DxSummary,
    DxTotalItem,
} from 'devextreme-vue/data-grid'
export default {
    props: {
        item: {
            type: Object,
            default: {},
        },
    },
    data() {
        return {
            yeuCauMuaHang: {},
        }
    },
    watch: {
        item: {
            handler(item) {
                if (item) this.yeuCauMuaHang = { ...item }
            },
            deep: true,
            immediate: true,
        },
    },
    components: {
        DxTextBox,
        DxDateBox,
        DxButton,
        DxDataGrid,
        DxColumn,
        DxSummary,
        DxTotalItem,
    },
    methods: {
        customFormat(e) {
            return new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            }).format(e)
        },
        calculateAmount(e) {
            return e.soLuong * e.donGiaTamTinh
        },
        closePopup() {
            this.$emit('close')
        },
        duyet() {
            if (confirm('Do you want to submit?') == true) {
                if (this.yeuCauMuaHang.hasOwnProperty('duyetYCMHs')) {
                    this.$store.dispatch(
                        'pheduyet/postApprove',
                        this.yeuCauMuaHang
                    )
                } else {
                    this.$store.dispatch(
                        'pheduyet/postApproveNp',
                        this.yeuCauMuaHang
                    )
                }
                this.closePopup()
            }
        },
        khongDuyet() {
            if (confirm('Do you want to submit?') == true) {
                if (this.yeuCauMuaHang.hasOwnProperty('duyetYCMHs')) {
                    this.$store.dispatch(
                        'pheduyet/postRevise',
                        this.yeuCauMuaHang
                    )
                } else {
                    this.$store.dispatch(
                        'pheduyet/postReviseNp',
                        this.yeuCauMuaHang
                    )
                }
                this.closePopup()
            }
        },
    },
}
</script>

<style scoped>
.box2 {
    width: 100%;
    padding-right: 16px;
}
</style>
