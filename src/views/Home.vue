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
        <router-link to="/packaging">
        <img id="plantpack" src="../assets/home/plant.jpg" alt="package design">
        </router-link>

        <router-link to="/zine">
        <img id="zineproject" src="../assets/home/crying.jpg" alt="zine project">
        </router-link>
      </div>

      <div id="home2">
        <router-link to="/illustration">
        <img id="homeillus" src="../assets/home/anotherkind.jpg" alt="illustration">
        </router-link>

        <router-link to="/idphotos">
        <img id="shoot" src="../assets/home/luksi.jpg" alt="photoshoot">
        </router-link>
      </div>
      <div id="home3">
        <router-link to="/jealousy">
        <img id="jelcorset" src="../assets/home/corset3.jpg" alt="corset design">
        </router-link>

        <router-link to="/logo">
        <img id="logodesign" src="../assets/home/idea_final.png" alt="logo design">
        </router-link>
      </div>
    </div>


  </div>
</template>


<style lang="scss">
  .home {
    overflow: hidden;
    height: auto;
    @media only screen and (min-width: 900px) {
    height: 99vh;  
    }
  }

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
      z-index: 999;
      position: relative;
      @media only screen and (min-width: 1000px) {
      width: 27vh;
      margin-top: 13vh;
      margin-bottom: 2vh;
      margin-left: 5vw;
      z-index: 999;  
      }
    }
    #zineproject {
      //  height: 20vh;
      width: 90vw;
      margin-bottom: 2vh;
      z-index: 30;
      position: relative;
      @media only screen and (min-width: 1000px) {
      width: auto;
      height: 23vh;
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
  //  margin-top: 0vh;
    #homeillus {
      width: 90vw;
      margin-bottom: 2vh;
      z-index: 30;
      position: relative;
      @media only screen and (min-width: 1000px) {
      width: auto;
      height: 30vh;
      margin-bottom: 2vh;
      z-index: 30;
 //     margin-top:  -75vh;
 top: -42vh;
      margin-left: 48vw;
      }
    }
    #shoot {
      width: 90vw;
      z-index: 30;
      position: relative;
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
//    margin-bottom: 40vh;
    #jelcorset {
      width: 90vw;
      z-index: 30;
      margin-bottom: 2vh;
      position: relative;
      @media only screen and (min-width: 1000px) {
      width: 28vh;
      margin-bottom: 2vh;
      z-index: 30; 
      margin-left: 25vw;
//      margin-top: -56vh; 
      top: -50vh;
      }
    }
    #logodesign {
      width: 90vw;
      z-index: 30;
      margin-bottom: 4vh;
      position: relative;
      @media only screen and (min-width: 1000px) {
      width: auto;
      height: 20vh;
      margin-bottom: 2vh;
      z-index: 30;  
//      margin-top: -44vh;
      margin-left: 19vw;
      top: -42vh;
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
