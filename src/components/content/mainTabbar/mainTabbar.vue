<template>
	<tab-bar>
		<tab-baritem path="/home" activecolor="pink">
			<img slot="item-ico" src="~assets/img/tabbar/home.svg" />
			<img slot="item-ico-active" src="~assets/img/tabbar/home_active.svg" />
			<div slot="item-text">首页</div>
		</tab-baritem>
		<tab-baritem path="/category" activecolor="pink">
			<img slot="item-ico" src="~assets/img/tabbar/category.svg" />
			<img slot="item-ico-active" src="~assets/img/tabbar/category_active.svg" />
			<div slot="item-text">分类</div>
		</tab-baritem>
		<tab-baritem path="/shopcart" activecolor="pink">
			<img slot="item-ico" src="~assets/img/tabbar/shopcart.svg" />
			<img slot="item-ico-active" src="~assets/img/tabbar/shopcart_active.svg" />
			<div slot="item-text">购物车</div>
		</tab-baritem>
		<tab-baritem path="/profile" activecolor="pink">
			<img slot="item-ico" src="~assets/img/tabbar/profile.svg" />
			<img slot="item-ico-active" src="~assets/img/tabbar/profile_active.svg" />
			<div slot="item-text">我的</div>
		</tab-baritem>
	</tab-bar>
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar.vue';
	import TabBaritem from 'components/common/tabbar/TabBaritem.vue';
	export default {
		name:'mainTabbar',
		components:{
			TabBar,
			TabBaritem
		}
	}
</script>

<style>
</style>
