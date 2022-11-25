<template>
  <div>

    <div class="relative mt-28 h-[600px] w-full">
      <div class="absolute top-0 left-0 w-[1293px] h-[576px] bg-[#ECF7FF] rounded-tr-[400px] -z-10">
      </div>
      <div class="mx-[50px]">
        <div class="flex flex-col">
          <div class="basis-5/12 flex justify-center mt-24">
            <div class="w-[348px] h-24 top-[92px] left-[526px]  text-[#331B3B] tracking-[-0.01em] z-10">
              <p class="font-bold text-5xl flex justify-center">What We Do</p>
              <p class="relative line__style__slides font-light text-5xl">For Your <span class="z-10">Business</span></p>
            </div>
          </div>


          <div class="basis-7/12 mt-24 ml-18 z-10 flex mr-40">


            <swiper
                :options="swiperOptions"
                :modules="modules"
                navigation
                :scrollbar="{ draggable: false }"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :slides-per-view="3"
                class="flex h-[192px] w-[1200px] select-none"


            >
              <swiper-slide class="flex justify-center">
                <div>
                  <img src="../../assets/slide2.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide class="flex justify-center">
                <div>
                  <img src="../../assets/slide3.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide class="flex justify-center">
                <div>
                  <img src="../../assets/slide4.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide class="flex justify-center">
                <div>
                  <img src="../../assets/slide2.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide class="flex justify-center">
                <div>
                  <img src="../../assets/slide3.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide class="flex justify-center">
                <div>
                  <img src="../../assets/slide4.png" alt="">
                </div>
              </swiper-slide>
            </swiper>



          </div>
        </div>
      </div>

      <div class="absolute bottom-0 right-0 -z-30">
<!--        <img src="../../assets/slide.png" alt="">-->
        <button></button>
      </div>


    </div>

  </div>
</template>

<script>

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

export default {
  name: "Slides",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, A11y],
    };
  },
}

</script>

<style>

.line__style__slides::before {
  content: '';
  position: absolute;
  height: 13px;
  width: 45%;
  background: #FDC221;
  bottom: 0;
  right: 2%;
  z-index: -10;
}

.swiper-button-prev:after {
  content: url('../../assets/leftbutton.svg')!important;
}

.swiper-button-next:after {
  content: url('../../assets/rightbutton.svg')!important;
}

.swiper-button-prev{
  position: absolute;
  top: 63%!important;
  left: 1%!important;
}
.swiper-button-next {
  position: absolute;
  top: 63%!important;
  left: 5%!important;
}
.swiper {
  height: 300px;
  width: 1200px;
  padding-left: 100px;
}


</style>
