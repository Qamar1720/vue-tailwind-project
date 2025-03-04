import { createApp } from 'vue'
import './style.css'
import 'font-awesome/css/font-awesome.css';
import App from './App.vue'
import AboutPage from './components/AboutPage.vue'
import { createRouter, createWebHistory } from 'vue-router';

// Set up the router
const router = createRouter({
  history: createWebHistory(), // This is important for history mode
  routes: [
    { path: '/discover_live', component: AboutPage },
    // Uncomment or add more routes as needed
    // { path: '/formcom', component: FormCom }
  ]
})

createApp(App)
  .use(router)  // Make sure to use the router in your app
  .mount('#app')