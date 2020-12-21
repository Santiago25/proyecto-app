<template>
	<div>
    <h1>Agregar Usuario</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Nombre:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.nombre"
          placeholder="Ingrese el nombre"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Correo:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.correo"
          placeholder="Ingrese el correo electrónico"
          required
        ></b-form-input>
      </b-form-group>

	  <b-form-group
        id="input-group-3"
        label="Contraseña"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="form.password"
          placeholder="Ingrese la contraseña"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Registrar</b-button>
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
        nombre: "",
        correo: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
	  event.preventDefault();
	  
      axios.post('http://127.0.0.1:8000/usuario', {
			username: this.form.nombre,
			correo: this.form.correo,
			password: this.form.password
        }).then((response) => {
			alert("Hecho!")
			this.form.nombre = "";
	  		this.form.correo = "";
	  		this.form.password = "";
		})
        .catch((e) => console.log("Error!: " + e));       
    },
    onReset(event) {
      event.preventDefault();
      this.form.nombre = "";
	  this.form.correo = "";
	  this.form.password = "";
    },
  },
};
</script>
