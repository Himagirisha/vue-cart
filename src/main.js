import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'
import store from './store'

let app=createApp(App)


app.use(store)
app.use(router)
app.mount('#app')
