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

            <!-- duyetYCMHsLast -->

            <div v-if="ycmh.hasOwnProperty('duyetYCMHsLast')" class="row">
                <div v-for="yc in ycmh.duyetYCMHsLast" :key="yc.id" class="xs3">
                    <div v-if="yc.approvalStatus === 'None'" class="cho-duyet">
                        <p
                            style="
                                text-decoration: underline;
                                font-weight: bold;
                            "
                            class="text-xs-center"
                        >
                            {{ yc.vaiTroDuyet }}:
                        </p>
                        <p class="text-xs-center mt-2">
                            Chờ
                            {{ yc.tenNhanVien }} duyệt
                        </p>
                    </div>
                    <div
                        v-else
                        class="footer-content column justify-space-between text-xs-center"
                    >
                        <p
                            style="
                                text-decoration: underline;
                                font-weight: bold;
                            "
                            class="text-xs-center"
                        >
                            {{ yc.vaiTroDuyet }}:
                        </p>
                        <p>
                            {{
                                yc.approvalStatus === 'Approval'
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

            <!-- duyetYCMHsNoiBoLast -->

            <div v-if="ycmh.hasOwnProperty('duyetYCMHsNoiBoLast')" class="row">
                <div
                    v-for="yc in ycmh.duyetYCMHsNoiBoLast"
                    :key="yc.id"
                    class="xs3"
                >
                    <div v-if="yc.approvalStatus === 'None'" class="cho-duyet">
                        <p
                            style="
                                text-decoration: underline;
                                font-weight: bold;
                            "
                            class="text-xs-center"
                        >
                            {{ yc.vaiTroDuyet }}:
                        </p>
                        <p class="text-xs-center mt-2">
                            Chờ
                            {{ yc.tenNhanVien }} duyệt
                        </p>
                    </div>
                    <div
                        v-else
                        class="footer-content column justify-space-between text-xs-center"
                    >
                        <p
                            style="
                                text-decoration: underline;
                                font-weight: bold;
                            "
                            class="text-xs-center"
                        >
                            {{ yc.vaiTroDuyet }}:
                        </p>
                        <p>
                            {{
                                yc.approvalStatus === 'Approval'
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
export default {
    props: {
        ycmh: {
            type: Object,
            default: {},
        },
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
.cho-duyet {
    height: 90px;
    border: 1px solid #1a1a1a;
    padding: 8px;
}
</style>
