<template>
  <div class="home">
<!--    <img alt="moon logo" src="../assets/logo.png"> -->
<!--   <HelloWorld msg=""/> -->
    <div class="top-container">
    <router-link to="/">
        <img id="logo-frontpage" src="../assets/logo.png" alt="logo">
    </router-link>
      <a id="port-title">Johanna Lakasz portfolio</a>
    </div>

    <div id="firstrow">
      <div id="home1">
        <img id="plantpack" src="../assets/home/plant.jpg" alt="package design">
        <img id="zineproject" src="../assets/home/crying.jpg" alt="zine project">
      </div>
      <div id="home2">
        <img id="homeillus" src="../assets/home/anotherkind.jpg" alt="illustration">
        <img id="shoot" src="../assets/home/luksi.jpg" alt="photoshoot">
      </div>
      <div id="home3">
        <img id="jelcorset" src="../assets/home/corset3.jpg" alt="corset design">
        <img id="logodesign" src="../assets/home/idea_final.png" alt="logo design">
      </div>
    </div>


  </div>
</template>


<style lang="scss">
  .top-container {
    display: flex;
    margin-top: 2vh;
    margin-left: 2vw;
    margin-right: 2vw;
    
    
    #logo-frontpage {
    //  height: 0.3vh;
      width: 2vw;
      margin-right: 2vw;
      margin-top: 0.5vh;
      @media only screen and (min-width: 900px){
        width: 1.5vw;
        margin-left: vw;
        margin-right: vw;
        margin-top: 2vh;
        }
       @media only screen and (min-width: 1400px){
        width: 1vw;
        margin-left: vw;
        margin-right: vw;
        margin-top: 3.5vh;
        }
    }
    #port-title {
    font-family: 'Bebas Neue';
    font-size: 4vw;
    letter-spacing: 2px;
    color: #f2f2f2;
    //margin-top: 1.5vh;
    @media only screen and (min-width: 1400px){
        letter-spacing: 10px;
        }
    }
  }

#home1 {
    display: flex;
    flex-wrap: wrap;
    margin-left: 5vw;
    margin-top: 3vh;
    width: 90vw;
    #plantpack {
    //  height: 20vh;
      width: 90vw;
      margin-bottom: 2vh;
      z-index: 30;
      @media only screen and (min-width: 1000px) {
      width: 27vh;
      margin-top: 13vh;
      margin-bottom: 2vh;
      margin-left: 5vw;
      z-index: 30;  
      }
    }
    #zineproject {
      //  height: 20vh;
      width: 90vw;
      margin-bottom: 2vh;
      z-index: 30;
      @media only screen and (min-width: 1000px) {
      width: auto;
      height: 20vh;
      margin-bottom: 2vh;
      margin-top: 2vh;
      margin-left: 2vw;
      z-index: 30;  
      }
    }
}
 
#home2 {
    display: flex;
    flex-wrap: wrap;
    margin-left: 5vw;
    margin-top: 0vh;
    #homeillus {
      width: 90vw;
      margin-bottom: 2vh;
      z-index: 30;
      @media only screen and (min-width: 1000px) {
      width: auto;
      height: 30vh;
      margin-bottom: 2vh;
      z-index: 30;
      margin-top:  -40vh;
      margin-left: 90vh;
      }
    }
    #shoot {
      width: 90vw;
      z-index: 30;
      @media only screen and (min-width: 1000px) {
      width: auto;
      height: 30vh;
      margin-bottom: 2vh;
      z-index: 30;  
      margin-top: -27vh;
      margin-left: 10vw;
      }
    }
}


#home3 {
    display: flex;
    flex-wrap: wrap;
    margin-left: 5vw;
    margin-top: 2vh;
    #jelcorset {
      width: 90vw;
      z-index: 30;
      margin-bottom: 2vh;
      @media only screen and (min-width: 1000px) {
      width: 30vh;
      margin-bottom: 2vh;
      z-index: 30; 
      margin-left: 27.5vw;
      margin-top: -26vh; 
      }
    }
    #logodesign {
      width: 90vw;
      z-index: 30;
      margin-bottom: 4vh;
      @media only screen and (min-width: 1000px) {
      width: auto;
      height: 20vh;
      margin-bottom: 2vh;
      z-index: 30;  
      margin-top: -14vh;
      margin-left: 15vw;
      }
    }
}



</style>


<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//  name: 'Home',
//  components: {
//   HelloWorld
//  }
// }
</script>
