<template>
  <div class="max-w-screen-lg mx-auto flex flex-wrap">
    <div v-for="(company, index) in companies" :key="index" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div class="bg-white rounded-lg shadow-md p-6 h-44 overflow-hidden">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <img src="../images/icon-01.svg" alt="Company Logo" class="w-4 h-4 mr-0">
            <span class="font-semibold text-m">{{ company.name }}</span>
          </div>
          <label class="flex items-center cursor-pointer">
            <input type="checkbox" class="hidden" v-model="company.toggle">
            <div class="toggle-wrapper relative h-4 w-8 mx-2 bg-gray-300 rounded-full border-2 border-gray-300 ml-4">
              <div
                class="toggle-inner absolute h-3 w-3 bg-white rounded-full shadow-md transition-transform duration-300"
                :class="{ 'translate-x-5 bg-indigo-500': company.toggle }"
              ></div>
            </div>
          </label>
        </div>
        
        <div>
          <p class="text-gray-700 text-xs overflow-hidden">{{ company.about }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    companies: {
      type: Array,
      required: true
    }
  }
};
</script>
