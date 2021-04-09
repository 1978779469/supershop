<template>
	<div class="detail-swiper">
		<swiper class="detail-sw">
			<swiper-item v-for="item in topImg">
				<img :src="item" alt="" />
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
	import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
	export default {
		name:'DeatilSwiper',
		props:{
			topImg:{
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

<style scoped>
	.detail-sw{
		height: 300px;
		overflow: hidden;
	}
</style>
