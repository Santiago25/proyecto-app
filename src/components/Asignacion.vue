<template>
  <div>
    <h1>Asignación</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Nombre del usuario:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Ingrese el nombre"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Proyecto a asignar"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.proyect"
          placeholder="Ingrese el proyecto"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Asignar</b-button>
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
	  
      axios.post('https://epyme.herokuapp.com/proyect/addUser', {
        	nombre: this.form.name,
        	nombreP: this.form.proyect,
        }).then((response) => {
			alert("Hecho!")
			this.onReset()
		})
        .catch((e) => console.log("Error!: " + e));       
    },
    onReset(event) {
      event.preventDefault();
      this.form.name = "";
      this.form.proyect = "";
    },
  },
};
</script>