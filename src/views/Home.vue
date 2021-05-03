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
  </div>
</template>


<style lang="scss">
  .top-container {
    display: flex;
    margin-top: 2vh;
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: 1.5vh;
    
    .logo-frontpage {
      margin-top: 2vh;
      height: 0.7vh;
      width: 0.7vh;
    }
  }

  @media only screen and (min-width: 1400px){
  #logo-frontpage{
    height:3vh;
    width: 3vh;
    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: 2vh;
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
