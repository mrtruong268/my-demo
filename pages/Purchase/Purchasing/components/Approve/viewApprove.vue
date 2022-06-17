<template>
    <div>
        <div class="row justify-end">
            <div
                class="font-24 btn-tool mdi mdi-close"
                @click="clickClose"
            ></div>
        </div>
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

                    <div v-if="mnv.includes('VNASWO')">
                        <p class="font-12" style="font-weight: bold">
                            Công ty cổ phần VNAS Workshop
                        </p>
                        <p class="font-12">
                            Điểm công nghiệp Di Trạch, Di Trạch, Hoài Đức, Hà
                            Nội
                        </p>
                        <p class="font-12">MST: 0109687775</p>
                    </div>
                    <div v-else-if="mnv.includes('VNASSE')">
                        <p class="font-12" style="font-weight: bold">
                            Công ty cổ phần VNAS SERVICES
                        </p>
                        <p class="font-12">
                            Xóm 12, Thôn Hậu Ái, Xã Vân Canh, Huyện Hoài Đức,
                            Thành Phố Hà Nội
                        </p>
                        <p class="font-12">MST: 0109529056</p>
                    </div>
                    <div v-else>
                        <p class="font-12" style="font-weight: bold">
                            Công ty Cổ phần tập đoàn Việt Nam Auto Solutions
                        </p>
                        <p class="font-12">
                            Số 16, ngách 53/59/50 đường Ngọa Long, phường Minh
                            Khai, Bắc Từ Liêm, Hà Nội
                        </p>
                        <p class="font-12">MST: 0108326399</p>
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
                    <p>Số: {{ YeuCauMuaHang.id }}</p>
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
            <h3 class="my-1">DANH SÁCH HÀNG HÓA, DỊCH VỤ CẦN MUA</h3>
        </div>
        <div>
            <DxDataGrid
                id="gridContainer"
                :data-source="YeuCauMuaHang.yeuCauMuaHangChiTiets"
                :show-column-lines="true"
                :show-borders="true"
                height="calc(100vh - 500px)"
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
        <div class="row align-center mb-2">
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
                v-for="yc in YeuCauMuaHang.duyetYCMHs"
                :key="yc.id"
                :class="yc.approvalStatus !== 'Approval' ? 'hide xs3' : 'xs3'"
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
                        {{
                            yc.approvalStatus == 'Approval'
                                ? '(Approval by VNAS App)'
                                : ''
                        }}
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
        <div class="row align-center">
            <div class="xs10 row align-center">
                <h3 class="xs1">{{ $t('Ghi chú') }}:</h3>
                <DxTextBox
                    class="xs11"
                    v-model="YeuCauMuaHang.comment"
                    styling-mode="underlined"
                />
            </div>
            <div class="row justify-end align-center xs4">
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
</template>

<script>
import DxSelectBox from 'devextreme-vue/select-box'
import DxNumberBox from 'devextreme-vue/number-box'
import DxTextBox from 'devextreme-vue/text-box'
import DxDateBox from 'devextreme-vue/date-box'
import DxTextArea from 'devextreme-vue/text-area'
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
        DxTextArea,
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
                if (view) {
                    this.YeuCauMuaHang = { ...view }
                    this.mnv = this.YeuCauMuaHang.maNhanVien
                }
            },
            deep: true,
        },
    },
    data() {
        return {
            dataGridRefKey: 'my-data-grid',
            YeuCauMuaHang: {},
            mnv: '',
        }
    },
    methods: {
        duyet() {
            if (confirm('Do you want to submit?') == true) {
                this.$store.dispatch('pheduyet/postApprove', this.YeuCauMuaHang)
                this.$emit('hiddenPopup')
            }
        },
        khongDuyet() {
            if (confirm('Do you want to submit?') == true) {
                this.$store.dispatch('pheduyet/postRevise', this.YeuCauMuaHang)
                this.$emit('hiddenPopup')
            }
        },
        clickClose() {
            this.$emit('hiddenPopup')
        },
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
.btn-tool {
    background-color: #ddd;
    padding: 0 4px;
    border-radius: 50%;
    transition: all 0.2s linear 0s;
    cursor: pointer;
}
.btn-tool:hover {
    transition: all 0.2s linear 0s;
    background-color: black;
    color: #ddd;
}
.border-box {
    margin: 0 auto;
}
.right-content {
    font-style: italic;
    border-left: 1px solid black;
}
.top {
    padding: 9px;
    border-bottom: 1px solid black;
}
.bot {
    padding: 9px;
}
.footer-content p {
    font-weight: bold;
}
.footer-content span {
    font-weight: normal;
}
.footer-content {
    height: 100px;
    border: 1px solid black;
    padding: 8px;
}
.button {
    border: 1px solid black;
}
.hide {
    display: none;
}
</style>
