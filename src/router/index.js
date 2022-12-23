import {createRouter, createWebHashHistory} from 'vue-router'
import Index from "@/components/home/Index";
import  AboutUs from "@/components/pages/AboutUs";
import Services from "@/components/pages/Services";
import ContactUs from "@/components/pages/ContactUs";

const routes = [
    {
        path: '/',
        name: 'home',
        component: Index
    },
    {
        path: '/about',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path: '/services',
        name: 'Services',
        component: Services
    },
    {
        path: '/contact',
        name: 'ContactUs',
        component: ContactUs
    }
]
const router = createRouter({
    history: createWebHashHistory(), // history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router