Written by Zaynab Mourtada
<template>
    <div id ="resources">

      <!-- Main Section that holds the different fields like Pre-Med, Engineering, etc. -->
      <div class = "main-section">

        <!-- Pre-Med section, add the navigation to the appropriate page in the router link comment -->
      <h1>PRE-MED</h1>
      <p>info about the field, with <!--<router-link to="/resources/pre-med"></router-link-->link to a different tab on the website 
        to learn more about the different career paths and resources for it. 
        for example, info about medical school, reqs, cliniclal hours, test prep sources </p>
      
        <!-- Engineering section, add the navigation to the appropriate page in the router link comment-->
        <h1>ENGINEERING</h1>
        <p>info about the field, with <!--<router-link to="/resources/pre-med"></router-link--> link to a different tab on the website to learn more about the 
          different engineering. Internship links, resume checkers, projects tutorials. 
          helpful websites like codedex, github repos, etc </p>
        
        <!-- Additional fields can be added here for more career paths. -->
        <h1>ETC FOR ALL MAJOR FIELDS</h1>
      </div>
      </div>
  </template>
  
  <script>
  export default {
    name: "ResourcesPage",
  };
  </script>
  
  <style scoped>

  /* Sets a vertical layout for the Resources Page */
  #resources {
  display: grid;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;
}

.main-section {
  display:grid;
  flex-direction: column;
  width: 100%;
  margin-left: 100px;
  text-align: left;
}

  h1{
    font-family: 'Oswald', sans-serif;
    font-size: 3.5rem;
    color: black;
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 1.7rem;
    width: 50%;
    line-height: 1.6;
    color: #000;
  }
  </style>
  