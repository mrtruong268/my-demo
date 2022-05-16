<template>
    <div id="main">
        <div class="header">
            <div class="container">
                <div class="row align-center justify-space-between">
                    <div>
                        <img
                            src="~assets/logo.gif"
                            width="70px"
                            height="auto"
                            class="py-2"
                            @click="clickRouter('', routeParams)"
                            style="cursor: pointer"
                        />
                    </div>
                    <div class="row justify-end align-center">
                        <div class="search">
                            <input
                                type="search"
                                :placeholder="$t('Search')"
                                class="search-box"
                            />
                            <i class="mdi mdi-magnify btn-search"></i>
                        </div>
                        <div class="notification mr-4">
                            <i
                                class="mdi mdi-bell-badge btn-drop"
                                @click="openNoti"
                            ></i>
                            <div id="myDropdown" class="notification-content">
                                <DxTabPanel
                                    :data-source="ThongBao"
                                    :selectedItem="selectedItem"
                                    :defer-rendering="false"
                                    :show-nav-buttons="true"
                                    :repaint-changes-only="true"
                                    item-title-template="title"
                                    item-template="itemTemplate"
                                >
                                    <template #title="{ data: item }">
                                        <div id="tabTitle">
                                            <p>
                                                {{ item.title }} ({{
                                                    item.data.length
                                                }})
                                            </p>
                                        </div>
                                    </template>
                                    <template #itemTemplate="{ data: item }">
                                        <div>
                                            <div
                                                v-for="e in item.data"
                                                :key="e.id"
                                                class="notification-main row align-center"
                                                @click="clickClose"
                                            >
                                                <img :src="e.image" />
                                                <div class="main-right">
                                                    <p>
                                                        {{ e.title }}
                                                    </p>
                                                    <span>{{ e.time }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </DxTabPanel>
                            </div>
                        </div>
                        <div class="user-guide mr-2">
                            <i class="mdi mdi-information btn-guide"></i>
                            <p style="color: #0986c5">{{ $t('User guide') }}</p>
                        </div>
                        <div v-if="token !== ''" class="dropdown2">
                            <div class="row">
                                <div class="icon">
                                    <i class="mdi mdi-account"></i>
                                </div>
                            </div>
                            <div class="dropdown-content2">
                                <p>{{ $t('Update avatar') }}</p>
                                <p>{{ $t('Change password') }}</p>
                                <p @click="signOut">
                                    {{ $t('Log out') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav-bar row align-center">
                <div class="row align-center">
                    <div class="dropdown ml-4">
                        <span
                            id="toggle"
                            class="mdi mdi-menu"
                            @click="openNav"
                        ></span>
                    </div>
                    <div>
                        <ul class="row list-nav">
                            <li
                                class="color-fff list-mobile px-4 py-2"
                                @click="clickRouter('', routeParams)"
                            >
                                <i class="mdi mdi-home" />
                                {{ $t('Home') }}
                            </li>
                            <li
                                class="color-fff list-mobile px-4 py-2"
                                @click="clickRouter('user', routeParams)"
                            >
                                <i class="mdi mdi-account" />
                                {{ $t('User') }}
                            </li>
                            <li
                                class="color-fff list-mobile px-4 py-2"
                                @click="clickRouter('UserGroup', routeParams)"
                            >
                                <i class="mdi mdi-account-group" />
                                {{ $t('Group') }}
                            </li>
                            <li
                                class="color-fff list-mobile px-4 py-2"
                                @click="goCategory"
                            >
                                <i class="mdi mdi-view-list" />
                                {{ $t('Category') }}
                            </li>
                            <li
                                class="color-fff list-mobile px-4 py-2"
                                @click="goDashboard"
                            >
                                <i
                                    class="mdi mdi-file-table-box-multiple-outline"
                                />
                                {{ $t('Dashboard') }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <!-- <DxSelectBox
                        v-model="selectedValue"
                        :data-source="$i18n.locales"
                        display-expr="name"
                        value-expr="code"
                        @selectionChanged="onChange(selectedValue)"
                        field-template="field"
                        class="mr-4"
                        stylingMode="underlined"
                    >
                        <template #field="{ data }">
                            <div class="row align-center pa-1">
                                <img
                                    :src="data.icon"
                                    style="width: 28px; height: 21px"
                                />
                                <p class="ml-3">
                                    {{ data.name }}
                                </p>
                                <DxTextBox style="display: none" />
                            </div>
                        </template>
                    </DxSelectBox> -->
                </div>
            </div>
        </div>
        <div id="sidebar">
            <ul>
                <li
                    v-for="item in ChucNang"
                    :key="item.id"
                    @click="clickRouter(item.to, routeParams)"
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
                            class="mdi mdi-menu btn-nav-mobile"
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
                        @click="clickRouter('', routeParams)"
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
        <div id="overlay" @click="closeOverlay"></div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import DxButton from 'devextreme-vue/button'
import DxSelectBox from 'devextreme-vue/select-box'
import DxTextBox from 'devextreme-vue/text-box'
import DxTabPanel from 'devextreme-vue/tab-panel'
import { DxScrollView } from 'devextreme-vue/scroll-view'

export default {
    components: { DxButton, DxSelectBox, DxTextBox, DxTabPanel, DxScrollView },
    data() {
        return {
            selectedValue: '',
            selectedItem: null,
        }
    },
    computed: {
        ...mapState(['ChucNang', 'ThongBao', 'routeParams', 'token']),
        ...mapGetters('quanly', ['quanLy']),
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
        openNoti() {
            let myDropdown = document.getElementById('myDropdown')
            myDropdown.classList.toggle('show')
            document.getElementById('overlay').style.display = 'block'
        },
        clickClose() {
            let myDropdown = document.getElementById('myDropdown')
            if (myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show')
            }
        },
        closeOverlay() {
            let myDropdown = document.getElementById('myDropdown')
            if (myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show')
            }
            document.getElementById('overlay').style.display = 'none'
        },
        onChange(e) {
            this.$store.commit('LANG_SWITCH', e)
            this.$router.replace(this.switchLocalePath(e))
        },
        goCategory() {
            this.$store.commit('quanly/IS_SELECTED', 'category')
            this.clickRouter('ProjectManagement', this.routeParams)
        },
        goDashboard() {
            this.clickRouter('ProjectManagement', this.routeParams)
            let newObj = {
                id: this.idv4(),
                title: 'Dashboard',
                listType: 'dashboard',
                data: [],
            }
            if (!this.quanLy.find((i) => i.listType === newObj.listType)) {
                this.$store.commit('quanly/ADD_LIST', newObj)
            }
        },
        signOut() {
            this.$store.commit('GET_TOKEN', '')
            this.clickRouter('login')
        },
    },
    created() {
        this.selectedValue = this.$i18n.locale
    },
}
</script>

<style scoped>
#overlay {
    position: fixed; /* Sit on top of the page content */
    display: none; /* Hidden by default */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
}
.header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 3;
    background-color: #c2c0bf;
}
.container {
    padding: 0 24px;
}
.search {
    margin-right: 24px;
    position: relative;
}
.search-box {
    width: 400px;
    border: none;
    border-radius: 50px;
    padding: 10px 16px;
}
.btn-search {
    border-radius: 6px;
    position: absolute;
    font-size: 24px;
    top: 5px;
    right: 10px;
    color: #cccccc;
}
.btn-login {
    color: white;
    cursor: pointer;
    padding: 10px 16px;
    border-radius: 24px;
    background-image: linear-gradient(90deg, #0986c5 0%, #48c0bc 100%);
}
.icon {
    background-color: white;
    border-radius: 50%;
    padding: 2px 6px;
}
.icon i {
    font-size: 28px;
    color: #c2c0bf;
}
.notification {
    position: relative;
    display: inline-block;
}
.notification i {
    color: white;
    font-size: 28px;
    transition: all 0.2s linear 0s;
    cursor: pointer;
}
.notification i:hover {
    color: #0986c5;
    font-size: 28px;
    transition: all 0.2s linear 0s;
    cursor: pointer;
}
.notification-content {
    display: none;
    position: absolute;
    right: 0;
    background-color: white;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 4;
    min-width: 500px;
    height: 450px;
    border-radius: 6px;
}
.notification-content p {
    color: black;
}
.notification-main {
    cursor: pointer;
    transition: all 0.2s linear 0s;
    padding: 20px 18px;
}
.notification-main:hover {
    transition: all 0.2s linear 0s;
    background-color: #f1f1f1;
}
.notification-main img {
    width: 20%;
    height: auto;
}
#tabTitle p {
    text-transform: none;
}
.main-right {
    margin-left: 20px;
}
.notification-main p {
    display: block;
    font-weight: 500;
    margin-bottom: 8px;
}
.show {
    display: block;
}
#toggle {
    cursor: pointer;
    color: white;
    font-size: 24px;
}
.btn-guide {
    color: white;
    margin-right: 8px;
    font-size: 20px;
}
.btn-search span {
    color: white;
}
.nav-bar {
    background-image: linear-gradient(90deg, #0986c5 0%, #48c0bc 100%);
}
.btn-nav-mobile {
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
    padding: 12px 16px;
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
.user-guide {
    display: flex;
    align-items: center;
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
    max-height: calc(100vh - 10rem);
    background-image: linear-gradient(90deg, #0986c5 0%, #48c0bc 100%);
    z-index: 1;
    transition: 0.5s;
    padding-top: 91px;
    overflow-y: scroll;
    bottom: 0;
}
#sidebar ul {
    position: relative;
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
>>> .dx-tabpanel-tabs {
    position: sticky;
    top: 0;
    z-index: 2;
}
</style>
