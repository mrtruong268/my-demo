<template>
    <div>
        <div class="row justify-end align-center">
            <!-- <div class="mr-2">{{ $t('Select language') }} :</div>
            <DxSelectBox
                v-model="selectedValue"
                :data-source="$i18n.locales"
                display-expr="name"
                value-expr="code"
                width="80"
                @selectionChanged="onChange(selectedValue)"
                field-template="field"
            >
                <template #field="{ data }">
                    <div class="row align-center pa-1">
                        <img
                            :src="data.icon"
                            style="width: 28px; height: 21px"
                        />
                        <DxTextBox :read-only="true" style="display: none" />
                    </div>
                </template>
            </DxSelectBox> -->
        </div>
        <div class="container">
            <div class="row justify-center align-center">
                <div class="login-image xs7 pa-4">
                    <div class="row">
                        <div class="describe xs7">
                            <img src="~assets/robot1.svg" alt="" />
                            <h3 class="pt-5 pb-4">
                                {{ $t('SOFTWARE DEVELOPED BY VNAS GROUP') }}
                            </h3>
                            <div class="font-14">
                                <p class="mb-1">{{ $t('Contact') + ' :' }}</p>
                                <p class="mb-1">
                                    {{ $t('Email') }}: info@vnas.com.vn
                                </p>
                                <p>{{ $t('Hotline') }}: +(84) 904 576 993</p>
                            </div>
                        </div>
                        <div class="login-form xs5">
                            <div>
                                <div
                                    class="text-xs-center"
                                    style="margin-bottom: 30px"
                                >
                                    <img src="~assets/logo.svg" alt="" />
                                    <h3 class="py-5">
                                        {{ $t('MANAGEMENT SOFTWARE SYSTEM') }}
                                    </h3>
                                </div>
                                <div class="mb-4">
                                    <p>Username</p>
                                    <DxTextBox
                                        stylingMode="underlined"
                                        :show-clear-button="true"
                                        v-model="login.username"
                                    />
                                </div>
                                <div>
                                    <p>Password</p>
                                    <DxTextBox
                                        :show-clear-button="true"
                                        mode="password"
                                        stylingMode="underlined"
                                        v-model="login.password"
                                    />
                                </div>
                            </div>
                            <div style="margin-top: 50px">
                                <button
                                    class="btn-login"
                                    type="submit"
                                    @click="submit"
                                >
                                    {{ $t('SIGN IN') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DxTextBox from 'devextreme-vue/text-box'
import DxButton from 'devextreme-vue/button'
import DxSelectBox from 'devextreme-vue/select-box'
import { mapState } from 'vuex'

export default {
    name: 'IndexPage',
    components: {
        DxTextBox,
        DxButton,
        DxSelectBox,
    },
    data() {
        return {
            selectedValue: '',
            login: {
                username: '',
                password: '',
            },
        }
    },
    computed: {
        ...mapState(['routeParams', 'token']),
    },
    methods: {
        onChange(e) {
            this.$store.commit('LANG_SWITCH', e)
            this.$router.replace(this.switchLocalePath(e))
        },
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
        },
    },
    watch: {
        token() {
            if (this.token !== '') this.clickRouter('')
        },
    },
    created() {
        this.selectedValue = this.$i18n.locale
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
    color: #0986c5;
    border-radius: 6px;
    padding: 20px;
}
.btn-login {
    width: 100%;
    padding: 16px 0;
    border-radius: 24px;
    background-color: #0986c5;
    border: none;
    color: white;
    cursor: pointer;
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
