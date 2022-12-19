<template>
  <div>
    <NavBar/>
    <div class="flex flex-col text-[#331B3B] mt-32 bg-[#ECF7FF] rounded-3xl">
      <div class="flex justify-center font-bold text-6xl tracking-[-0.01em] mt-10 mb-8">ABOUT US IS A TEST PAGE</div>
      <div class="w-full h-[600px]">
        <!------------Start table---------->
      <EmployeeTable/>

      </div>
    </div>
    <Footer/>
  </div>
</template>
<script>
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";
import About from "@/components/layouts/About";
import EmployeeTable from "@/components/Pagination/EmployeeTable";
import PaginationVue from "@/components/Pagination/PaginationVue";
export default {
  name: "AboutUs",
  components: {PaginationVue, EmployeeTable, About, Footer, NavBar}
}
</script>

<style scoped>

</style>