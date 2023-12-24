<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
    <div class="px-5 pt-5">
      <header class="flex justify-between items-start mb-2">
        <img src="../../images/icon-02.svg" width="32" height="32" alt="Icon 02" />
       
      </header>
      <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Income 2022</h2>

      <div class="flex items-start">
        <div class="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">$91,6k</div>
        <div class="text-sm font-semibold text-white px-1.5 bg-green-500">+10%</div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { ref } from 'vue'
import LineChart from '../../charts/LineChart01.vue'
import EditMenu from '../../components/DropdownEditMenu.vue'

// Import utilities

export default {
  name: 'DashboardCard01',
  components: {
    LineChart,
    EditMenu,
  },
  setup() {
    const chartData = ref({
      
      
    })

    return {
      chartData,
    } 
  }
}
</script>