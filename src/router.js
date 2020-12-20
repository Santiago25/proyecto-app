import vueRouter from 'vue-router'
import Home from './components/Home.vue'
import Proyectos from './components/Proyectos.vue'
import Asignacion from './components/Asignacion.vue'


const router = new vueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/home',
			name: "Home",
			component: Home
		},
		{
			path: '/proyectos',
			name: "Proyectos",
			component: Proyectos
		},
		{
			path: '/asignacion',
			name: "Asignacion",
			component: Asignacion
		},
		{
			path: '',
			component: Home
		}
	]
})
export default router