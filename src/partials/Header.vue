<template>
  <header class="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 -mb-px">
        <div class="flex">
          <button class="text-slate-500 hover:text-slate-600 lg:hidden" @click.stop="$emit('toggle-sidebar')" aria-controls="sidebar" :aria-expanded="sidebarOpen">
            <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="5" width="16" height="2" />
              <rect x="4" y="11" width="16" height="2" />
              <rect x="4" y="17" width="16" height="2" />
            </svg>
          </button>
        </div>
        <div class="flex items-center space-x-3">
          <div class="relative">
            <input
              v-model="searchInput"
              @focus="searchFocused = true"
              @blur="searchFocused = false"
              type="text"
              placeholder="Search"
              class="w-96 h-10 px-4 rounded-md border border-slate-300 dark:border-slate-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition duration-150"
            />
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-500">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path class="fill-current text-slate-500 dark:text-slate-400" d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                <path class="fill-current text-slate-400 dark:text-slate-500" d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
              </svg>
            </div>
          </div>
          <Notifications align="right" />
          <Help align="right" />
          <ThemeToggle />
          <hr class="w-px h-6 bg-slate-200 dark:bg-slate-700 border-none" />
          <UserMenu align="right" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'

import Help from '../components/DropdownHelp.vue'
import Notifications from '../components/DropdownNotifications.vue'
import UserMenu from '../components/DropdownProfile.vue'
import ThemeToggle from '../components/ThemeToggle.vue'

export default {
  name: 'Header',
  props: ['sidebarOpen'],
  components: {
    Notifications,
    Help,
    ThemeToggle,
    UserMenu,
  },
  setup() {
    const searchInput = ref('')
    const searchFocused = ref(false)

    return {
      searchInput,
      searchFocused,
    }
  }
}
</script>
