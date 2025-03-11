import { createApp } from 'vue'
import './style.css'
import 'font-awesome/css/font-awesome.css';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import HomePage from './components/HomePage.vue';
import DiscoverLive from './components/DiscoverLivePage/DiscoverLive.vue';
import MoreMaps from './components/MapsPage/MoreMaps.vue';

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
      altText: "A beautiful scenic discover live image",
      title: [
        {
          text: "Creator Epic Games",
          class: "text-lg font-semibold text-white -ml-44",
          highlight: "Epic Games",
          highlightClass: " mr-18 text-[#CEA229] text-lg pl-2 mr-44"
        },
        {
          text: "Zombie Land Tournament",
          class: "text-5xl ml-42 uppercase font-bold text-white mt-3"
        },
        {
          text: "Creatures . Attack . Defend . Deathmatch . 16 Player Match",
          class: "text-xl font-bold text-white mt-3 ml-10"
        }
      ],
      titlePosition: "top-2/4 left-[25%] transform -translate-x-1/2"
    }
  },
  {
    path: "/categories",
    component: MoreMaps,
    meta: {
      navbarBgImage: categories, // image import path
      altText: "A beautiful scenic discover live image",
      title: [
        {
          text: "Zombie Land Tournament Max",
          class: "text-4xl uppercase font-bold text-white mt-3"
        },
        {
          text: "Home",
          class: "text-xl font-bold text-white mt-3 ml-10 uppercase text-red-600"
        }
      ],
      titlePosition: "top-2/4 left-[50%] transform -translate-x-1/2"
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;


createApp(App)
  .use(router)  // Make sure to use the router in your app
  .mount('#app')