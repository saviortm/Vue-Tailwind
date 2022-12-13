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
          <div @click="showModalopen" class="cursor-pointer flex justify-center w-52 h-16 bg-[#331B3B] rounded-xl max-xl:w-48 max-xl:h-14 max-md:w-40 max-md:h-12 max-sm:w-32 max-sm:h-10">
            <div  class="flex self-center justify-center text-white w-28 h-6"><p class="font-bold text-base max-xl:text-sm uppercase max-sm:font-semibold">{{$t('buttons.start')}}</p>
            </div>
          </div>
        </div>
        <div class="basis-7/12 max-lg: ">
          <div class="header__height max-lg:relative max-lg:h-[550px] max-sm:h-[520px]">
          </div>
          <div class="absolute right-0 top-0">
            <img class="max-xl:w-[650px] max-lg:w-full" src="../../assets/header1.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- Main modal -->
    <div v-if="this.modal" id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full flex backdrop-blur-sm">
      <div class="relative w-full h-full md:h-auto flex justify-center self-center">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow w-2/5">
          <button @click="showModalclose" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="authentication-modal">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="px-6 py-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
            <form class="space-y-6" action="#">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required>
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
              </div>
              <div class="flex justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" class="modal__checkbox w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#5f1e75]" required>
                  </div>
                  <label for="remember" class="ml-2 text-sm font-medium text-gray-900">Remember me</label>
                </div>
                <a href="#" class="text-sm text-[#331B3B] hover:underline dark:text-blue-500">Lost Password?</a>
              </div>
              <button type="submit" class="w-full text-white bg-[#331B3B] hover:bg-[#240230] focus:ring-4 focus:outline-none focus:ring-[#5f1e75] font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <a href="#" class="text-[#331B3B] hover:underline">Create account</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>
<script>
export default {
  name: "Header",
  data: function () {
    return{
      modal: false
    }
  },
  methods: {
    showModalopen: function () {
      this.modal = true
      console.log('Modal is '+ this.modal)
    },
    showModalclose: function () {
      this.modal = false
      console.log('Modal is '+ this.modal)
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
</style>