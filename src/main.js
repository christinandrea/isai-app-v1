import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import route from './router'

loadFonts()

createApp(App)
.use(route)
.use(vuetify)
.mount('#app')
