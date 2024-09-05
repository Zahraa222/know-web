<template>
    <nav class="navbar">
      <ul>

        <!--Navigation bar titles-->
        <li><a href="#" class ="active">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">EVENTS</a></li>
        <li><a href="#">RESOURCES</a></li>
        <li><a href="#">ADVISORS</a></li>
        <li><a href="#">NEWSLETTER</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
      <!-- Search bar-->
      <div class="search-container">
      <input type="search" placeholder="Search" />
      <i class="search-icon"></i> 
    </div>    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  }
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
    font-family: 'Montserrat', sans-serif;
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
  .navbar ul li a.active{
    background-color: lightblue;
    padding: 5px 10px;
    border-radius: 5px;
    color: black;
  }

  /* CSS styling for search bar */
  .search-container{
    display: flex;
  align-items: center;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 2px 10px;
  background-color: #dfe7f3;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.8);  }

  input[type="search"] {
  padding: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1.1rem;
}

  </style>
  