<template>
  <div>
    <div class="fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200" :class="sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'" aria-hidden="true"></div>
    <div id="sidebar" ref="sidebar" class="bg-white flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out" :class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'">
      <div class="flex justify-between mb-10 pr-3 sm:px-2">
        <button ref="trigger" class="lg:hidden text-slate-500 hover:text-slate-400" @click.stop="$emit('close-sidebar')" aria-controls="sidebar" :aria-expanded="sidebarOpen">
          
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
          </svg>
        </button>
        <router-link class="block" to="/review">
          <svg width="32" height="32" viewBox="0 0 32 32">
            
            <defs>
              <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                <stop stop-color="#A5B4FC" stop-opacity="0" offset="0%" />
                <stop stop-color="#A5B4FC" offset="100%" />
              </linearGradient>
              
              <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                <stop stop-color="#38BDF8" stop-opacity="0" offset="0%" />
                <stop stop-color="#38BDF8" offset="100%" />
              </linearGradient>
            </defs>
            <rect fill="#6366F1" width="32" height="32" rx="16" />
            </svg>
            
            <div class="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
        <div class="px-0 py-2">
          <button @click.prevent="sidebarExpanded = !sidebarExpanded">
            <svg class="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
              <path class="text-slate-400" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
            </svg>
          </button>
        </div>
      </div>

        </router-link>
      </div>
 
      <div class="space-y-8">
 
        <div>
          <ul class="mt-3 ">
            <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath === '/' || currentRoute.fullPath.includes('dashboard')" class="bg-white">
              <a class="block text-slate-200 truncate transition duration-150" :class="(currentRoute.fullPath === '/' || currentRoute.fullPath.includes('dashboard')) ? 'hover:text-slate-200' : 'hover:text-white'" href="#0" @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">
                <div class="flex items-center justify-between bg-white">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current" :class="(currentRoute.fullPath === '/' || currentRoute.fullPath.includes('dashboard')) ? 'text-indigo-500' : 'text-slate-400'" d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z" />
                      <path class="fill-current" :class="(currentRoute.fullPath === '/' || currentRoute.fullPath.includes('dashboard')) ? 'text-indigo-600' : 'text-slate-600'" d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z" />
                      <path class="fill-current" :class="(currentRoute.fullPath === '/' || currentRoute.fullPath.includes('dashboard')) ? 'text-indigo-200' : 'text-slate-400'" d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-black">Dashboard</span>
                  </div>
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block bg-white">
                <ul class="pl-9 mt-1 bg-white" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate" :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Revenue by Period</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/dashboard/analytics" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate" :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"> Sales Analytics</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/dashboard/fintech" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate" :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Seller Profile</span>
                      </a>
                    </li>
                  </router-link>
                </ul>
              </div>
            </SidebarLinkGroup>
            <!-- E-Commerce  -->
            <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('ecommerce')">
              <a class="block text-slate-200 truncate transition duration-150" :class="currentRoute.fullPath.includes('ecommerce') ? 'hover:text-slate-200' : 'hover:text-white'" href="#0" @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current" :class="currentRoute.fullPath.includes('ecommerce') ? 'text-indigo-300' : 'text-slate-400'" d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z" />
                      <path class="fill-current" :class="currentRoute.fullPath.includes('ecommerce') ? 'text-indigo-600' : 'text-slate-700'" d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z" />
                      <path class="fill-current" :class="currentRoute.fullPath.includes('ecommerce') ? 'text-indigo-500' : 'text-slate-600'" d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z" />
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-black">Products </span>
                  </div>
                  <!-- Icon -->
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
                <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/ecommerce/customers" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate" :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Top Products</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/ecommerce/orders" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate" :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Product Grid</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/ecommerce/invoices" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate" :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Product Management</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/ecommerce/shop" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate" :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Product Categories</span>
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/new-product" custom v-slot="{ href, navigate, isExactActive }">
                    <li class="mb-1 last:mb-0">
                      <a class="block transition duration-150 truncate" :class="isExactActive ? 'text-indigo-500' : 'text-slate-400 hover:text-slate-200'" :href="href" @click="navigate">
                        <span class="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">Add new Product</span>
                      </a>
                    </li>
                  </router-link>
                 
                </ul>
              </div>
            </SidebarLinkGroup>

            
            <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('finance')">
              <a class="block text-slate-200 truncate transition duration-150" :class="currentRoute.fullPath.includes('finance') ? 'hover:text-slate-200' : 'hover:text-white'" href="#0" @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current" :class="currentRoute.fullPath.includes('finance') ? 'text-indigo-300' : 'text-slate-400'" d="M13 6.068a6.035 6.035 0 0 1 4.932 4.933H24c-.486-5.846-5.154-10.515-11-11v6.067Z" />
                      <path class="fill-current" :class="currentRoute.fullPath.includes('finance') ? 'text-indigo-500' : 'text-slate-700'" d="M18.007 13c-.474 2.833-2.919 5-5.864 5a5.888 5.888 0 0 1-3.694-1.304L4 20.731C6.131 22.752 8.992 24 12.143 24c6.232 0 11.35-4.851 11.857-11h-5.993Z" />
                      <path class="fill-current" :class="currentRoute.fullPath.includes('finance') ? 'text-indigo-600' : 'text-slate-600'" d="M6.939 15.007A5.861 5.861 0 0 1 6 11.829c0-2.937 2.167-5.376 5-5.85V0C4.85.507 0 5.614 0 11.83c0 2.695.922 5.174 2.456 7.17l4.483-3.993Z" />
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-black">Orders</span>
                  </div>
                  <!-- Icon -->
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                      
                    </svg>
                  </div>
                </div>
              </a>

            </SidebarLinkGroup>
            <!-- Job Board -->
            <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('job')">
              <a class="block text-slate-200 truncate transition duration-150" :class="currentRoute.fullPath.includes('job') ? 'hover:text-slate-200' : 'hover:text-white'" href="#0" @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current" :class="currentRoute.fullPath.includes('job') ? 'text-indigo-600' : 'text-slate-700'" d="M4.418 19.612A9.092 9.092 0 0 1 2.59 17.03L.475 19.14c-.848.85-.536 2.395.743 3.673a4.413 4.413 0 0 0 1.677 1.082c.253.086.519.131.787.135.45.011.886-.16 1.208-.474L7 21.44a8.962 8.962 0 0 1-2.582-1.828Z" />
                      <path class="fill-current" :class="currentRoute.fullPath.includes('job') ? 'text-indigo-500' : 'text-slate-600'" d="M10.034 13.997a11.011 11.011 0 0 1-2.551-3.862L4.595 13.02a2.513 2.513 0 0 0-.4 2.645 6.668 6.668 0 0 0 1.64 2.532 5.525 5.525 0 0 0 3.643 1.824 2.1 2.1 0 0 0 1.534-.587l2.883-2.882a11.156 11.156 0 0 1-3.861-2.556Z" />
                      <path class="fill-current" :class="currentRoute.fullPath.includes('job') ? 'text-indigo-300' : 'text-slate-400'" d="M21.554 2.471A8.958 8.958 0 0 0 18.167.276a3.105 3.105 0 0 0-3.295.467L9.715 5.888c-1.41 1.408-.665 4.275 1.733 6.668a8.958 8.958 0 0 0 3.387 2.196c.459.157.94.24 1.425.246a2.559 2.559 0 0 0 1.87-.715l5.156-5.146c1.415-1.406.666-4.273-1.732-6.666Zm.318 5.257c-.148.147-.594.2-1.256-.018A7.037 7.037 0 0 1 18.016 6c-1.73-1.728-2.104-3.475-1.73-3.845a.671.671 0 0 1 .465-.129c.27.008.536.057.79.146a7.07 7.07 0 0 1 2.6 1.711c1.73 1.73 2.105 3.472 1.73 3.846Z" />
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-black">Statistics</span>
                  </div>
                  <!-- Icon -->
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                    </svg>
                  </div>
                </div>
              </a>
             
            </SidebarLinkGroup>


            <router-link to="/review" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 " :class="isExactActive && 'bg-white-900'">
                <a class="block text-slate-200 truncate transition duration-150 bg-white" :class="isExactActive ? 'hover:text-slate-200' : 'hover:text-white'" :href="href" @click="navigate">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current" :class="isExactActive ? 'text-indigo-500' : 'text-slate-600'" d="M16 13v4H8v-4H0l3-9h18l3 9h-8Z" />
                      <path class="fill-current" :class="isExactActive ? 'text-indigo-300' : 'text-slate-400'" d="m23.72 12 .229.686A.984.984 0 0 1 24 13v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-8c0-.107.017-.213.051-.314L.28 12H8v4h8v-4H23.72ZM13 0v7h3l-4 5-4-5h3V0h2Z" />
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-black">Reviews</span>
                  </div>
                </a>
              </li>
            </router-link>

            <SidebarLinkGroup v-slot="parentLink" :activeCondition="currentRoute.fullPath.includes('tasks')">
              <a class="block text-slate-200 truncate transition duration-150" :class="currentRoute.fullPath.includes('tasks') ? 'hover:text-slate-200' : 'hover:text-white'" href="#0" @click.prevent="sidebarExpanded ? parentLink.handleClick() : sidebarExpanded = true">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current" :class="currentRoute.fullPath.includes('tasks') ? 'text-indigo-500' : 'text-slate-600'" d="M8 1v2H3v19h18V3h-5V1h7v23H1V1z" />
                      <path class="fill-current" :class="currentRoute.fullPath.includes('tasks') ? 'text-indigo-500' : 'text-slate-600'" d="M1 1h22v23H1z" />
                      <path class="fill-current" :class="currentRoute.fullPath.includes('tasks') ? 'text-indigo-300' : 'text-slate-400'" d="M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z" />
                    </svg>
                    <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-black">Customers</span>
                  </div>
                  <!-- Icon -->
                  <div class="flex shrink-0 ml-2">
                    <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" :class="parentLink.expanded && 'rotate-180'" viewBox="0 0 12 12">
                    </svg>
                  </div>
                </div>
              </a>
            </SidebarLinkGroup>
            

            


            <router-link to="/connected-app" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-white-900'">
                <a class="block text-slate-200 truncate transition duration-150" :class="isExactActive ? 'hover:text-slate-200' : 'hover:text-white'" :href="href" @click="navigate">
                  <div class="flex items-center justify-between">
                    <div class="grow flex items-center">
                      <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                        <path class="fill-current" :class="isExactActive ? 'text-indigo-500' : 'text-slate-600'" d="M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z" />
                        <path class="fill-current" :class="isExactActive ? 'text-indigo-300' : 'text-slate-400'" d="M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
                      </svg>
                      <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-black">Transactions</span>
                    </div>
                    <div class="flex flex-shrink-0 ml-2">
                      <span class="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded">279</span>
                    </div>
                  </div>
                </a>
              </li>
            </router-link>


            <router-link to="/profile" custom v-slot="{ href, navigate, isExactActive }">
              <li class="px-3 py-2 rounded-sm mb-0.5 last:mb-0" :class="isExactActive && 'bg-white-900'">
                <a class="block text-slate-200 truncate transition duration-150" :class="isExactActive ? 'hover:text-slate-200' : 'hover:text-white'" :href="href" @click="navigate">
                  <div class="flex items-center justify-between">
                    <div class="grow flex items-center">
                      <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path class="fill-current" :class="currentRoute.fullPath.includes('settings') ? 'text-indigo-500' : 'text-slate-600'" d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z" />
                      <path class="fill-current" :class="currentRoute.fullPath.includes('settings') ? 'text-indigo-300' : 'text-slate-400'" d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z" />
                      <path class="fill-current" :class="currentRoute.fullPath.includes('settings') ? 'text-indigo-500' : 'text-slate-600'" d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z" />
                      <path class="fill-current" :class="currentRoute.fullPath.includes('settings') ? 'text-indigo-300' : 'text-slate-400'" d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z" />
                    </svg>
                      <span class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 text-black">Settings</span>                    </div>
                    <div class="flex flex-shrink-0 ml-2">
                    </div>
                  </div>
                </a>
              </li>
            </router-link>
            
            
           

          </ul>
        </div>
        </div>
        

      
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

import SidebarLinkGroup from './SidebarLinkGroup.vue'

export default {
  name: 'Sidebar',
  props: ['sidebarOpen'],
  components: {
    SidebarLinkGroup,
  },
  setup(props, { emit }) {

    const trigger = ref(null)
    const sidebar = ref(null)

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded')
    const sidebarExpanded = ref(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true')

    const currentRoute = useRouter().currentRoute.value
    const clickHandler = ({ target }) => {
      if (!sidebar.value || !trigger.value) return
      if (
        !props.sidebarOpen ||
        sidebar.value.contains(target) ||
        trigger.value.contains(target)
      ) return
      emit('close-sidebar')
    }

    const keyHandler = ({ keyCode }) => {
      if (!props.sidebarOpen || keyCode !== 27) return
      emit('close-sidebar')
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    watch(sidebarExpanded, () => {
      localStorage.setItem('sidebar-expanded', sidebarExpanded.value)
      if (sidebarExpanded.value) {
        document.querySelector('body').classList.add('sidebar-expanded')
      } else {
        document.querySelector('body').classList.remove('sidebar-expanded')
      }
    })

    return {
      trigger,
      sidebar,
      sidebarExpanded,
      currentRoute,
    }
  },
}
</script>