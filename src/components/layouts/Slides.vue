<template>
    <div>
        <div class="relative mt-40 h-[650px] w-full max-sm:h-[520px]">
            <div
                class="absolute top-0 left-0 w-[88%] h-[576px]  bg-[#ECF7FF] rounded-tr-[400px] -z-10 max-sm:h-[450px] max-sm:top-[5%]">
            </div>
            <div class="">
                <div class="flex flex-col">
                    <div class="basis-5/12 flex justify-center mt-24 mx-[50px] max-sm:mt-4">
                        <div class="text-[#331B3B] tracking-[-0.01em] z-10 text-5xl max-xl:text-4xl  max-lg:text-3xl">
                            <p class="font-bold flex justify-center">{{ $t('slides.first') }}</p>
                            <p class="relative line__style__slides font-light flex justify-center">
                                {{ $t('slides.second') }} &nbsp;<span class="z-10">{{ $t('slides.third') }}</span></p>
                        </div>
                    </div>
                    <div class="basis-7/12 mt-24 ml-18 z-10 flex mr-40  mx-[50px] max-sm:mx-0 slides">
                        <swiper
                            :options="swiperOptions"
                            :breakpoints="swiperOptions.breakpoints"
                            :modules="modules"
                            navigation
                            :scrollbar="{ draggable: false }"
                            @swiper="onSwiper"
                            @slideChange="onSlideChange"
                            :slides-per-view="3"
                            class="select-none"
                        >
                            <swiper-slide class="flex self-start">
                                <div>
                                    <div class="w-[308px] h-48 bg-white rounded-lg my__slide__card">
                                        <div class="flex flex-col p-4 space-y-2">
                                            <img class="w-[52px] h-[48px]" src="@/assets/worldsl.svg">
                                            <div>
                                                <p class="uppercase font-bold text-base text-[#331B3B]">
                                                    {{ $t('slcards.first') }}</p>
                                            </div>
                                            <div>
                                                <p class="text-[rgba(51,27,59,0.66)] font-light text-sm">Lorem Ipsum has
                                                    been the industry's standard dummy text ever since the 1500s.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="flex self-start">
                                <div>
                                    <div class="w-[308px] h-48 bg-white rounded-lg my__slide__card">
                                        <div class="flex flex-col p-4 space-y-2">
                                            <img class="w-[52px] h-[48px]" src="@/assets/compsl.svg">
                                            <div>
                                                <p class="uppercase font-bold text-base text-[#331B3B]">
                                                    {{ $t('slcards.second') }}</p>
                                            </div>
                                            <div>
                                                <p class="text-[rgba(51,27,59,0.66)] font-light text-sm">Lorem Ipsum has
                                                    been the industry's standard dummy text ever since the 1500s.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="flex self-start">
                                <div>
                                    <div class="w-[308px] h-48 bg-white rounded-lg my__slide__card">
                                        <div class="flex flex-col p-4 space-y-2">
                                            <img class="w-[52px] h-[48px]" src="@/assets/phonesl.svg">
                                            <div>
                                                <p class="uppercase font-bold text-base text-[#331B3B]">
                                                    {{ $t('slcards.third') }}</p>
                                            </div>
                                            <div>
                                                <p class="text-[rgba(51,27,59,0.66)] font-light text-sm">Lorem Ipsum has
                                                    been the industry's standard dummy text ever since the 1500s.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="flex self-start">
                                <div>
                                    <div class="w-[308px] h-48 bg-white rounded-lg my__slide__card">
                                        <div class="flex flex-col p-4 space-y-2">
                                            <img class="w-[52px] h-[48px]" src="@/assets/worldsl.svg">
                                            <div>
                                                <p class="uppercase font-bold text-base text-[#331B3B]">
                                                    {{ $t('slcards.first') }}</p>
                                            </div>
                                            <div>
                                                <p class="text-[rgba(51,27,59,0.66)] font-light text-sm">Lorem Ipsum has
                                                    been the industry's standard dummy text ever since the 1500s.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 right-0 -z-30">
                <img class="max-xl:w-[450px] max-lg:w-[400px] max-md:w-[350px] max-sm:w-[250px] my__slide__pic"
                     src="@/assets/slide.png" alt="">
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
    data: function () {
        return {
            swiperOptions: {
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    970: {
                        slidesPerView: 2,
                        spaceBetween: 50
                    },
                    1360: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                },
            },
        }
    },
    components: {
        Cardfourth,
        Cardthird,
        Cardsecond,
        Cardfirst,
        Swiper,
        SwiperSlide,
    },
    setup () {
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
.line__style__slides::before {
    content: '';
    position: absolute;
    height: 25%;
    width: 47%;
    background: #FDC221;
    bottom: 2%;
    right: 1%;
    z-index: -10;
}

.swiper-button-prev:after {
    content: url('../../assets/leftbutton.svg') !important;
}

.swiper-button-next:after {
    content: url('../../assets/rightbutton.svg') !important;
}

.swiper-button-prev {
    position: absolute;
    top: 63% !important;
    left: 2% !important;
}

.swiper-button-next {
    position: absolute;
    top: 63% !important;
    left: 6% !important;
}

.swiper {
    height: 300px;
    width: 1200px;
    padding-left: 100px;
}

@media screen and (max-width: 1280px) {
    .swiper-button-next {
        position: absolute;
        top: 63% !important;
        left: 7% !important;
    }
}

@media screen and (max-width: 1024px) {
    .swiper-button-next {
        position: absolute;
        top: 63% !important;
        left: 8% !important;
        margin-left: 5px !important;
    }
}

@media screen and (max-width: 768px) {
    .swiper-button-next {
        position: absolute;
        top: 63% !important;
        left: 10% !important;
        margin-left: 5px !important;
    }
}

@media screen and (max-width: 640px) {
    .swiper-button-next {
        position: absolute;
        top: 63% !important;
        left: 10% !important;
        margin-left: 5px !important;
    }

    .line__style__slides::before {
        height: 20%;
        bottom: 10%;
        right: 1%;
        z-index: -10;
    }
}

@media screen and (max-width: 500px) {
    .slides .swiper {
        padding-left: 40px;
    }

    .swiper-button-next {
        top: 72% !important;
    }

    .swiper-button-prev {
        top: 72% !important;
    }

}
</style>