import vueRouter from 'vue-router'
import Home from './components/Home.vue'
import Proyectos from './components/Proyectos.vue'
//import UserBalance from './components/UserBalance'
import App from './App'

const router = new vueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/, /home',
			name: "home",
			component: Home
		},
		{
			path: '/proyectos',
			name: "Proyectos",
			component: Proyectos
		}
	]
})
export default router