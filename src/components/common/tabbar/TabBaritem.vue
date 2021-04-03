<template>
		<div class="tabbaritem" @click="itemclick()">
			<div v-if="!isactive"><slot name="item-ico"></slot></div>
			<div v-else><slot name="item-ico-active"></slot></div>
			<div :style="activestyle"><slot name="item-text"></slot></div>
		</div>
</template>

<script>
	export default {
		name:'TabBaritem',
		props:{
			path:{
				type:String
			},
			activecolor:{
				type:String,
				default:'red'
			}
		},
		computed:{
			isactive() {
				return this.$route.path.indexOf(this.path) !==-1
			},
			activestyle() {
				return this.isactive ? {color:this.activecolor} : {}
			}
		},
		methods:{
			itemclick() {
				this.$router.replace(this.path);
			}
		}
	}
</script>

<style scoped>
	.tabbaritem{
		flex: 1;
		height: 49px;
		text-align: center;
		font-size: 14px;
	}
	.tabbaritem img {
		height: 24px;
		width: 24px;
		margin-top: 3px;
		vertical-align: middle;
	}
	.active{
		color: red;
	}
</style>
