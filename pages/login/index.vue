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
                        <div @keyup.enter="submit" class="login-form xs5">
                            <div class="column justify-space-between">
                                <div>
                                    <div style="margin-bottom: 60px">
                                        <div class="text-xs-center">
                                            <img
                                                src="~assets/logo.svg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <p class="login-info mb-3">Username</p>
                                        <DxTextBox
                                            stylingMode="outlined"
                                            :show-clear-button="true"
                                            v-model="login.username"
                                            height="44"
                                        />
                                    </div>
                                    <div>
                                        <p class="login-info my-3">Password</p>
                                        <DxTextBox
                                            stylingMode="outlined"
                                            :mode="passwordMode"
                                            v-model="login.password"
                                            height="44"
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
                                        {{ $t('LOG IN') }}
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
            selectedValue: '',
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
        ...mapState(['routeParams']),
        ...mapGetters(['isLogin']),
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
        isLogin() {
            if (this.isLogin) this.clickRouter('')
            this.$toast.success('Success!')
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
    color: rgba(0, 0, 0, 0.7);
    border-radius: 6px;
    padding: 20px;
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
}
</style>
