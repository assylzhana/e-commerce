<template>
    <div class="relative bg-white dark:bg-white p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      <h2 class="text-2xl font-semibold mb-4">Payment Information</h2>
  
      <!-- Product Information Section -->
      <div class="mb-4">
        <h3 class="text-lg font-semibold mb-2">Product Information</h3>
  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Product Name -->
          <div class="mb-4">
            <label for="productName" class="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
            <input type="text" id="productName" class="w-full p-2 border border-gray-300" placeholder="Enter product name">
          </div>
  
          <!-- Brand Name -->
          <div class="mb-4">
            <label for="brandName" class="block text-sm font-medium text-gray-700 mb-1">Brand Name</label>
            <input type="text" id="brandName" class="w-full p-2 border border-gray-300" placeholder="Enter brand name">
          </div>
  
          <!-- Category -->
          <div class="mb-4">
            <label for="category" class="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <input type="text" id="category" class="w-full p-2 border border-gray-300" placeholder="Enter category">
          </div>
  
          <!-- Regular Price -->
          <div class="mb-4">
            <label for="regularPrice" class="block text-sm font-medium text-gray-700 mb-1">Regular Price</label>
            <input type="number" id="regularPrice" class="w-full p-2 border border-gray-300" placeholder="Enter regular price">
          </div>
  
          <!-- Sale Price -->
          <div class="mb-4">
            <label for="salePrice" class="block text-sm font-medium text-gray-700 mb-1">Sale Price</label>
            <input type="number" id="salePrice" class="w-full p-2 border border-gray-300" placeholder="Enter sale price">
          </div>
  
          <!-- Schedule Date -->
          <div class="mb-4">
            <label for="scheduleDate" class="block text-sm font-medium text-gray-700 mb-1">Schedule Date</label>
            <input type="date" id="scheduleDate" class="w-full p-2 border border-gray-300">
          </div>
  
          <!-- Product Type -->
          <div class="mb-4">
            <label for="productType" class="block text-sm font-medium text-gray-700 mb-1">Product Type</label>
            <input type="text" id="productType" class="w-full p-2 border border-gray-300" placeholder="Enter product type">
          </div>
  
          <!-- Stock Status -->
          <div class="mb-4">
            <label for="stockStatus" class="block text-sm font-medium text-gray-700 mb-1">Stock Status</label>
            <select id="stockStatus" class="w-full p-2 border border-gray-300">
              <option value="in-stock">In Stock</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
          </div>
  
          <!-- SKU -->
          <div class="mb-4">
            <label for="sku" class="block text-sm font-medium text-gray-700 mb-1">SKU</label>
            <input type="text" id="sku" class="w-full p-2 border border-gray-300" placeholder="Enter SKU">
          </div>
  
          <!-- Payment Methods -->
          <div class="mb-4">
            <label for="paymentMethods" class="block text-sm font-medium text-gray-700 mb-1">Payment Methods</label>
            <input type="text" id="paymentMethods" class="w-full p-2 border border-gray-300" placeholder="Enter payment methods">
          </div>
        </div>
      </div>
  
      <!-- Buttons Section -->
      <div class="flex justify-end">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Save to Draft</button>
        <button class="bg-green-500 text-white px-4 py-2 rounded-md">Publish Product</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PaymentForm',
  }
  </script>
  
  <style scoped>
  </style>
  