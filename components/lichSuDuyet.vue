<template>
    <div>
        <div class="row align-center mb-2">
            <div
                class="footer-content column justify-space-between text-xs-center xs3"
            >
                <p style="text-decoration: underline">Người yêu cầu:</p>
                <div>
                    <span>{{ ycmh.tenNhanVien }}</span>
                    <p>
                        Thời gian:
                        <span>{{ timestamp(ycmh.ngayDeTrinh) }}</span>
                    </p>
                </div>
            </div>

            <!-- duyetYCMHs -->

            <div v-if="ycmh.hasOwnProperty('duyetYCMHs')" class="row">
                <div
                    :class="
                        yc.approvalStatus === 'MustRevise' ? 'hide xs3' : 'xs3'
                    "
                    v-for="yc in dataDuyet"
                    :key="yc.id"
                    :style="
                        yc.approvalState === 'NVTC_DUYET'
                            ? 'display:none'
                            : yc.approvalState === 'MH_DUYET'
                            ? 'display:none'
                            : ''
                    "
                >
                    <div
                        v-if="
                            yc.approvalState === 'TBP_DUYET' &&
                            yc.approvalStatus === 'None'
                        "
                    >
                        <div class="cho-duyet row justify-center align-center">
                            <p>{{ yc.tenNhanVien }}...</p>
                        </div>
                    </div>
                    <div
                        v-else
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
                                    : yc.approvalState == 'PMH_DUYET'
                                    ? 'Bộ phận mua hàng'
                                    : ''
                            }}:
                        </p>
                        <p>
                            {{
                                yc.approvalStatus == 'Approval'
                                    ? '(Approved by VNAS App)'
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

            <!-- duyetYCMHsNoiBo -->

            <div v-else-if="ycmh.hasOwnProperty('duyetYCMHsNoiBo')" class="row">
                <div
                    :class="
                        yc.approvalStatus === 'MustRevise' ? 'hide xs3' : 'xs3'
                    "
                    v-for="yc in dataDuyet"
                    :key="yc.id"
                    :style="
                        yc.approvalState === 'NVTC_DUYET'
                            ? 'display:none'
                            : yc.approvalState === 'MH_DUYET'
                            ? 'display:none'
                            : ''
                    "
                >
                    <div
                        v-if="
                            yc.approvalState === 'TBP_DUYET' &&
                            yc.approvalStatus === 'None'
                        "
                    >
                        <div class="cho-duyet row justify-center align-center">
                            <p>{{ yc.tenNhanVien }}...</p>
                        </div>
                    </div>

                    <div
                        v-else
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
                                    : yc.approvalState == 'PMH_DUYET'
                                    ? 'Bộ phận mua hàng'
                                    : ''
                            }}:
                        </p>
                        <p>
                            {{
                                yc.approvalStatus == 'Approval'
                                    ? '(Approved by VNAS App)'
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
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    props: {
        ycmh: {
            type: Object,
            default: {},
        },
    },
    data() {
        return {
            dataDuyet: [],
        }
    },
    methods: {
        timestamp(date) {
            return moment(date).add(7, 'hours').format('HH:mm DD/MM/YYYY')
        },
    },
    beforeUpdate() {
        this.dataDuyet = []
        const dataReverse = []
        const arrTmp = this.ycmh.hasOwnProperty('duyetYCMHsNoiBo')
            ? [...this.ycmh.duyetYCMHsNoiBo]
            : [...this.ycmh.duyetYCMHs]
        for (var i = arrTmp.length - 1; i >= 0; i--) {
            const e = arrTmp[i]
            if (e.approvalStatus === 'MustRevise') return
            dataReverse.push(e)
            if (e.approvalState === 'TBP_DUYET') break
        }
        return (this.dataDuyet = dataReverse.reverse())
    },
}
</script>

<style scoped>
.footer-content p {
    font-weight: bold;
}
.footer-content span {
    font-weight: normal;
}
.footer-content {
    height: 90px;
    border: 1px solid #1a1a1a;
    padding: 8px;
}
.hide {
    display: none;
}
.cho-duyet {
    height: 90px;
    border: 1px solid #1a1a1a;
    margin: 0 auto;
}
</style>
