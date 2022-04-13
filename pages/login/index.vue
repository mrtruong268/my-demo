<template>
    <form @submit.prevent="submit">
        <div class="container">
            <div class="row justify-center align-center">
                <div class="login-image xs7 pa-4">
                    <div class="row">
                        <div class="describe xs7">
                            <img src="/robot1.svg" alt="" />
                            <h3 class="pt-5 pb-4 font-16">
                                PHẦN MỀM ĐƯỢC PHÁT TRIỂN BỞI VNAS GROUP
                            </h3>
                            <div class="font-14">
                                <p class="mb-1">Các kênh hỗ trợ :</p>
                                <p class="mb-1">Email: info@vnas.com.vn</p>
                                <p>Hotline: +(84) 904 576 993</p>
                            </div>
                        </div>
                        <div class="login-form xs5">
                            <div class="column justify-space-between">
                                <div>
                                    <img
                                        src="/logo.svg"
                                        alt=""
                                    />
                                    <h3 class="py-5">
                                        HỆ THỐNG PHẦN MỀM QUẢN LÝ
                                    </h3>
                                    <div class="pb-4">
                                        <DxTextBox
                                            placeholder="Username"
                                            stylingMode="underlined"
                                            :show-clear-button="true"
                                            v-model="login.email"
                                        />
                                    </div>
                                    <div>
                                        <DxTextBox
                                            :show-clear-button="true"
                                            mode="password"
                                            placeholder="Password"
                                            stylingMode="underlined"
                                            v-model="login.password"
                                        />
                                    </div>
                                    <div class="pt-5">
                                        <div class="captcha pt-3">
                                            <DxTextBox
                                                placeholder="Type captcha code"
                                                stylingMode="underlined"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button class="btn-login" type="submit">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import DxTextBox from 'devextreme-vue/text-box'
import DxButton from 'devextreme-vue/button'

export default {
    name: 'IndexPage',
    components: {
        DxTextBox,
        DxButton,
    },
    data() {
        return {
            login: {
                email: '',
                password: '',
            },
        }
    },

    methods: {
        async submit() {
            try {
                let res = await this.$auth.loginWith('local', {
                    data: {
                        email: this.login.email,
                        password: this.login.password,
                    },
                })
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
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
.login-form {
    background-color: white;
    color: #0986c5;
    border-radius: 6px;
    text-align: center;
    padding: 20px;
}
.btn-login {
    width: 100%;
    height: 36px;
    border-radius: 4px;
    background-color: #0986c5;
    border: none;
    color: white;
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
}
</style>
