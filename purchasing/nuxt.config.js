import i18n from './config/i18n'

export default {
    target: 'static',
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
                href: 'logoPNG.png',
            },
        ],
    },
    loading: '~/components/loading.vue',
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/css/style.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~plugins/main', '~plugins/axios'],

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
        'cookie-universal-nuxt',
    ],
    i18n: {
        locales: [
            {
                code: 'vi',
                name: 'Vie',
                language: 'Vietnamese',
            },
            {
                code: 'en',
                name: 'Eng',
                language: 'English',
            },
        ],
        defaultLocale: 'vi',
        vueI18n: i18n,
        // detectBrowserLanguage: {
        //     useCookie: true,
        //     cookieKey: 'i18n_redirected',
        //     redirectOn: 'root', // recommended
        // },
    },
    build: {},
}
