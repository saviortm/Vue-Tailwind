import { createRouter, createWebHashHistory } from 'vue-router'
import Index from "@/components/home/Index";
import AboutUs from "@/components/pages/AboutUs";
import Services from "@/components/pages/Services";
import ContactUs from "@/components/pages/ContactUs";
import SignUp from "@/components/pages/SignUp";
import Admin from "@/components/pages/Admin";

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
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    }
]
const router = createRouter({
    history: createWebHashHistory(), // history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router