<template>
    <div class="packaging">
        <div class="top-container">
      <router-link to="/">
        <img id="logo-frontpage" src="../assets/logo.png" alt="logo">
    </router-link>
      <h1>Packaging design</h1>
    </div>
    <div class='plant-desc'>The sole aim of this project was to come up with and create package design for a physical product using the Design Thinking process.<br><br>
    I’m following a girl on Instagram, who currently is studying in Seoul, South Korea and she brought it to my attention, that cafés, which aren’t located in Western Europe or North America, most of the time lack the option to order a drink, which is made with dairy substitutes. As the vegan scene is broadening in Eastern Europe and Asia, too, the demand for drinks made with plant-based milk might increase, as well.<br><br><br>
    In the empathize phase of the project, I talked to a few of my vegan friends, who are living in Hungary and tried to grasp a more detailed and personal view on the supply of the cafés they visit. I came to the conclusion, that although there are bigger café chains, that offer to put plant-based milk in their drinks, their only available option is most of the time, soy milk. On the contrary, the most widely liked plant milk currently is almond milk, while oat milk is coming up in second, according to Food Dive, an online magazine, that focuses on upcoming news in the food industry.<br><br>
    The solution came in the Define phase, which proposes plant-based milk to be distributed in small paper-boxed packages, sized exactly for a cup of latte to provide people, whose local cafés don't have vegan options, to bring their own plant-based milk of choice.<br><br>
    In the Ideate phase, my goal was to produce sketches and decide on a specific aesthetic for three different kinds of plant-based milk packages.</div>
    <div style="margin:5vh;"></div>
<!-- more text -->

    <h3>Sketches</h3>
    <div id="plant-container">
        <img id="plant-research" src="../assets/plant/plan.png" alt="package sketches">
    </div>

    <h3>Testing</h3>
    <div class='plant-desc'>After finishing the prototypes, I printed out the designs to test mainly the colors and the overall feel of the packages.</div>
    <div id="plant-proto">
        <img id="plant-pro" src="../assets/plant/plantproto1.jpg" alt="package first prototype">
        <img id="plant-pro" src="../assets/plant/plantproto2.jpg" alt="package prototype">
        <img id="plant-pro" src="../assets/plant/plantproto3.jpg" alt="package prototype">
    </div>

    <h3>Changes</h3>
    <div class='plant-desc'>The Testing phase made me realise the need of adjusting the color scheme and with that in mind, I touched up and finished the prototypes.</div>
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