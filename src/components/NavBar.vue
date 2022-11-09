<template>
  <v-navigation-drawer v-model="drawer" permanent location="left">
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-img class="bg-white" width="400" :aspect-ratio="1" src="../assets/logo.png"></v-img>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <router-link to="/BerandaIsai" class="BerandaIsai">
            <v-list-item prepend-icon="mdi-home-circle" title="Beranda" value="home"></v-list-item>
          </router-link>
         
          <router-link to="/MapIsai" class="MapIsai">
            <v-list-item prepend-icon="mdi-map" title="Peta" value="map"></v-list-item>
          </router-link>
          

          <router-link to="/BantuanIsai" class="BantuanIsai">
            <v-list-item prepend-icon="mdi-help-circle" title="Bantuan" value="help"></v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>
      

      <!-- <v-main style="height: 1264px"></v-main> -->
  <!-- <v-card>
    <v-layout>
      <v-navigation-drawer
        permanent
      >
        <v-list>
          <v-img
            class="bg-white"
            width="400"
            :aspect-ratio="1"
            src="../assets/logo.png"
      ></v-img>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <router-link to="/" class="BerandaIsai">
            <v-list-item prepend-icon="mdi-home-circle" title="Beranda" value="home"></v-list-item>
          </router-link>
         
          <v-list-item prepend-icon="mdi-map" title="Peta" value="map"></v-list-item>

          <router-link to="/BantuanIsai" class="BantuanIsai">
            <v-list-item prepend-icon="mdi-help-circle" title="Bantuan" value="help"></v-list-item>
          </router-link>
          <router-view></router-view>
          

        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 1264px"></v-main>
    </v-layout>
  </v-card> -->
</template>

<script>
  export default {
    data(){
      return {
        drawer:true
      }
    }
    //
  }
</script>

