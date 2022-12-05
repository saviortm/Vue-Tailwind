<template>
<div>



  <div class="mt-24">
    <div class="flex flex-col text-[#331B3B]">

      <div class="basis-1/4 flex justify-center">
        <div class="flex flex-col text-5xl tracking-[-0.01em] max-xl:text-4xl max-lg:text-3xl">
          <p class="font-bold flex justify-center">Our Testimonials</p>
          <p class=" relative line__style__test font-light">What Our Clients Are <span class="z-10">Saying</span></p>
        </div>
      </div>

      <div class="basis-3/4 mt-14 max-lg:mx-[50px]">
        <div class="flex flex-row justify-center space-x-16 max-lg:flex-col max-lg:space-y-16 max-lg:grid max-lg:justify-items-center max-lg:space-x-0">

          <div class="flex w-[448px] h-[310px] shadow-[0px_0px_7px_1px_rgba(0,0,0,0.08)]">

            <div class="flex flex-col p-10 self-center">

              <div class="basis-2/6">
                <img src="../../assets/testimonia.png" alt="">
              </div>

              <div class="basis-3/6 mt-[18px] mb-1">
                <p class="font-normal text-lg max-xl:text-base">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
              </div>

              <div class="relative basis-1/6">
                <p class="single__line ml-4 font-semibold text-base text-black">
                  <span class="z-10"></span> UI Soup
                </p>
              </div>

            </div>


          </div>

          <div class="flex w-[448px] h-[310px] shadow-[0px_0px_7px_1px_rgba(0,0,0,0.08)]">

            <div class="flex flex-col p-10 self-center">

              <div class="basis-2/6">
                <img src="../../assets/testimonia.png" alt="">
              </div>

              <div class="basis-3/6 mt-[18px] mb-1">
                <p class="font-normal text-lg max-xl:text-base">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
              </div>

              <div class="relative basis-1/6">
                <p class="single__line ml-4 font-semibold text-base text-black">
                  <span class="z-10"></span> UI Soup
                </p>
              </div>

            </div>


          </div>


        </div>
      </div>


    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "Testimonia"
}
</script>

<style scoped>

.line__style__test::before {
  content: '';
  position: absolute;
  height: 10px;
  width: 21%;
  background: #FDC221;
  bottom: -5%;
  right: 1%;
  z-index: -10;
}

.single__line::before {
  content: '';
  position: absolute;
  height: 4px;
  width: 11px;
  background: #FDC221;
  bottom: 45%;
  left: 0;
  z-index: -10;
}

</style>