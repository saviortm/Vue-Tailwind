<template>
  <div>
    <NavBar/>
    <!-----   Registration modal   ------>
    <section class="bg-gray-50">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-2 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-[#331B3B] md:text-2xl flex justify-center">
              Create an Account
            </h1>
            <form @submit.prevent="handleSubmit" class="space-y-2 md:space-y-3" action="#">
              <div>
                <label for="fname" class="block mb-1 text-sm font-medium text-gray-900 ">Your first name</label>
                <input v-model="state.first" type="text" name="name" id="fname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="first name" required="">
                <span v-if="v$.first.$error">{{v$.first.$errors[0].$message}}</span>
              </div>
              <div>
                <label for="lname" class="block mb-1 text-sm font-medium text-gray-900 ">Your last name</label>
                <input v-model="state.last" type="text" name="name" id="lname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="last name" required="">
                <span v-if="v$.last.$error">{{v$.last.$errors[0].$message}}</span>
              </div>
              <div>
                <label for="email" class="block mb-1 text-sm font-medium text-gray-900 ">Your email</label>
                <input v-model="state.email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="">
                <span v-if="v$.email.$error">{{v$.email.$errors[0].$message}}</span>
              </div>
              <div>
                <label for="password" class="block mb-1 text-sm font-medium text-gray-900 ">Password</label>
                <input v-model="state.password.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                <span v-if="v$.password.password.$error">{{v$.password.password.$errors[0].$message}}</span>
              </div>
              <div>
                <label for="confirm-password" class="block mb-1 text-sm font-medium text-gray-900 ">Confirm password</label>
                <input v-model="state.password.confirm" type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                <span v-if="v$.password.confirm.$error">{{v$.password.confirm.$errors[0].$message}}</span>
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input @click="checkBox" id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="">
                </div>
                <div class="ml-3 text-sm">
                  <label for="terms" class="font-light text-gray-500">I accept the <a class="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                </div>
              </div>
              <button @click="submitForm" type="submit" class="w-full text-white bg-[#331B3B] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- Success alert -->
    <Transition name="slide-fade-success">
      <div v-if="alertSuccess" class="fixed top-0 right-0 z-50 px-8 py-6 bg-green-400 text-white flex justify-between rounded">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mr-6" viewBox="0 0 20 20" fill="currentColor">
            <path
                d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
            />
          </svg>
          <p>SUCCESS! You have successfully registered!</p>
        </div>
      </div>
    </Transition>
    <!-- Danger alert -->
    <Transition name="slide-fade-danger">
      <div v-if="alertDanger" class="fixed top-0 right-0 z-50  px-8 py-6 bg-red-400 text-white flex justify-between rounded">
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mr-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          <p>ERROR! There was an error registering!</p>
        </div>
      </div>
    </Transition>
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios'
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";
import useValidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import { reactive, computed } from "vue";

export default {
  setup()
  {
    const state = reactive({
      first: '',
      last: '',
      email: '',
      password:{
        password: '',
        confirm: '',
        check: '',
      },
    })
    const rules = computed(() =>{
      return{
        first: {required},
        last: {required},
        email: {required, email},
        password: {
          password: {required, minLength: minLength(6)},
          confirm: {required, sameAs: sameAs(state.password.password)}
        },
        check: {required},
      }
    })
    const v$ = useValidate(rules, state)
    return {
      state,
      v$,
    }
  },
  name: "SignUp",
  components: {Footer, NavBar},
  data() {
    return{
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirm: '',
      alertSuccess: false,
      alertDanger: false,

    }
  },
  methods: {
    async handleSubmit(){
      this.v$.$validate()
      if(!this.v$.$error) {
        const response = await axios.post('/api/registr', {
          first_name: this.state.first,
          last_name: this.state.last,
          email: this.state.email,
          password: this.state.password.password,
          password_confirm: this.state.password.confirm,
        });
        console.log(response);
        setTimeout(() => this.$router.push('/'), 3000)
      }
    },
    submitForm() {
      this.v$.$validate()
      if(!this.v$.$error) {
        this.alertSuccess = true;
        setTimeout(() => this.alertSuccess = false, 3000)
      } else {
        this.alertDanger = true;
        setTimeout(() => this.alertDanger = false, 3000)
      }
    },
    checkBox() {
      this.state.check = 1
    }
  }
}
</script>

<style scoped>
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
</style>