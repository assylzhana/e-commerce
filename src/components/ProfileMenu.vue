<template>
    <div class="flex flex-col items-center relative bg-white w-64 dark:bg-white p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      <img src="../images/iphone.jpg" alt="Profile Image" class="w-24 h-24 rounded-full mb-2" />
      <h2 class="text-xl font-bold text-gray-800">{{ userName }}</h2>
      <div class="bg-red-500 p-1 rounded">
        <p class="text-sm text-white">{{ userRole }}</p>
      </div>
      <p class="text-sm text-gray-600">Last Visit: {{ lastVisitDate }}</p>
      <button @click="logout" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      profileImage: String,
      userName: String,
      userRole: String,
      lastVisitDate: String,
    },
    methods: {
      logout() {
        this.$emit('logout');
      },
    },
  };
  </script>
  