<template>
  <div>

    <div class="relative mt-40 h-[650px] w-full">
      <div class="absolute top-0 left-0 w-[88%] h-[576px] bg-[#ECF7FF] rounded-tr-[400px] -z-10">
      </div>
      <div class="mx-[50px]">
        <div class="flex flex-col">
          <div class="basis-5/12 flex justify-center mt-24">
            <div class="text-[#331B3B] tracking-[-0.01em] z-10 text-5xl max-xl:text-4xl max-lg:text-3xl">
              <p class="font-bold flex justify-center">What We Do</p>
              <p class="relative line__style__slides font-light flex justify-center">For Your <span class="z-10">Business</span></p>
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
                 <Cardfirst/>
                </div>
              </swiper-slide>
              <swiper-slide class="flex justify-center">
                <div>
                 <Cardsecond/>
                </div>
              </swiper-slide>
              <swiper-slide class="flex justify-center">
                <div>
                 <Cardthird/>
                </div>
              </swiper-slide>
              <swiper-slide class="flex justify-center">
                <div>
              <Cardfourth/>
                </div>
              </swiper-slide>
              <swiper-slide class="flex justify-center">
                <div>
                  <Cardfirst/>
                </div>
              </swiper-slide>
              <swiper-slide class="flex justify-center">
                <div>
                <Cardsecond/>
                </div>
              </swiper-slide>
            </swiper>



          </div>
        </div>
      </div>

      <div class="absolute bottom-0 right-0 -z-30 ">
        <img class="max-xl:w-[450px] max-lg:w-[400px]" src="../../assets/slide.png" alt="">
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
import Cardfirst from "@/components/Blocks/Slider/Cardfirst";
import Cardsecond from "@/components/Blocks/Slider/Cardsecond";
import Cardthird from "@/components/Blocks/Slider/Cardthird";
import Cardfourth from "@/components/Blocks/Slider/Cardfourth";
export default {
  name: "Slides",
  components: {
    Cardfourth,
    Cardthird,
    Cardsecond,
    Cardfirst,
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
  height: 25%;
  width: 47%;
  background: #FDC221;
  bottom: 0;
  right: 1%;
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


@media screen and (max-width: 1280px)
{
  .swiper-button-next {
    position: absolute;
    top: 63%!important;
    left: 6%!important;
  }
}

@media screen and (max-width: 1024px)
{
  .swiper-button-next {
    position: absolute;
    top: 63%!important;
    left: 7%!important;
    margin-left: 5px!important;
  }
}
</style>