<template>
    <div>
      <div class="container mt-sm-5" id="sec-5">
      <h2 class="text-center pt-sm-5 pb-sm-3">Hamkorlar</h2>

      <carousel :perPage = '4' class="carousel"  >
  <slide class="w-25">
  <img src="../assets/google-1088003_1280.png" alt="" >
  </slide>
  <slide>
   <img src="../assets/2.png" alt="">
  </slide>

   <slide>
 <img src="../assets/youtube-logo-png-transparent-background-15.png" alt="">
  </slide>
   <slide>
  <img src="../assets/png-transparent-youtube-computer-icons-youtube-television-text-hand.png" alt="">
  </slide>
</carousel>
      </div>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
   components:{
    Carousel,
    Slide
   },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.carousel{
cursor: pointer;
padding: 25px 0 0 25px;
background: rgb(243, 243, 243);
border-radius: 10px;
img{
width: 50%;
transform: rotateZ(-3deg) ;
margin-left: 60px;

}

}

.container{
h2{
font-weight: 900;
}
}


@media (max-width:769px) {
  
.carousel{
padding: 0 !important;
display: flex;
padding: 10px 0px !important;

img{
margin-left: 20px !important;
width:70%;
}
}

}
</style>