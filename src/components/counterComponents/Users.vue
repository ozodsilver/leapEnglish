<template>
    <div>
      <div class="centerCount ">

    <div class="teacherIcon">
    <lord-icon
    src="https://cdn.lordicon.com/zpxybbhl.json"
    trigger="loop"
    colors="primary:#9cf4df,secondary:#08a88a"
    style="width:170px;height:170px"
    class="Person">
</lord-icon>
    <VueJsCounter start="0" end="162000" duration="2000" thousand="" decimal="," class="number"></VueJsCounter>
    <h5 class="text-center rang">Foydalanuvchilar</h5>
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
transform: translate(-50%, );

}

.number{
margin-top: -40px;
position: absolute;
bottom: 0;
left: 50%;
transform: translate(-50%, );


color: #ffffff;
font-weight: 600;

}
.rang{
color: #30e8bd;

margin-top: 25px;
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
font-size: 4rem;

}


}

}
</style>