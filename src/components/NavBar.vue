<template>
  <nav class="navbar">
    <ul>
      <!--Navigation bar titles-->
      <li><router-link to="/" exact class="active">HOME</router-link></li>
      <li><router-link to="/about">ABOUT</router-link></li>
      <li><router-link to="/events">EVENTS</router-link></li>
      <li><router-link to="/resources">RESOURCES</router-link></li>
      <li><router-link to="/advisors">ADVISORS</router-link></li>
      <li><router-link to="/newsletter">NEWSLETTER</router-link></li>
      <li><router-link to="/contact">CONTACT</router-link></li>
    </ul>

    <!-- Search bar-->
    <div class="search-container">
      <input
        type="search"
        v-model="searchQuery"
        @keyup.enter="navigate"
        placeholder="Search"
      />
      <i class="search-icon" @click="navigate"></i>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    navigate() {
      
      // Map the search query to a route name
      const routes = {
        home: "/",
        about: "/about",
        events: "/events",
        resources: "/resources",
        advisors: "/advisors",
        newsletter: "/newsletter",
        // Add a route for contact
      };

      const route = routes[this.searchQuery.toLowerCase()];

      if (route) {
        // Navigate to the matched route
        this.$router.push(route);
      } else {
        alert("Page not found");
      }
    },
  },
};
</script>

<!-- Navigation Bar Styling-->
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f8f8;
  border: 2px solid #000;
  font-family: "Montserrat", sans-serif;
}

.navbar ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbar ul li {
  margin-right: 30px;
}

.navbar ul li a {
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: 1.2rem;
}

/* Selected page in the navigation */
.router-link-active {
  background-color: lightblue;
  padding: 5px 10px;
  border-radius: 5px;
  color: black;
}

/* CSS styling for search bar */
.search-container {
  display: flex;
  align-items: center;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 2px 10px;
  background-color: #dfe7f3;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.8);
}

input[type="search"] {
  padding: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1.1rem;
}
</style>
