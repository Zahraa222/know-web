// Import necessary modules from Vue Router for navigation
import { createRouter, createWebHistory } from "vue-router";

// Import the views (pages) for the router to connect to
// These components represent different pages in your website
import HomePage from "./views/HomePage.vue";
import AboutPage from "./views/AboutPage.vue";
import ResourcesPage from "./views/ResourcesPage.vue";

// Define the routes array
// Each route object in this array represents a path in the website
const routes = [
  {
    // Route for the homepage ('/')
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    // Route for the About page ('/about')
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    // Route for the Resources page ('/resources')
    path:"/resources",
    name: "ResourcesPage",
    component: ResourcesPage,
  },

  // Add future routes here for other pages if needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
