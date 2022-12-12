<template>
  <div>
    <div class="bg-transparent">
      <div class="flex justify-between h-[100px] mx-[50px] max-sm:mx-2">
        <div
            class="self-center relative underline__style max-lg:mt-48 max-lg:z-20 max-lg:bg-[rgba(255,222,212,0.3)] max-lg:absolute max-lg:left-0 max-lg:rounded-br-3xl"
            v-if="this.show !== 1">
          <ul class="flex space-x-8 font-normal text-base text-[#331B3B] max-lg:flex-col max-lg:space-y-4 max-lg:p-20">
            <li class="max-lg:flex max-lg:justify-center"><a class="max-lg:p-1" href="">
              <router-link to="/">
                {{$t('pages.first')}}
              </router-link>
            </a></li>
            <li><a class="max-lg:p-1" href="">
              <router-link to="/about">
                {{$t('pages.second')}}
              </router-link>
            </a></li>
            <li><a class="max-lg:p-1" href="">
              <router-link to="/services">
                {{$t('pages.third')}}
              </router-link>
            </a></li>
            <li><a class="max-lg:p-1" href="">
              <router-link to="/contact">
                {{$t('pages.fourth')}}
              </router-link>
            </a></li>
          </ul>
        </div>
        <div
            class="self-center relative underline__style max-lg:mt-48 max-lg:z-20 max-lg:bg-[rgba(255,222,212,0.3)] max-lg:absolute max-lg:left-0 max-lg:rounded-br-3xl max-lg:hidden">
          <ul class="flex space-x-8 font-normal text-base text-[#331B3B] max-lg:flex-col max-lg:space-y-4 max-lg:p-20">
            <li class="max-lg:flex max-lg:justify-center"><a class="max-lg:p-1" href="">
              <router-link to="/">
                {{$t('pages.first')}}
              </router-link>
            </a></li>
            <li><a class="max-lg:p-1" href="">
              <router-link to="/about">
                {{$t('pages.second')}}
              </router-link>
            </a></li>
            <li><a class="max-lg:p-1" href="">
              <router-link to="/services">
                {{$t('pages.third')}}
              </router-link>
            </a></li>
            <li><a class="max-lg:p-1" href="">
              <router-link to="/contact">
                {{$t('pages.fourth')}}
              </router-link>
            </a></li>
          </ul>
        </div>
        <div class="flex order-first lg:hidden self-center cursor-pointer z-40" @click="showMenu"
             v-if="this.show !== 0">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div class="flex order-first lg:hidden self-center cursor-pointer z-40" @click="showMenu"
             v-if="this.show !== 1">
          <p class="font-[800] text-2xl text-[#331B3B]">&#x2715</p>
        </div>
        <div class="self-center z-20">
          <h1 class="text-2xl tracking-widest text-[#331B3B] font-bold max-sm:text-xl max-lg:static">
            {{ $t('title') }}
          </h1>
        </div>
        <div class="flex self-center space-x-2 z-20 max-sm:space-x-0">
          <span class="text-xl font-semibold text-[#331B3B] self-center cursor-pointer"
                @click="switchLangFunc">{{ $t('switchLang') }}</span>
          <img class="cursor-pointer max-sm:w-[40px]" src="../../assets/facebook.svg" alt="">
          <img class="cursor-pointer max-sm:w-[40px]" src="../../assets/linkedin.svg" alt="">
          <img class="cursor-pointer max-sm:w-[40px]" src="../../assets/instagram.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data: function () {
    return {
      show: 1
    }
  },
  methods: {
    showMenu: function () {
      if (this.show > 0) {
        this.show = 0;
      } else {
        this.show = 1;
      }
      console.log('Show is :' + this.show);
    },
  }
}
</script>

<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n({useScope: 'global'})

const switchLangFunc = () => {
  locale.value === 'en' ? locale.value = 'uz' : locale.value = 'en';
  console.log('Language: '+ locale.value);
}
</script>

<style scoped>
.underline__style ul li:hover a::before {
  content: '';
  position: absolute;
  height: 2px;
  width: 21px;
  background: #FDC221;
  bottom: 0;
}

.underline__style ul li:hover a {
  font-weight: 500;
}

@media screen and (max-width: 1024px) {

  .underline__style ul li:hover a {
    font-weight: 400;
  }

  .underline__style ul li a:hover {
    background: #331B3B;
    color: white;
    border-radius: 1rem;
  }

  .underline__style ul li:hover a::before {
    content: '';
    position: static;
  }
}
</style>