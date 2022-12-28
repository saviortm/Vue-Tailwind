<template>
  <div>
    <transition name="fade">
      <!-- Main modal -->
      <div v-if="modal" id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full flex backdrop-blur-sm">
        <div class="relative w-full h-full md:h-auto flex justify-center self-center">
          <!-- Modal content -->
          <div v-if="isModalVisible" class="relative bg-white rounded-lg shadow w-2/5">
            <button @click="showModalClose" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="authentication-modal">
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="px-6 py-6 lg:px-8">
              <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
              <form @submit.prevent="handleSubmit" class="space-y-6" action="#">
                <div>
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input v-model="state.email"  type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required>
                  <span v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</span>
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                  <input v-model="state.password"  type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                  <span v-if="v$.password.$error">{{v$.password.$errors[0].$message}}</span>
                </div>
                <div class="flex justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input id="remember" type="checkbox" value="" class="modal__checkbox w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#5f1e75]">
                    </div>
                    <label for="remember" class="ml-2 text-sm font-medium text-gray-900">Remember me</label>
                  </div>
                  <a href="#" class="text-sm text-[#331B3B] hover:underline dark:text-blue-500">Lost Password?</a>
                </div>
                <button @click="submitForm" type="submit" class="w-full text-white bg-[#331B3B] hover:bg-[#240230] focus:ring-4 focus:outline-none focus:ring-[#5f1e75] font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered? <router-link to="/signup" class="text-[#331B3B] hover:underline">Create account</router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- Success alert -->
    <Transition name="slide-fade-success">
      <div v-if="alertSuccess" class="fixed top-0 right-0 z-50 px-8 py-6 bg-green-400 text-white flex justify-between rounded">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mr-6" viewBox="0 0 20 20" fill="currentColor">
            <path
                d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
            />
          </svg>
          <p>SUCCESS! You have successfully logged in!</p>
        </div>
        <button @click="closeAlterSuccess" class="text-green-100 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </Transition>
    <!-- Danger alert -->
    <Transition name="slide-fade-danger">
      <div v-if="alertDanger" class="fixed top-0 right-0 z-50  px-8 py-6 bg-red-400 text-white flex justify-between rounded">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mr-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          <p>ERROR! There was an error logging in!</p>
        </div>
        <button @click="closeAlterWrong" class="text-red-100 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </Transition>
    <!---------   Navbar --------->
    <div id="contact-me" class="bg-transparent">
      <div class="flex justify-between h-[100px] mx-[50px] max-sm:mx-2">
        <!-- small nav menu -->
        <div
            class="self-center relative underline__style max-lg:mt-48 max-lg:z-20 max-lg:bg-[rgba(255,222,212,0.3)] max-lg:absolute max-lg:left-0 max-lg:rounded-br-3xl lg:hidden"
            v-if="show !== 1">
          <ul class="flex space-x-8 font-normal text-base text-[#331B3B] max-lg:flex-col max-lg:space-y-4 max-lg:p-20">
            <li class="max-lg:flex max-lg:justify-center z-10">
              <a class="max-lg:p-1 hover:no-underline" href="">
                <router-link to="/">
                  {{$t('pages.first')}}
                </router-link>
              </a>
            </li>
            <li class="peer z-10">
              <a class="max-lg:p-1" href="">
                <router-link to="/about">
                  {{$t('pages.second')}}
                </router-link>
              </a>
            </li>
            <!-- hoverable dropdown menu min -->
            <div class="hidden peer-hover:flex hover:flex absolute w-[400px] h-32 flex-row drop-shadow-lg max-md:w-[300px] max-sm:w-[200px]">
              <div class="basis-1/3 max-sm:basis-1/2">
              </div>
              <div class="flex basis-2/3 flex-col max-sm:basis-1/2">
                <a class="px-5 py-3 bg-transparent" href="#"></a>
                <a class="px-5 py-3 bg-transparent" href="#"></a>
                <a class="bg-[#331B3B] text-white px-5 py-3 hover:bg-[#240230] rounded-t-lg" href="#">Career</a>
                <a class="bg-[#331B3B] text-white px-5 py-3 hover:bg-[#240230]" href="#">Company</a>
                <a class="bg-[#331B3B] text-white px-5 py-3 hover:bg-[#240230] rounded-b-lg" href="#">Privacy Policy</a></div>
            </div>
            <li class="z-10">
              <a class="max-lg:p-1" href="">
                <router-link to="/services">
                  {{$t('pages.third')}}
                </router-link>
              </a>
            </li>
            <li class="z-10">
              <a class="max-lg:p-1" href="">
                <router-link to="/contact">
                  {{$t('pages.fourth')}}
                </router-link>
              </a>
            </li>
          </ul>
        </div>
        <!-- large nav menu -->
        <div class="self-center relative underline__style max-lg:mt-48 max-lg:z-20 max-lg:bg-[rgba(255,222,212,0.3)] max-lg:absolute max-lg:left-0 max-lg:rounded-br-3xl max-lg:hidden">
          <ul class="flex space-x-8 font-normal text-base text-[#331B3B] max-lg:flex-col max-lg:space-y-4 max-lg:p-20">
            <li class="z-10 max-lg:flex max-lg:justify-center hover:no-underline">
              <a class="max-lg:p-1 hover:no-underline" href="">
                <router-link to="/">
                  {{$t('pages.first')}}
                </router-link>
              </a>
            </li>
            <li class="peer z-10">
              <a class="max-lg:p-1" href="">
                <router-link to="/about">
                  {{$t('pages.second')}}
                </router-link>
              </a>
            </li>
            <!-- hoverable dropdown menu -->
            <div class="hidden peer-hover:flex hover:flex absolute w-[200px] flex-col drop-shadow-lg">
              <a class="px-5 py-3 bg-transparent" href="#"></a>
              <a class="px-5 py-3 bg-transparent" href="#"></a>
              <a class="bg-[#331B3B] text-white px-5 py-3 hover:bg-[#240230] rounded-t-lg" href="#">Career</a>
              <a class="bg-[#331B3B] text-white px-5 py-3 hover:bg-[#240230]" href="#">Company</a>
              <a class="bg-[#331B3B] text-white px-5 py-3 hover:bg-[#240230] rounded-b-lg" href="#">Privacy Policy</a>
            </div>
            <li class="z-10">
              <a class="max-lg:p-1" href="">
                <router-link to="/services">
                  {{$t('pages.third')}}
                </router-link>
              </a>
            </li>
            <li>
              <a class="max-lg:p-1" href="">
                <router-link to="/contact">
                  {{$t('pages.fourth')}}
                </router-link>
              </a>
            </li>
          </ul>
        </div>
        <!-- burger button -->
        <div class="flex order-first lg:hidden self-center cursor-pointer z-40" @click="showMenu"
             v-if="show !== 0">
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
        <!-- x button -->
        <div class="flex order-first lg:hidden self-center cursor-pointer z-40" @click="showMenu"
             v-if="show !== 1">
          <p class="font-[800] text-2xl text-[#331B3B]">&#x2715</p>
        </div>
        <!-- title -->
        <div class="self-center z-20">
          <h1 class="text-2xl tracking-widest text-[#331B3B] font-bold max-sm:text-xl max-lg:static">
            {{ $t('title') }}
          </h1>
        </div>
        <!-- icons on the right -->
        <div class="flex self-center space-x-2 z-20 max-sm:space-x-0 pb-[]">
          <span class="text-xl font-semibold text-[#331B3B] self-center cursor-pointer" @click="switchLang">{{ $t('switchLang') }}</span>
          <img class="cursor-pointer max-sm:w-[40px]" src="../../assets/facebook.svg" alt="">
          <img class="cursor-pointer max-sm:w-[40px]" src="../../assets/linkedin.svg" alt="">
          <img class="cursor-pointer max-sm:w-[40px]" src="../../assets/instagram.svg" alt="">
<!--          <span v-if="user" @click="showModalOpen" class="text-lg font-semibold text-[#331B3B] self-center cursor-pointer flex flex-col max-lg:text-sm max-sm:text-xs"><span>Log</span><span>In</span></span>-->
<!--          <a href="javascript:void(0)" v-if="user" @click="handleClick" class="text-lg font-semibold text-[#331B3B] self-center cursor-pointer flex flex-col max-lg:text-sm max-sm:text-xs"><span>Log</span><span>Out</span> </a>-->
          <span @click="showModalOpen" class="text-lg font-semibold text-[#331B3B] self-center cursor-pointer flex flex-col max-lg:text-sm max-sm:text-xs"><span>Log</span><span>In</span></span>
          <a href="javascript:void(0)" @click="handleClick" class="text-lg font-semibold text-[#331B3B] self-center cursor-pointer flex flex-col max-lg:text-sm max-sm:text-xs"><span>Log</span><span>Out</span> </a>
        </div>
      </div>
    </div>
  </div>
</template>

<!-----   script tag   ------>
<script>
import useValidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { reactive, computed } from "vue";
import axios from 'axios'
import { useI18n } from 'vue-i18n';
export default {
  setup()
  {
    const { t, locale } = useI18n({useScope: 'global'})
    const switchLang = () => {
      locale.value === 'en' ? locale.value = 'uz' : locale.value = 'en';
      console.log('Language: '+ locale.value);
    }
    const state = reactive({
      email: '',
      password:'',
    })
    const rules = computed(() =>{
      return{
        email: {required, email},
        password: {required, minLength: minLength(6)},
      }
    })
    const v$ = useValidate(rules, state)
    return {
      state,
      v$,
    }
  },
  name: "NavBar",
  props: ['user'],
  data: function () {
    return {
      modal: false,
      alertSuccess: false,
      alertDanger: false,
      email: '',
      password: '',
      show: 1,
    };
  },
  computed: {
    isModalVisible() {
      return this.modal;
    }
  },
  methods: {
    showMenu() {
      if (this.show > 0){
        this.show=0;
      }
      else {
        this.show = 1;
      }
    },
    showModalOpen: function () {
      this.modal = true
    },
    showModalClose: function () {
      this.modal = false
    },
    closeAlterSuccess(){
      this.alertSuccess = false
    },
    closeAlterWrong(){
      this.alertDanger = false
    },
    Jump() {
      const element = document.getElementById('contact-me');
      element.scrollIntoView({ behavior: 'smooth' });
    },
    async handleSubmit(){
      try {
        this.v$.$validate()
        if(!this.v$.$error){
          const response = await axios.post('/api/login', {
            email: this.state.email,
            password: this.state.password,
          });
          console.log(response.data.token)
          localStorage.setItem('token', response.data.token);
          this.alertSuccess = true;
          setTimeout(() => this.alertSuccess = false, 3000)
          setTimeout(() => this.modal = false, 500)
          setTimeout(() => this.$router.push('/admin'), 3000)
        }
        else {
          this.alertDanger = true;
          setTimeout(() => this.alertDanger = false, 3000)
        }
      }
      catch (error){
        this.alertDanger = true;
        setTimeout(() => this.alertDanger = false, 3000)
      }

    },
    // submitForm() {
    //   this.v$.$validate()
    //   if(!this.v$.$error) {
    //     this.alertSuccess = true;
    //     setTimeout(() => this.alertSuccess = false, 3000)
    //     setTimeout(() => this.modal = false, 500)
    //
    //   } else {
    //     this.alertDanger = true;
    //     setTimeout(() => this.alertDanger = false, 3000)
    //   }
    // },
    handleClick() {
      localStorage.removeItem('token');
      this.$router.push('/');
      console.log('Log Out');
    }
  },
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
/*-----------------transition modal----------------*/
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
/*------------transition alert danger----------------*/
.slide-fade-danger-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-danger-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-danger-enter-from,
.slide-fade-danger-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
/*------------transition alert success----------------*/
.slide-fade-success-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-success-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-success-enter-from,
.slide-fade-success-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
/*------------ fixed button hover ----------------*/
.fixed_button:hover {
  stroke-width: 3;
}
</style>