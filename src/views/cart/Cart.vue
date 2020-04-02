<template>
	<div class="cart" v-if="cartList[0]">
		<nav-bar class="cart-nav">
			<div slot="center">购物车({{cartLength}})</div>
		</nav-bar>
		<scroll class="scroll" :probe-type="3">
		<cart-list :cartList="cartList"/>
		</scroll>
		<cart-bottom-nav class="cart-bottom-nav"/>
	</div>
	<div v-else class="elseShow">购物车空空如也</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import CartList from 'views/cart/CartList.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import CartBottomNav from 'views/cart/CartBottomNav.vue'
	
	import {mapGetters} from 'vuex'
	
	export default {
		name:'Cart',
		data(){return {
			cartList: this.$store.state.cartGoods
		}},
		components:{NavBar,CartList,Scroll,CartBottomNav},
		computed: {
			...mapGetters(['cartLength'])
		}
	}
</script>

<style scoped="scoped">
	.cart {
		height: 100vh;
	}
	.cart-nav {
		background-color: var(--color-tint);
		color: white;
		position: relative;
		z-index: 99;
	}
	.scroll {
		height: calc(100vh - 44px - 49px);
	}
	.elseShow {
		font-size: 20px;
		color: #333;
		text-align: center;
		line-height: 100vh;
	}
	
</style>
