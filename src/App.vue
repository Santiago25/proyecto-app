<template>
  <div id="app">
	<b-nav tabs>
		<b-nav-item active to="/home">Pagina principal</b-nav-item>
		<b-nav-item>
			<router-link to="/proyectos">Proyectos</router-link>
		</b-nav-item>
		<b-nav-item>Asignar</b-nav-item>
	</b-nav>
	<div>
      <router-view/>
    </div>
  </div>
</template>


<style>
.nav-tabs {
	padding: 10px 10px 0 10px;
}
</style>
