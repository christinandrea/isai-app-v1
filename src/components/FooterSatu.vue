<template>
  <v-navigation-footer >
    <footer class="d-flex flex-column">
      <v-slot >
        <div class="bg-teal d-flex w-100 align-center px-4">
          <strong>Get connected with us on social networks!</strong>
    
          <v-spacer></v-spacer>
    
          <v-btn
            v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="plain" size="small"></v-btn>
        </div>
    
        <div class="px-4 py-2 bg-black text-center w-100">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </div>
      </v-slot>
    </footer>
  </v-navigation-footer>
  
</template>

<script>
  export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>