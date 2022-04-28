<template>
    <div class="footer">
        <div class="split"></div>
        <div class="footer-header row justify-start">
            <div v-for="item in statusItem" :key="item.id">
                <div class="row align-center mr-5">
                    <img :src="item.image" width="28px" height="28px" />
                    <div class="info-project">
                        <p>{{ $t(item.title) }}</p>
                        <span>
                            {{ item.data.length }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-main">
            <h2>VIET NAM AUTO SOLUTIONS GROUP - ERP</h2>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {}
    },
    computed: mapState('quanly', ['statusItem']),
    created() {
        this.$store.commit('quanly/PROJECT_STATUS')
    },
}
</script>

<style scoped>
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 1;
}
.split {
    width: 100%;
    height: 6px;
    background-image: linear-gradient(90deg, #0986c5 0%, #48c0bc 100%);
}
.footer-header {
    padding: 0 24px;
    background-color: white;
}
.info-project {
    text-align: center;
    margin-left: 6px;
}
.info-project p {
    font-size: 12px;
    letter-spacing: 0.5px;
    color: #0986c5;
    font-weight: bold;
}
.info-project span {
    font-size: 20px;
    font-weight: bold;
    color: #0986c5;
}
.footer-main {
    color: white;
    text-align: center;
    background-image: linear-gradient(90deg, #0986c5 0%, #48c0bc 100%);
}
.footer-main h2 {
    padding: 8px 0;
    font-size: 18px;
}
@media only screen and (max-width: 739px) {
    .footer {
        display: block;
    }
    .split,
    .footer-main,
    .footer-header {
        display: none;
    }
}
</style>
