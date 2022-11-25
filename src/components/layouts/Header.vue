<template>
<div>
  <div class="mx-[50px]">
    <div class=" flex flex-row">
      <div class="basis-5/12 text-[#331B3B] mt-32">
        <div class="flex mb-7 ">
          <div class="flex flex-col text-8xl tracking-[-0.01em]">
            <div class="font-bold">We Help You</div>
            <div class="font-light">to grow your</div>
            <div class="relative font-light line__style__header"><span class="z-10">Business</span></div>
          </div>
        </div>
        <p class="font-normal text-lg tracking-wide text-[rgba(51, 27, 59, 0.66)] mb-8">Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book.</p>
        <div class="cursor-pointer flex justify-center w-52 h-16 bg-[#331B3B] rounded-xl">
          <div class="flex self-center text-white w-28 h-6"><p class="font-bold text-base uppercase">get started</p>
          </div>
        </div>
      </div>


      <div class="basis-7/12">
        <div class="absolute right-0 top-0">
          <img src="../../assets/header1.png" alt="">
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
  height: 26px;
  width: 55%;
  background: #FDC221;
  bottom: 0;
  z-index: -10;
}
</style>