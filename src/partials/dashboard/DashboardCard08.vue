<template>
  <div class="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-white text-black shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
    <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center">
      <h2 class="font-semibold text-slate-800 dark:text-black">Sales Volume</h2>
    </header>
    <LineChart :data="chartData" width="595" height="248" />
  </div>  
</template>


<script>
import { ref } from 'vue'
import LineChart from '../../charts/LineChart02.vue'

import { tailwindConfig } from '../../utils/Utils'

export default {
  name: 'DashboardCard08',
  components: {
    LineChart,
  },
  setup() {
    const chartData = ref({
      labels: [
        '12-01-2020', '01-01-2021', '02-01-2021',
        '03-01-2021', '04-01-2021', '05-01-2021',
        '06-01-2021', '07-01-2021', '08-01-2021',
        '09-01-2021', '10-01-2021', '11-01-2021',
        '12-01-2021', '01-01-2022', '02-01-2022',
        '03-01-2022', '04-01-2022', '05-01-2022',
        '06-01-2022', '07-01-2022', '08-01-2022',
        '09-01-2022', '10-01-2022', '11-01-2022',
        '12-01-2022', '01-01-2023',
      ],
      datasets: [

        {
          label: '2022',
          data: [
            73, 64, 73, 69, 104, 104, 164,
            164, 120, 120, 120, 148, 142, 104,
            122, 110, 104, 152, 166, 233, 268,
            252, 284, 284, 333, 323,
          ],
          borderColor: tailwindConfig().theme.colors.green[500],
          fill: false,
          borderWidth: 2,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 3,
          pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
          pointHoverBackgroundColor: tailwindConfig().theme.colors.indigo[500],
          pointBorderWidth: 0,
          pointHoverBorderWidth: 0,          
          clip: 20,
        },
      
        {
          label: '2023',
          data: [
            184, 86, 42, 378, 42, 243, 38,
            120, 0, 0, 42, 0, 84, 0,
            276, 0, 124, 42, 124, 88, 88,
            215, 156, 88, 124, 64,
          ],
          borderColor: tailwindConfig().theme.colors.blue[400],
          fill: false,
          borderWidth: 2,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 3,
          pointBackgroundColor: tailwindConfig().theme.colors.blue[400],
          clip: 20,
        },
       
      ],
    })

    return {
      chartData,
    } 
  }
}
</script>