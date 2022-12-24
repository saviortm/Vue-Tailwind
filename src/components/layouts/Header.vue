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
                </div>
                <div>
                  <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                  <input v-model="state.password"  type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
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
import useValidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { reactive, computed } from "vue";
import axios from 'axios'
export default {
  setup()
  {
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
  name: "Header",
  data: function () {
    return {
      modal: false,
      alertSuccess: false,
      alertDanger: false,
      email: '',
      password: ''
    };
  },
  computed: {
    isModalVisible() {
      return this.modal;
    }
  },
  methods: {
    showModalOpen: function () {
      this.modal = true
    },
    showModalClose: function () {
      this.modal = false
    },
    submitForm() {
      this.v$.$validate()
      if(!this.v$.$error) {
        this.alertSuccess = true;
        setTimeout(() => this.alertSuccess = false, 3000)
        setTimeout(() => this.modal = false, 500)
      } else {
        this.alertDanger = true;
        setTimeout(() => this.alertDanger = false, 3000)
      }
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
      const response = await axios.post('/api/login', {
        email: this.state.email,
        password: this.state.password,
      });
      localStorage.setItem('token', response.data.token);
      console.log(response.data.token)
      setTimeout(() => this.$router.push('/admin'), 2000)
    }
  }
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