<template>
    <div class="header row align-center">
        <div class="xs4">
            <div class="row align-center justify-center px-2">
                <div class="mr-2">
                    <img src="~assets/logo.png" width="60px" height="auto" />
                </div>
                <div v-if="maNhanVien.includes('VNASWO')">
                    <p class="font-12" style="font-weight: bold">
                        Công ty cổ phần VNAS Workshop
                    </p>
                    <p class="font-12">
                        Điểm công nghiệp Di Trạch, Di Trạch, Hoài Đức, Hà Nội
                    </p>
                    <p class="font-12">MST: 0109687775</p>
                </div>
                <div v-else-if="maNhanVien.includes('VNASSE')">
                    <p class="font-12" style="font-weight: bold">
                        Công ty cổ phần VNAS Services
                    </p>
                    <p class="font-12">
                        Xóm 12, Thôn Hậu Ái, Xã Vân Canh, Huyện Hoài Đức, Thành
                        Phố Hà Nội
                    </p>
                    <p class="font-12">MST: 0109529056</p>
                </div>
                <div v-else-if="maNhanVien.includes('VNASG')">
                    <p class="font-12" style="font-weight: bold">
                        Công ty Cổ phần tập đoàn Việt Nam Auto Solutions
                    </p>
                    <p class="font-12">
                        Số 16, ngách 53/59/50 đường Ngọa Long, phường Minh Khai,
                        Bắc Từ Liêm, Hà Nội
                    </p>
                    <p class="font-12">MST: 0108326399</p>
                </div>
                <div v-else>
                    <p class="font-12" style="font-weight: bold">
                        Công ty TNHH Việt Nam Auto Solutions
                    </p>
                    <p class="font-12">
                        Thôn An Trai, Xã Vân Canh, Huyện Hoài Đức, Thành Phố Hà
                        Nội
                    </p>
                    <p class="font-12">MST: 0106515898</p>
                </div>
            </div>
        </div>
        <div class="xs6 text-xs-center container-xs" style="border-left: 1px solid black">
            <h2>
                PHIẾU ĐỀ NGHỊ MUA <br />
                HÀNG HÓA,DỊCH VỤ
            </h2>
        </div>
        <div class="xs2 right-content">
            <div class="top">
                <p>Form: VNAS-TC-MH</p>
                <p>ĐNMH-210325</p>
            </div>
            <div class="bot">
                <p>Số: {{ ycmh.id }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        maNhanVien: {
            type: String,
            default: '',
        },
        ycmh: {
            type: Object,
            default: {},
        },
    },
}
</script>

<style scoped>
.right-content {
    font-style: italic;
    border-left: 1px solid black;
}
.top {
    padding: 5px;
    border-bottom: 1px solid black;
}
.bot {
    padding: 5px;
}
</style>
