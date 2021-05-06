<template>
    <div class="logo">
        <div class="top-container">
            <router-link to="/">
                <img id="logo-frontpage" src="../assets/logo.png" alt="logo">
                </router-link>
            <h1>Logo design</h1>
        </div>
        <h2>Project description</h2>
    <div class='logo-desc'>Idea house is a student start-up at EASV responsible for helping students starting their own company. Students can go on an internship there focusing on entrepreneurship. The internship lasts 10-12 weeks and consists of a structured program with a range of activities that help students build their business foundation.
<br><br>For this assignment we were required to reimagine the logo of Idea House in a way where the connection between EASV and the start-up is emphasized more than as of with the current logo.
 </div>
 <h3>Research</h3>
 <div id="logo-container">
        <img id="logo-research" src="../assets/logo/logo-res.png" alt="logo research">
</div>
<h3>Sketching</h3>
<div class='logo-desc'>In the sketching phase, the goal was to come up with an idea that could later be finalized digitally. I started playing around with the EASV and the current Idea House logo and tried to combine them in a similar style.</div>
<div id="sketch-container">
        <img id="sketch1" src="../assets/logo/sketch1.jpg" alt="logo sketch">
        <img id="sketch2" src="../assets/logo/sketch2.jpg" alt="logo sketch">
</div>
<h3>Prototype</h3>
<div class='logo-desc'>The first prototype, that I came up with, was the rather complicated combination mark logo on the right, which was, after receiving feedback, simplified to the wordmark logo on the left.</div>
<div id="logopro-container">
        <img id="logopro1" src="../assets/logo/idea_final.png" alt="final logo">
        <img id="logopro2" src="../assets/logo/idea-proto.png" alt="logo">
</div>

</div>
</template>

<style lang="scss">
  #logo-container {
    display: flex;
    #logo-research {
      width: 75vw;
      margin-left: 5vw;
      margin-top: 3vh;
      margin-bottom: 10vh;
      z-index: 1;
    }
  }

  #sketch-container {
      display: flex;
      margin-left: 5vw;
      margin-bottom: 7vh;
      justify-content: space-between;
      margin-right: 8vw;
      margin-top: 4vh;
   //   flex-wrap: wrap;
   @media only screen and (min-width: 1000px) {
    display: flex;
      margin-left: 5vw;
      margin-bottom: 7vh;
      justify-content: left;
   }
      #sketch1 {
          height: 17vh;
          margin-right: 1vw;
          z-index: 3;
          @media only screen and (min-width: 1000px) {
          height: 70vh;
          margin-right: 1vw;
          z-index: 3;    
          }
      }
      #sketch2 {
        height: 17vh;
        z-index: 4;
          @media only screen and (min-width: 1000px)  {
            height: 60vh;
            z-index: 4;
          }
      }
  }

  #logopro-container {
      display: flex;
      margin-left: 5vw;
      flex-wrap: wrap;
      margin-top: 4vh;
      margin-bottom: 4vh;
      #logopro1 {
          height: 40vh;
          margin-right: 1vw;
          z-index: 4;
          @media only screen and (min-width: 1000px) {
          height: 50vh;
          margin-right: 1vw;
          z-index: 4;    
          }
      }
      #logopro2 {
          height: 40vh;
          z-index: 4;
          margin-top: 3vh;
          margin-bottom: 5vh;
          @media only screen and (min-width: 1000px) {
          height: 40vh;
          z-index: 4; 
          margin-top: 0;   
          }
      }
  }

      .logo-desc {
        margin-left: 5vw;
        margin-right: 8vw;
        text-align: justify;
        color: #a8a8a8;
        @media only screen and (min-width: 1000px) {
        margin-left: 5vw;
        margin-right: 15vw;
        text-align: justify;
        color: #a8a8a8;
        }
     }
</style>