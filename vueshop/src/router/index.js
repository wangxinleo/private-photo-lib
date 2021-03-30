import Vue from 'vue'
import VueRouter from "vue-router";

const Home = () => import('views/Home/Home')
const Category = () => import('views/Category/Category')
const Profile = () => import('views/Profile/Profile')
const ShopCart = () => import('views/ShopCart/ShopCart')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'Home',
    component:Home
  },
  {
    path:'/category',
    name:'Category',
    component:Category
  },
  {
    path:'/profile',
    name:'Profile',
    component:Profile
  },
  {
    path:'/shopcart',
    name:'ShopCart',
    component:ShopCart
  }
]
const NewRouter = new VueRouter({
  routes,
  mode:'history'
})

export default NewRouter
