import Vue from 'vue'

export default function ({ app, $axios, redirect }) {
    $axios.onRequest((config) => {
        config.baseURL = 'http://data.vnas.com.vn:108/api'
        var accessToken = app.$cookies.get('cookieToken')
        if (accessToken) {
            config.headers.common['Authorization'] = `Bearer ${accessToken}`
        } else {
            return redirect('/login')
        }
    })
    $axios.onResponse((response) => {
        if (response.data.success === false || response.data.status === false) {
            Vue.$toast.error(response.data.message)
        } else if (response.config.method !== 'get') {
            if (response.data.success === true || response.data.status === true)
                Vue.$toast.success(response.data.message)
        }
    })
    $axios.onError((error) => {
        if (error.response.status === 401) {
            Vue.$toast.error(`Failed! Unauthorized`)
            app.$cookies.remove('cookieToken')
            return redirect('/login')
        } else {
            Vue.$toast.error(`Failed! ${error.message}`)
        }
    })
}
