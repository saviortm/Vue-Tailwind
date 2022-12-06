<template>
<div>
  <div>

    <div class="relative mt-20">
      <div class="absolute top-0 right-0 w-[88%] h-[673px] -z-10 bg-[rgba(255,222,212,0.3)] rounded-tl-[400px] ">
      </div>
      <div class="flex flex-col z-10">
        <div class="basis-1/4 mt-[53px] mx-[50px]">
          <div class="flex flex-row justify-between max-lg:flex-col">
            <div class="flex flex-col text-5xl tracking-[-0.01em] text-[331B3B] max-xl:text-4xl max-lg:text-3xl max-lg:grid max-lg:justify-items-center">
                <p class="font-bold">Our Recent Work</p>
                <p class="font-light">By Our <span class="relative line__style__works z-10">Experts</span></p>
            </div>
            <div class="max-lg:grid max-lg:justify-items-center max-lg:mt-5">
              <p class="font-normal text-lg w-[515px] text-[#331B3B] max-xl:text-base max-sm:text-sm max-sm:w-[90%]">Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took
                a galley of type and scrambled it to make a type specimen book.</p>
            </div>
          </div>
        </div>
        <div class="basis-3/4">
          <div class="works flex mt-[89px] ml-[268px] max-lg:mt-4 max-lg:ml-[120px] max-sm:ml-[0px]">
            <swiper
                :options="swiperOptions"
                :breakpoints="swiperOptions.breakpoints"
                :modules="modules"
                space-between="10"
                navigation
                :scrollbar="{ draggable: false }"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :slides-per-view="2"
                  class="select-none"
            >
              <swiper-slide class="flex justify-center">
                <div>
                  <div class="w-[419px] h-[365px] bg-white rounded-lg">
                    <div class="flex flex-col space-y-4">
                      <div class="flex flex-row justify-center p-2">
                        <img class="w-[286px] h-[228px] self-center" src="@/assets/worksllg.svg">
                        <img class="w-[89px] h-[238px] self-center" src="@/assets/workslsm.svg">
                      </div>
                      <div class="flex flex-row justify-between px-4 text-[#331B3B]">
                        <p class="font-bold text-[#331B3B] text-2xl">UI Soup</p>
                        <div class="cursor-pointer">
                          <p class="border-2 border-solid rounded-2xl border-[#331B3B] font-medium text-sm px-1">View Work</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="flex justify-center">
                <div>
                  <div class="w-[419px] h-[365px] bg-white rounded-lg">
                    <div class="flex flex-col space-y-4">
                      <div class="flex flex-row justify-center p-2">
                        <img class="w-[286px] h-[228px] self-center" src="@/assets/worksllg2.svg">
                        <img class="w-[89px] h-[238px] self-center" src="@/assets/workslsm2.svg">
                      </div>
                      <div class="flex flex-row justify-between px-4 text-[#331B3B]">
                        <p class="font-bold text-[#331B3B] text-2xl">Goldcrown Labs</p>
                        <div class="cursor-pointer">
                          <p class=" border-2 border-solid rounded-2xl border-[#331B3B] font font-medium text-sm px-1">View Work</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="flex justify-center">
                <div>
                  <div class="w-[419px] h-[365px] bg-white rounded-lg">
                    <div class="flex flex-col space-y-4">
                      <div class="flex flex-row justify-center p-2">
                        <img class="w-[286px] h-[228px] self-center" src="@/assets/worksllg2.svg">
                        <img class="w-[89px] h-[238px] self-center" src="@/assets/workslsm2.svg">
                      </div>
                      <div class="flex flex-row justify-between px-4 text-[#331B3B]">
                        <p class="font-bold text-[#331B3B] text-2xl">Goldcrown Labs</p>
                        <div class="cursor-pointer">
                          <p class=" border-2 border-solid rounded-2xl border-[#331B3B] font font-medium text-sm px-1">View Work</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="flex justify-center">
                <div>
                  <div class="w-[419px] h-[365px] bg-white rounded-lg">
                    <div class="flex flex-col space-y-4">
                      <div class="flex flex-row justify-center p-2">
                        <img class="w-[286px] h-[228px] self-center" src="@/assets/worksllg2.svg">
                        <img class="w-[89px] h-[238px] self-center" src="@/assets/workslsm2.svg">
                      </div>
                      <div class="flex flex-row justify-between px-4 text-[#331B3B]">
                        <p class="font-bold text-[#331B3B] text-2xl">Goldcrown Labs</p>
                        <div class="cursor-pointer">
                          <p class=" border-2 border-solid rounded-2xl border-[#331B3B] font font-medium text-sm px-1">View Work</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
import Workcardfirst from "@/components/Blocks/Slider-work/Workcardfirst";
import Workcardsecond from "@/components/Blocks/Slider-work/Workcardsecond";
import Workcardthird from "@/components/Blocks/Slider-work/Workcardthird";

export default {
  name: "Works",
  data: function (){
    return{
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 70
          },
          750: {
            slidesPerView: 1,
            spaceBetween: 50
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 90
          }
        },
      },
    }
  },
  components: {
    Workcardthird,
    Workcardsecond,
    Workcardfirst,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, A11y],
    };
  },
}
</script>

<style>

.line__style__works::before {
  content: '';
  position: absolute;
  height: 15%;
  width: 102%;
  background: #FDC221;
  bottom: 10%;
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
   width: 1200px!important;
  padding-left: 80px;
}

@media screen and (max-width: 1280px)
{
  .works .swiper-button-next {
    position: absolute;
    top: 73%!important;
    left: 6%!important;
  }
}

@media screen and (max-width: 1024px)
{
  .works .swiper-button-next {
    position: absolute;
    top: 60%!important;
    left: 5%!important;
    margin-left: 5px!important;
  }

  .works .swiper-button-prev {
    position: absolute;
    top: 60%!important;
    left: 0%!important;
    margin-left: 5px!important;
  }
}
@media screen and (max-width: 768px)
{
  .works .swiper-button-next {
    position: absolute;
    top: 60%!important;
    left: 7%!important;
    margin-left: 5px!important;
  }
}
@media screen and (max-width: 640px)
{
  .works .swiper-button-next {
    position: absolute;
    top: 60%!important;
    left: 8%!important;
    margin-left: 5px!important;
  }
}
</style>
