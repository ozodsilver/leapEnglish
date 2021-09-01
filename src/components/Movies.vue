<template>

    <div>

     <div class="container">
     <div class="movies">
<div class="links">

<div data-aos="fade-down" data-aos-duration = "500">
<router-link to="/Grammatika" class="mobres" style="margin-left:0px" > ingliz tili 0 dan(Grammatika)</router-link>
</div>

<div data-aos="fade-down" data-aos-duration = "1000">
<router-link to="/generalEnglish" class="mobres" > General english</router-link>
</div>
</div>


<router-view name="a"> </router-view>

</div>




     </div>   


    </div>

</template>

<script>
// import Grammatika from './forMoviesComponents/Grammatika.vue'



// import generalEnglish from './forMoviesComponents/generalEnglish.vue'
export default 
{
  
    // components:{
    //     Grammatika,
    //     generalEnglish
    // },

    data() {
        return {
            
        }
    },

    mounted() {
        
    },

    methods: {
       
    },
};
</script>

<style lang="scss" scoped>
.movies{
   width: 100%;
  
   
.links{
    width: 100%;
    height: 50px;
    transition-duration: 0.4s;
    display: flex;
   
    align-items: center;
    a{
        text-decoration: none;
border-top-right-radius: 10px;
border-top-left-radius: 10px;

border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
border-bottom: 1px solid;
border-top:1px solid;
padding: 5px;
margin-left: 10px;
color: rgb(0, 158, 185);
transition-duration: 0.3s;

&:hover{
 color: orange;
 transition: opacity 1s;
 opacity: 0.6;
}
    }
}
}

@media (max-width:769px){

.movies{
.links{
.mobres{
font-size: 12px;

}
}
}
}
</style>