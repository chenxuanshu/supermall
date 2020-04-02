<template>
	<div class="goods-list">
		<goods-list-item v-for="(item,index) in goods" :key="index" 
		:good="item" :imageLength="imageLength" :recommendLength="recommendLength" :index="index"
		 class="good-item"/>
	</div>
</template>

<script>
	import GoodsListItem from 'components/content/goodsList/GoodsListItem.vue'
	
	export default {
		name: 'GoodList',
		props: {
			goods: {
				type: Array,
				default(){return []}
			},
			imageLength: {
				type: Number,
				default(){return 30}
			},
			recommendLength: {
				type: Number,
				default(){return 20}
			}
		},
		components: {
			GoodsListItem
		}
	}
</script>

<style>
	.goods-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	
	
	
</style>
