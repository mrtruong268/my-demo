import i18n from './config/i18n'

export default {
    target: 'static',
    router: {
        base: '/my-demo',
    },
    publicRuntimeConfig: {
        BASE_URL: '/my-demo',
    },
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
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
        '@nuxtjs/auth-next',
        'nuxtjs-mdi-font',
        'nuxt-i18n',
    ],
    i18n: {
        locales: [
            {
                code: 'en',
                name: 'Eng',
            },
            {
                code: 'vi',
                name: 'Vie',
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
    router: {
        // middleware: ['auth'],
    },
    fontawesome: {
        icons: {
            solid: true,
            brands: true,
        },
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '',
    },
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: 'https://reqres.in/api/login',
                        method: 'post',
                    },
                    logout: { url: '/api/auth/logout', method: 'post' },
                    user: {
                        url: 'https://reqres.in/api/users',
                        method: 'get',
                    },
                },
                token: {
                    property: 'token',
                    global: true,
                    // required: true,
                    // type: 'Bearer'
                },
                user: {
                    // property: 'user',
                    property: false,
                    autoFetch: true,
                },
            },
        },
        redirect: {
            login: '/login',
            logout: '/login',
            callback: '/login',
            home: '/',
        },
    },
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}
