import { createRouter, createWebHistory } from 'vue-router'

import OurProduct from '../components/OurProduct.vue'

const routes = [
    {
        path: '/our-product',
        name: 'OurProduct',
        component: OurProduct
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
exports.default = router