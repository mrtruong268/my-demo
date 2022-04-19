import i18n from './config/i18n'

export default {
    // target: 'static',
    // router: {
    //     base: '/my-demo',
    // },
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Project manager',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo2.png' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/css/style.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~plugins/main.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        'nuxtjs-mdi-font',
        'nuxt-i18n',
    ],
    i18n: {
        locales: [
            {
                code: 'en',
                name: 'Eng',
                icon: '/gb.svg',
            },
            {
                code: 'vi',
                name: 'Vie',
                icon: '/vn.svg',
            },
        ],
        defaultLocale: 'en',
        vueI18n: i18n,
        // detectBrowserLanguage: {
        //     useCookie: true,
        //     cookieKey: 'i18n_redirected',
        //     redirectOn: 'root', // recommended
        // },
    },
    router: {
        // middleware: ['auth'],
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: 'http://localhost:3000/api',
    },
    auth: {
        strategies: {
            social: {
                scheme: 'oauth2',
                endpoints: {
                    authorization: '',
                    token: undefined,
                    userInfo: '',
                    logout: '',
                },
                token: {
                    property: 'access_token',
                    type: 'Bearer',
                    maxAge: 1800,
                },
                refreshToken: {
                    property: 'refresh_token',
                    maxAge: 60 * 60 * 24 * 30,
                },
                responseType: 'token',
                grantType: 'authorization_code',
                accessType: undefined,
                redirectUri: undefined,
                logoutRedirectUri: undefined,
                clientId: 'SET_ME',
                scope: ['openid', 'profile', 'email'],
                state: 'UNIQUE_AND_NON_GUESSABLE',
                codeChallengeMethod: '',
                responseMode: '',
                acrValues: '',
                // autoLogout: false
            },
        },
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}
