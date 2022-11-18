<template>
  <v-app>
    <nav-bar />
    <v-main>
      <!-- <AdminIsai />
      <BantuanIsai/>
      <BerandaIsai/> -->
      <router-view>
        
      </router-view>
    </v-main>
    <!-- <FooterSatu/> -->
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
// import AdminIsai from "./components/AdminIsai.vue";
// import BantuanIsai from './components/BantuanIsai.vue';
// import BerandaIsai from './components/BerandaIsai.vue';

// import FooterSatu from './components/FooterSatu.vue'

export default {
  name: "App",

  components: {
    NavBar,
    // AdminIsai,
    // BantuanIsai,
    // BerandaIsai,
    //  FooterSatu,
  },

  data: () => ({
    //
  }),
};
</script>
