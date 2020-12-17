<template>
  <div>
    <h2>Asignación</h2>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Nombre del usuario:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Ingrese el nombre"
          required
        ></b-form-input>
      </b-form-group>

	  <b-form-group id="input-group-2" label="Proyecto a asignar" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.proyect"
          placeholder="Ingrese el proyecto"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
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
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.proyect = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>