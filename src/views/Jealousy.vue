<template>
    <div class="jealousy">
                <div class="top-container">
      <router-link to="/">
        <img id="logo-frontpage" src="../assets/logo.png" alt="logo">
    </router-link>
      <h1>Jealousy corset</h1>
    </div>


    <h2>Project description</h2>
    <div class='desc'>What initially was a 1st semester color theory assignment based on the theme of jealousy and specifically the Jealousy music video by the Korean band, Monsta X, has eventually turned into my first all-rounder fashion project. I’ve been interested in making my own clothes for a few years now, but only gotten seriously immersed in the fashion industry, the process of fashion design and sewing very recently. <br>
    <br>This project focuses on the creation of a smart blouse, inspired by stage outfits previously worn by Monsta X and on a combination of feminine and masculine silhouettes. 
    </div>
    <div id="cr-container">
        <img id="corset-research" src="../assets/corset/corset-research-small.png" alt="corset research">
    </div>
    <h3>Prototype</h3>
    <div id="corset-container">
            <img id="corset1" src="../assets/corset/corset1.jpg" alt="corset">
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
      margin-bottom: 10vh;
      z-index: 1;
    }
  }

  #corset-container {
    display: flex;
    #corset1 {
      width: 20%;
    }
  }
</style>