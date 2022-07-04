<template>
    <div class="container-md">
        <div class="footer-header row justify-space-around">
            <div
                v-for="item in statusItem"
                :key="item.id"
                class="row align-center xs3 justify-center"
            >
                <div class="info-project">
                    <p>{{ $t(item.title) }}</p>
                    <span>
                        {{ item.data.length }}
                    </span>
                    <p class="detail" @click="openDetail(item.data)">
                        {{ $t('View details') }}
                    </p>
                </div>
            </div>
            <DxPopup
                :visible="popupVisible"
                :drag-enabled="false"
                :close-on-outside-click="false"
                :show-close-button="true"
                :show-title="true"
                width="100%"
                height="100%"
                title="Details"
            >
                <statusProject :data="dataDetail" />
            </DxPopup>
        </div>
    </div>
</template>

<script>
import { DxPopup } from 'devextreme-vue/popup'
import { mapState } from 'vuex'
import statusProject from '../components/dashboard/statusProject.vue'
export default {
    components: {
        DxPopup,
        statusProject,
    },
    data() {
        return {
            popupVisible: false,
            dataDetail: null,
        }
    },
    computed: mapState('quanly', ['statusItem']),
    methods: {
        openDetail(e) {
            this.popupVisible = !this.popupVisible
            this.dataDetail = e
        },
    },
    created() {
        this.$store.commit('quanly/PROJECT_STATUS')
    },
}
</script>

<style scoped>
.footer-header {
    border: 1px solid #f2f2f2;
    padding: 24px 0;
}
.info-project {
    margin-left: 10px;
    text-align: center;
}
.info-project p {
    letter-spacing: 0.5px;
    font-weight: bold;
}
.info-project span {
    font-size: 44px;
}
.detail {
    color: #0986c5;
    text-decoration: underline;
    cursor: pointer;
}
</style>
