<template>
	<div class="goods-list-item">
		<img :src="good.show.img">
		<div class="goods-info">
			<p>{{good.title}}</p>
			<span class="price">{{rmbPrice}}</span>
			<img src="~assets/img/home/collect.svg" class="collectImg">
			<span class="collect">{{good.cfav}}</span>
		</div>
	</div>
	
	
	
</template>

<script>
	export default {
		name: 'GoodListItem',
		props: {
			good: {
				type: Object,
				default(){return {}}
			}
		},
		computed:{
			rmbPrice(){
				return '￥'+this.good.price
			}
		}
	}
	
</script>

<style>
	.goods-list-item {
		width: 48%;
		padding-bottom: 40px;
		position: relative;
	}
	.goods-list-item img {
		width: 100%;
		border-radius: 5px;
	}
	.goods-info {
		font-size: 12px;
		position: absolute;
		bottom: 5px;
		left: 0;
		right: 0;
		overflow: hidden;
		text-align: center;
	}
	.goods-info p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin-bottom: 3px;
	}
	.goods-info .price {
		color: var(--color-tint);
		margin-right: 80px;
		position: absolute;
		left: 5px;
	}
	.good-item .collectImg {
		width: 13px;
		color: red;
	}
	.good-item .collect {
		position: absolute;
		padding-left: 2px;
	}

	
</style>
