import VueRouter from "vue-router"
import Grammatika from '../forMoviesComponents/Grammatika'
import generalEnglish from '../forMoviesComponents/generalEnglish'
import Teachers from '../counterComponents/Teachers'
import Students from '../counterComponents/Students'
import Users from '../counterComponents/Users'
export default new VueRouter({
routes: [
{
    path:'/Grammatika',
    components:{
        default:Grammatika,
        a:Grammatika
    }
    
},

{
    path:'/generalEnglish',
    components:{
        default:generalEnglish,
        a:generalEnglish
    }
},

{
    path:'/Teachers',
    components: {
        default:Teachers,
        b:Teachers
    }
},

{
    path:'/Students',
    components: {
        default:Students,
        b:Students
    }
},



{
    path:'/Users',
    components: {
        default:Users,
        b:Users
    }
},




],




mode:'history'
})