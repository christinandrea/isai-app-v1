<template>
  <v-navigation-drawer v-model="drawer" permanent location="left" width="350">
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-img
            style="
              display: block;
              margin-left: auto;
              margin-right: auto;
              width: 50%;
            "
            :aspect-ratio="1"
            src="../assets/logo.png"
          ></v-img>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <router-link to="/BerandaIsai" >
        <v-list-item
          prepend-icon="mdi-home-circle"
          title="Beranda"
          value="home"
        ></v-list-item>
      </router-link>

      <router-link to="/MapIsai" >
        <v-list-item
          prepend-icon="mdi-map"
          title="Peta"
          value="map"
        ></v-list-item>
      </router-link>

      <router-link to="/KalkuIsai" >
        <v-list-item
          prepend-icon="mdi-calculator"
          title="Kalkulator"
          value="calculator"
        ></v-list-item>
      </router-link>

      <router-link to="/BantuanIsai" >
        <v-list-item
          prepend-icon="mdi-help-circle"
          title="Bantuan"
          value="help"
        ></v-list-item>
      </router-link>

      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

      <router-link to="/AdminIsai">
        <v-list-item
          prepend-icon="mdi-account-circle"
          title="Admin"
          value="account"
        ></v-list-item>
      </router-link>
    </v-list>

    <!-- <template v-slot:append>
      <div class="pa-2">
        <v-list density="compact" nav>
          <router-link to="/AdminIsai" class="AdminIsai">
            <v-list-item
              prepend-icon="mdi-account-circle"
              title="Admin"
              value="account"
            ></v-list-item>
          </router-link>
        </v-list>
      </div>
    </template> -->

  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true, 
    };
  },
  //
};
</script>

<style>
</style>

