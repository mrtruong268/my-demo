<template>
    <div>
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
                        <div class="user-guide">
                            <i class="mdi mdi-information btn-guide"></i>
                            <p style="color: #00679b">{{ $t('User guide') }}</p>
                        </div>
                        <div class="dropdown2">
                            <div class="row">
                                <div class="icon">
                                    <i class="mdi mdi-account"></i>
                                </div>
                            </div>
                            <div class="dropdown-content2">
                                <p>{{ $t('Update avatar') }}</p>
                                <p>{{ $t('Change password') }}</p>
                                <p @click="clickRouter('Login', routeParams)">
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
                    <DxSelectBox
                        v-model="selectedValue"
                        :data-source="$i18n.locales"
                        display-expr="title"
                        value-expr="code"
                        @selectionChanged="onChange(selectedValue)"
                        field-template="field"
                        class="mr-4"
                        stylingMode="underlined"
                    >
                        <template #field="{ data }">
                            <div class="row align-center pa-1">
                                <img
                                    v-if="data.code === 'en'"
                                    src="~assets/gb.svg"
                                    style="width: 28px; height: 20px"
                                />
                                <img
                                    v-else-if="data.code === 'vi'"
                                    src="~assets/vn.svg"
                                    style="width: 28px; height: 20px"
                                />
                                <p class="ml-3">
                                    {{ data.name }}
                                </p>
                                <DxTextBox style="display: none" />
                            </div>
                        </template>
                    </DxSelectBox>
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
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import DxButton from 'devextreme-vue/button'
import DxSelectBox from 'devextreme-vue/select-box'
import DxTextBox from 'devextreme-vue/text-box'

export default {
    components: { DxButton, DxSelectBox, DxTextBox },
    data() {
        return {
            selectedValue: '',
        }
    },
    computed: {
        ...mapState(['ChucNang', 'routeParams']),
        ...mapGetters({
            ql: 'quanLy',
        }),
        quanLy: {
            get() {
                return this.ql
            },
            set(newItem) {
                return newItem
            },
        },
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
        goCategory() {
            this.$store.commit('IS_SELECTED', 'category')
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
                this.$store.commit('ADD_LIST', newObj)
            }
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
    font-size: 22px;
    top: 5px;
    right: 8px;
    color: #cccccc;
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
    padding-top: 104px;
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
</style>
