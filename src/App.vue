<template>
  <div id="app">

 <div class="loade">
  <loader object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular" ></loader>
  </div>



   <Home> </Home>
   <About> </About>
   <Movies class="mt-3"> </Movies>
  
<Counter> </Counter>

<hamkorlar> </hamkorlar>
<Contact> </Contact>
<Footer> </Footer>
  </div>
</template>

<script>
 import Home from './components/Home'
 import About from './components/About'
 import Movies from './components/Movies'
import Counter from './components/Counter'
import Hamkorlar from './components/Hamkorlar.vue'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default {
el:'#app',
components:{
  Home,
  About,
  Movies,
  Counter,
Hamkorlar,
Contact,
Footer,


},

data(){
  return{

  }
},





mounted(){
setTimeout(() => {
   window.document.querySelector('.loade').style.display = 'none'
}, 800);




}
 
}






</script>




<style lang="scss" >
 *{
   margin: 0;
   padding: 0;
    -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
   box-sizing: border-box;
   font-family: Poppins, sans-serif;
 }


.loade{
  display: block;
}

::-webkit-scrollbar {
  width: 12px;
  position: relative;
 

}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #404659; 



}

::-webkit-scrollbar-thumb {
  background:url('./assets/scroll.png');
 
  border-radius: 15px;

  
}

::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}




 
</style>  