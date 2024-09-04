<template>
  <div id="app">
    <NavBar /> 

    <div class="main-section">
      <div class="logo-section">
        <img src="@/assets/logo.png" alt="KNOW Logo"/>
      </div>
   
    <p class="description">
      KNOW is a nonprofit organization dedicated to empowering immigrants and first-generation youth by guiding them through the abundance of resources and opportunities available. At KNOW, we understand the importance of having the right support and guidance on your journey, which is why we are here to level the playing field for everyone. Our mission is to ensure that every individual, regardless of their background, has access to the knowledge and tools they need to thrive.
    </p>

    <p class ="ein"> EIN: 93-2768709</p>


    <div class="quote-picture-container">
      <h2 class = "quote-section">
    LEVELING THE PLAYING <br>FIELD FOR EVERYONE
  </h2>
  <div class="picture-section">
<img src = "@/assets/img1.png" alt="Pics1"/>
</div>
  </div>
  </div>
</div>
</template>

<script>
import NavBar from './components/NavBar.vue'; 

export default {
  name: 'App',
  components: {
    NavBar, 
  },
};
</script>

<style scoped>

.logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.description{
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: bolder;
  font-size: 1.7rem;
  line-height: 1.6;
  margin: 20px auto;
  max-width: 90%;
  padding: 20px;
  box-sizing: border-box;
  color: #000;
}

.ein{
  text-align: center;
  margin-top:-30px;
  margin-bottom: 50px;
  color: #555;
}

.quote-picture-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 20px 0;
  max-width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
}

.quote-section{
  text-align: center;
  font-size: 4rem;
  font-family: 'Oswald', sans-serif;
  font-weight: 800;
  line-height: 1.2;
  max-width: 800px;
  margin: 50px auto;
  margin-left: 40%;
  color: #000;
  letter-spacing: 0.3rem;
  position: relative;
  top: 65px;
}

.picture-section img{
  max-width: 400px;
  width: 100%;
  height: auto;
  margin-top:-50%;
  margin-bottom: 50px;
  margin-left: 80px;
}

/* CSS styling for mobile screens */
@media (max-width: 480px) {
  .quote-section {
    font-size: 1.5rem; 
    top: 0;
  }
}

</style>