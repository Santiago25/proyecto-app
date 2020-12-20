<template>
  <div id="app">
	<b-nav tabs>
		<b-nav-item>
		<router-link to="/home">Home</router-link></b-nav-item>
		<b-nav-item>
			<router-link to="/nuevoUsuario">Agregar Usuario</router-link>
		</b-nav-item>
		<b-nav-item>
			<router-link to="/nuevoProyecto">Agregar Proyecto</router-link>
		</b-nav-item>
		<b-nav-item>
			<router-link to="/proyectos">Proyectos</router-link>
		</b-nav-item> 
		<b-nav-item>
			<router-link to="/asignacion">Asignación</router-link>
		</b-nav-item>
	</b-nav>
	<b-container>
      <router-view>
	  </router-view>
    </b-container>
</div> 
</template>


<style>
.nav-tabs {
	padding: 10px 10px 0 10px;
}
.container {
	margin-top: 15px;
}
</style>
