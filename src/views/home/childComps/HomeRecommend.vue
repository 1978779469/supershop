<template>
	<div class="home-recommend">
		<div class="home-recommend-item" v-for="item in recommends">
			<div>
				<a :href="item.link"><img :src="item.image" /></a>
			</div>
			<a :href="item.link">{{item.title}}</a>
		</div>
	</div>
</template>

<script>
	export default {
		name:'HomeRecommend',
		props:{
			recommends:{
				type:Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style>
	.home-recommend{
		display: flex;
		text-align: center;
		font-size: 13px;
		padding: 8px 0 8px;
		border-bottom: 5px solid lightseagreen;
	}
	.home-recommend-item{
		flex: 1;
	}
	.home-recommend img{
		height: 70px;
		width: 70px;
		margin-bottom: 2px;
	}
</style>
