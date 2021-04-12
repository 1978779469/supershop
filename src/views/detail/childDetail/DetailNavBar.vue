<template>
	<div id="detailnavbar">
		<nav-bar>
			<div slot="left" class="left" @click="back()">
				<img alt="" src="~assets/img/common/back.svg" />
			</div>
			<div slot="center" class="center">
				<div v-for="(item,index) in titles" @click="titClick(index)" :class="{active:currentIndex==index}">
					{{item}}</div>
			</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	export default {
		name: 'DetailNavBar',
		data() {
			return {
				titles: ['商品', '参数', '评论', '推荐'],
				currentIndex: 0
			}
		},
		components: {
			NavBar
		},
		methods: {
			titClick(index) {
				this.currentIndex = index
				this.$emit('currentIndex',this.currentIndex)
			},
			back() {
				this.$router.back()
			}
		}
	}
</script>

<style scoped>
	.center {
		display: flex;
		font-size: 14px;
	}

	.center div {
		flex: 1;
	}

	.active {
		color: red;
	}

	.left {
		position: relative;
	}

	.left img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, 50%);
	}
</style>
