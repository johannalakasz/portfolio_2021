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
      <br>With her rightful permission came to life ‘Crying without tears, dying without fears’, a creative zine, which showcases 9 poems written by Danariah. 
    </div>
    <div id="research-zine">
      <img id="zineres" src="../assets/zine/res1.jpg" alt="zine research process on paper">
      <img id="zineres" src="../assets/zine/res2.jpg" alt="zine research process on paper">
      <img id="zineres" src="../assets/zine/res3.jpg" alt="zine research process on paper">
    </div>
    <div id='research-desc-zine'>For executing this project, I used the Double Diamond design thinking model, which started with a discovering process. I conducted research on the scene of a few published poetry books, searched for common themes in Danariah’s poems and looked at the market of limited-edition art magazines, which were mainly promoted on TikTok.<br><br>
    As for the Define step, I summarized my findings and decided which poems would be included in the book. I specified the choice of colors and two fonts, as well as the exact photos, that would be used. 
    <br></div>
    <h3>Prototype</h3>
    <div id='deliver-desc-zine'>
      During the develop phase, came to life the prototype, which was later delivered as the finished book with all the needed adjustments.<br> The title ‘Crying without tears, dying without fears’ comes from Danariah’s 'Mariana trench' and concludes the most common themes in her poetry.
    </div>
    <div id="prototype-zine">
      <img id="protozine1" src="../assets/zine/zine-proto1.png" alt="zine prototype">
      <img id="protozine2" src="../assets/zine/zineproto2.png" alt="zine prototype packaging">
    </div>
    <div id="prototype-zine-secondline">
      <img id="protozine3" src="../assets/zine/zineproto3.png" alt="zine prototype details">
    </div>
    <div id='download-desc-zine'>
      Download the full pdf <a href="https://drive.google.com/file/d/1ZX2W6vpOrZTbpLMou8ZAxc35Qg0gBeU9/view?usp=sharing" target="_blank">here</a>
    </div>
    <h5>Shortened 30 pages long version</h5>
    <div id="zine-container">
      <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=zkaza0qjiq&p=2" width="100%" height="800" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
    </div>



  </div>
</template>

<style lang="scss">
h5 {
  font-family: 'Domus', Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 20px;
  margin-left: 5vw;
  margin-bottom: 1vh;
  color: #f4f4f4;
  margin-top: 2vh;
  position: relative;
  z-index: 3;
}

#zine-container {
  margin-top: -32vh;
  position: relative;
  z-index: 1;
  @media only screen and (min-width: 1000px) {
  margin-top: 2vh;
  margin-left: -37vw;  
  }
}


  .desc-zine {
        margin-left: 5vw;
        width: 87vw;
        text-align: justify;
        color: #a8a8a8;
        @media only screen and (min-width: 1000px) {
        width: 80vw;  
        }
     }

  #research-zine {
    display: flex;
    margin-left: 5vw;
    margin-top: 4vh;
    flex-wrap: wrap;
    
    #zineres {
      height: 30vh;
      margin-right: 1vw;
      margin-bottom: 2vh;
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
    width: 87vw;
    text-align: justify;
    color:#a8a8a8;
    margin-top: 2vh;
    margin-bottom: 2vh;
    @media only screen and (min-width: 1000px) {
    margin-left: 5vw;
    width: 80vw;
    text-align: justify;
    color:#a8a8a8;
    margin-top: 0vh;
    margin-bottom: 6vh;  
    }
  }

  #download-desc-zine {
   margin-left: 5vw;
    width: 87vw;
    text-align: justify;
    color:#a8a8a8;
    margin-top: 2vh;
    margin-bottom: 2vh;
    @media only screen and (min-width: 1000px) {
    margin-left: 5vw;
    width: 80vw;
    text-align: justify;
    color:#a8a8a8;
    margin-top: 0vh;
    margin-bottom: 6vh;  
    } 
  }

    #deliver-desc-zine {
    margin-left: 5vw;
    width: 87vw;
    text-align: justify;
    color:#a8a8a8;
    margin-top: 2vh;
    margin-bottom: 2vh;
    @media only screen and (min-width: 1000px) {
    margin-left: 5vw;
    width: 80vw;
    text-align: justify;
    color:#a8a8a8;
    margin-top: 0vh;
    margin-bottom: 2vh;  
    }
  }

  #prototype-zine {
    margin-left: 5vw;
    display: flex;
    flex-wrap: wrap;
    #protozine1 {
      height: 53vh;
      z-index: 101;
      margin-bottom: 2vh;
      @media only screen and (min-width: 1000px) {
      height: 117vh;
      z-index: 101;  
      }
    }
    #protozine2 {
      height: 30vh;
      margin-left: 0vw;
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
    margin-bottom: 1vh;
    flex-wrap: wrap;
    #protozine3 {
      height: 30vh;
      margin-left: 0vw;
      margin-top: 2vh;
      z-index: 103;
      @media only screen and (min-width: 1000px) {
      height: 55vh;
      margin-left: 43.85vw;
      margin-top: -62vh;
      z-index: 103;  
      }
    }
  }

</style>
