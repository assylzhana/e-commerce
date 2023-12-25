<template>
    <div class="flex h-screen overflow-hidden bg-lightgray">
  
      <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
  
      <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        
        <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
  
        <main>
          <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
  
            <WelcomeBanner :title="dynamicTitle" />
            
            <div class="sm:flex sm:justify-between sm:items-center mb-8">
  
             <DashboardAvatars />
  
            </div>
           
             <CompanyCard :companies="companyData" />
           
  
            
  
  
          </div>
        </main>
  
        <Footer></Footer>
  
      </div> 
  
    </div>
  </template>
  
  <script>
import { ref } from 'vue'
import CompanyCard from '../components/CompanyCard.vue'
import Datepicker from '../components/Datepicker.vue'
import FilterButton from '../components/DropdownFilter.vue'
import Footer from '../components/Footer.vue'
import AppBanner from '../partials/AppBanner.vue'
import Header from '../partials/Header.vue'
import Sidebar from '../partials/Sidebar.vue'
import DashboardAvatars from '../partials/dashboard/DashboardAvatars.vue'
import WelcomeBanner from '../partials/dashboard/WelcomeBanner.vue'
  
  export default {
    name: 'ConnectedApp',
    components: {
      Sidebar,
      Header,
      WelcomeBanner,
      DashboardAvatars,
      FilterButton,
      Datepicker,
      AppBanner,
      Footer,
      CompanyCard
    },
    setup() {
      const sidebarOpen = ref(false)

      const companyData = ref([
        {
          name: "Tracking App",
          about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          name: "Data Shop",
          about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          name: "Optimized scheduling",
          about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          name: "Targets robust App",
          about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          name: "Inventory adminstration",
          about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          name: "Employee Management",
          about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          name: "Shop Email Service",
          about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          name: "Offer online customer service",
          about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          name: "Digital Advertizing",
          about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        
        {
          name: "Crypto Wallet",
          about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          name: "Tracking",
          about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          name: "Targets robust App",
          about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
      ]);

      const dynamicTitle = 'Connected Apps';
  
      return {
        sidebarOpen,
        companyData,
        dynamicTitle
      }  
    }
  }
  </script>
  