export default function ({ $axios, redirect, store }) {
    $axios.onRequest((config) => {
        config.baseURL = 'http://data.vnas.com.vn:108/api'
        if (store.state.token) {
            config.headers.common[
                'Authorization'
            ] = `Bearer ${store.state.token}`
        } else {
            return redirect('/login')
        }
    })
}
