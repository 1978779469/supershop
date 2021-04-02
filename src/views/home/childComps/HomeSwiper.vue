<template>
	<swiper class="home-swiper">
		<swiper-item v-for="item in banners">
			<a :href="item.link">
				<img :src="item.image" :title="item.title" alt="" />
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
	import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
	export default {
		name:'HomeSwiper',
		props:{
			banners:{
				type:Array,
				default() {
					return []
				}
			}
		},
		components:{
			Swiper,
			SwiperItem
		}
	}
</script>

<style>
	.home-swiper{
		margin-top: 44px;
	}
</style>
