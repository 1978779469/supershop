<template>
	<div id="detail">
		<detail-nav-bar class="dnb"></detail-nav-bar>
		<scroll class="wrapper" @pullingUp="pullingUp" :pullUpLoad='true'>
			<detail-swiper :topImg="topImg" ></detail-swiper>
			<detail-base-info :goods="goods"></detail-base-info>
			<detail-shop-info :shop="shop"></detail-shop-info>
		</scroll>
	</div>
</template>

<script>
	import DetailNavBar from './childDetail/DetailNavBar.vue'
	import DetailSwiper from './childDetail/DetailSwiper.vue'
	import DetailBaseInfo from './childDetail/DetailBaseInfo.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import DetailShopInfo from './childDetail/DetailShopInfo.vue'
	
	import {getDetailData,Goods,Shop} from 'network/detail.js'
	export default {
		name:'Detail',
		data() {
			return {
				id:null,
				topImg:[],
				goods:{},
				shop:{}
			}
		},
		created() {
			this.id = this.$route.params.id
			this.getDetailD(this.id)
		},
		components:{
			DetailNavBar,
			DetailSwiper,
			DetailBaseInfo,
			Scroll,
			DetailShopInfo
		},
		methods:{
			getDetailD(id) { //获取详情页数据
				getDetailData(id).then(res => {
					const data = res
					//将详情页轮播图数据push到topImg
					this.topImg.push(...data.result.itemInfo.topImages)
					//将获取到的数据进行整理
					//商品
					this.goods = new Goods(data.result.itemInfo,data.result.columns,data.result.shopInfo.services)
					//店铺
					this.shop = new Shop(data.result.shopInfo)
				})
			},
			pullingUp() {
				console.log('xiala')
			}
			
		}
	}
</script>

<style scoped>
	#detail{
		position: relative;
		z-index: 5;
		height: 100vh;
	}
	.wrapper{
		height: calc(100% - 44px);
		background-color: #F2F5F8;
		position: relative;
		top: 44px;
		overflow: hidden;
	}
	.dnb{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
</style>
