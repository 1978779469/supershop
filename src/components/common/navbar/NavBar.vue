<template>
	<div class="nav-bar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default {
		name:'NavBar'
	}
</script>

<style scoped>
	.nav-bar{
		display: flex;/* 父容器设置flex弹性盒布局 */
		height: 44px;
		line-height: 44px;
		
	}
	.left,.right{
		width: 60px;
	}
	.center{
		flex: 1;
		text-align: center;
		font-size: 18px;
	}
</style>
