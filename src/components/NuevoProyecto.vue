<template>
	<div>
    <h1>Agregar Proyecto</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Nombre del Proyecto:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.nombreP"
          placeholder="Ingrese el nombre del proyecto"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Actividad del Proyecto"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.actividadP"
          placeholder="Ingrese las actividades del proyecto"
          required
        ></b-form-input>
      </b-form-group>

	  <b-form-group
        id="input-group-3"
        label="Lider del proyecto"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="form.lider"
          placeholder="Ingrese el Lider del proyecto"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Agregar</b-button>
      <b-button type="reset" variant="danger">Reiniciar campos</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        proyect: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
	  event.preventDefault();
	  
      axios.post('http://127.0.0.1:8000/proyecto', {
			nombreP: this.form.nombreP,
			actividadP: this.form.actividadP,
			lider: this.form.lider
        }).then((response) => {
			alert("Hecho!")
			this.form.nombreP = "";
	  		this.form.actividadP = "";
	  		this.form.lider = "";
		})
        .catch((e) => console.log("Error!: " + e));       
    },
    onReset(event) {
      event.preventDefault();
      this.form.nombreP = "";
	  this.form.actividadP = "";
	  this.form.lider = "";
    },
  },
};
</script>