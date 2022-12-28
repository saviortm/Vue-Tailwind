<template>
  <div>
    <div class="mx-[50px]">
      <div class="flex flex-row max-lg:flex-col">
        <div class="basis-5/12 text-[#331B3B] mt-32 max-xl:mt-28 max-lg:order-last max-lg:grid max-lg:justify-items-center max-sm:mt-0">
          <div class="flex mb-7 max-lg:justify-center ">
            <div class="flex flex-col text-8xl max-xl:text-6xl max-lg:text-4xl tracking-[-0.01em] max-lg:grid max-lg:justify-items-center max-sm:text-3xl">
              <div class="font-bold">{{$t('headers.first')}}</div>
              <div class="font-light">{{$t('headers.second')}}</div>
              <div class="font-light"><span class="relative  z-10 line__style__header">{{$t('headers.third')}}</span></div>
            </div>
          </div>
          <p class=" font-normal text-lg max-xl:text-base  tracking-wide mb-8 text-[#331B3B]  max-xl:w-[85%] max-lg:w-[80%] max-sm:text-sm">Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.</p>
          <div @click="showModalOpen" class="cursor-pointer flex justify-center w-52 h-16 bg-[#331B3B] rounded-xl max-xl:w-48 max-xl:h-14 max-md:w-40 max-md:h-12 max-sm:w-32 max-sm:h-10">
            <div  class="flex self-center justify-center text-white w-28 h-6"><p class="font-bold text-base max-xl:text-sm uppercase max-sm:font-semibold">{{$t('buttons.start')}}</p>
            </div>
          </div>
        </div>
        <!-- Photo -->
        <div class="basis-7/12">
          <div class="header__height max-lg:relative max-lg:h-[550px] max-sm:h-[520px]">
          </div>
          <div class="absolute right-0 top-0">
            <img class="max-xl:w-[650px] max-lg:w-full" src="../../assets/header1.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!---------   Fixed button --------->
    <div class="w-full inset-0">
      <div class="relative rounded-xl overflow-auto p-8">
        <div class="flex justify-center">
          <div @click="Jump" class="fixed right-0 bottom-0 mr-2 mb-2 animate-bounce bg-white p-2 w-10 h-10 ring-2 ring-white shadow-lg rounded-full flex items-center justify-center cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 z-50">
            <svg class="w-6 h-6 text-[#331B3B] fixed_button" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-----   script tag   ------>
<script>
export default {
  name: "Header",
  methods: {
    Jump() {
      const element = document.getElementById('contact-me');
      element.scrollIntoView({ behavior: 'smooth' });
    }
  },
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
/*------------ fixed button hover ----------------*/
.fixed_button:hover {
  stroke-width: 3;
}
</style>