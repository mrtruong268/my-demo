<template>
    <div>
        <div class="row justify-end align-center">
            <div class="mr-2">{{ $t('Select language') }} :</div>
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
            </DxSelectBox>
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
                                <div>
                                    <img src="~assets/logo.svg" alt="" />
                                    <h3 class="py-5">
                                        {{ $t('MANAGEMENT SOFTWARE SYSTEM') }}
                                    </h3>
                                </div>
                                <div>
                                    <button
                                        class="btn-login"
                                        type="submit"
                                        @click="submit"
                                    >
                                        {{ $t('Log in') }}
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
import DxTextBox from 'devextreme-vue/text-box'
import DxButton from 'devextreme-vue/button'
import DxSelectBox from 'devextreme-vue/select-box'
import { UserManager } from 'oidc-client'
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
            userMng: null,
        }
    },
    computed: mapState(['routeParams']),
    methods: {
        onChange(e) {
            this.$store.commit('LANG_SWITCH', e)
            this.$router.replace(this.switchLocalePath(e))
        },
        submit() {
            return this.userMng.signinRedirect()
        },
    },
    created() {
        this.selectedValue = this.$i18n.locale
        if (!process.server) {
            this.userMng = new UserManager({
                authority: 'https://internal.vnas.com.vn/identityserver',
                client_id: 'PurchasingAppId',
                redirect_uri: 'http://localhost:3000/my-demo',
                response_type: 'code',
                scope: 'openid profile email address role',
                // loadUserInfo: true
                post_logout_redirect_uri: 'http://localhost:3000/my-demo',
                // silent_redirect_uri: 'http://localhost:3000/my-demo',
            })
        }
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
