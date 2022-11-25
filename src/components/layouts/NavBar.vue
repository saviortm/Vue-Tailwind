<template>
  <div>
    <div class="bg-transparent">
      <div class="flex justify-between  h-[100px] mx-[50px]">

        <div class="self-center relative underline__style">
          <ul class="flex space-x-8 font-normal text-base text-[#331B3B]">
            <li><a href=""><router-link to="/">
              Home
            </router-link></a></li>
            <li><a href=""><router-link to="/about">
              About Us
            </router-link></a></li>
            <li><a href=""><router-link to="/services">
              Services
            </router-link></a></li>
            <li><a href=""><router-link to="/contact">
              Contact Us
            </router-link></a></li>
          </ul>
        </div>

        <div class="self-center">
          <h1 class="text-2xl tracking-widest text-[#331B3B] font-bold">
            Dream Agency
          </h1>
        </div>

        <div class="flex self-center space-x-2 z-20">
          <img class="cursor-pointer" src="../../assets/facebook.svg" alt="">
          <img class="cursor-pointer " src="../../assets/linkedin.svg" alt="">
          <img class="cursor-pointer " src="../../assets/instagram.svg" alt="">
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.underline__style ul li:hover a::before{
  content: '';
  position: absolute;
  height: 2px;
  width: 21px;
  background: #FDC221;
  bottom: 0;
}
.underline__style ul li:hover a {
  font-weight: 500;
}
</style>