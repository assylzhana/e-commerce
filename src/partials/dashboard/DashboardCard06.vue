<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
    <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">Conversation rate</h2>
    </header>
    <div class="col-span-6 grid grid-cols-2 gap-6">
        <div class="col-span-1">
          <table class="w-full text-xs p-2">
            <thead>
    <tr>
      <th class="border-b border-slate-100 dark:border-slate-700 py-2">Year</th>
      <th class="border-b border-slate-100 dark:border-slate-700 py-2">Customers</th>
      <th class="border-b border-slate-100 dark:border-slate-700 py-2">Trend</th>
      <th class="border-b border-slate-100 dark:border-slate-700 py-2">Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border-b border-slate-100 dark:border-slate-700 py-2">2022</td>
      <td class="border-b border-slate-100 dark:border-slate-700 py-2">3234</td>
      <td class="border-b border-slate-100 dark:border-slate-700 py-2">10%</td>
      <td class="border-b border-slate-100 dark:border-slate-700 py-2">$124k</td>
    </tr>

    <tr>
      <td class="border-b border-slate-100 dark:border-slate-700 py-2">2023</td>
      <td class="border-b border-slate-100 dark:border-slate-700 py-2">12345</td>
      <td class="border-b border-slate-100 dark:border-slate-700 py-2">35%</td>
      <td class="border-b border-slate-100 dark:border-slate-700 py-2">$32k</td>
    </tr>
  </tbody>
</table>
<br>
<div class="col-span-6 grid grid-cols-2 gap-6">
        <div class="col-span-1">
      <div class=" items-start">
        <div class="text-xl font-bold text-slate-800 dark:text-slate-100 mr-2">32456</div>
        <div class="text-xs text-slate-800 dark:text-slate-100 mr-2">Regular customers</div>
        <br>
        <div class="text-xs  mr-2 text-green-500">+14.56%</div>
      </div>
      </div>
      <div class="col-span-1">
      <div class=" items-start">
        <div class="text-xl font-bold text-slate-800 dark:text-slate-100 mr-2">+12345</div>
        <div class="text-xs text-slate-800 dark:text-slate-100 mr-2">New customers</div>
        <br>
        <div class="text-xs  mr-2 text-green-500">+23%</div>
      </div>
      </div>
      </div>
    
        </div>
        <div class="col-span-1">
          <DoughnutChart :data="chartData" width="300" height="200" />
        </div>
        </div>
    
  </div>
</template>

<script>
import { ref } from 'vue'
import DoughnutChart from '../../charts/DoughnutChart.vue'

import { tailwindConfig } from '../../utils/Utils'

export default {
  name: 'DashboardCard06',
  components: {
    DoughnutChart,
  },
  setup() {
    const chartData = ref({
      labels: ['', '', ''],
      datasets: [
        {
          
          data: [
            68, 32, 0,
          ],
          backgroundColor: [
            tailwindConfig().theme.colors.indigo[500],
            tailwindConfig().theme.colors.blue[400],
            tailwindConfig().theme.colors.indigo[800],
          ],
          hoverBackgroundColor: [
            tailwindConfig().theme.colors.indigo[600],
            tailwindConfig().theme.colors.blue[500],
            tailwindConfig().theme.colors.indigo[900],
          ],
          borderWidth: 0,
        },
      ],
    })

    return {
      chartData,
    } 
  }
}
</script>