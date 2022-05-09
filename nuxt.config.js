import i18n from './config/i18n'

export default {
    target: 'static',
    router: {
        base: '/my-demo/',
    },
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
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: 'logo2.png',
            },
        ],
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
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        'nuxtjs-mdi-font',
        'nuxt-i18n',
    ],
    i18n: {
        locales: [
            {
                code: 'en',
                name: 'Eng',
                icon: 'gb.svg',
            },
            {
                code: 'vi',
                name: 'Vie',
                icon: 'vn.svg',
            },
        ],
        defaultLocale: 'en',
        vueI18n: i18n,
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root', // recommended
        },
    },
    axios: {
        baseURL: 'http://internal.vnas.com.vn:108/api',
    },
    auth: {
        strategies: {
            social: {
                scheme: 'oauth2',
                endpoints: {
                    authorization:
                        'https://internal.vnas.com.vn/identityserver',
                    token: undefined,
                    userInfo: '',
                    logout: 'https://internal.vnas.com.vn/identityserver/logout',
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
                clientId: 'PurchasingAppId',
                scope: ['openid', 'profile', 'email', 'address', 'role'],
                state: 'UNIQUE_AND_NON_GUESSABLE',
                codeChallengeMethod: '',
                responseMode: '',
                acrValues: '',
                // autoLogout: false
            },
        },
    },
    build: {},
}
