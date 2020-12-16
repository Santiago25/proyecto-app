import vueRouter from 'vue-router'
import Proyectos from './components/Proyectos.vue'
//import UserBalance from './components/UserBalance'
import App from './App'

const router = new vueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/',
			name: "root",
			component: App
		},
		{
			path: '/proyectos',
			name: "proyectos",
			component: Proyectos
		},/*
		{
			path: '/user/balance/:username',
			name: "user_balance",
			component: UserBalance
		},*/
	]
})
export default router