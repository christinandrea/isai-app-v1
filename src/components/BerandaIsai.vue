<template>
  <v-list-item-content>
    <br />
    <v-list-item>
      <h2><strong>Beranda,</strong><br />Intelligent System Aerial Imaging</h2>
    </v-list-item>
    <br />

    <v-hover v-slot="{ props }">
      <v-card
        class="mx-auto"
        color="grey-lighten-4"
        max-width="1800"
        v-bind="props"
      >
        <v-card-text class="pt-6" style="position: relative">
          <div class="font-weight-light text-grey text-h6 mb-2">
            Apa itu ISAI?
          </div>
          <h3 class="text-h4 font-weight-light text-orange mb-2">
            Intelligent System Aerial Imaging
          </h3>
          <div class="font-weight-light text-h6 mb-2">
            Sistem berbasis cerdas yang dapat memprediksi nilai karbon di lahan
            pertanian berdasarkan citra udara (aerial image) dari pesawat tanpa
            awak (drone).<br />
            Intelligent system dapat memonitor dinamika karbon dan perubahan
            kualitas lingkungan pada lahan pertanian secara aktual dan presisi.
          </div>
        </v-card-text>
      </v-card>
    </v-hover>

    <br />
    <v-carousel>
      <v-carousel-item
        src="https://cdn.medcom.id/dynamic/content/2021/01/27/1236009/DYP5IisNLG.jpg?w=1024"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="http://www.ez-surveying.com/htdocs/cljr/data/images/DSC01753.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://dokterdrone.com/wp-content/uploads/2020/01/drone-pertanian-terbaik.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>

    <v-timeline>
      <v-timeline-item size="mini">
        <template v-slot:icon>
          <v-avatar
            image="https://cf.shopee.co.id/file/1474bd2ae61a513c5047b2e0da0bc66f"
          ></v-avatar>
        </template>
        <template v-slot:opposite> </template>
        <v-card width="1800" class="elevation-">
          <v-card-title class="text-h4"> VISI </v-card-title>
          <v-card-text
            >Mewujudkan pertanian Indonesia yang modern dengan adanya basis
            teknologi</v-card-text
          >
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <v-timeline>
      <v-timeline-item size="mini">
        <template v-slot:icon>
          <v-avatar
            image="https://cf.shopee.co.id/file/1474bd2ae61a513c5047b2e0da0bc66f"
          ></v-avatar>
        </template>
        <template v-slot:opposite> </template>
        <v-card width="1800" class="elevation-2">
          <v-card-title class="text-h4"> MISI </v-card-title>
          <v-card-text
            >Mewujudkan pertanian Indonesia yang modern dengan adanya basis
            teknologi</v-card-text
          >
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <v-card class="mx-auto" width="1800" prepend-icon="mdi-school">
      <template v-slot:title> Fitur Kami </template>

      <v-card-text>
        Intelligent System Aerial Imaging menyediakan ...
      </v-card-text>
    </v-card>
  </v-list-item-content>
  <br />
</template>


<script>
</script>

<style>
</style>