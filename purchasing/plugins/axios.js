import Vue from 'vue'

export default function ({ app, $axios, redirect }) {
    $axios.onRequest((config) => {
        config.baseURL = 'https://data.vnas.com.vn/Purchasing/api'
        var accessToken = app.$cookies.get('cookieToken')
        if (accessToken) {
            config.headers.common['Authorization'] = `Bearer ${accessToken}`
        } else {
            return redirect('/login')
        }
    })
    $axios.onResponse((response) => {
        if (response.data.errorCode !== 404) {
            if (
                response.data.success === false ||
                response.data.status === false
            ) {
                Vue.$toast.error(response.data.message)
            } else if (response.config.method !== 'get') {
                if (
                    response.data.success === true ||
                    response.data.status === true
                )
                    Vue.$toast.success(response.data.message)
            }
        } else return
    })
    $axios.onError((error) => {
        if (error.response.status === 401) {
            app.$cookies.remove('cookieToken')
            Vue.$toast.error(`Failed! Unauthorized`)
            return redirect('/login')
        } else {
            Vue.$toast.error(`Failed! ${error.message}`)
        }
    })
}
