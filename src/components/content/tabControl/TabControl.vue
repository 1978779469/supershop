<template>
	<div class="tab-control">
		<div class="tab-control-item" v-for="(item,index) in titles">
			<span :class="{active: index === currentIndex}" @click="spanClick(index)">{{item}}</span>
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
			spanClick(index) {
				this.$emit('spanClick',index)
				// this.currentIndex = index
			}
		}
	}
</script>

<style scoped>
	.tab-control{
		display: flex;
		text-align: center;
		line-height: 40px;
		background-color: #DCDCDC;
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
