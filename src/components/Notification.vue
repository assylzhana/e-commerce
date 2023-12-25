<template>
    <div class="flex flex-col items-center relative bg-white w-64 dark:bg-white p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold">Notifications</h2>
        <span class="text-gray-600">({{ notificationCount }})</span>
      </div>
  
      
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold">Messages</h2>
        <span class="text-gray-600">({{ messageCount }})</span>
      </div>

  
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        notificationCount: 2,
        messageCount: 7,
      };
    },
  };
  </script>
  