// import 'devextreme/dist/css/dx.material.blue.light.css'
import 'devextreme/dist/css/dx.light.css'
import Vue from 'vue'
import { v4 as uuidv4 } from 'uuid'

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
    },
}

Vue.mixin(mixin)
