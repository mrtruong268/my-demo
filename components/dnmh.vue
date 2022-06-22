<template>
    <div class="header row align-center">
        <div class="xs4 container-xs" style="border-right: 1px solid black">
            <div class="row align-center">
                <div class="mx-2">
                    <img src="~assets/logo.png" width="90px" height="auto" />
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
                <div v-else>
                    <p class="font-12" style="font-weight: bold">
                        Công ty TNHH Việt Nam Auto Solutions
                    </p>
                    <p class="font-12">
                        Thôn An Trai, Xã Vân Canh, Huyện Hoài Đức, TP Hà Nội
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
                <p>ĐNMH-{{ ycmh.id }}</p>
            </div>
            <div class="bot">
                <p>Khổ giấy: A4</p>
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
