<template>
    <div class="idphotos">
        <div class="top-container">
      <router-link to="/">
        <img id="logo-frontpage" src="../assets/logo.png" alt="logo">
    </router-link>
      <h1>ID photos</h1>
    </div>


    <h2>Project description</h2>
    <div class='desc'>The concept behind this photoshoot was to take portraits of the models in a similar format as ID pictures and go further with them in a creative direction by trying different poses and adding small line art details.<br>
    Special thanks to Léni and Laura for modeling!  </div>
    <div id="id-collage">
      <img id="flowwer" src="../assets/idphotos/flowwer.jpg" alt="jáccint">
      <img id="spaghetti" src="../assets/idphotos/spaghetti.jpg" alt="laura">
      <img id="flowy" src="../assets/idphotos/flowy.jpg" alt="flowly lines">
      
    </div> 
    <div id="id-collage-secondline">
      <img id="nozy" src="../assets/idphotos/nozy.jpg" alt="contour">
      <img id="browy" src="../assets/idphotos/browy.jpg" alt="bushy brows">
      <img id="starstruck" src="../assets/idphotos/star struck.jpg" alt="star struck">
    </div> 
    
    </div>
</template>

<style lang="scss">

    #id-collage {
      display: flex;
      flex-wrap: wrap;
      margin-left: 5vw;
      margin-top: 3vh;
      #flowwer {
        width: 40vw;
        margin-right: 6vw;
        z-index:999;
        @media only screen and (min-width: 1000px){
        width: 20vw;
        margin-right: 4vw;
        z-index:999;
        }
      }
      #spaghetti {
        width: 40vw;
        z-index: 999;
        @media only screen and (min-width: 1000px) {
        width: 20vw;
        z-index: 999; 
        }
      }
      #flowy {
       // width: 10vw;
        z-index:999;
        height: 17vh;
        margin-left: vw;
        margin-top: 3vh;
        @media only screen and (min-width: 1000px) {
        z-index:999;
        height: 30vh;
        margin-left: 23vw;
        margin-top: 8vh;  
        }
      }
    }
    #id-collage-secondline {
      display: flex;
      flex-wrap: wrap;
      margin-left: 50vw;
      margin-top: 4vh;
      margin-bottom: 10vh;
      @media only screen and (min-width: 1000px) {
      margin-left: 16vw;
      margin-top: 7vh;
      margin-bottom: 10vh;  
      }
      #nozy {
        
        height: 17vh;
        z-index: 999;
        margin-left: -16.5vw;
        margin-top: -21vh;
        @media only screen and (min-width: 1000px) {
         height: 40vh;
        z-index: 999;
        margin-right: 2vw; 
        margin-top: 1vh; 
        margin-left: -12vh;
        }
      }
      #browy {
        height: 17vh;
        z-index: 999;
        margin-top: -21vh;
        margin-left: 1vw;
        @media only screen and (min-width: 1000px) {
        height: 40vh;
        z-index: 999;  
        margin-top: 1vh;
        margin-left: -1vw;
        }
      }
      #starstruck {
        height: 52vh;
        z-index: 999;
        margin-left: -45vw;
        margin-top: -1vh;
        @media only screen and (min-width: 1000px) {
        height: 60vh;
        z-index: 999;
        margin-left: 20.5vw;
        margin-top: -20vh;  
        }
      }
    }

  
</style>