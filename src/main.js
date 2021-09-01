import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './components/routers/router'
import VueSmoothScroll from 'vue2-smooth-scroll'
import loader from "vue-ui-preloader";
import AOS from 'aos'
import 'aos/dist/aos.css'



Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(VueSmoothScroll, {
  duration: 400,
  updateHistory: false,
})
Vue.use(loader);





new Vue({
  render: h => h(App),
  router,


mounted(){
  AOS.init()
}

}).$mount('#app')




