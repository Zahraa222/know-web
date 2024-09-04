<template>
  <div id="app">
    <NavBar /> 

    <div class="main-section">
      <div class="logo-section">
        <!--<img src="@/assets/logo.png" alt="KNOW Logo"/>-->
      </div>
   

    <p class="description">
      KNOW is a nonprofit organization dedicated to empowering immigrants and first-generation youth by guiding them through the abundance of resources and opportunities available. At KNOW, we understand the importance of having the right support and guidance on your journey, which is why we are here to level the playing field for everyone. Our mission is to ensure that every individual, regardless of their background, has access to the knowledge and tools they need to thrive.
    </p>

    <p class ="ein"> EIN: 93-2768709</p>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.description{
  text-align: center;
  font-family: 'Agrandir Wide', sans-serif;
  font-weight: bolder;
  font-size: 1.125rem;
  line-height: 1.6;
  margin: 20px auto;
  max-width: 80%;
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
</style>

