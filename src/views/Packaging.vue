<template>
    <div class="packaging">
        <div class="top-container">
      <router-link to="/">
        <img id="logo-frontpage" src="../assets/logo.png" alt="logo">
    </router-link>
      <h1>Packaging design</h1>
    </div>
    <div class='plant-desc'>The concept behind this photoshoot was to take portraits of the models in a similar format as ID pictures and go further with them in a creative direction by trying different poses and adding small line art details.  </div>
<!-- more text -->

    <h3>Sketches</h3>
    <div id="plant-container">
        <img id="plant-research" src="../assets/plant/plan.png" alt="package sketches">
    </div>

    <h3>Testing</h3>
    <div class='plant-desc'>The concept behind this photoshoot was to take portraits of the models in a similar format as ID pictures and go further with them in a creative direction by trying different poses and adding small line art details.  </div>
    <div id="plant-proto">
        <img id="plant-pro" src="../assets/plant/plantproto1.jpg" alt="package first prototype">
        <img id="plant-pro" src="../assets/plant/plantproto2.jpg" alt="package prototype">
        <img id="plant-pro" src="../assets/plant/plantproto3.jpg" alt="package prototype">
    </div>

    <h3>Changes</h3>
    <div class='plant-desc'>The concept behind this photoshoot was to take portraits of the models in a similar format as ID pictures and go further with them in a creative direction by trying different poses and adding small line art details.  </div>
    <div id="color-container">
        <img id="color-research" src="../assets/plant/colors.png" alt="color consideration">
    </div>
    <div id="plant-result">
        <img id="plant-end" src="../assets/plant/oat.png" alt="oat milk">
        <img id="plant-end" src="../assets/plant/almond.png" alt="almond milk">
        <img id="plant-end" src="../assets/plant/soy.png" alt="soy milk">
    </div>

    </div>
</template>

<style lang="scss">
  .plant-desc {
        margin-left: 5vw;
        width: 90vw;
        text-align: justify;
        color: #a8a8a8;
        @media only screen and (min-width: 1000px) {
        margin-left: 5vw;
        width: 80vw;
        text-align: justify;
        color: #a8a8a8;    
        }
     }

    #plant-container {
    display: flex;
    #plant-research {
      width: 75vw;
      margin-left: 5vw;
      margin-top: 0vh;
      margin-bottom: 6vh;
      z-index: 1;
    }
  }

  #plant-proto {
    display: flex;
    margin-left: 5vw;
    flex-wrap: wrap;
    margin-bottom: 5vh;
    justify-content: space-between;
    margin-right: 15vw;
    margin-top: 4vh;
    #plant-pro {
    height: 55vh;
    z-index: 20;
    margin-bottom: 4vh; 
    @media only screen and (min-width: 1000px) {
    height: 65vh;
    z-index: 20;     
    }
    }
  }

    #color-container {
    display: flex;
    #color-research {
      width: 30vw;
      margin-left: 5vw;
      margin-top: 7vh;
      margin-bottom: 6vh;
      z-index: 3;
    }
  }

    #plant-result {
    display: flex;
    margin-left: 5vw;
    flex-wrap: wrap;
    margin-bottom: 5vh;
    justify-content: left;
    margin-right: 15vw;
    margin-top: 4vh;
    #plant-end {
    height: 30vh;
    z-index: 20; 
    margin-right: 3vw;
    margin-bottom: 4vh;
    @media only screen and (min-width: 1000px) {
    height: 45vh;
    z-index: 20; 
    margin-right: 3vw;
    margin-bottom: 4vh;    
    }
    }
  }
</style>