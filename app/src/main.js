import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import {store} from "./store/"
import {router} from "./routes"

new Vue({
    render: function (h) {
        return h(App)
    },
    store,
    router
}).$mount('#app')
