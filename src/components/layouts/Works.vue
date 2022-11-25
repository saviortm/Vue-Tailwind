<template>
<div>
  <div>

    <div class="relative mt-56">
      <div class="absolute top-0 right-0 w-[1280px] h-[673px] -z-10 bg-[rgba(255,222,212,0.3)] rounded-tl-[400px] ">
      </div>
      <div class="flex flex-col z-10">
        <div class="basis-1/4 mt-[53px] mx-[50px]">
          <div class="flex flex-row">
            <div class="basis-3/5 flex flex-col text-5xl tracking-[-0.01em] text-[331B3B]">
              <p class="font-bold">Our Recent Work</p>
              <p class="relative line__style__works font-light">By Our <span class="z-10">Experts</span></p>
            </div>
            <div class="basis-2/5">
              <p class="font-normal text-lg w-[515px]">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
        </div>
        <div class="basis-3/4">
          <div class="works flex mt-[89px] ml-[268px] space-x-10">
            <swiper
                :options="swiperOptions"
                :modules="modules"
                navigation
                :scrollbar="{ draggable: false }"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :slides-per-view="3"
            >
              <swiper-slide>
                <div>
                  <img src="../../assets/recent1.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <img src="../../assets/recent2.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <img src="../../assets/recent1.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <img src="../../assets/recent2.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <img src="../../assets/recent1.png" alt="">
                </div>
              </swiper-slide>
              <swiper-slide>
                <div>
                  <img src="../../assets/recent2.png" alt="">
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>

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
  name: "Works",
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

.line__style__works::before {
  content: '';
  position: absolute;
  height: 8px;
  width: 18%;
  background: #FDC221;
  bottom: -5%;
  left: 18%;
  z-index: -10;
}

.swiper-button-prev:after {
  content: url('../../assets/leftbutton.svg')!important;
}

.swiper-button-next:after {
  content: url('../../assets/rightbutton.svg')!important;
}
.works .swiper-button-prev{
  position: absolute;
  top: 73%!important;
  left: 1%!important;
}
.works .swiper-button-next {
  position: absolute;
  top: 73%!important;
  left: 5%!important;
}
.works .swiper {
  height: 500px;
  padding-left: 80px;
}
</style>