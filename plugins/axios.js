export default function ({ $axios, redirect, store }) {
    $axios.onRequest((config) => {
        if(store.state.token){
            config.headers = {
                "Accept-Encoding": 'gzip',
                "Authorization": `Bearer ${store.state.token}`, 
            }
        }else{
            redirect('/')
        }
    })
}
