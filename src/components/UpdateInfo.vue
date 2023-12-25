<template>
    <div class="info-form max-w-2xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 class="text-2xl font-bold mb-4">My Profile Details</h2>
      <div class="flex flex-wrap">
        <!-- First Column -->
        <div class="w-full md:w-1/2 px-4 mb-4">
          <div class="mb-4">
            <label for="firstName" class="block text-sm font-medium text-gray-600">First Name</label>
            <input v-model="firstName" type="text" id="firstName" name="firstName" class="mt-1 p-2 w-full border rounded-md">
          </div>
  
          <div class="mb-4">
            <label for="lastName" class="block text-sm font-medium text-gray-600">Last Name</label>
            <input v-model="lastName" type="text" id="lastName" name="lastName" class="mt-1 p-2 w-full border rounded-md">
          </div>
  
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-600">Email</label>
            <input v-model="email" type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md">
          </div>
  
          <div class="mb-4">
            <label for="phoneNumber" class="block text-sm font-medium text-gray-600">Phone Number</label>
            <input v-model="phoneNumber" type="tel" id="phoneNumber" name="phoneNumber" class="mt-1 p-2 w-full border rounded-md">
          </div>
  
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
            <input v-model="password" type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md">
          </div>
        </div>
  
        <div class="w-full md:w-1/2 px-4 mb-4">
          <div class="mb-4">
            <label for="country" class="block text-sm font-medium text-gray-600">Country</label>
            <input v-model="country" type="text" id="country" name="country" class="mt-1 p-2 w-full border rounded-md">
          </div>
  
          <div class="mb-4">
            <label for="city" class="block text-sm font-medium text-gray-600">City</label>
            <input v-model="city" type="text" id="city" name="city" class="mt-1 p-2 w-full border rounded-md">
          </div>
  
          <div class="mb-4">
            <label for="state" class="block text-sm font-medium text-gray-600">State</label>
            <input v-model="state" type="text" id="state" name="state" class="mt-1 p-2 w-full border rounded-md">
          </div>
  
          <div class="mb-4">
            <label for="zipCode" class="block text-sm font-medium text-gray-600">Zip Code</label>
            <input v-model="zipCode" type="text" id="zipCode" name="zipCode" class="mt-1 p-2 w-full border rounded-md">
          </div>
  
          <div class="mb-4">
            <label for="address" class="block text-sm font-medium text-gray-600">Address</label>
            <input v-model="address" type="text" id="address" name="address" class="mt-1 p-2 w-full border rounded-md">
          </div>
        </div>
      </div>
  
      <button @click="updateInformation" class="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 focus:outline-none">
        Update Information
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        country: '',
        city: '',
        state: '',
        zipCode: '',
        address: '',
      };
    },
    methods: {
      updateInformation() {
        console.log('Updating information...');
      },
    },
  };
  </script>
  