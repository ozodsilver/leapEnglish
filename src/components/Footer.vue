<template>
    <div>
        <div class="foter" >
        <div class="imageFooter">
<div class="tepaga d-none d-sm-flex">
   <a class="fa fa-angle-up angleTop" href="#sec-9" v-smooth-scroll = "{offset:-50,  duration:800}"></a>
</div>
    

        <div class="container">
        <div class="jildFooter ">

        <div class="row m-0  mt-sm-5 d-sm-flex align-items-sm-center">
        
        <div class="col-sm-4 col-12 d-flex d-sm-block text-center tarmoq">
         <p>Biz ijtimoiy Tarmoqlarda:</p>
    <a href="https://t.me/leaplibrary" class="fab fa-telegram"></a>
      <a href="" class="fab fa-facebook"></a>
        <a href="https://www.youtube.com/watch?v=c0PQHjh07hs" class="fab fa-youtube"></a>
         <a href="https://www.instagram.com/leapenglish
" class="fab fa-instagram"></a>
        </div>
      
    
         <div class="col-sm-5  col-12 d-flex align-items-end tarmoq">
        <p>© 2021 год. Все права защищены. <a href="http://t.me/ozodxon_uzb" style="font-size:0.9em;color:orange">ozodsilvers Team</a> </p>
        </div>
       
        
         <div class="col-sm-3 col-12 d-flex align-items-sm-end tarmoq2">
        <p>     <img src="../assets/Leap line white.png" alt="" class="w-25" > <img src="../assets/png-transparent-youtube-computer-icons-youtube-television-text-hand.png" alt="" class="w-25" > <img src="../assets/youtube-logo-png-transparent-background-15.png" alt="" class="w-25"></p>

        </div>
         
        </div>
      
        </div>
        </div>
         
        </div>
        </div>
    </div>
</template>

<script>
export default {
  
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
.foter{
width:100%;
height: 320px;
position: relative;

background: url('../assets/footer-KNG.png');

.imageFooter{
width:100%;
height:100%;
display: flex;
align-items: center;

.tepaga{
position: fixed;
width: 40px;
height: 40px;
color: rgb(41, 28, 28);
left: 2%;
bottom: 1%;
display: flex;
align-items: center;
justify-content: center;
border:1px solid tomato;
border-radius: 50%;
cursor: pointer;
z-index:232322;

a{
font-size: 1.4em;
animation: tepaga infinite 1s linear;
text-decoration: none;
color: tomato;
}

@keyframes tepaga{
0%{
transform: translateY(0px);
}
50%{
transform: translateY(-4px);
}
100%{
transform: translateY(0px);
}
}

}

.container{

height: 300px;
position: relative;

.jildFooter{
color: white;
height: 50%;
width: 100%;
position:absolute;
bottom: 0;

img{
    width: 25%;
}
a{
text-decoration: none;
color: white;
width: 40px;
font-size: 2em;
transition: 0.4s;

&:hover{
color: rgb(168, 168, 154);
}
}

}
}



}
}


@media (max-width:769px) {

    
.foter{
    background: url(https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/1ff77397696807.5ecb9eb93d235.png);
    background-size: cover;
height: 360px;
.imageFooter{

width:100%;
height:100%;
padding-top: 60px;
bottom: 0;

}
}

  .container{
.jildFooter{

    width:95% !important;
    margin: auto;
    height: 65% !important;
    display: block;
.tarmoq{
width:100% !important;
justify-content: center;
    font-size: 12px;
}
p{
    margin:5px auto;
  
}
.tarmoq2{
 
      margin: auto !important;
      display: block;
      width: 100%;
   img{
       width: 40%;
       height: 40px;
       margin-left: 12px;
      
   }
}
}

  }
   
    
}
</style>