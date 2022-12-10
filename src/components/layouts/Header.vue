<template>
  <div>
    <div class="mx-[50px]">
      <div class="flex flex-row max-lg:flex-col">
        <div class="basis-5/12 text-[#331B3B] mt-32 max-xl:mt-28 max-lg:order-last max-lg:grid max-lg:justify-items-center max-sm:mt-0">
          <div class="flex mb-7 max-lg:justify-center ">
            <div class="flex flex-col text-8xl max-xl:text-6xl max-lg:text-4xl tracking-[-0.01em] max-lg:grid max-lg:justify-items-center max-sm:text-3xl">
              <div class="font-bold">We Help You</div>
              <div class="font-light">to grow your</div>
              <div class="font-light"><span class="relative  z-10 line__style__header">Business</span></div>
            </div>
          </div>
          <p class=" font-normal text-lg max-xl:text-base  tracking-wide mb-8 text-[#331B3B]  max-xl:w-[85%] max-lg:w-[80%] max-sm:text-sm">Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.</p>
          <div class="cursor-pointer flex justify-center w-52 h-16 bg-[#331B3B] rounded-xl max-xl:w-48 max-xl:h-14 max-md:w-40 max-md:h-12 max-sm:w-32 max-sm:h-10">
            <div class="flex self-center justify-center text-white w-28 h-6"><p class="font-bold text-base max-xl:text-sm uppercase max-sm:font-semibold">get started</p>
            </div>
          </div>
        </div>
        <div class="basis-7/12 max-lg: ">
          <div class="header__height max-lg:relative max-lg:h-[550px] max-sm:h-[520px]">
          </div>
          <div class="absolute right-0 top-0">
            <img class="max-xl:w-[650px] max-lg:w-full" src="../../assets/header1.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header"
}
</script>
<style scoped>
.line__style__header::before{
  content: '';
  position: absolute;
  height: 22%;
  width: 95%;
  background: #FDC221;
  bottom: 12%;
  z-index: -10;
}
</style>