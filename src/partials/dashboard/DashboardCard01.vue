<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
    <div class="px-5 pt-5 mb-5">
      
      <h2 class="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Average Referral Rate</h2>
    </div>
    <div class="ml-5 mr-5">
      <p class="text-s font-semibold text-slate-800 dark:text-slate-100 mb-2">Referral Program Budget</p>
    <ProgressBar :percentage="27" class="mb-5"/>

    <p class="text-s font-semibold text-slate-800 dark:text-slate-100 mb-2">Referral Rate by 100 percentage</p>
    <ProgressBar :percentage="67" class="mb-5"/>
    

    <p class="text-s font-semibold text-slate-800 dark:text-slate-100 mb-2">Referral Program by Compighn</p>
    <ProgressBar :percentage="52" />
    </div>
    
  </div>
</template>

<script>
import ProgressBar from '../../charts/ProgressBar.vue';

export default {
  components: {
    ProgressBar,
  },
};
</script>
