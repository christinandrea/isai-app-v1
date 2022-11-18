import { createRouter, createWebHistory } from 'vue-router'

import BerandaIsai from '../components/BerandaIsai.vue'
import BantuanIsai from '../components/BantuanIsai.vue'
import MapIsai from '../components/MapIsai.vue'
import KalkuIsai from '../components/KalkuIsai.vue'
import AdminIsai from '../components/AdminIsai.vue'
import UjiIsai from '../components/UjiIsai.vue'

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
        path: '/KalkuIsai',
        name: 'KalkuIsai',
        component: KalkuIsai
    },

    {
        path: '/BantuanIsai',
        name: 'BantuanIsai',
        component: BantuanIsai
    },

    {
        path: '/AdminIsai',
        name: 'AdminIsai',
        component: AdminIsai
    },

    {
        path: '/UjiIsai',
        name: 'UjiIsai',
        component: UjiIsai

    }
]

const route = createRouter({
    history: createWebHistory(),
    routes,
})

export default route