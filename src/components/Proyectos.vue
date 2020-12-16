<template>
  <div>
    <h1>Proyectos</h1>
    <b-table striped hover :items="proyectos"></b-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      proyectos: null
    };
  },
  created: function () { 
    axios
	  .get("http://127.0.0.1:8000/proyect/list/")
      .then(response => (this.proyectos = response.data))
  },
};
</script>