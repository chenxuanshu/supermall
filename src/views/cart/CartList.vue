<template>
	<div class="cart-list">
		<cart-item v-for="(item,index) in cartList" :cart-item="item" :key="index"/>
	</div>
</template>

<script>
	import CartItem from 'views/cart/CartItem.vue'
	export default {
		name: 'CartList',
		components: {
			CartItem
		},
		props: {
			cartList: {
				type: Array,
				default(){return []}
			}
		}
		
	}
</script>

<style>
</style>
