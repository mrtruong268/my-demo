<template>
    <div class="main">
        <div class="header row align-center">
            <div class="xs4 container-xs" style="border-right: 1px solid black">
                <div class="row align-center">
                    <div class="mx-2">
                        <img
                            src="~assets/logo.png"
                            width="90px"
                            height="auto"
                        />
                    </div>
                    <div>
                        <p class="font-12" style="font-weight: bold">
                            CÔNG TY TNHH VIỆT NAM AUTO SOLUTIONS
                        </p>
                        <p class="font-12">
                            Thôn An Trai, xã Vân Canh, Huyện Hoài Đức, Thành phố
                            Hà Nội
                        </p>
                        <p class="font-12">MST: 0106515898</p>
                    </div>
                </div>
            </div>
            <div class="xs6 text-xs-center" style="">
                <h1>
                    PHIẾU ĐỀ NGHỊ MUA <br />
                    HÀNG HÓA,DỊCH VỤ
                </h1>
            </div>
            <div class="xs2 right-content">
                <div class="top">
                    <p>Form: VNAS-TC-MH</p>
                    <p>ĐNMH-000000</p>
                </div>
                <div class="bot">
                    <p>Khổ giấy: A4</p>
                </div>
            </div>
        </div>
        <div class="info-user header">
            <div class="row">
                <div class="xs4 mr-4">
                    <div class="row align-center justify-space-between">
                        <p>Tên:</p>
                        <DxTextBox
                            v-model="YeuCauMuaHang.tenNhanVien"
                            styling-mode="underlined"
                            :read-only="true"
                        />
                    </div>
                    <div class="row align-center justify-space-between">
                        <p>Mã nhân viên:</p>
                        <DxTextBox
                            v-model="YeuCauMuaHang.maNhanVien"
                            styling-mode="underlined"
                            :read-only="true"
                        />
                    </div>
                    <div class="row align-center justify-space-between">
                        <p>Ngày đệ trình:</p>
                        <DxDateBox
                            v-model="YeuCauMuaHang.ngayDeTrinh"
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
                            v-model="YeuCauMuaHang.ngayCanHang"
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
                            v-model="YeuCauMuaHang.chucVu"
                            styling-mode="underlined"
                            :read-only="true"
                        />
                    </div>
                    <div class="row align-center justify-space-between">
                        <p>Phòng/Ban:</p>
                        <DxTextBox
                            v-model="YeuCauMuaHang.phongBan"
                            styling-mode="underlined"
                            :read-only="true"
                        />
                    </div>
                    <div class="row align-center justify-space-between">
                        <p>Địa điểm làm việc:</p>
                        <DxTextBox
                            v-model="YeuCauMuaHang.diaDiemLamViec"
                            styling-mode="underlined"
                            :read-only="true"
                        />
                    </div>
                </div>
                <div class="xs4">
                    <div class="row align-center justify-space-between">
                        <p>Phụ phí:</p>
                        <DxTextBox
                            v-model="YeuCauMuaHang.phuPhi"
                            styling-mode="underlined"
                            :read-only="true"
                        />
                    </div>
                    <div class="row align-center justify-space-between">
                        <p>Mã dự án:</p>
                        <DxTextBox
                            v-model="YeuCauMuaHang.maDuAn"
                            styling-mode="underlined"
                            :read-only="true"
                        />
                    </div>
                    <div class="row align-center justify-space-between">
                        <p>Mã chi phí:</p>
                        <DxTextBox
                            v-model="YeuCauMuaHang.maChiPhi"
                            styling-mode="underlined"
                            :read-only="true"
                            :width="220"
                        />
                    </div>
                    <div class="row align-center justify-space-between">
                        <p>Số tham chiếu:</p>
                        <DxTextBox
                            v-model="YeuCauMuaHang.soThamChieu"
                            styling-mode="underlined"
                            :read-only="true"
                            :width="220"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-center">
            <h3 class="my-2">DANH SÁCH HÀNG HÓA, DỊCH VỤ CẦN MUA</h3>
        </div>
        <div class="mb-3">
            <DxDataGrid
                id="gridContainer"
                :data-source="YeuCauMuaHang.yeuCauMuaHangChiTiets"
                :show-column-lines="true"
                :show-borders="true"
                height="calc(100vh - 470px)"
                :remote-operations="false"
                :allow-column-resizing="true"
                :column-auto-width="true"
                :ref="dataGridRefKey"
            >
                <DxPaging :enabled="true" />
                <DxColumn
                    data-field="tenHangHoa_DichVu"
                    caption="Hàng hóa, dịch vụ"
                />
                <DxColumn data-field="model_MaHieu" caption="Mã hiệu" />
                <DxColumn data-field="xuatXu_Hang" caption="Xuất xứ" />
                <DxColumn data-field="soLuong" caption="Số lượng" />
                <DxColumn data-field="donVi" caption="Đơn vị" />
                <!-- <DxColumn
                    data-field="donGiaTamTinh"
                    caption=""
                    :format="customFormat"
                /> -->
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

        <div class="row align-center mb-1">
            <div
                class="footer-content column justify-space-between text-xs-center xs3"
            >
                <p style="text-decoration: underline">Người yêu cầu:</p>
                <div>
                    <span>{{ YeuCauMuaHang.tenNhanVien }}</span>
                    <p>
                        Thời gian:
                        <span>{{ timestamp(YeuCauMuaHang.ngayDeTrinh) }}</span>
                    </p>
                </div>
            </div>
            <div
                class="xs3"
                v-for="yc in YeuCauMuaHang.duyetYCMHs"
                :key="yc.id"
                :style="yc.approvalState === 'NVTC_DUYET' ? 'display:none' : ''"
            >
                <div
                    class="footer-content column justify-space-between text-xs-center"
                >
                    <p style="text-decoration: underline">
                        {{
                            yc.approvalState == 'TBP_DUYET'
                                ? 'Trưởng bộ phận'
                                : yc.approvalState == 'GDTC_DUYET'
                                ? 'Bộ phận tài chính'
                                : yc.approvalState == 'TGD_DUYET'
                                ? 'Ban giám đốc'
                                : yc.approvalState == 'MH_DUYET'
                                ? 'Bộ phận mua hàng'
                                : ''
                        }}:
                    </p>
                    <p>
                        {{ yc.approvalStatus == 'Approval' ? '(Approval by VNAS App)' : '' }}
                    </p>
                    <div>
                        <span>{{ yc.tenNhanVien }}</span>
                        <p>
                            Thời gian:
                            <span>{{ timestamp(yc.ngayDuyet) }}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div v-for="yc in YeuCauMuaHang.duyetYCMHs" :key="yc.id">
            <div v-if="yc.approvalStatus == 'MustRevise'">
                <p style="font-weight: bold">
                    (Lý do không duyệt:
                    <span style="font-weight: normal">{{ yc.comment }})</span>
                </p>
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
    DxPaging,
    DxEditing,
    DxSummary,
    DxTotalItem,
} from 'devextreme-vue/data-grid'
import moment from 'moment'
export default {
    props: {
        view: {
            type: Object,
            default: null,
        },
    },
    components: {
        DxSelectBox,
        DxTextBox,
        DxDateBox,
        DxDataGrid,
        DxColumn,
        DxPaging,
        DxNumberBox,
        DxButton,
        DxEditing,
        DxSummary,
        DxTotalItem,
    },
    watch: {
        view: {
            handler(view) {
                if (view) this.YeuCauMuaHang = { ...view }
            },
            deep: true,
            immediate: true,
        },
    },
    data() {
        return {
            dataGridRefKey: 'my-data-grid',
            YeuCauMuaHang: {},
        }
    },
    methods: {
        timestamp(date) {
            return moment(date).format('HH:mm DD-MM-YYYY')
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
    },
}
</script>

<style scoped>
.header {
    border: 1px solid black;
}
.border-box {
    margin: 0 auto;
}
.right-content {
    font-style: italic;
    border-left: 1px solid black;
}
.top {
    padding: 6px;
    border-bottom: 1px solid black;
}
.bot {
    padding: 6px;
}
.footer-content p {
    font-weight: bold;
}
.footer-content span {
    font-weight: normal;
}
.footer-content {
    height: 14vh;
    border: 1px solid black;
    padding: 8px;
}
</style>
