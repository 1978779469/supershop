<template>
	<div class="goods-list">
		<goods-item v-for='(item,index) in goods' :res='item' :key='index' ref="goodsitem" @imgload="imgload"></goods-item>
	</div>
</template>

<script>
	import GoodsItem from './GoodsItem.vue'
	export default {
		name: 'GoodsList',
		props: {
			goods: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				refresh: null
			}
		},
		components: {
			GoodsItem
		},
		mounted() {
			
		},
		methods:{
			debounce(func,delay) {
				let timer = null
				return function (...args) {
				  if (timer) clearTimeout(timer)
				  timer = setTimeout(() => {
				    func.apply(this, args)
				  }, delay)
				}	
			},
			imgload(f) {
				f()
			}
		}
	}
</script>

<style scoped>
	.goods-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		padding: 2px;
	}
</style>
