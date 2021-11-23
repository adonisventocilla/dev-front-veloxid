// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuelidate from 'vuelidate' // Validation package
// Style Purple
import './purple/assets/css/style.css'
import './purple/assets/vendors/css/vendor.bundle.base.css'
import './purple/assets/vendors/mdi/css/materialdesignicons.min.css'
import './purple/assets/js/off-canvas.js'
import './purple/assets/js/hoverable-collapse.js'
import './purple/assets/js/todolist.js'
import './purple/assets/js/misc.js'
import './purple/assets/js/tooltips.js'
import $ from 'jquery'
/*
import './purple/assets/vendors/js/vendor.bundle.base.js'
import './purple/assets/vendors/chart.js/Chart.min.js'
import './purple/assets/js/dashboard.js' */
Vue.config.productionTip = false

/* URL base para acceder a APIS */
Vue.prototype.$http = axios
axios.defaults.baseURL = 'https://dev-back.veloxid.xyz/api'

Vue.use(Vuelidate)

/* eslint-disable */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})