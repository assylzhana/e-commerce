<template>
    <div class="flex h-screen overflow-hidden bg-lightgray">
  
      <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
  
      <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        
        <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
  
        <main>
          <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
  
            <Banner />
            
            <div class="sm:flex sm:justify-between sm:items-center mb-8">
  
             <DashboardAvatars />
  
  
            </div>
            <Card></Card>
            <br>
            <div class="grid grid-cols-12 gap-6">
                <DashboardCard10 />    
            </div>
  
  
          </div>
        </main>
  
        <Footer></Footer >
  
      </div> 
  
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'

import FilterButton from '../components/DropdownFilter.vue'
import Footer from '../components/Footer.vue'
import Banner from '../partials/Banner.vue'
import Card from '../partials/Card.vue'
import Header from '../partials/Header.vue'
import Sidebar from '../partials/Sidebar.vue'
import DashboardCard10 from '../partials/dashboard/DashboardCard10.vue'
import DashboardCard11 from '../partials/dashboard/DashboardCard11.vue'
import DashboardCard12 from '../partials/dashboard/DashboardCard12.vue'
import DashboardCard13 from '../partials/dashboard/DashboardCard13.vue'
import WelcomeBanner from '../partials/dashboard/WelcomeBanner.vue'
  
  export default {
    name: 'Review',
    components: {
      Sidebar,
      Header,
      WelcomeBanner,
      FilterButton,
      DashboardCard10,
      DashboardCard11,
      DashboardCard12,
      DashboardCard13,
      Banner,
      Footer,
      Card
    },
    setup() {
  
      const sidebarOpen = ref(false)
  
      return {
        sidebarOpen,
      }  
    }
  }
  </script>