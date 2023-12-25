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

            <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

              <Datepicker align="right" />
              
            </div>

          </div>

          <div class="grid grid-cols-12 gap-6">
 

    <div class="col-span-6">
        
        <DashboardCard08 />
    </div>

    
    <div class="col-span-6 grid grid-cols-2 gap-6">
        <div class="col-span-1">
            <DashboardCard02 style="height: 160px;" />
        </div>
        <div class="col-span-1">
            <DashboardCard03 style="height: 160px;" />
        </div>

        <div class="col-span-1">
            <DashboardCard04 style="height: 160px;"/>
        </div>
        <div class="col-span-1">
            <DashboardCard05 style="height: 160px;"/>
        </div>
    </div>

  
    <DashboardCard06 />

    <DashboardCard01 />


</div>


        </div>
      </main>

      <Footer></Footer>

    </div> 

  </div>
</template>

<script>
import { ref } from 'vue'
import Datepicker from '../components/Datepicker.vue'
import FilterButton from '../components/DropdownFilter.vue'
import Footer from '../components/Footer.vue'
import Banner from '../partials/Banner.vue'
import Header from '../partials/Header.vue'
import Sidebar from '../partials/Sidebar.vue'
import DashboardAvatars from '../partials/dashboard/DashboardAvatars.vue'
import DashboardCard01 from '../partials/dashboard/DashboardCard01.vue'
import DashboardCard02 from '../partials/dashboard/DashboardCard02.vue'
import DashboardCard03 from '../partials/dashboard/DashboardCard03.vue'
import DashboardCard04 from '../partials/dashboard/DashboardCard04.vue'
import DashboardCard05 from '../partials/dashboard/DashboardCard05.vue'
import DashboardCard06 from '../partials/dashboard/DashboardCard06.vue'
import DashboardCard07 from '../partials/dashboard/DashboardCard07.vue'
import DashboardCard08 from '../partials/dashboard/DashboardCard08.vue'
import WelcomeBanner from '../partials/dashboard/WelcomeBanner.vue'

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    Header,
    WelcomeBanner,
    DashboardAvatars,
    FilterButton,
    Datepicker,
    DashboardCard01,
    DashboardCard02,
    DashboardCard03,
    DashboardCard04,
    DashboardCard05,
    DashboardCard06,
    DashboardCard07,
    DashboardCard08,
    Banner,
    Footer,
  },
  setup() {
    const sidebarOpen = ref(false);
    const dynamicTitle = 'Revenue By Period'; 

    return {
      sidebarOpen,
      dynamicTitle,
    };
  },
};
</script>