<template>
	<div>
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<home-swiper :banners="banners"></home-swiper>
		<home-recommend :recommends="recommends"></home-recommend>
		<home-feature></home-feature>
		<tab-control :titles="['流行','新款','精选']"></tab-control>
		<goods-list :goods='goods[type].list'></goods-list>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	
	import TabControl from 'components/content/tabControl/TabControl.vue'
	import GoodsList from 'components/content/goods/GoodsList.vue'
	
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import HomeRecommend from './childComps/HomeRecommend.vue'
	import HomeFeature from './childComps/HomeFeature.vue'
	import {getHomeMultidata,getHomeGoods} from 'network/home.js'
	
	export default {
		name:'Home',
		data() {
			return {
				banners:null,
				recommends:null,
				goods:{
					pop:{page:0,list:[]},
					new:{page:0,list:[]},
					sell:{page:0,list:[]}
				},
				type:'pop'
			}
		},
		components:{
			NavBar,
			HomeSwiper,
			HomeRecommend,
			HomeFeature,
			TabControl,
			GoodsList
		},
		created() {
			this.getHomeM()
			this.getHomeG('pop')//首页流行数据
			this.getHomeG('new')//首页新款数据
			this.getHomeG('sell')//首页精选数据
		},
		methods:{
			getHomeM() {
				//获取首页轮播图及推荐数据
				getHomeMultidata().then(res => {
					this.banners = res.data.banner.list
					this.recommends = res.data.recommend.list
				})
			},
			getHomeG(type) {
				//使用变量的情况下取出对象内的属性必须使用Array[变量名]的格式，而不是Array.变量名
				const page = this.goods[type].page + 1
				//封装首页流行/新款/精选 数据
				getHomeGoods(type,page).then(res => {
					//...数组是ES6的展开运算符
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page += 1
				})
			},
			cs(type) {
				
				
			}
		}
	}
</script>

<style scoped>
	.home-nav{
		background-color: var(--color-tint);
	}
</style>
