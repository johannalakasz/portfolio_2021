<template>
    <div class="jealousy">
                <div class="top-container">
      <router-link to="/">
        <img id="logo-frontpage" src="../assets/logo.png" alt="logo">
    </router-link>
      <h1>Jealousy corset</h1>
    </div>


    <h2>Project description</h2>
    <div class='cors-desc'>What initially was a 1st semester color theory assignment based on the theme of jealousy and personally the Jealousy music video by the band, Monsta X, has eventually turned into my first all-rounder fashion project. I’ve been interested in making my own clothes for a few years now, but only gotten seriously immersed in the fashion industry, the process of fashion design and sewing very recently. <br>
    <br>This project focuses on the creation of a smart blouse, inspired by stage outfits previously worn by band members and by a combination of feminine and masculine silhouettes. 
    </div>
    <div id="cr-container">
        <img id="corset-research" src="../assets/corset/corset-research-small.png" alt="corset research">
    </div>
    <h3>Pattern (sketch)</h3>
    <div class='cors-desc'>After discovering and diving more into the details of the influences for the project, I decided that I wanted to create a long bell-sleeved blouse, whose base would be a corset. I chose my fabric and made a fitted pattern. <br>
    </div>
    <div id="pattern-container">
            <img id="pattern" src="../assets/corset/pattern.png" alt="pattern">
    </div>
    <h3>Prototype</h3>
    <div class='cors-desc'>When the prototype came to life, I chose to expand the project and create a unique body-chain to go with the blouse. The jewellery piece is supposed to be worn under the corset. <br>
    Special thanks to my friend for modeling for this project!
    </div>
    <div id="corset-container">
            <img id="corset1" src="../assets/corset/corset1.jpg" alt="corset result pic">
            <img id="corset2" src="../assets/corset/corset2.jpg" alt="corset result pic">
            <img id="corset3" src="../assets/corset/corset3.jpg" alt="corset result pic">
            <img id="corset4" src="../assets/corset/corset4.jpg" alt="corset result pic">
    </div>



    </div>
</template>

<style lang="scss">
  #cr-container {
    display: flex;
    #corset-research {
      width: 75vw;
      margin-left: 5vw;
      margin-top: 7vh;
      margin-bottom: 6vh;
      z-index: 1;
    }
  }

  #pattern-container {
    display: flex;
    margin-left: 5vw;
    margin-bottom: 6vh;
    #pattern {
      width: 70vw;
      margin-top: 5vh;
      @media only screen and (min-width: 1000px) {
      width: 40vw;
      margin-top: 5vh;
      }
    }
  }

  .cors-desc {
        margin-left: 5vw;
        width: 85vw;
        text-align: justify;
        color: #a8a8a8;
        @media only screen and (min-width: 1000px) {
        margin-left: 5vw;
        width: 77vw;
        text-align: justify;
        color: #a8a8a8;  
        }
     }


    #corset-container {
    display: flex;
    margin-left: 5vw;
    flex-wrap: wrap;
    margin-bottom: 5vh;
    justify-content: space-between;
    margin-right: 15vw;
    margin-top: 4vh;
    #corset1 {
      height: 52vh;
      z-index: 20;
      margin-bottom: 4vh;
      @media only screen and (min-width: 1000px) {
      height: 50vh;
      z-index: 20;  
      }
    }
     #corset2 {
      height: 58vh;
      z-index: 20;
      margin-bottom: 4vh;
      @media only screen and (min-width: 1000px) {
      height: 50vh;
      z-index: 20;  
      }
    }
     #corset3 {
      height: 52vh;
      z-index: 20;
      margin-bottom: 4vh;
      @media only screen and (min-width: 1000px) {
      height: 50vh;
      z-index: 20;  
      }
    }
     #corset4 {
      height: 58vh;
      z-index: 20;
      @media only screen and (min-width: 1000px) {
      height: 50vh;
      z-index: 20;  
      }
    }
  }
</style>