<template>
  <br>
  <v-list-item>
    <v-list-item-content>
      <h2>Admin</h2>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Name"
          required
        ></v-text-field>
  
        <v-text-field
          v-model="pass"
          :rules="passRules"
          label="Password"
          required
        ></v-text-field>
  
        <!-- <v-text-field
          v-model="pass"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required]"
          :type="show1 ? 'text' : 'pass'"
          label="Password"
          counter
          @click:append="show1 = !show1"
        ></v-text-field> -->
  
        <!-- <v-select
          v-model="select"
          :items="items"
          :rules="[(v) => !!v || 'Item is required']"
          label="Item"
          required
        ></v-select> -->
  
        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>
  
        <v-btn color="success" class="mr-4" @click="validate"> Validate </v-btn>
  
        <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
  
        <v-btn color="warning" @click="resetValidation"> Reset Validation </v-btn>
      </v-form>
    </v-list-item-content>
  </v-list-item>
  
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    pass: "",
    passRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length <= 10) || "Password must be valid",
    ],
    //   select: null,
    //   items: [
    //     'Item 1',
    //     'Item 2',
    //     'Item 3',
    //     'Item 4',
    //   ],
    checkbox: false,
  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) alert("Form is valid");
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style>
</style>