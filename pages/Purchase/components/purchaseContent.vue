<template>
    <div class="container">
        <div class="main">
            <h2 class="text-xs-center mb-4">{{ $t('Purchasing') }}</h2>
            <transition name="fade" appear>
                <div>
                    <div
                        class="project row align-center mb-3"
                        v-for="item in listPurchase"
                        :key="item.id"
                        :style="`border-left: 8px solid ${item.color}`"
                    >
                        <div style="border-right: 1px solid #cccccc">
                            <img :src="item.image" class="pa-3" />
                        </div>
                        <div class="pa-3">
                            <h3 class="mb-3">{{ $t(item.title) }}</h3>
                            <div class="gridBox">
                                <div
                                    v-for="sub in item.subTitle"
                                    :key="sub.id"
                                    class="chip mb-2 mr-2"
                                    @click="$router.push(sub.to)"
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
export default {
    data() {
        return {
            listPurchase: [
                {
                    id: 1,
                    title: 'PurchaseProjects',
                    image: require('~/assets/images/purchasingForProjects.svg'),
                    color: '#0986c5',
                    subTitle: [
                        {
                            id: 1,
                            des: 'PurchaseRequisition',
                            to: '/Purchase/PurchaseRequisition',
                        },
                        {
                            id: 2,
                            des: 'ProductionRequisition',
                            to: '/Purchase/PurchaseRequisition',
                        },
                    ],
                },
                {
                    id: 2,
                    title: 'PurchasingNonProjects',
                    image: require('~/assets/images/purchasingNoneProjects.svg'),
                    color: '#b5222d',
                    subTitle: [],
                },
                {
                    id: 3,
                    title: 'PurchasingApproval',
                    image: require('~/assets/images/purchasingApprove.svg'),
                    color: '#87a248',
                    subTitle: [],
                },
            ],
        }
    },
}
</script>

<style scoped>
.main {
    margin-top: 110px;
}
.main h2 {
    color: #0986c5;
    font-size: 30px;
}
.main h3 {
    font-size: 20px;
}
.project {
    border-radius: 9.6px;
    color: #0986c5;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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
    cursor: pointer;
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
    .chip {
        padding: 0;
        font-size: 14px;
        background-color: white;
        color: grey;
    }
}
</style>
