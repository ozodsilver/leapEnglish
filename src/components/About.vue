<template>
    <div>
        
<div class="container bg-light mobb">

<div class="row mobAbout">



<div class="col-11 mx-auto  pt-2 position-relative">
<div class="mobPerson mb-4">


<div class="wrapper">


<div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">

<h4 class="display-1">Botirov</h4>
</div>
<div data-aos="fade-up"
     data-aos-duration="2000">

<h5 class="display-2">Bekhzod</h5>
</div>
</div>



</div>

<div class="mobWrite pt-5">
<div data-aos="zoom-in">
<span> <span style="color:orange;font-size:30px">B</span>otirov Bekhzod <span class="text-success">"Leap English"</span> -- asoschi
"General English" o'qituvchisi 
2014-yildan beri Ingliz tilidan dars berib kelaman. Leap English proyektini boshlashdan asosiy maqsad - ingliz tilini o'zbek tilida barcha yurtdoshlarimizga tekinga  o'rgatish
<lord-icon
    src="https://cdn.lordicon.com/cmrzxpzz.json"
    trigger="loop"
    delay="1000"
    colors="primary:#121331,secondary:#08a88a"
    style="width:50px;height:50px;">
</lord-icon>
</span>
</div>
</div>

</div>
</div>


<span id="sec-3"></span>
<div class="row py-sm-5" id="sec-3">
<div class="col-md-8  aboutPerson" >
<div>
<div data-aos="fade-down">
   <h1 >Botirov Bekhzod "Leap English" asoschi
"General English" o'qituvchisi</h1>
 </div>

<div data-aos="fade-up"
     data-aos-duration="1000">

<h5 class="my-sm-3">2014-yildan beri Ingliz tilidan dars berib kelaman. Leap English proyektini boshlashdan asosiy maqsad - ingliz tilini o'zbek tilida barcha yurtdoshlarimizga tekinga  o'rgatish.</h5>
</div>
<div data-aos="fade-right"  data-aos-duration="2000">
<lord-icon
    src="https://cdn.lordicon.com/cmrzxpzz.json"
    trigger="loop"
    delay="1000"
    colors="primary:#121331,secondary:#08a88a"
    style="width:80px;height:80px; margin:-20px 0 0 -15px">
</lord-icon>
</div>
</div>


</div>

<div class="col-md-4  ">

<div data-aos="zoom-out" data-aos-duration = '1000'>
<div class="person">

</div>
</div>
</div>
</div>
<hr style="color:gray" id="sec-4">


<h2>You Tube darslari  <lord-icon
    src="https://cdn.lordicon.com/tdxypxgp.json"
    trigger="loop"
    delay="1200"
    colors="primary:#121331,secondary:#08a88a"
    style="width:100px;height:100px"
    
    >
</lord-icon> </h2>

</div>


    </div>
</template>


<script>
export default {
    mounted(){

        
    }
}
</script>

<style lang="scss" scoped>
    .person{
    transition: 0.3s;
    height:400px;
    border-radius: 79% 21% 18% 82% / 35% 55% 45% 65% ;
background: url(https://i.ytimg.com/vi/4Q6MGaQfy6k/maxresdefault.jpg);
background-size: cover;
background-position: center;
  animation: animate 8s infinite;
    }
@keyframes animate{
0%{
border-radius: 58% 42% 82% 18% / 52% 61% 39% 48% ;
}
30%{
border-radius: 58% 42% 17% 83% / 52% 61% 39% 48%  ;
}
70%{
border-radius: 33% 67% 17% 83% / 80% 61% 39% 20%  ;
}

90%{
border-radius: 83% 17% 50% 50% / 53% 32% 68% 47% ;
}
100%{
border-radius: 58% 42% 82% 18% / 52% 61% 39% 48%
}
}

.mobAbout{
display: none;


}
.aboutPerson{
display: flex;
align-items: center;
h1{

font-weight: 700;
color: rgb(3, 136, 141);

}

h5{
font-weight: lighter;
color: rgb(129, 129, 129);
}


}


h2{
    font-weight: 700;
    color: rgb(5, 131, 139);
}



@media (max-width:992px) {
    .aboutPerson{
    h1{
    font-size: 20px;
    }

    h5{
    
    font-size: 18px;
    
    }
    }



.person{
height: 300px;
}


}





@media (max-width:768px){


.aboutPerson{
display: none;
}

.mobAbout{
display: block;

}

.mobb{
background:url(https://coolbackgrounds.io/images/backgrounds/white/white-unsplash-9d0375d2.jpg);
background-size: cover;
}
.person{
display: none;

}

.mobPerson{
margin-top: 80px;
transition: 0.3s;
    height:350px;
    width: 80%;
    border-radius: 10px;
   
background: url(https://i.ytimg.com/vi/4Q6MGaQfy6k/maxresdefault.jpg);
background-size: cover;
background-position: center;
box-shadow: -20px 20px 30px  rgb(66, 64, 64);

 

  .wrapper{
  position: absolute;

  top:57%;
  
  width: 100%;
  
  h5{
  font-family: monospace;
  margin-left: 30%;
  color: rgb(43, 63, 48);
  text-shadow: 0 0 20px rgb(0, 0, 0);
  letter-spacing: 4px;
  line-height: 20px;
  }

  h4{
   color: rgb(190, 157, 189);
   font-family: monospace;
   text-shadow: 0 0 20px rgb(32, 30, 30);
   letter-spacing: 3px;
  }
  }
}


.mobWrite{
line-height: 20px;
span{
font-weight: 700;
font-family:'Times New Roman', Times, serif;
color: rgb(28, 83, 87);
}



}



}

</style>