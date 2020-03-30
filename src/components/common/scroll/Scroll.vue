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
		data(){return {
			scroll: null
		}},
		methods: {
			refresh(){ this.scroll && this.scroll.refresh()},
			finishPullUp(){ this.scroll && this.scroll.finishPullUp()},
			scrollTo(x,y,t){ this.scroll && this.scroll.scrollTo(x,y,t)}
		},
		props:{
			probeType: {
				type: Number,
				default(){return 0}
			},
			click :{
				type: Boolean,
				default(){return true}
			},
			pullup: {
				type: Boolean,
				default(){return false}
			},
			pulldown: {
				type: Boolean,
				dafault(){return false}
			}
		},
		mounted(){
			this.scroll = new BScroll(this.$refs.wrapper,{
				click: this.click,
				probeType: this.probeType,
				pullup: this.pullup,
				pulldown: this.pulldown
			})
			this.scroll.on('scroll',(p)=>{
				this.$emit('isScroll',p)
			})
			this.scroll.on('scrollEnd',()=>{
				if(this.scroll.y <= (this.scroll.maxScrollY + 80)){
					this.$emit('scrollEnd')
				}
			})
		}
	}
</script>

<style>
</style>
