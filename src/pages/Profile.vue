<template>
    <div class="flex h-screen overflow-hidden bg-lightgray">
  
      <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
  
      <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        
        <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
  
        <main>
          <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
  
            <WelcomeBanner :title="dynamicTitle" />
            
                <DashboardAvatars />
                
                <div class="sm:flex sm:justify-between sm:items-center">
            <div class="lg:w-2/5 pr-0">
              <div>
                <ProfileMenu :userName="userName" :userRole="userRole" :lastVisitDate="lastVisitDate" @logout="handleLogout" />
              </div>
              <Notification :notificationCount="notificationCount" :messageCount="messageCount" />
            </div>
            <div class="lg:w-3/5 pl-0">
              <UpdateInfo />
            </div>
          </div>

          </div>


        </main>
  
        <Footer></Footer>
  
      </div> 
  
    </div>
  </template>
  
<script>
import { ref } from 'vue';
import Datepicker from '../components/Datepicker.vue';
import FilterButton from '../components/DropdownFilter.vue';
import Footer from '../components/Footer.vue';
import Notification from '../components/Notification.vue';
import ProfileMenu from '../components/ProfileMenu.vue';
import UpdateInfo from '../components/UpdateInfo.vue';
import Banner from '../partials/Banner.vue';
import Header from '../partials/Header.vue';
import Sidebar from '../partials/Sidebar.vue';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars.vue';
import DashboardCard01 from '../partials/dashboard/DashboardCard01.vue';
import DashboardCard02 from '../partials/dashboard/DashboardCard02.vue';
import DashboardCard03 from '../partials/dashboard/DashboardCard03.vue';
import DashboardCard04 from '../partials/dashboard/DashboardCard04.vue';
import DashboardCard05 from '../partials/dashboard/DashboardCard05.vue';
import DashboardCard06 from '../partials/dashboard/DashboardCard06.vue';
import DashboardCard07 from '../partials/dashboard/DashboardCard07.vue';
import DashboardCard08 from '../partials/dashboard/DashboardCard08.vue';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner.vue';

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
    ProfileMenu,
    UpdateInfo,
    Notification
  },
  setup() {
    const sidebarOpen = ref(false);
    const dynamicTitle = 'Settings';
    const userName = "Maria Smith";
    const userRole = "Admin";
    const lastVisitDate = "2023-01-01";
    const notificationCount = ref(2);
    const messageCount = ref(7);

    const handleLogout = () => {
      console.log("Logging out...");
    };

    return {
      sidebarOpen,
      dynamicTitle,
      userName,
      userRole,
      lastVisitDate,
      handleLogout,
      notificationCount,
      messageCount
    };
  },
};
</script>