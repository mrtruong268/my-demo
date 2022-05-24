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
    $axios.onError((error) => {
        if (error.response.status === 401) {
            Vue.$toast.error(`Failed! Unauthorized`)
        } else {
            Vue.$toast.error(`Failed! ${error.message}`)
        }
    })
}
