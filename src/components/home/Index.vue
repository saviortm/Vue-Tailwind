<template>
    <NavBar :user="user"/>
    <Header/>
    <Slides/>
    <About/>
    <Works/>
    <Testimonia/>
    <Footer/>
</template>

<script>
import Footer from "@/components/layouts/Footer";
import NavBar from "@/components/layouts/NavBar";
import Header from "@/components/layouts/Header";
import Slides from "@/components/layouts/Slides";
import About from "@/components/layouts/About";
import Works from "@/components/layouts/Works";
import Testimonia from "@/components/layouts/Testimonia";
import axios from "axios";

export default {
    name: "Index",
    components: { Testimonia, Works, About, Slides, Header, NavBar, Footer },
    data () {
        return {
            user: null
        }
    },
    async created () {
        const response = await axios.get('/api/users/2');
        this.user = response.data;
    }
}
</script>

<style scoped>

</style>