<template>
  <div>
    <NavBar/>
    <div class="flex flex-col text-[#331B3B] mt-32 bg-white rounded-3xl">
      <div class="flex justify-center font-bold text-6xl tracking-[-0.01em] mt-10">CONTACT US IS A TEST PAGE</div>
      <div class="w-full h-96"></div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";

export default {
  name: "ContactUs",
  components: {Footer,NavBar}
}
</script>

<style scoped>

</style>