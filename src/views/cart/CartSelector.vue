<template>
	<div class="icon-selector" :class="{'selected':checked}">
		<img src="~assets/img/cart/tick.svg">
	</div>
</template>

<script>
	export default {
		name: 'CartSelector',
		data(){return {
		}},
		props: {
			checked: {
				type: Boolean,
				default(){return false}
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped="scoped">
	.icon-selector {
		position: relative;
		margin: 0;
		width: 18px;
		height: 18px;
		border-radius: 50%;
		border: 2px solid #ccc;
		cursor: pointer;
	}
	.selected {
		background-color: #ff8198;
		border-color: #ff8198;
	}
	
</style>
