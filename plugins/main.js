import 'devextreme/dist/css/dx.material.blue.light.css'
// import 'devextreme/dist/css/dx.light.css'
import Vue from 'vue'
import { v4 as uuidv4 } from 'uuid'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
//import 'vue-toast-notification/dist/theme-default.css';
// import { UserManager } from 'oidc-client'

const mixin = {
    methods: {
        clickRouter(link, param) {
            param === 'vi'
                ? this.$router.push(`/${param}` + `/${link}`)
                : this.$router.push(`/${link}`)
        },
        idv4() {
            return uuidv4()
        },
        // userManage() {
        //     var userMng = new UserManager({
        //         authority: 'https://internal.vnas.com.vn/identityserver',
        //         client_id: 'PurchasingJsImplicit',
        //         redirect_uri: 'http://localhost:3000/',
        //         response_type: 'token',
        //         scope: 'roleapi',
        //         post_logout_redirect_uri: 'http://localhost:3000/',
        //         // silent_redirect_uri: 'http://localhost:3000/my-demo',
        //         // userStore: new WebStorageStateStore({
        //         //     store: window.localStorage,
        //         // }),
        //     })
        //     return userMng
        // },
    },
}

const pluginArr = [VueToast]
pluginArr.forEach((e) => {
    Vue.use(e)
})
Vue.mixin(mixin)
