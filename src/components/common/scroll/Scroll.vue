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
		props:{
			probeType: {
				type: Number,
				default: 0
			}
		},
		mounted(){
			this.scroll = new BScroll(this.$refs.wrapper,{
				click: true,
				probeType: this.probeType
			})
			this.scroll.on('scroll',(p)=>{
				this.$emit('isScroll',p)
			})
		}
	}
</script>

<style>
</style>
