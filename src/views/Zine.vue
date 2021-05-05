<template>
  <div class="zine">
    
    <div class="top-container">
      <router-link to="/">
        <img id="logo-frontpage" src="../assets/logo.png" alt="logo">
    </router-link>
      <h1>Poetry zine</h1>
    </div>


    <h2>Project description</h2>
    <div class='desc-zine'>Danariah is a close friend of mine, who has been writing poems since 2017, but keeping them as her very own secret. She shared a few of them with me a couple of months back in 2020 and because creating layout designs and working with magazine formats is something that I’ve always greatly enjoyed, she inspired me to work a bit further with her poetry.<br>
      <br>With her rightful permission came to life ‘Crying without tears, dying without fears’, a creative zine, which presents 9 poems written by Danariah. 
    </div>
    <div id="research-zine">
      <img id="zineres" src="../assets/zine/res1.jpg" alt="zine research process on paper">
      <img id="zineres" src="../assets/zine/res2.jpg" alt="zine research process on paper">
      <img id="zineres" src="../assets/zine/res3.jpg" alt="zine research process on paper">
    </div>
    <div id='research-desc-zine'>Danariah is a close friend of mine, who has been writing poems since 2017, but keeping them as her very own secret. She shared a few of them with me a couple of months back in 2020 and because creating layout designs and working with magazine formats is something that I’ve always greatly enjoyed, she inspired me to work a bit further with her poetry.
    </div>
    <h3>Prototype</h3>
    <div id="prototype-zine">
      <img id="protozine1" src="../assets/zine/zine-proto1.png" alt="zine prototype">
      <img id="protozine2" src="../assets/zine/zineproto2.png" alt="zine prototype packaging">
    </div>
    <div id="prototype-zine-secondline">
      <img id="protozine3" src="../assets/zine/zineproto3.png" alt="zine prototype details">
    </div>
    <h3>Shortened 30 pages long version</h3>
    <div id="zine-container">
      <iframe id="zine-lap" src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=zkaza0qjiq" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
    </div>


  </div>
</template>

<style lang="scss">

  #zine-container {
    margin-left: 7vw;
    margin-right: 8vw;
    z-index: 600;
    position: relative;
    left: -29vw;
    top: auto;
    z-index: 1;
    @media only screen and (min-width: 1000px) {
    margin-left: 7vw;
    margin-right: 8vw;
    z-index: 600;
    position: relative;
    left: -23vw;
    top: auto;
    z-index: 1;  
    }
    #zine-lap {
    width: 100%; 
    height: 700;
    @media only screen and (min-width: 1000px) {
    width: 100%; 
    height: 700;  
    }
    }
  }

  .desc-zine {
        margin-left: 5vw;
        width: 80vw;
        text-align: justify;
        color: #a8a8a8;
     }

  #research-zine {
    display: flex;
    margin-left: 5vw;
    margin-top: 4vh;

    
    #zineres {
      height: 11.5vh;
      margin-right: 1vw;
      z-index: 100;
      @media only screen and (min-width: 1000px) {
      height: 40vh;
      margin-right: 1vw;
      z-index: 100;  
      }
    }
  }
  #research-desc-zine {
    margin-left: 5vw;
    width: 80vw;
    text-align: justify;
    color:#a8a8a8;
    margin-top: 4vh;
    margin-bottom: 4vh;
  }

  #prototype-zine {
    margin-left: 5vw;
    display: flex;
    #protozine1 {
      height: 30vh;
      z-index: 101;
      @media only screen and (min-width: 1000px) {
      height: 117vh;
      z-index: 101;  
      }
    }
    #protozine2 {
      height: 18vh;
      margin-left: 1vw;
      z-index:102;
      @media only screen and (min-width: 1000px) {
      height: 55vh;
      margin-left: 1vw;
      z-index:102;  
      }
    }
  }

  #prototype-zine-secondline {
    margin-left: 5vw;
    display: flex;
    margin-bottom: 7vh;
    #protozine3 {
      height: 18vh;
      margin-left: 39.25vw;
      margin-top: -11.5vh;
      z-index: 103;
      @media only screen and (min-width: 1000px) {
      height: 55vh;
      margin-left: 43.85vw;
      margin-top: -60vh;
      z-index: 103;  
      }
    }
  }

</style>
