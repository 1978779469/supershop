<template>
	<div>
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<home-swiper :banners="banners"></home-swiper>
		<home-recommend :recommends="recommends"></home-recommend>
		<home-feature></home-feature>
		<tab-control></tab-control>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import TabControl from 'components/content/tabControl/TabControl.vue'
	
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import HomeRecommend from './childComps/HomeRecommend.vue'
	import HomeFeature from './childComps/HomeFeature.vue'
	import {getHomeMultidata} from 'network/home.js'
	
	export default {
		name:'Home',
		data() {
			return {
				banners:null,
				recommends:null
			}
		},
		components:{
			NavBar,
			HomeSwiper,
			HomeRecommend,
			HomeFeature,
			TabControl
		},
		created() {
			getHomeMultidata().then(res => {
				this.banners = res.data.banner.list
				console.log(res.data)
				this.recommends = res.data.recommend.list
			}).catch(err => {
				console.log(err)
			})
		}
	}
</script>

<style>
	.home-nav{
		background-color: var(--color-tint);
	}
</style>
