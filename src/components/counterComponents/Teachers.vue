<template>
    <div>

    <div class="centerCount ">

    <div class="teacherIcon">
    <lord-icon
    src="https://cdn.lordicon.com/nobciafz.json"
    trigger="loop"
    delay="3000"
    colors="primary:#30e8bd,secondary:#ffffff"
    style="width:170px;height:170px"
    class="Person">
    
</lord-icon>
    <VueJsCounter start="0" end="12" duration="1000" thousand="" decimal="," class="number"></VueJsCounter>
    <h5 class="text-center rang">O'qituvchilar</h5>
    </div>

    </div>
        
    </div>
</template>

<script>
import VueJsCounter from 'vue-js-counter'

export default {
   components:{
      VueJsCounter 
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
.centerCount{
width: 100%;
border-radius:20px ;
background: rgb(42, 32, 48);
margin: 20px auto;
display: flex;
justify-content: center;
align-items: center;
font-size: 6rem;
position: relative;
height: 320px;

.teacherIcon{
.Person{
margin-left: 25px;
}

.number{
margin-top: -40px;
margin-left: 50px;

color: #ffffff;
font-weight: 600;

}
.rang{
color: #30e8bd;
margin-left: 15px;
margin-top: -10px;
}
}
}





@media (max-width:769px){

.centerCount{
height: 250px;
.Person{
margin-top: -10px;
width:100px !important;
}

.number{
font-size: 5rem;
margin-left: 25px !important;
}

.rang{
margin-left: 25px !important;
}
}

}
</style>