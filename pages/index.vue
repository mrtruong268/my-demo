<template>
    <div>
        <div class="main-content row">
            <div class="left-content xs8">
                <div class="container">
                    <div class="grid-container">
                        <div
                            class="btn-chucnang"
                            v-for="item in ChucNang"
                            :key="item.id"
                            @click="clickTo(item)"
                            :style="`border-left: 4px solid ${item.color}`"
                        >
                            <div class="row align-center">
                                <div class="info-btn">
                                    <img :src="item.image" />
                                </div>
                                <div>
                                    <p class="font-16">
                                        {{ $t(item.title) }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-content xs4">
                <img src="~assets/robot1.svg" alt="" />
            </div>
        </div>
        <div class="main-mobile">
            <div class="container">
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
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import DxButton from 'devextreme-vue/button'

export default {
    layout: 'commonLayout',
    components: { DxButton },
    middleware({ app, redirect }) {
        let cookieToken = app.$cookies.get('cookieToken')
        if (cookieToken == null) return redirect('/login')
    },
    computed: {
        ...mapState(['ChucNang', 'routeParams']),
    },
    methods: {
        clickTo(item) {
            if (item.title === '1Office') {
                window.open('https://hrvnas.1office.vn/')
            } else if (item.title === 'Quản lý dự án') {
                window.open('https://data.vnas.com.vn/')
            } else {
                this.clickRouter(item.to, this.routeParams)
            }
        },
    },
}
</script>

<style scoped>
.left-content {
    background-color: white;
}
.btn-chucnang {
    border-radius: 3px;
    padding: 20px 24px 20px 30px;
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
    margin-top: 100px;
    row-gap: 16px;
}
.info-btn span {
    padding: 12px;
    font-size: 40px;
}
.info-btn img {
    width: auto;
    height: 60px;
    margin-right: 10px;
}
.main-content {
    position: relative;
    overflow: hidden;
    height: 100vh;
}
.right-content {
    position: absolute;
    overflow: hidden;
    height: 100%;
    top: 100px;
    right: 0;
}
.right-content img {
    transform: scaleX(-1);
    height: 100%;
}
.main-mobile {
    display: none;
}
@media only screen and (max-width: 739px) {
    .grid-container {
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
