<template>
    <div>
         <div class="centerCount ">

    <div class="teacherIcon">
    <lord-icon
    src="https://cdn.lordicon.com/soseozvi.json"
    trigger="loop"
    delay="1000"
    colors="primary:#ffffff,secondary:#08a88a"
    style="width:170px;height:170px"
    class="Person">
</lord-icon>
    <VueJsCounter start="0" end="1400" duration="1000" thousand="" decimal="," class="number"></VueJsCounter>
    <h5 class="text-center rang">O'quvchilar</h5>
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

position: absolute;
top: 0;
left: 50%;
transform: translate(-50%);
}

.number{
margin-top: -40px;
text-align: center;
color: #ffffff;
font-weight: 600;
position: absolute;
bottom: 0;
left: 50%;
transform: translate(-50%);

}
.rang{
color: #30e8bd;

margin-top: 20px;
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
}
}

}
</style>