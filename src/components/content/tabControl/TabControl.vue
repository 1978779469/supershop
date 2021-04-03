<template>
	<div class="tab-control">
		<div class="tab-control-item" v-for="(item,index) in titles">
			<span :class="{active: index === currentIndex}" @click="spanclick(index)">{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'TabControl',
		props:{
			titles:{
				type:Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				currentIndex:0
			}
		},
		methods:{
			spanclick(index) {
				if(index==0) {
					this.$parent.type = 'pop'
				}else if(index == 1) {
					this.$parent.type = 'new'
				}else{
					this.$parent.type = 'sell'
				}
				this.currentIndex = index
			}
		}
	}
</script>

<style scoped>
	.tab-control{
		display: flex;
		text-align: center;
		line-height: 40px;
		position: sticky;
		top: 44px;
		background-color: #DCDCDC;
		z-index: 1;
	}
	.tab-control-item{
		flex: 1;
		border-top: 2px solid #42B983;
	}
	.active{
		color: var(--color-high-text);
		padding-bottom: 3px;
		border-bottom: 2px solid #3CB371;
	}
</style>
