<template>
    <div class="container">
        <div class="main">
            <h2 class="text-xs-center mb-3">{{ $t('Mua hàng') }}</h2>
            <transition name="fade" appear>
                <div class="row justify-center align-stretch">
                    <div
                        v-for="item in listPurchase"
                        :key="item.id"
                        class="item-box xs2 mx-3 pa-3"
                        @click="onClick(item)"
                    >
                        <div class="image-box">
                            <img :src="item.image" class="py-3" />
                        </div>
                        <div class="mb-3">
                            <h2>
                                {{ $t(item.title) }}
                                <i class="mdi mdi-arrow-right" />
                            </h2>
                        </div>
                        {{ $t(item.about) }}
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    layout: 'commonLayout',
    data() {
        return {
            listPurchase: [
                {
                    id: 1,
                    title: 'Mua hàng',
                    image: require('assets/825575.png'),
                    about: 'Bao gồm danh sách mua hàng và tạo yêu cầu mua hàng',
                    to: 'Purchase/Project',
                },
                {
                    id: 2,
                    title: 'Báo cáo',
                    image: require('assets/Report.png'),
                    about: '',
                    to: 'Purchase/Report',
                },
            ],
        }
    },
    computed: mapState(['routeParams']),
    methods: {
        onClick(e) {
            e.id == 1
                ? this.$store.commit('IS_SELECTED', 'all')
                : this.$store.commit('IS_SELECTED', 'dsmhcm')
            this.clickRouter(e.to, this.routeParams)
        },
    },
}
</script>

<style scoped>
.main {
    margin-top: 80px;
}
.item-box {
    cursor: pointer;
    border-radius: 9.6px;
    transition: all 0.2s linear 0s;
    color: #1a1a1a;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.item-box:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    color: white;
    background-color: #0986c5;
    transition: all 0.2s linear 0s;
    cursor: pointer;
}
.image-box img {
    width: 100px;
    height: auto;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
@media only screen and (max-width: 739px) {
}
</style>
