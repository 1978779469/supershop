<template>
	<div class="goods-item" :key="index" @click="goodsClick">
		<img :src="res.show.img" alt="" @load="imgLoad">
		<div class="goods-info">
			<p>{{res.title}}</p>
			<span class="price">{{res.price}}</span>
			<span class="collect">{{res.cfav}}</span>
		</div>	
	</div>
</template>

<script>
	export default {
		name: 'GoodsItem',
		props: {
			res: {
				type: Object,
				default () {
					return {}
				}
			},
			index: {
				type: Number
			}
		},
		mounted() {
		},
		methods:{
			imgLoad() { //每次加载完成一张图片就刷新一次scrollheight
				// this.$parent.$parent.scroll.refresh()
				this.$emit('imgload',() => {this.$parent.$parent.scroll.refresh()})
			},
			goodsClick() {
				this.$router.push('/detail/' + this.res.iid)
			}
		}
	}
</script>

<style scoped>
	.goods-item {
		padding-bottom: 40px;
		position: relative;
		width: 48%;
	}

	.goods-item img {
		width: 100%;
		border-radius: 5px;
	}

	.goods-info {
		font-size: 12px;
		position: absolute;
		bottom: 5px;
		left: 0;
		right: 0;
		overflow: hidden;
		text-align: center;
	}

	.goods-info p {
		overflow: hidden;
		text-overflow: ellipsis;
		/* 文字超出部分使用...代替 */
		white-space: nowrap;
		margin-bottom: 3px;
	}

	.goods-info .price {
		color: var(--color-high-text);
		margin-right: 20px;
	}

	.goods-info .collect {
		position: relative;
	}

	.goods-info .collect::before {
		content: '';
		position: absolute;
		left: -15px;
		top: -1px;
		width: 14px;
		height: 14px;
		background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
	}
</style>
