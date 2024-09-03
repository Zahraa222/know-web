<template>
    <nav class="navbar">
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">EVENTS</a></li>
        <li><a href="#">RESOURCES</a></li>
        <li><a href="#">ADVISORS</a></li>
        <li><a href="#">NEWSLETTER</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
      <input type="search" placeholder="Search" />
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  }
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #f8f8f8;
  }
  
  .navbar ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .navbar ul li {
    margin-right: 15px;
  }
  
  .navbar ul li a {
    text-decoration: none;
    color: #000;
  }
  
  input[type="search"] {
    padding: 5px;
  }
  </style>
  