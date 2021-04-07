<template>
	<div id="detail">
			<detail-item></detail-item>
	</div>
</template>

<script>
	import DetailItem from './childDetail/DetailItem.vue'
	import {getDetailData} from 'network/detail.js'
	export default {
		name:'Detail',
		data() {
			return {
				id:null,
				topImg:[]
			}
		},
		created() {
			this.id = this.$route.params.id
			this.getDetailD(this.id)
		},
		components:{
			DetailItem
		},
		methods:{
			getDetailD(id) { //获取详情页数据
				getDetailData(id).then(res => {
				this.topImg.push(...res.result.itemInfo.topImages) //详情页轮播图
				
				})
			}
		}
	}
</script>

<style scoped>

</style>
