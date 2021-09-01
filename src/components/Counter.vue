<template>
    <div>
  <div class="container mt-sm-4">
  <div class="count ">

  <div class="links" >
  <div data-aos="fade-down" data-aos-duration = "1500">
   <router-link to="/Teachers" class="btnUsers" style="margin-left:0px"> Teachers </router-link>
  </div>

   <div data-aos="fade-down" data-aos-duration = "2000">
    <router-link to="/Students" class="btnUsers" >Students </router-link>
   </div>
   <div data-aos="fade-down" data-aos-duration = "2500">
    <router-link to="/Users" class="btnUsers" >Foydalanuvchilar </router-link>
   </div>
  </div>

 <router-view name="b"> </router-view>
  </div>

 </div>
    </div>
</template>

<script>
export default {
  

    data() {
        return {
          clickedClass:false  
        };
    },

    mounted() {
        
    },

    methods: {
        clickedButtons(){
            this.clickedClass = !this.clickedClass
        }
    },
};
</script>

<style lang="scss" scoped>
.count{
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


.active{
background: red !important;
}


@media (max-width:769px){
.count{
.links{
.btnUsers{
font-size: 12px;
}
}
}
}
</style>