<template>
	<div class="wrapper" ref='wrapper'>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'

	export default {
		name: 'Scroll',
		data() {
			return {
				scroll: null
			}
		},
		props:{
			protoType:{
				type:Number,
				default:1
			},
			pullUpLoad:{
				type:Boolean,
				default:false
			}
		},
		mounted() {
				this.scroolnew()
				
		},
		methods:{
			scrollTo(x,y,time=500) {
				this.scroll.scrollTo(x,y,time)
			},
			scroolnew() {
				this.scroll = new BScroll(this.$refs.wrapper, {
					click: true,
					probeType: this.protoType,
					pullUpLoad:this.pullUpLoad
				})
				//滑动位置监听
				this.scroll.on('scroll',(position) => {
					this.$emit('scrollP',position) //滑动位置监听事件
				})
				//上拉加载
				this.scroll.on('pullingUp',() => {
					this.$emit('pullingUp') //上拉到底的加载事件
				})
				
			},
			finishPullUp() {
				this.scroll.finishPullUp()
			}
		}
	}
</script>

<style scoped>

</style>
