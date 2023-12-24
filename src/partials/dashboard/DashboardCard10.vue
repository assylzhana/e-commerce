<template>
  <div class="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
    <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">Latest Accepted Reviews</h2>
    </header>
    <div class="p-3">

   
      <div class="overflow-x-auto">
        <table class="table-auto w-full">

          <tbody class="text-sm divide-y divide-slate-100 dark:divide-slate-700">
            <tr
              v-for="customer in customers"
              :key="customer.id"
            >
              <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                    <img class="rounded-full" :src="customer.image" width="40" height="40" :alt="customer.name" />
                  </div>
                  <div class="font-medium text-slate-800 dark:text-slate-100">{{customer.name}}</div>
                </div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-left">{{customer.rating}}</div>
              </td>
              <td class="p-2 whitespace-nowrap max-w-64">
                <div class="text-left font-medium text-black-500 max-w-64">{{customer.spent}}</div>
              </td>
              <td class="p-2 whitespace-nowrap">
                <div class="text-s text-center">{{customer.location}}</div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

import Image01 from '../../images/user-36-05.jpg'
import Image02 from '../../images/user-36-06.jpg'
import Image03 from '../../images/user-36-07.jpg'
import Image04 from '../../images/user-36-08.jpg'

export default {
  name: 'DashboardCard10',
  setup() {
    const customers = ref([
      {
        id: '0',
        image: Image01,
        name: 'J. Davidson',
        rating: '⭐⭐⭐⭐✰ 4',
        location: 'at 02:30 am',
        spent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
      {
        id: '1',
        image: Image02,
        name: 'Michel Brandon',
        rating: '⭐⭐⭐✰✰ 3',
        location: 'at 10:30 am',
        spent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
      {
        id: '2',
        image: Image03,
        name: 'Mr Warner',
        rating: '⭐⭐⭐⭐⭐5',
        location: 'at 02:30 am',
        spent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
      {
        id: '3',
        image: Image04,
        name: 'Maria Smith',
        rating: '⭐⭐⭐⭐✰ 4',
        location: 'at 03:30 am',
        spent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
        
    ])

    return {
      customers,
    }    
  }
}
</script>