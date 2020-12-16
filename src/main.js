// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App'

import vueRouter from 'vue-router'
import router from './router'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(vueRouter)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	router,
	el: '#app',
	components: { App },
	template: '<App/>'
	})
