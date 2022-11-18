<template>
  <br />
  <v-img
    width="40%"
    :aspect-ratio="1"
    src="../assets/bantuann.png"
    style="float: Right"
  ></v-img>
  <v-list-item>
    <v-list-item-content>
      <h2><strong>Bantuan,</strong><br />Daftar Bantuan Aplikasi ISAI</h2>
      <br />
      <v-expansion-panels>
        <v-expansion-panel
          title="Jejak Beehive Drones ?"
          text="Beehive Drones didirikan pada tahun 2017 oleh sekelompok mahasiswa Indonesia di Manchester, Inggris yang bertujuan membawa kekuatan drone ke bidang Industri konvensional. Para pendiri percaya bahwa di dunia yang kompetitif dan bergerak cepat ini, efisiensi menjadi aspek penting dan drone adalah alat yang sangat kuat untuk mencapainya. Saat ini, Beehive Drones memproduksi sistem drone, sensor IoT, sistem pengawasan, dan sistem manajemen pelacakan. Teknologi signature swarm drones Beehive Drones telah membawa tim menjadi juara nasional, perwakilan Asia Pasifik, dan finalis dunia di Imagine Cup 2018 oleh Microsoft. Setelah terdaftar di Indonesia dengan nama PT Aerotek Global Inovasi, tim Beehive Drones semakin kuat dan diterima dengan baik oleh berbagai industri di Indonesia. Kami bekerja baik untuk sektor swasta maupun pemerintah, memuaskan dahaga industri akan teknologi canggih yang inovatif, andal, dan terjangkau. Dengan moto 'Redefining the Possibilities', perjalanan Beehive Drone masih jauh dari selesai. Impian Beehive Drones adalah untuk membantu industri dalam merangkul teknologi modern, mengejar tujuan efisiensi mereka, dan menjadi mitra tepercaya untuk Revolusi Industri 4.0. ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
        >
        </v-expansion-panel>
        <v-expansion-panel
          title="Apa itu ISAI ?"
          text="ISAI (Intelligent System Aerial Imaging) sistem yang mampu menampilkan besaran nilai karbon di suatu wilayah pertanian. Karbon sendiri adalah suatu unsur yang selalu ada dalam berbagai aspek kehidupan khusus nya pertanian"
        >
        </v-expansion-panel>
        <v-expansion-panel
          title="Bagaimana saya mengakses peta ?"
          text="Ya ndak tau kok tanya saya"
        >
        </v-expansion-panel>
        <v-expansion-panel
          title="Apa itu Karbon ?"
          text="Karbon atau zat arang adalah sebuah unsur kimia dengan lambang C dan nomor atom 6. Ia merupakan nonlogam dan tetravalen—atomnya membuat empat elektron tersedia untuk membentuk ikatan kimia kovalen. Ia berada dalam golongan 14 dari tabel periodik. Karbon hanya menyusun sekitar 0,025 persen dari kerak Bumi."
        >
        </v-expansion-panel>
        <v-expansion-panel
          title="Darimanakah sampel karbon didapat ?"
          text="Untuk saat ini dari tanah pertanian atau perkebunan yang wilayahnya sudah diberi titik koordinat, kemudian diukur kandungan karbonnya"
        >
        </v-expansion-panel>
      </v-expansion-panels>
    </v-list-item-content>
  </v-list-item>
  <br />
  <br />
  <br />
  <br />

  <v-list-item>
    <v-list-item-content>
      <h2><strong>Tentang Kami,</strong></h2>
    </v-list-item-content>
  </v-list-item>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <p class="text-justify">
        <v-card
          v-bind="props"
          :color="isHovering ? 'primary' : undefinedred"
          title="Perjalanan Kami"
          text="Beehive Drones didirikan pada tahun 2017 oleh sekelompok mahasiswa Indonesia di Manchester, Inggris yang bertujuan membawa kekuatan drone ke bidang Industri konvensional. Para pendiri percaya bahwa di dunia yang kompetitif dan bergerak cepat ini, efisiensi menjadi aspek penting dan drone adalah alat yang sangat kuat untuk mencapainya. Saat ini, Beehive Drones memproduksi sistem drone, sensor IoT, sistem pengawasan, dan sistem manajemen pelacakan. Teknologi signature swarm drones Beehive Drones telah membawa tim menjadi juara nasional, perwakilan Asia Pasifik, dan finalis dunia di Imagine Cup 2018 oleh Microsoft. Setelah terdaftar di Indonesia dengan nama PT Aerotek Global Inovasi, tim Beehive Drones semakin kuat dan diterima dengan baik oleh berbagai industri di Indonesia. Kami bekerja baik untuk sektor swasta maupun pemerintah, memuaskan dahaga industri akan teknologi canggih yang inovatif, andal, dan terjangkau. Dengan moto 'Redefining the Possibilities', perjalanan Beehive Drone masih jauh dari selesai. Impian Beehive Drones adalah untuk membantu industri dalam merangkul teknologi modern, mengejar tujuan efisiensi mereka, dan menjadi mitra tepercaya untuk Revolusi Industri 4.0."
        ></v-card>
      </p>
    </template>
  </v-hover>
  <br />
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        v-bind="props"
        :color="isHovering ? 'primary' : undefinedred"
        title="Kontak Kami"
        text="Alamat : Jalan Arjuna No.4b, Wirobrajan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55252 Telp : 0819-1901-1293"
      ></v-card>
    </template>
  </v-hover>
</template>

    
<script>
export default {
  name: "BantuanIsai",
};
</script>
    
    <style >
</style>