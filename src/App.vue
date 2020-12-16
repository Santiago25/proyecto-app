<template>
  <div id="app">
	<b-nav tabs>
		<b-nav-item active>Pagina principal</b-nav-item>
		<b-nav-item v-on:click="Proyectos">Proyectos</b-nav-item>
		<b-nav-item>Asignar</b-nav-item>
	</b-nav>
	<Proyectos/>
  </div>
</template>

<script>
import Proyectos from './components/Proyectos.vue'

export default {
  name: 'App',
  components: {
    Proyectos
  }
}
</script>

<style>
.nav-tabs {
	padding: 10px 10px 0 10px;
}
</style>
