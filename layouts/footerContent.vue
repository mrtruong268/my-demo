<template>
    <div class="footer">
        <div class="split"></div>
        <div class="footer-header row justify-start">
            <div class="row align-center xs2">
                <img src="/ongoingIcon.svg" width="35px" height="35px" />
                <div class="info-project">
                    <p>{{ $t('Ongoing Projects') }}</p>
                    <span>
                        {{ ongoing.length }}
                    </span>
                </div>
            </div>
            <div class="row align-center xs2">
                <img src="/finishedIcon.svg" width="35px" height="35px" />
                <div class="info-project">
                    <p>{{ $t('Finished Projects') }}</p>
                    <span>
                        {{ finish.length }}
                    </span>
                </div>
            </div>
            <div class="row align-center xs2">
                <img src="/closedIcon2.svg" width="35px" height="35px" />
                <div class="info-project">
                    <p>{{ $t('Closed Projects') }}</p>
                    <span>
                        {{ closed.length }}
                    </span>
                </div>
            </div>
            <div class="row align-center xs2">
                <img src="/pendingIcon.png" width="35px" height="35px" />
                <div class="info-project">
                    <p>{{ $t('Pending Projects') }}</p>
                    <span>
                        {{ pending.length }}
                    </span>
                </div>
            </div>
        </div>
        <div class="footer-main">
            <h1>VIET NAM AUTO SOLUTIONS GROUP - ERP</h1>
        </div>
        <!-- <div class="header-mobile">
            <div class="row align-center justify-space-around">
                <div class="py-3">
                    <div class="dropdown">
                        <div
                            id="toggle"
                            class="mdi mdi-menu btn-nav"
                            @click="openNav"
                        ></div>
                        <ul class="dropdown-content">
                            <li
                                v-for="item in ChucNang"
                                :key="item.id"
                                @click="clickRouter(item.to, routeParams)"
                            >
                                {{ $t(item.title) }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="py-3">
                    <div class="mdi mdi-bell-outline btn-icon"></div>
                </div>
                <div class="py-3">
                    <div
                        class="mdi mdi-home-outline btn-icon"
                        @click="clickRouter('/', routeParams)"
                    ></div>
                </div>
                <div class="py-3">
                    <div class="mdi mdi-magnify btn-icon"></div>
                </div>
                <div class="py-3">
                    <div class="mdi mdi-dots-vertical btn-icon"></div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {}
    },
    computed: mapState(['ongoing', 'finish', 'closed', 'pending']),
    created() {
        this.$store.commit('PROJECT_STATUS')
    },
}
</script>

<style scoped>
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 2;
}
.split {
    width: 100%;
    height: 8px;
    background-image: linear-gradient(90deg, #0986c5 0%, #48c0bc 100%);
}
.footer-header {
    padding: 2px 24px;
    background-color: white;
}
.info-project {
    margin-left: 10px;
    text-align: center;
}
.info-project p {
    font-size: 12px;
    letter-spacing: 0.5px;
    color: #0986c5;
    font-weight: bold;
}
.info-project span {
    font-size: 24px;
    color: #0986c5;
}
.footer-main {
    color: white;
    text-align: center;
    background-image: linear-gradient(90deg, #0986c5 0%, #48c0bc 100%);
}
.footer-main h1 {
    padding: 12px 0;
    font-size: 20px;
}
.header-mobile {
    display: none;
}
@media only screen and (max-width: 739px) {
    .footer {
        display: block;
    }
    .split {
        display: none;
    }
    .footer-main {
        display: none;
    }
    .footer-header {
        display: none;
    }
    .btn-nav {
        color: white;
        font-size: 30px;
    }
    .list-mobile {
        margin: 0 10px;
    }
    .btn-icon {
        font-size: 28px;
        color: white;
    }
    .header-mobile {
        display: block;
        background-image: linear-gradient(180deg, #0986c5 0%, #48c0bc 100%);
    }
}
</style>
