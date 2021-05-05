<template>
    <div class="test">
      <div class="top-container">
    <router-link to="/">
        <img id="logo-frontpage" src="../assets/logo.png" alt="logo">
    </router-link>
    
      <h1>Johanna Lakasz</h1>
    </div>
    <div id="me">
        <img id="me-pic" src="../assets/me.jpg" alt="me">
        <div class="me-desc">Hello, I'm Johanna Lakasz, a multimedia design student, from Business Academy of South West, who aims to bring her visions into reality in an aesthetically pleasing way.
<br><br>I mainly work with graphics, layouts, logos and illustrations, but I also have experience in coding, as well as in photo and videography.
<br><br>I am constantly trying to find the middle ground between creativity and a logical mindset. I work well individually and, in a team, as well and I tend to bring a detail-oriented approach and a general set of calmness, when it comes to groupwork.
<br><br>You can find my video CV <a href="https://youtu.be/dtM9YcD9fcE" >here</a>        
        <h4>Contact</h4>
        <div class="contact">
            LinkedIn: Johanna Lakasz<br>
            Mail: johannalakasz@gmail.com
        </div>
        </div>
    </div>


    </div>
</template>

<style lang="scss">
    #me {
        display: flex;
        margin-left: 5vw;
        margin-right: 8vw;
        margin-top: 5vh;
        @media only screen and (min-width: 1000px) {
        display: flex;
        margin-left: 5vw;
        margin-right: 7vw;
        margin-top: 5vh;
        }
        .me-desc {
        text-align: justify;
        color:#a8a8a8;
        margin-left: -85vw;
        margin-top: 55vh;
        margin-bottom: 20vh;
        font-size: 2vh;
        @media only screen and (min-width: 1000px) {
        width: 60vw;
        text-align: justify;
        color:#a8a8a8;
        margin-left: 3vw;
        margin-top: 8vh;
        font-size: 2vh;
        }
        
        }
        #me-pic {
        height: 50vh;
        z-index: 98;
        }
    }
    h4 {
        font-family: 'Bebas Neue';
        font-size: 20px;
        margin-bottom: 1vh;
        letter-spacing: 6px;
        color: #f4f4f4;
        margin-top: 4.5vh;

    }

</style>