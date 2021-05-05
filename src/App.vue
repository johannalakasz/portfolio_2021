<template>
  <div id="app">
    <!-- <div id="nav-container"> -->
      <div id="nav">
       <!-- <router-link to="/">Home</router-link> | -->
        <router-link to="/contact">Contact</router-link>
      </div>
      <router-view/>
   <!-- </div> -->

    <div id="page-bg"></div>

    <div class="animation-wrapper">
      <div class="particle particle-1"></div>
      <div class="particle particle-2"></div>
      <div class="particle particle-3"></div>
      <div class="particle particle-4"></div>
    </div>

  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url("https://use.typekit.net/was0mii.css");

#app {
  font-family: 'Domus Light', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
//  text-align: center;
  color: #2c3e50;

}
* {
  background: #1e1e1e;
  margin: 0;
  padding: 0;
}

    .desc {
        margin-left: 5vw;
        margin-right: 7vw;
        text-align: justify;
        color: gray;
     }

h1 {
  font-family: 'Bebas Neue';
  font-size: 4vw;
  color: #f2f2f2;
  letter-spacing: 0.2vw;
 // margin-left: 2vw;
  padding-top: vh;
  
  @media only screen and (min-width: 900px){
        font-size: 3vw;
        letter-spacing: 0.5vw;
        padding-top: 1vh;
        }
  @media only screen and (min-width: 1400px){
        font-size: 2vw;
        letter-spacing: 0.5vw;
        padding-top: 2.5vh;
        }      
  
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  margin-left: 5vw;
  margin-bottom: 1vh;
  color: #f4f4f4;
  margin-top: 2vh;
}

h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  margin-left: 5vw;
  margin-bottom: 1vh;
  letter-spacing: 6px;
  color: #f4f4f4;
  margin-top: 2vh;
}


// #nav-container {
//  display: flex;
//  justify-content: space-between;
//  flex-direction: row-reverse;
//  padding: 20px;
// }

#nav {
  // padding: 30px;
  position: absolute;
  right: 1.5vw;
  top: 2vh;
  @media only screen and (min-width: 900px){
        top: 3vh;
        }
  @media only screen and (min-width: 1400px){
        top: 3.5vh;
        }

  a {
    color: #2c3e50;
    text-decoration:none;
    font-family: 'Bebas Neue';
    font-size: 4vw;
    color: #f4f4f4;;

    &.router-link-exact-active {
      color: #a8a8a8;  
    }
    @media only screen and (min-width: 900px){
        font-size: 2vw;
        }
    @media only screen and (min-width: 1400px){
        font-size: 1.5vw;
        }    
  }
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f2f2f2;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #a8a8a8;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #1e1e1e;
}

$color-bg: #1e1e1e;
$color-particle: #f2f2f2;
$spacing: 2560px;
$time-1: 60s;
$time-2: 120s;
$time-3: 180s;
$time-4: 200s;

/* mixins */
@function particles($max) {
  $val: 0px 0px $color-particle;
  @for $i from 1 through $max {
    $val: #{$val}, random($spacing)+px random($spacing)+px $color-particle;
  }
  @return $val;
}

@mixin particles($max) {
  box-shadow: particles($max);
  border-radius: 50%;
}

/* Styles */


#page-bg, .animation-wrapper {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}

// #page-bg {
 // background: $color-bg;
 // background-blend-mode: screen;
//  background-size: cover;
 // filter: grayscale(100%);
 
//}

.particle, .particle:after {
  background: transparent;
}

.particle:after {
  position: fixed;
  content: "";
 // top: $spacing;
}

.particle-1 {
  animation: animParticle $time-1 linear infinite;
  @include particles(1000);
  height: 2px;
  width: 2px;
}

.particle-1:after {
  @include particles(900);
  height: 2px;
  width: 2px;
}

.particle-2 {
  animation: animParticle $time-2 linear infinite;
  @include particles(800);
  height: 2px;
  width: 2px;
}

.particle-2:after {
  @include particles(500);
  height: 3px;
  width: 3px;
}

.particle-3:after {
  @include particles(1100);
  height: 3px;
  width: 3px;
  border-radius: 50%;
}

.particle-4 {
  animation: animParticle $time-4 linear infinite;
  @include particles(1200);
  height: 1px;
  width: 1px;
}

.particle-4:after {
  @include particles(700);
  height: 1px;
  width: 1px;
}

@keyframes animParticle {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY($spacing * -1);
  }
}

</style>
