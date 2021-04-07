<template>
	<swiper class="home-swiper">
		<swiper-item v-for="item in banners">
			<a :href="item.link">
				<img :src="item.image" :title="item.title" alt="" @load="swiperload"/>
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
		},
		methods:{
			swiperload() {
				this.$emit('swiperload')
			}
		}
	}
</script>

<style scoped>
	
</style>
