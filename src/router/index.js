import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.安装插件
Vue.use(VueRouter)
const Home = () => import('views/home/Home.vue');
const Category = () => import('views/category/Category.vue');
const Profile = () => import('views/profile/Profile.vue');
const Shopcart = () => import('views/shopcart/Shopcart.vue');
const Detail = () => import('views/detail/Detail.vue');

const routes = [
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/profile',
		component:Profile
	},
	{
		path:'/shopcart',
		component:Shopcart
	},
	{
		path:'/category',
		component:Category
	},
	{
		path:'/detail/:id',
		component:Detail
	}
]

// 2.创建路由对象
const router = new VueRouter({
	routes,
	mode:'history'
})

// 3.导出路由对象
export default router