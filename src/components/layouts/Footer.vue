<template>
  <div>
    <div class="flex mt-24 bg-black w-full h-[453px] rounded-tr-[158px]">
      <div class="flex flex-row justify-between mx-[50px] w-full mr-36 max-xl:mr-24 max-lg:mr-16 max-lg:grid max-lg:grid-cols-2 max-md:flex max-md:flex-col">
          <div class="flex flex-col text-white space-y-5 mt-20 max-md:space-y-0 max-md:mt-4 max-md:grid max-md:justify-items-center">
            <h1 class="text-4xl max-xl:text-3xl tracking-widest">Dream Agency</h1>
            <p class="w-[439px] h-[100px] font-normal text-base tracking-[0.02em] max-xl:text-sm max-lg:w-[80%]">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
            <p class="font-semibold text-base  tracking-[0.02em] uppercase max-xl:text-sm">Get In Touch</p>
            <div class="flex max-md:grid max-md:justify-items-center">
              <div class="flex flex-row space-x-0 border-solid border-2 border-white max-lg:w-[80%] max-md:mt-1 max-md:h-[70%]">
                <input id="pposition" type="text" placeholder="ENTER YOUR EMAIL" class="placeholder-white bg-black w-64 h-[52px] p-2 max-md:h-[100%]">
                <div class="flex justify-center w-36 h-[52px] bg-white cursor-pointer max-md:h-[100%]">
                  <p class="font-semibold text-base  tracking-[0.02em] uppercase text-black self-center">send</p>
                </div>
              </div>
            </div>
        </div>

        <div class="flex justify-center" id="my-map">
          <iframe class="self-center max-xl:h-[280px] max-xl:w-[400px] max-lg:h-[250px] max-lg:w-[350px] max-md:h-[200px] max-md:w-[400px] max-md:mb-8" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2088.411282589991!2d69.24475504297743!3d41.3215105611236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b748cff07e3%3A0xc566dcaccfd57ac!2sAvtotest!5e0!3m2!1sen!2s!4v1669208864190!5m2!1sen!2s" width="484" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

</style>