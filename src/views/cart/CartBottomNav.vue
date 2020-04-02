<template>
	<div class="cart-bottom-nav">
		<cart-selector class="select-all" @click.native="checkAll" :checked="isSelected" v-model="isSelected"/>
		<span>全选</span>
		<span class="total-price">合计：￥{{this.totalPrice}}</span>
		<span class="buy">去计算</span>
	</div>
</template>

<script>
	import CartSelector from 'views/cart/CartSelector.vue'
	export default {
		name: 'CartBottomNav',
		data(){return {
		}},
		computed: {
			totalPrice(){
				let goodsList = this.$store.state.cartGoods
				return goodsList.filter(item => {return item.checked})
				.reduce((preValue,item) => {return preValue + item.lowPrice * item.counter},0)
				.toFixed(2)
			},
			isSelected(){
				return !(this.$store.state.cartGoods.find(item => !item.checked))
			}
		},
		components: {CartSelector},
		methods: {
			checkAll(){
				let notCheckedGoods = this.$store.state.cartGoods.find(item => !item.checked)
				if (notCheckedGoods){
					this.$store.state.cartGoods.forEach(item => {item.checked = true})
				}else {
					this.$store.state.cartGoods.forEach(item => {item.checked = false})
				}
			}
		}
	}
</script>

<style>
	.cart-bottom-nav {
		height: 44px;
		width: 100%;
		background-color: #eee;
		position: fixed;
		bottom: 50px;
		left: 0;
		box-shadow: 0 2px 3px rgba(0,0,0,.2);
		font-size: 14px;
		color: #888;
		line-height: 44px;
		padding-left: 35px;
		box-sizing: border-box;
	}
	.cart-bottom-nav .select-all {
		position: absolute;
		line-height: 0;
		left: 12px;
		top: 13px;
	}
	.cart-bottom-nav .total-price {
		margin-left: 15px;
		font-size: 16px;
		color: #666;
	}
	.cart-bottom-nav .buy {
		background-color: orangered;
		color: #fff;
		width: 100px;
		height: 44px;
		text-align: center;
		line-height: 44px;
		float: right;
	}
</style>
