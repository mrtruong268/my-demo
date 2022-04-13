<template>
    <div>
        <div class="header">
            <div class="container">
                <div class="row align-center">
                    <div @click="$router.push('/')" class="xs3">
                        <img
                            :src="`${$config.BASE_URL}/images/logo.svg`"
                            width="100px"
                            height="100%"
                            class="header-image py-2"
                        />
                    </div>
                    <div class="xs6 row">
                        <input
                            type="search"
                            :placeholder="$t('Search')"
                            class="search-box"
                        />
                        <div class="btn-search">
                            <span class="mdi mdi-magnify"></span>
                        </div>
                    </div>
                    <div class="xs3 row justify-end align-center">
                        <div class="row align-center justify-end">
                            <i class="mdi mdi-information btn-guide"></i>
                            <p style="color: #00679b">{{ $t('userGuide') }}</p>
                        </div>
                        <div class="dropdown2">
                            <div class="row">
                                <div class="icon">
                                    <i class="mdi mdi-account"></i>
                                </div>
                            </div>
                            <div class="dropdown-content2">
                                <p>{{ $t('updateAvatar') }}</p>
                                <p>{{ $t('changePassword') }}</p>
                                <p @click="$router.push('/login')">
                                    {{ $t('LogOut') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav-bar row">
                <div class="row align-center">
                    <div class="dropdown ml-4 mr-3">
                        <div
                            id="toggle"
                            class="mdi mdi-menu btn-nav"
                            @click="openNav"
                        ></div>
                    </div>
                    <div>
                        <ul class="row list-nav">
                            <li
                                v-for="nav in NavBar"
                                :key="nav.id"
                                @click="$router.push(nav.to)"
                                class="color-fff list-mobile px-4 py-2"
                            >
                                {{ $t(nav.title) }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <DxSelectBox
                        v-model="selectedValue"
                        :data-source="$i18n.locales"
                        display-expr="name"
                        value-expr="code"
                        :value="$i18n.locales[0].code"
                        width="80"
                        @selectionChanged="onChange(selectedValue)"
                    />
                </div>
            </div>
        </div>
        <div id="sidebar">
            <ul>
                <li
                    v-for="item in ChucNang"
                    :key="item.id"
                    @click="$router.push(item.to)"
                >
                    {{ $t(item.title) }}
                </li>
            </ul>
        </div>
        <div class="header-mobile">
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
                                @click="$router.push(item.to)"
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
                        @click="$router.push('/')"
                    ></div>
                </div>
                <div class="py-3">
                    <div class="mdi mdi-magnify btn-icon"></div>
                </div>
                <div class="py-3">
                    <div class="mdi mdi-dots-vertical btn-icon"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import DxButton from 'devextreme-vue/button'
import DxSelectBox from 'devextreme-vue/select-box'

export default {
    components: { DxButton, DxSelectBox },
    data() {
        return {
            NavBar: [
                {
                    id: 1,
                    title: 'Home',
                    to: '/',
                },
                {
                    id: 2,
                    title: 'Category',
                    to: '/',
                },
                {
                    id: 3,
                    title: 'User',
                    to: '/',
                },
                {
                    id: 4,
                    title: 'Dashboard',
                    to: '/',
                },
            ],
            selectedValue: '',
        }
    },
    computed: {
        ...mapState(['ChucNang', 'routeParams']),
    },
    methods: {
        openNav() {
            let toggle = document.getElementById('toggle')
            let sidebar = document.getElementById('sidebar')
            document.onclick = function (e) {
                if (e.target.id !== 'sidebar' && e.target.id !== 'toggle') {
                    toggle.classList.remove('active')
                    sidebar.classList.remove('active')
                }
            }
            toggle.classList.toggle('active')
            sidebar.classList.toggle('active')
        },
        onChange(e) {
            this.$store.commit('LANG_SWITCH', e)
            this.$router.replace(this.switchLocalePath(e))
        },
    },
    created() {
        this.selectedValue = this.$i18n.locale
    },
}
</script>

<style scoped>
.header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 2;
    background-color: #c2c0bf;
}
.container {
    padding: 0 24px;
}
.header img {
    cursor: pointer;
}
.search-box {
    width: 100%;
    border: none;
    border-radius: 6px;
    padding: 12px 16px;
    position: relative;
}
.btn-search {
    background-color: #0e8096;
    border-radius: 6px;
    position: absolute;
    padding: 8px 10px;
    top: 3px;
    right: 3px;
}
.icon {
    background-color: white;
    border-radius: 50%;
    padding: 2px 6px;
}
.icon i {
    font-size: 36px;
    color: #c2c0bf;
}
#toggle {
    cursor: pointer;
}
.btn-guide {
    color: white;
    margin-right: 8px;
    font-size: 28px;
}
.btn-search span {
    color: white;
}
.nav-bar {
    background-image: linear-gradient(90deg, #0986c5 0%, #48c0bc 100%);
}
.btn-nav {
    color: white;
    font-size: 30px;
}
.dropdown {
    position: relative;
    display: inline-block;
}
.dropdown-content {
    display: none;
    position: absolute;
    background-image: linear-gradient(0deg, #0986c5 0%, #48c0bc 100%);
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    top: 32px;
    z-index: 2;
    max-height: calc(100vh - 9rem);
}
.dropdown-content li {
    color: white;
    padding: 10px 16px;
    text-decoration: none;
    display: block;
    cursor: pointer;
    transition: all 0.2s linear 0s;
}
.dropdown-content li:hover {
    background-color: #ddd;
    color: #0986c5;
    transition: all 0.2s linear 0s;
}
.dropdown:hover .dropdown-content {
    display: none;
}

.list-nav li {
    cursor: pointer;
    transition: all 0.2s linear 0s;
    font-weight: bold;
}
.list-nav li:hover {
    background-color: #ddd;
    color: #0986c5;
    transition: all 0.2s linear 0s;
}
.dropdown2 {
    position: relative;
    display: inline-block;
    margin-left: 16px;
}
.dropdown-content2 {
    display: none;
    position: absolute;
    background-image: linear-gradient(0deg, #0986c5 0%, #48c0bc 100%);
    min-width: 190px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    right: 0;
    z-index: 2;
}
.dropdown-content2 p {
    color: white;
    padding: 20px 16px;
    text-decoration: none;
    display: block;
    transition: all 0.2s linear 0s;
    cursor: pointer;
}
.dropdown-content2 p:hover {
    background-color: #ddd;
    transition: all 0.2s linear 0s;
    color: #0986c5;
}
.dropdown2:hover .dropdown-content2 {
    display: block;
}
#sidebar {
    position: fixed;
    top: 0;
    left: -240px;
    width: 240px;
    max-height: calc(100vh - 9rem);
    background-image: linear-gradient(90deg, #0986c5 0%, #48c0bc 100%);
    z-index: 1;
    transition: 0.5s;
    padding-top: 100px;
    overflow-y: scroll;
    bottom: 0;
}
#sidebar ul {
    position: relative;
    margin-top: 18px;
}
#sidebar ul li {
    border-bottom: 1px solid #cccccc;
    padding: 20px;
    letter-spacing: 1.5px;
    text-decoration: none;
    font-size: 16px;
    color: white;
    display: block;
    transition: 0.5s;
}
#sidebar ul li:hover {
    background-color: white;
    color: #0986c5;
    cursor: pointer;
}
#sidebar.active {
    left: 0px;
}
/* width */
::-webkit-scrollbar {
    width: 5px;
}
/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
    background: #48c0bc;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #0986c5;
}
.header-mobile {
    display: none;
}
@media only screen and (max-width: 739px) {
    .header {
        display: none;
    }
    .btn-icon {
        font-size: 28px;
        color: white;
    }
    .header-mobile {
        display: block;
        background-image: linear-gradient(180deg, #0986c5 0%, #48c0bc 100%);
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
    .list-mobile {
        margin: 0 10px;
    }
    #sidebar {
        display: none;
    }
}
</style>
