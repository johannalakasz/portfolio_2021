<template>
    <div class="illus">
        <div class="top-container">
      <router-link to="/">
        <img id="logo-frontpage" src="../assets/logo.png" alt="logo">
    </router-link>
      <h1>Illustrations</h1>
    </div>
    <div class="illus-container">
        <img id="anotherkind" src="../assets/illustrations/anotherkind.jpg" alt="another kind - aurora">
        <img id="smoky" src="../assets/illustrations/smoky.jpg" alt="smoky by joo">
        <img id="aurora" src="../assets/illustrations/aurora.jpg" alt="aurora portrait">
    </div>


    </div>
</template>

<style lang="scss">
    .illus-container {
        display: flex;
        flex-wrap: wrap;
        margin-left: 5vw;
        justify-content: space-between;
        margin-right: 8vw;
        margin-top: 5vh;
        #anotherkind {
            height: 40vh;
            z-index: 12;
            margin-bottom: 7vh;
            @media only screen and (min-width: 1000px) {
            height: 55vh;
            z-index: 12;
            }
        }
        #smoky {
            height: 40vh;
            z-index: 12;
            margin-bottom: 7vh;
            @media only screen and (min-width: 1000px) {
            height: 55vh;
            z-index: 12;
            }
        }
        #aurora {
            height: 42vh;
            z-index: 12;
            margin-bottom: 7vh;
            @media only screen and (min-width: 1000px) {
            height: 55vh;
            z-index: 12;
            }
        }
    }
</style>