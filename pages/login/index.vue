<template>
    <div>
        <div class="container">
            <div class="row justify-center align-center">
                <div class="login-image xs7 pa-4">
                    <div class="row">
                        <div class="describe xs7">
                            <img src="~assets/robot1.svg" alt="" />
                            <h3 class="pt-5 pb-4">
                                {{
                                    $t(
                                        'PHẦN MỀM ĐƯỢC PHÁT TRIỂN BỞI VNAS GROUP'
                                    )
                                }}
                            </h3>
                            <div class="font-14">
                                <p class="mb-1">
                                    {{ $t('Các kênh hỗ trợ') + ' :' }}
                                </p>
                                <p class="mb-1">
                                    {{ $t('Email') }}: info@vnas.com.vn
                                </p>
                                <p>
                                    {{ $t('Đường dây nóng') }}: +(84) 904 576
                                    993
                                </p>
                            </div>
                        </div>
                        <div @keyup.enter="submit" class="login-form xs5">
                            <div class="column justify-space-between">
                                <div>
                                    <div>
                                        <div class="text-xs-center">
                                            <img
                                                src="~assets/logo.svg"
                                                alt=""
                                            />
                                            <h3 class="my-5">
                                                {{
                                                    $t(
                                                        'HỆ THỐNG PHẦN MỀM QUẢN LÝ'
                                                    )
                                                }}
                                            </h3>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="login-info mb-3">
                                            {{ $t('Tài khoản') }}
                                        </p>
                                        <DxTextBox
                                            stylingMode="filled"
                                            :show-clear-button="true"
                                            v-model="login.username"
                                        />
                                    </div>
                                    <div>
                                        <p class="login-info my-3">
                                            {{ $t('Mật khẩu') }}
                                        </p>
                                        <DxTextBox
                                            stylingMode="filled"
                                            :mode="passwordMode"
                                            v-model="login.password"
                                            :show-clear-button="true"
                                        >
                                            <DxTextBoxButton
                                                :options="passwordButton"
                                                name="password"
                                                location="after"
                                            />
                                            <DxTextBoxButton name="clear" />
                                        </DxTextBox>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        class="btn-login"
                                        type="submit"
                                        @click="submit"
                                    >
                                        {{ $t('Đăng nhập') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { DxButton as DxTextBoxButton, DxTextBox } from 'devextreme-vue/text-box'
import DxButton from 'devextreme-vue/button'
import DxSelectBox from 'devextreme-vue/select-box'
import { mapState, mapGetters } from 'vuex'

export default {
    components: {
        DxTextBox,
        DxButton,
        DxSelectBox,
        DxTextBoxButton,
    },
    data() {
        return {
            passwordMode: 'password',
            passwordButton: {
                icon: 'mdi mdi-eye',
                type: 'icon',
                onClick: () => {
                    this.passwordMode =
                        this.passwordMode === 'text' ? 'password' : 'text'
                },
            },
            login: {
                username: '',
                password: '',
            },
        }
    },
    computed: {
        ...mapGetters(['isLogin']),
    },
    methods: {
        submit() {
            let form = {
                client_id: 'PurchasingAppAccount',
                client_secret: 'pr1234!',
                grant_type: 'password',
                scope: 'roleapi',
                username: this.login.username,
                password: this.login.password,
            }
            const formData = new FormData()
            Object.keys(form).forEach((e) => {
                formData.append(e, form[e])
            })
            this.$store.dispatch('login', formData)
            this.signIn()
        },
        signIn() {
            if (this.$cookies.get('cookieToken')) {
                this.clickRouter('')
                this.$toast.success('Login successful!')
            }
        },
    },
    watch: {
        isLogin() {
            this.signIn()
        },
    },
}
</script>

<style scoped>
.login-image {
    background-image: linear-gradient(0deg, #0986c5 0%, #48c0bc 100%);
    border-radius: 6px;
    color: white;
}
.describe img {
    width: 100%;
    height: auto;
}
.login-form {
    background-color: white;
    color: rgba(0, 0, 0, 0.7);
    border-radius: 6px;
    padding: 20px;
}
.login-form img {
    max-width: 100%;
    height: auto;
}
.login-info {
    color: #999999;
}
.btn-login {
    width: 100%;
    padding: 14px 0;
    border-radius: 4px;
    background-color: #0986c5;
    border: none;
    color: white;
    cursor: pointer;
}
>>> .dx-texteditor-buttons-container {
    margin-right: 6px;
}
@media only screen and (max-width: 739px) {
    .describe {
        display: none;
    }
    .login-image {
        flex-basis: 100%;
        max-width: 100%;
    }
    .login-form {
        flex-basis: 100%;
        max-width: 100%;
    }
    .captcha {
        margin-bottom: 32px;
    }
    .btn-login {
        margin-top: 40px;
    }
}
</style>
