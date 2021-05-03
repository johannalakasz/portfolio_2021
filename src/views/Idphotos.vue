<template>
    <div class="idphotos">
        <div class="top-container">
      <router-link to="/">
        <img id="logo-frontpage" src="../assets/logo.png" alt="logo">
    </router-link>
      <h1>ID photos</h1>
    </div>


    <h2>Project description</h2>
    <div class='desc'>Danariah is a close friend of mine, who has been writing poems since 2017, but keeping them as her very own secret. She shared a few of them with me a couple of months back in 2020 and because creating layout designs and working with magazine formats is something that I’ve always greatly enjoyed, she inspired me to work a bit further with her poetry. With her rightful permission came to life ‘Crying without tears, dying without fears’, a creative zine, which presents 9 poems written by Danariah. </div>
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
    .desc {
        margin-left: 7vw;
        margin-right: 7vw;
        text-align: justify;
        color: gray;
     }

    #id-collage {
      display: flex;
      margin-left: 7vw;
      margin-top: 3vh;
      #flowwer {
        width: 20vw;
        margin-right: 4vw;
        z-index:999;
      }
      #spaghetti {
        width: 20vw;
        z-index: 999;
      }
      #flowy {
       // width: 10vw;
        z-index:999;
        height: 30vh;
        margin-left: 21vw;
        margin-top: 8vh;
      }
    }
    #id-collage-secondline {
      display: flex;
      margin-left: 16vw;
      margin-top: 7vh;
      margin-bottom: 10vh;
      #nozy {
        
        height: 40vh;
        z-index: 999;
        margin-right: 2vw;
      }
      #browy {
        height: 40vh;
        z-index: 999;
      }
      #starstruck {
        height: 60vh;
        z-index: 999;
        margin-left: 13.5vw;
        margin-top: -20vh;
      }
    }

  
</style>