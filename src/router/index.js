import { createRouter, createWebHistory } from 'vue-router'

import BerandaIsai from '../components/BerandaIsai.vue'
import BantuanIsai from '../components/BantuanIsai.vue'
import MapIsai from '../components/MapIsai.vue'

const routes =[
    {
        path: '/BerandaIsai',
        name: 'BerandaIsai',
        component: BerandaIsai
    },

    {
        path: '/MapIsai',
        name: 'MapIsai',
        component: MapIsai
    },

    {
        path: '/BantuanIsai',
        name: 'BantuanIsai',
        component: BantuanIsai
    }
]

const route = createRouter({
    history: createWebHistory(),
    routes,
})

export default route