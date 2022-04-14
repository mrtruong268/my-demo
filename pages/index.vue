<template>
    <div class="container">
        <transition name="fade-in" appear :duration="999">
            <div class="main-content row">
                <div class="xs8 left-content">
                    <div class="text-xs-center grid-container">
                        <div
                            class="btn-chucnang"
                            v-for="item in ChucNang"
                            :key="item.id"
                            @click="clickRouter(item.to, routeParams)"
                            :style="`border-left: 6px solid ${item.color}`"
                        >
                            <div class="row align-center justify-center">
                                <div class="info-btn">
                                    <span
                                        v-if="item.image == ''"
                                        :class="item.icon"
                                    ></span>
                                    <img v-else :src="item.image" />
                                </div>
                                <p class="font-16">
                                    {{ $t(item.title) }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="xs4 text-xs-center right-content ml-3">
                    <img src="/robot1.svg" alt="" />
                </div>
            </div>
        </transition>
        <transition name="fade-in" appear :duration="999">
            <div class="main-mobile">
                <div class="text-xs-center menu-mobile">
                    <div
                        v-for="item in ChucNang"
                        :key="item.id"
                        class="chucnang-mobile"
                    >
                        <div
                            class="icon-mobile"
                            @click="clickRouter(item.to, routeParams)"
                            :style="`background-color: ${item.color}`"
                        >
                            <span
                                v-if="item.image == ''"
                                :class="item.icon"
                            ></span>
                            <img v-else :src="item.image" />
                        </div>
                        <div class="mt-3" style="color: #00519e">
                            {{ $t(item.title) }}
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import DxButton from 'devextreme-vue/button'

export default {
    layout: 'commonLayout',
    components: { DxButton },
    data() {
        return {}
    },
    computed: mapState(['ChucNang', 'routeParams']),
    methods: {},
}
</script>

<style scoped>
.container {
    margin-top: 140px;
}
.left-content {
    background-color: white;
}
.btn-chucnang {
    padding: 20px 0;
    border-radius: 3px;
    border: 1px solid #0986c5;
    color: #0986c5;
    transition: all 0.2s linear 0s;
    background-color: white;
}
.btn-chucnang:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    color: white;
    background-color: #0986c5;
    transition: all 0.2s linear 0s;
    cursor: pointer;
}
.grid-container {
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    column-gap: 14px;
    row-gap: 16px;
}
.info-btn span {
    padding: 12px;
    font-size: 40px;
}
.info-btn img {
    width: 40px;
    height: auto;
    margin-right: 10px;
}
.right-content img {
    transform: scaleX(-1);
    width: 100%;
    height: 100%;
}
@keyframes fade {
    from {
        opacity: 0;
    }
}

.fade-in-enter-active {
    animation: fade 4s;
}

.fade-in-leave-active {
    animation: fade 4s reverse;
}
.main-mobile {
    display: none;
}
@media only screen and (max-width: 739px) {
    .container {
        margin-top: 0;
    }
    .main-content {
        display: none;
    }
    .main-mobile {
        display: block;
    }
    .menu-mobile {
        display: grid;
        grid-template-columns: 22% 22% 22%;
        justify-content: space-between;
        row-gap: 24px;
    }
    .icon-mobile {
        border-radius: 24px;
        text-align: center;
        padding: 20px;
    }
    .icon-mobile span {
        font-size: 32px;
        color: white;
    }
    .icon-mobile img {
        width: 32px;
        height: auto;
    }
}
</style>
