<template>
  <div>
    <NavBar/>
    <div class="flex flex-col text-[#331B3B] mt-32 bg-white rounded-3xl">
      <div class="flex justify-center font-bold text-6xl tracking-[-0.01em] mt-10">CONTACT US IS A TEST PAGE</div>
      <div class="w-full h-96">
        <div v-if="user" v-for="u in user" :key="u" >{{u.first_name}}</div>
        <h3 > Hi, {{user}}</h3>
        <h3 v-if="!user"> You are not logged in!</h3>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";

export default {
  name: "ContactUs",
  components: {Footer,NavBar},
  props: ['user']
}
</script>

<style scoped>

</style>