<template>
<div>


  <div class="flex row-span-2">

    <div class="basis-1/2">
      <img src="../../assets/aboutus.png" alt="">
    </div>

    <div class="basis-1/2">
      <div class="flex flex-col mt-72">
        <div class="flex flex-col text-5xl tracking-[-1%] space-y-2 text-[#331B3B]">
          <p class="font-bold">About Us</p>
          <p class="relative line__style__about font-light">Fake or <span class="z-10">Real</span></p>
        </div>
        <div class="flex flex-col font-normal text-lg mt-5 mr-[59px]">
          <p>Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.</p>
          <p class="mt-2.5">Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book.</p>
        </div>
        <div class="flex w-52 h-16 bg-[#331B3B] rounded-xl justify-center mt-9 cursor-pointer">
          <p class="flex self-center font-bold text-base text-white">EXPLORE MORE</p>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

.line__style__about::before {
  content: '';
  position: absolute;
  height: 8px;
  width: 11%;
  background: #FDC221;
  bottom: 0;
  left: 21%;
  z-index: -10;
}

</style>