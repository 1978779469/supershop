<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<tab-control :titles="['流行','新款','精选']" ref="tabcontrol1" :class="{tabcpos:isFixed}" v-show="isFixed"
			@spanClick="spanClick"></tab-control>

		<scroll class="scroll" ref="scroll" :protoType='protoType' :pullUpLoad='true' @scrollP='scrollPosition' @pullingUp="loadMore">
			<home-swiper :banners="banners" @swiperload.once="swiperload"></home-swiper>
			<home-recommend :recommends="recommends"></home-recommend>
			<home-feature></home-feature>
			<tab-control :titles="['流行','新款','精选']" ref="tabcontrol2" @spanClick="spanClick"></tab-control>
			<goods-list class="goods" :goods='goods[type].list' ref="goodslist"></goods-list>
		</scroll>
		<back-top class="back-top" @click.native="backClick()" v-show="isshowBack"></back-top>
		<!-- 直接在组件元素上添加监听事件必须使用native修饰符 -->
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import scroll from 'components/common/scroll/Scroll.vue'

	import TabControl from 'components/content/tabControl/TabControl.vue'
	import GoodsList from 'components/content/goods/GoodsList.vue'
	import BackTop from 'components/content/backTop/BackTop.vue'

	import HomeSwiper from './childComps/HomeSwiper.vue'
	import HomeRecommend from './childComps/HomeRecommend.vue'
	import HomeFeature from './childComps/HomeFeature.vue'
	import {
		getHomeMultidata,
		getHomeGoods
	} from 'network/home.js'

	export default {
		name: 'Home',
		data() {
			return {
				banners: null,
				recommends: null,
				goods: { //首页获取到的商品分类信息
					pop: {
						page: 0,
						list: []
					},
					new: {
						page: 0,
						list: []
					},
					sell: {
						page: 0,
						list: []
					}
				},
				type: 'pop',
				protoType: 3, //better-scroll 滚动监听方式
				isshowBack: false,
				offsetTop: null,
				isFixed: false
			}
		},
		components: {
			NavBar,
			HomeSwiper,
			HomeRecommend,
			HomeFeature,
			TabControl,
			GoodsList,
			scroll,
			BackTop
		},
		created() {
			this.getHomeM()
			this.getHomeG('pop') //获取首页流行数据
			this.getHomeG('new') //获取首页新款数据
			this.getHomeG('sell') //获取首页精选数据
		},
		mounted() {
			
		},
		methods: {
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
				getHomeGoods(type, page).then(res => {
					//...数组是ES6的展开运算符
					this.goods[type].list.push(...res.data.list)
					this.goods[type].page += 1
					//better-scroll默认只会执行一次下拉加载事件，所以这里在每次数据修改时重新添加一次下拉事件
					//finishPullUp不会执行下拉事件，它只是添加。下拉事件靠scroll.on完成
					// this.scroll.on('pullingUp', () => {
					// 	console.log('这里是下拉事件处理')
					// })
					this.$refs.scroll.finishPullUp()
				})
			},
			backClick() { //返回顶部
				// this.$refs.scroll.scroll.scrollTo(0,0,500)
				this.$refs.scroll.scrollTo(0, 0)
			},
			scrollPosition(position) {
				if (position.y < -1000) {
					this.isshowBack = true
				} else if (position.y > -1000) {
					this.isshowBack = false
				}
				this.isFixed = position.y < -(this.offsetTop)
			},
			loadMore() {
				this.getHomeG(this.type)
				console.log('正在加载')
			},
			swiperload() { //首页轮播图图片加载完成事件
				this.offsetTop = this.$refs.tabcontrol2.$el.offsetTop
			},
			spanClick(index) {
				if (index == 0) {
					this.type = 'pop'
				} else if (index == 1) {
					this.type = 'new'
				} else {
					this.type = 'sell'
				}
				this.$refs.tabcontrol1.currentIndex = index
				this.$refs.tabcontrol2.currentIndex = index
			}
		}
	}
</script>

<style scoped>
	#home {
		position: relative;
		height: 100vh;
	}

	.home-nav {
		background-color: var(--color-tint);
		box-shadow: 2px 2px 10px mediumseagreen;
		color: #FFFFFF;
		/* position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1; */
	}

	.scroll {
		position: absolute;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
		overflow: hidden;
	}

	.back-top {
		position: absolute;
		bottom: 55px;
		right: 0;
	}

	.tabcpos {
		position: relative;
		z-index: 2;
	}
</style>
