<template>
<v-app>
    <nav-bar/>
    <FooterSatu/>
    
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
      

    

</v-app>
</template>

<script>

import NavBar from './components/NavBar.vue'
import FooterSatu from './components/FooterSatu.vue'


export default {
  name: 'App',

  components: {
     NavBar,
     FooterSatu,
},

  data: () => ({
    //
  }),
}
</script>
