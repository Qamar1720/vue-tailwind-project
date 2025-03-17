import { createApp } from 'vue'
import './style.css'
import 'font-awesome/css/font-awesome.css';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import HomePage from './components/HomePage.vue';
import DiscoverLive from './components/DiscoverLivePage/DiscoverLive.vue';
import MapsPage from './components/MapsPage/MapsPage.vue';

import headerImage from './assets/pics/header_image.jpg';
import discoverMap from './assets/pics/discover_map.jpg';
import categories from './assets/pics/bgimg2.jpg';

// Set up the router
const routes = [
  {
    path: "/",
    component: HomePage,
    meta: {
      navbarBgImage: headerImage, // image import path
      altText: "A beautiful scenic header image",
      title: "",
      titlePosition: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    }
  },
  {
    path: "/discover_live",
    component: DiscoverLive,
    meta: {
      navbarBgImage: discoverMap, // image import path
      title: [  // Added key for the array
        {
          text: "Creator Epic Games",
          class: "text-lg font-semibold text-white text-center ",
          highlight: "Epic Games",
          highlightClass: "text-[#CEA229] text-lg pl-2  md:text-left"
        },
        {
          text: "Zombie Land Tournament",
          class: "text-xl md:text-3xl lg:text-4xl text-center sm:text-left uppercase font-bold text-white mt-3"
        },
        {
          text: "Creatures . Attack . Defend . Deathmatch . 16 Player Match",
          class: "text-xl font-bold text-white mt-3"
        }
      ],
      titlePosition: "top-2/4 left-1/2 top-2/4 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[1440px] text-center md:text-left"
    } 
  }, 
  {
    path: "/game/:id",
    component: MapsPage,
    props: true,
    meta: {
      navbarBgImage: categories, // image import path
      altText: "A beautiful scenic discover live image",
      title: [
        {
          text: "Zombie Land Tournament Max",
          class: "text-4xl uppercase font-bold text-white mt-3 text-center"
        },
        {
          text: "Home Map Details",
          class: "text-sm md:text-md lg:text-lg xl:text-xl font-bold text-[#E6412A] mt-4 lg:mt-3 ml-10 uppercase text-red-600 text-center",
          highlight: "Map Details",
          highlightClass: "text-xl font-bold pl-4 pt-3 text-white uppercase before:content-['•'] before:text-[#E6412A] before:mr-4 text-center"
        }
      ],
      titlePosition: "top-2/4 left-2/4 transform -translate-x-1/2"
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.path.startsWith("/game/")) {
      return { top: 900, behavior: "smooth" };
    }
    return savedPosition || { top: 0 };
  }
});

export default router;


createApp(App)
  .use(router)  // Make sure to use the router in your app
  .mount('#app')