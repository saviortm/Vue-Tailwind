<template>
  <div>
    <div class="flex justify-between m-8">
        <div class="flex space-x-2.5">
          <button
              @click="prevPage"
              :disabled="pageNumber === 0"
              class="p-[13px] border border-[#C2C2C2] rounded-[14px] bg-white"
          >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M12 18L6 12L12 6"
                  stroke="#331B3B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
              <path
                  d="M19 18L13 12L19 6"
                  stroke="#EEF2FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="flex border border-[#C2C2C2] rounded-[14px] bg-white">
            <div
                v-for="item in pageCount"
                :key="item"
                :class="
                item === pageNumber + 1
                  ? 'transition-all text-lg text-white bg-[#331B3B] rounded-[14px] shadow-[0px_7px_16px_rgba(0,0,0,0.14)]'
                  : 'transition-all text-lg text-[#202020] hover:text-white hover:bg-[#5f1e75] hover:rounded-[14px] hover:shadow-[0px_7px_16px_rgba(0,0,0,0.14)] cursor-pointer'
              "
                @click="currentPage(item)"
            >
              <button class="mt-[14px] mb-[12px] mr-[18px] ml-[22px]">
                {{ item }}
              </button>
            </div>
          </div>
          <button
              :disabled="pageNumber >= pageCount - 1"
              @click="nextPage"
              class="p-[13px] border border-[#C2C2C2] rounded-[14px] bg-white"
          >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M12 18L18 12L12 6"
                  stroke="#331B3B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
              <path
                  d="M5 18L11 12L5 6"
                  stroke="#EEF2FF"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginationVue",
  props: {
    datas: {
      type: Array,
      default: [],
    },
  },
  data: () => ({
    pageNumber: 0,
  }),
  methods: {
    prevPage() {
      this.pageNumber--;
      console.log('From Pagination prevPage() pageNumber :'+ this.pageNumber)
      this.$emit("prevPage");
    },
    nextPage() {
      this.pageNumber++;
      console.log('From Pagination nextPage() pageNumber :'+ this.pageNumber)
      this.$emit("nextPage");
    },
    currentPage(currentPage) {
      this.pageNumber = 0;
      this.pageNumber = this.pageNumber + (currentPage - 1);
      console.log('From Pagination currentPage() pageNumber :'+ this.pageNumber)
      console.log('From Pagination currentPage() currentPage :'+ currentPage)
      this.$emit("currentPage", currentPage)

    },
  },
  computed: {
    pageCount() {
      let l = this.datas.length,
          s = 6;
      return Math.ceil(l / s);
    },
  },
};
</script>

<style></style>