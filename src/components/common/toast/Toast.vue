<template>
	<div class="toast" v-show="isShow">
		{{this.message}}
	</div>
</template>

<script>
	export default {
		name: 'Toast',
		data(){return {
			isShow: false,
			message: ''
		}},
		methods: {
			show(message,time){
				this.isShow = true
				this.message = message
				setTimeout(() => {
					this.isShow = false
					this.message = ''
				},time)
			}
			
		}
	}
</script>

<style>
	.toast {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		padding: 8px 10px;
		color: #fff;
		background-color: rgba(0,0,0,.7);
		border-radius: 5px;
		z-index: 1000;
	}
</style>
