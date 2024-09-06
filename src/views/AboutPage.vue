<!--This is the About page-->
<template>
  <div id="about">
    <!-- Main Section-->
    <div class="main-section">
      <!-- Picture Section for the first part of the About Page -->
      <!-- Update these image sources for the picture section -->
      <div class="picture-section">
        <img src="@/assets/img3.png" alt="pic1" />
        <img src="@/assets/img4.png" alt="pic2" />
        <img src="@/assets/img2.png" alt="pic3" />
      </div>

      <!-- Quote Section -->
      <div class="quote-section">
        <h2>FIRST YEAR RECAP</h2>
      </div>

      <!-- Stats Section -->
      <!-- You can update the stats here to reflect new numbers if needed -->
      <div class="stats-section">
        <p><span class="know">KNOW HELPED</span></p>
        <p><span class="num">200+</span></p>
        <p><span class="noun">STUDENTS</span></p>
      </div>
      <div class="stats-section1">
        <p><span class="know">KNOW LEAD</span></p>
        <p><span class="num">10+</span></p>
        <p><span class="noun">MAIN EVENTS</span></p>
      </div>
      <div class="stats-section2">
        <p><span class="know">WITH THE HELP OF</span></p>
        <p><span class="num">50+</span></p>
        <p><span class="noun">ADVISORS</span></p>
      </div>

      <!-- Vision Section -->
      <!-- Update the vision picture and description here if necessary -->
      <div class="knows-vision-pic">
        <img src="@/assets/img3.png" alt="pic1" />
      </div>
      <div class="knows-vision-description">
        <p><span class="know-title">KNOW'S VISION</span></p>
        <p>
          <span class="know-description"
            >KNOW envisions a world where the playing field is equal for
            everyone. Where first-generation and immigrant students know all the
            resources and opportunities in place for them. We work so that
            future generations do not repeat the same mistakes we did.</span
          >
        </p>

        <!-- Button to check programs -->
        <button class="button" @click="handleClick">
          Check out our programs
        </button>
      </div>

      <!-- Team Section -->
      <!-- The team images and descriptions can be updated here. Replace images and info as needed. -->
      <div class="team-title"><h2>TEAM</h2></div>
    </div>

    <!-- Team Pics Section -->
    <div class="team-pics">
      <div class="team-member">
        <img src="@/assets/img4.png" alt="pic2" />
        <div class="team-info">Person 1 info</div>
      </div>

      <div class="team-member">
        <img src="@/assets/img4.png" alt="pic2" />
        <div class="team-info">Person 2 info</div>
      </div>

      <div class="team-member">
        <img src="@/assets/img4.png" alt="pic2" />
        <div class="team-info">Person 3 info</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style>
/* Sets a vertical layout for About Page */
#about {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 20px;
}

.main-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.picture-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  margin-top: 40px;
  margin-left: 25px;
}

.picture-section img {
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
}

/* Adjusts width of img3 */
.picture-section img:nth-child(3) {
  width: 300px;
  object-fit: cover;
}

.quote-section {
  font-size: 3rem;
  font-family: "Oswald", sans-serif;
  font-weight: 800;
  line-height: 0;
  color: #000;
  letter-spacing: 0.1em;
}

.stats-section {
  margin-right: 50%;
}
.know {
  font-family: serif;
  font-weight: 550;
  font-size: 1.5rem;
}

.num {
  font-family: "Oswald", sans-serif;
  font-weight: bolder;
  font-size: 4rem;
  color: #21476b;
  position: relative;
  top: -20px;
  justify-content: center;
  display: flex;
}

.noun {
  font-family: serif;
  font-weight: 550;
  font-size: 1.5rem;
  position: relative;
  top: -30px;
  justify-content: center;
  display: flex;
}

.stats-section1 {
  position: relative;
  top: -215px;
}

.stats-section2 {
  position: relative;
  top: -430px;
  right: -340px;
}

.knows-vision-pic img {
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  position: relative;
  top: -400px;
  left: -450px;
}

.knows-vision-description {
  margin-top: -800px;
  margin-right: 250px;
  margin-left: auto;
  width: 40%;
  text-align: center;
}

.know-title {
  font-family: "Oswald", sans-serif;
  font-weight: bolder;
  font-size: 3rem;
  text-align: center;
}

.know-description {
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  line-height: 1.6;
  color: #000;
}

.button {
  border-radius: 50px;
  background-color: #335228;
  color: white;
  font-family: "Montserrat", sans-serif;
  padding: 10px 10px;
  font-size: 1rem;
  height: 50px;
  font-weight: 500;
}

.team-title {
  font-family: "Oswald", sans-serif;
  letter-spacing: 2px;
  font-size: 2rem;
  margin-top: 50px;
}

.team-pics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  margin-left: 25px;
}

/* Hover effect implemented*/
.team-member {
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
}

.team-member img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.team-member:hover img {
  transform: scale(1.1);
}

.team-info {
  position: absolute;
  bottom: 0;
  background: #21476b;
  color: white;
  width: 100%;
  text-align: center;
  padding: 10px 0;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.team-member:hover .team-info {
  opacity: 1;
}
</style>
