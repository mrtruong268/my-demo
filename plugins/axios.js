import Vue from 'vue'

export default function ({ $axios, redirect }) {
    $axios.onRequest((config) => {
        config.baseURL = 'http://data.vnas.com.vn:108/api'
        var accessToken = localStorage.getItem('accessToken')
        if (accessToken) {
            config.headers.common['Authorization'] = `Bearer ${accessToken}`
        } else {
            return redirect('/login')
        }
    })
    $axios.onError((error) => {
        Vue.$toast.error(`Failed! ${error.message}`)
        if (error.response.status === 401) return redirect('/login')
    })
}
