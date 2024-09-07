// Import necessary modules from Vue Router for navigation
import { createRouter, createWebHistory } from "vue-router";

// Import the views (pages) for the router to connect to
// These components represent different pages in your website
import HomePage from "./components/HomePage.vue";
import AboutPage from "./components/AboutPage.vue";
import ResourcesPage from "./components/ResourcesPage.vue";
import EventsPage from "./components/EventsPage.vue";
import AdvisorsPage from "./components/AdvisorsPage.vue";
import NewsletterPage from "./components/NewsletterPage.vue";

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

  // Route for the Events page ('/events')
  {
    path:"/events",
    name: "EventsPage",
    component: EventsPage,
  },

  //Route for the Advisors page ('/advisors')
  {
    path:"/advisors",
    name: "AdvisorsPage",
    component: AdvisorsPage,
  },

  //Route for the Newsletter page ('/newsletter')
  {
    path:"/newsletter",
    name: "NewsletterPage",
    component: NewsletterPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
