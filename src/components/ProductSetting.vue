<template>
    <div class="relative bg-white dark:bg-white p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      <h2 class="text-2xl font-semibold mb-4">Product Settings</h2>
  
      <div class="flex items-center mb-4">
        <div class="w-52">
        <h3 class="text-lg font-semibold mb-2">Product Photo</h3>
        <img src="../images/iphone.jpg" alt="Product Photo" class="w-full h-auto rounded-md">
      </div>
        <div class="w-60 mt-8">
          <div class="w-full h-48 bg-gray-300 rounded-md flex items-center justify-center relative">

            <span class="text-blue-600">Add Photo</span>
  
          </div>
        </div><br>
      </div>
      <div class="ml-8">
          <h3 class="text-lg text-blue-600 font-semibold mb-2">More Galery options</h3>
          <p class="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h4 class="text-lg text-blue-600 font-semibold mb-2">Attachment File</h4>

        </div>
        <br>
        <div class="flex mb-4">
      <div class="w-1/3 pr-2">
        <label for="attributes" class="block text-sm font-medium text-gray-700 mb-1">Attributes</label>
        <input type="text" id="attributes" class="w-full p-2 border border-gray-300" placeholder="Value 1" value="Simple">
      </div>

      <div class="w-1/3 pr-2">
        <label for="dimensions" class="block text-sm font-medium text-gray-700 mb-1">L*W*H</label>
        <input type="text" id="dimensions" class="w-full p-2 border border-gray-300" placeholder="Value 2" value="146*71*7">
      </div>

      <div class="w-1/3">
        <label for="weight" class="block text-sm font-medium text-gray-700 mb-1">Weight</label>
        <input type="text" id="weight" class="w-full p-2 border border-gray-300" placeholder="Value 3" value="0,200">
      </div>
    </div>

    <div class="ml-8">
          <h3 class="text-lg text-gray-600 font-semibold mb-2">Description</h3>
          <p class="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

    </div>
</template>

<script>
    export default {
    name: 'ProductSettings',
}
</script>
