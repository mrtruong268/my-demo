<template>
    <div class="container">
        <div class="main">
            <h2 class="text-xs-center mb-3">{{ $t('Purchase') }}</h2>
            <transition name="fade" appear>
                <div>
                    <div
                        class="project row align-center mb-3"
                        v-for="item in listPurchase"
                        :key="item.id"
                        :style="`border-left: 6px solid ${item.color}`"
                    >
                        <div class="image">
                            <img :src="item.image" class="pa-3" />
                        </div>
                        <div class="pa-3">
                            <h3 class="mb-3">{{ $t(item.title) }}</h3>
                            <div class="gridBox">
                                <div
                                    v-for="sub in item.subTitle"
                                    :key="sub.id"
                                    class="chip mr-2"
                                    @click="onClick(sub)"
                                >
                                    {{ $t(sub.des) }}
                                </div>
                            </div>
                        </div>
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
                    title: 'Purchasing for projects',
                    image: require('assets/purchasingForProjects.svg'),
                    color: '#0986c5',
                    subTitle: [
                        {
                            id: 1,
                            des: 'Purchase requisition',
                            to: 'Purchase/Purchasing',
                            type: 'muahang',
                        },
                        {
                            id: 2,
                            des: 'Production requisition',
                            to: 'Purchase/Purchasing',
                            type: 'sanxuat',
                        },
                    ],
                },
                {
                    id: 2,
                    title: 'Purchasing for non-projects',
                    image: require('assets/purchasingNoneProjects.svg'),
                    color: '#b5222d',
                    subTitle: [
                        {
                            id: 1,
                            des: 'Purchase requisition',
                            to: 'Purchase/Purchasing',
                            type: 'muahang',
                        },
                        {
                            id: 2,
                            des: 'Production requisition',
                            to: 'Purchase/Purchasing',
                            type: 'sanxuat',
                        },
                    ],
                },
                {
                    id: 3,
                    title: 'Purchasing approval',
                    image: require('assets/purchasingApprove.svg'),
                    color: '#87a248',
                    subTitle: [
                        {
                            id: 1,
                            des: 'Approve',
                            to: 'Purchase/Purchasing',
                            type: 'pheduyet',
                        },
                    ],
                },
            ],
        }
    },
    computed: mapState(['routeParams']),
    methods: {
        onClick(e) {
            this.clickRouter(e.to, this.routeParams)
            this.$store.commit('muahang/IS_SELECTED', e.type)
        },
    },
    created() {
        let token = this.$route.query.access_token
        if (token !== '') {
            this.$cookies.set('cookieToken2', this.$route.query.access_token, {
                path: '/',
                maxAge: 60 * 60 * 24 * 7,
            })
        } else {
            return
        }
    },
}
</script>

<style scoped>
.main {
    margin-top: 80px;
}
.project {
    border-radius: 9.6px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.image {
    border-right: 1px solid #cccccc;
    text-align: center;
}
.image img {
    max-width: 100%;
    height: 100%;
}
.gridBox {
    display: flex;
    flex-wrap: wrap;
}
.project-main div {
    color: grey;
    cursor: pointer;
}
.chip {
    padding: 14px 25px;
    font-size: 16px;
    border-radius: 25px;
    background-color: #f1f1f1;
    transition: all 0.2s linear 0s;
    color: #0986c5;
    cursor: pointer;
}
.chip:hover {
    background-color: #0986c5;
    transition: all 0.2s linear 0s;
    color: #f1f1f1;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
@media only screen and (max-width: 739px) {
    .main {
        margin-top: 0;
    }
    .main h2 {
        color: #0986c5;
        font-size: 24px;
    }
    .main h3 {
        font-size: 16px;
    }
    .image img {
        max-width: 60%;
    }
    .chip {
        padding: 0;
        font-size: 14px;
        background-color: white;
        color: grey;
        margin-bottom: 4px;
    }
}
</style>
