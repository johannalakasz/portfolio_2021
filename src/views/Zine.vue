<template>
  <div class="zine">
    
    <div class="top-container">
      <router-link to="/">
        <img id="logo-frontpage" src="../assets/logo.png" alt="logo">
    </router-link>
      <h1>Poetry zine</h1>
    </div>


    <h2>Project description</h2>
    <div class='desc'>Danariah is a close friend of mine, who has been writing poems since 2017, but keeping them as her very own secret. She shared a few of them with me a couple of months back in 2020 and because creating layout designs and working with magazine formats is something that I’ve always greatly enjoyed, she inspired me to work a bit further with her poetry.<br>
      <br>With her rightful permission came to life ‘Crying without tears, dying without fears’, a creative zine, which presents 9 poems written by Danariah. </div>
  <div id="zine-container">
    <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=zkaza0qjiq" width="100%" height="480" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen></iframe>
  </div>
  </div>
</template>

<style lang="scss">

  #zine-container {
    margin-left: 7vw;
    margin-right: 8vw;
    z-index: 600;
    position: relative;
    left: 0;
    top: auto;

  }
</style>
