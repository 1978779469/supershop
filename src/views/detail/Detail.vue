<template>
	<div id="detail">
		<detail-nav-bar class="dnb" ref="nav" @currentIndex="getCurrentIndex"></detail-nav-bar>
		<scroll class="wrapper" @pullingUp="pullingUp" :pullUpLoad='true' ref="dscroll">
			<detail-swiper :topImg="topImg" ></detail-swiper>
			<detail-base-info :goods="goods"></detail-base-info>
			<detail-shop-info :shop="shop"></detail-shop-info>
			<detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
			<detail-param-info :paramInfo="goodsparam" ref="param"></detail-param-info>
			<detail-comment-info :commentInfo="commentInfo" ref="comment"></detail-comment-info>
			<goods-list :goods="recommend" ref="recommend"></goods-list>
		</scroll>
	</div>
</template>

<script>
	import Scroll from 'components/common/scroll/Scroll.vue'
	import GoodsList from 'components/content/goods/GoodsList.vue'
	
	import DetailNavBar from './childDetail/DetailNavBar.vue'
	import DetailSwiper from './childDetail/DetailSwiper.vue'
	import DetailBaseInfo from './childDetail/DetailBaseInfo.vue'
	import DetailGoodsInfo from './childDetail/DetailGoodsInfo.vue'
	import DetailShopInfo from './childDetail/DetailShopInfo.vue'
	import DetailParamInfo from './childDetail/DetailParamInfo.vue'
	import DetailCommentInfo from './childDetail/DetailCommentInfo.vue'
	
	import {getDetailData,Goods,Shop,GoodsParam,getDatilRecommend} from 'network/detail.js'
	export default {
		name:'Detail',
		data() {
			return {
				id:null,
				topImg:[],
				goods:{},
				shop:{},
				detailInfo:{},
				goodsparam:{},
				commentInfo:{},
				recommend:[],
				currentIndex:0,
				paramheight:null,
				commentheight:null,
				recommendheight:null
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
			DetailShopInfo,
			DetailGoodsInfo,
			DetailParamInfo,
			DetailCommentInfo,
			GoodsList
		},
		mounted() {
			
		},
		methods:{
			getDetailD(id) { //获取详情页数据
				getDetailData(id).then(res => {
					const data = res.result
					//将详情页轮播图数据push到topImg
					this.topImg.push(...data.itemInfo.topImages)
					//将获取到的数据进行整理
					//商品
					this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
					//店铺信息
					this.shop = new Shop(data.shopInfo)
					//商品详情
					this.detailInfo = data.detailInfo
					//参数信息
					console.log(data)
					this.goodsparam = new GoodsParam(data.itemParams.info,data.itemParams.rule)
					//评论
					if (data.rate.cRate != 0) {
						this.commentInfo = data.rate.list[0]
					}
				})
				//获取推荐商品
				getDatilRecommend().then(res => {
					this.recommend = res.data.list
					console.log(this.recommend)
				})
			},
			pullingUp() {
				
			},
			imageLoad() {
				this.$refs.dscroll.scroll.refresh()
			},
			getCurrentIndex(cindex) {
				//导航点击事件
				this.currentIndex = cindex
				this.paramheight = -this.$refs.param.$el.offsetTop
				this.commentheight = -this.$refs.comment.$el.offsetTop
				this.recommendheight = -this.$refs.recommend.$el.offsetTop
				if (cindex == 0) {
					this.$refs.dscroll.scroll.scrollTo(0, 0,500)
				}else if (cindex == 1) {
					this.$refs.dscroll.scroll.scrollTo(0, this.paramheight,500)
				}else if (cindex == 2) {
					this.$refs.dscroll.scroll.scrollTo(0, this.commentheight,500)
				}else if (cindex == 3) {
					this.$refs.dscroll.scroll.scrollTo(0, this.recommendheight,500)
				}
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
