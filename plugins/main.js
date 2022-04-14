import 'devextreme/dist/css/dx.light.css'
import Vue from 'vue'

const mixin = {
    methods: {
        clickRouter(link, param) {
            param === 'vi'
                ? this.$router.push(`/${param}` + link)
                : this.$router.push(link)
        },
    },
}

Vue.mixin(mixin)
