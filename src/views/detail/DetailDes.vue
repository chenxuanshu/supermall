<template>
	<div class="base-info" v-if="Object.keys(goods).length !== 0">
		<div class="info-title">{{goods.title}}</div>
		<div class="info-price">
			<span class="n-price">{{goods.newPrice}}</span>
			<span class="o-price">{{goods.oldPrice}}</span>
			<span class="discount" v-if="goods.discount">{{goods.discount}}</span>
		</div>
		<div class="info-other">
			<span>{{goods.columns[0]}}</span>
			<span>{{goods.columns[1]}}</span>
			<span>{{goods.services[goods.services.length-1].name}}</span>
		</div>
		<div class="info-service">
			<span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
				<img :src="goods.services[index-1].icon">
				<span>{{goods.services[index-1].name}}</span>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailDes',
		props: {
			goods: {
				type: Object,
				default(){return {}}
			}
		},
		
	}
</script>

<style scoped="scoped">
	.info-title {
		padding: 4px;
		font-weight: 400;
	}
	.info-price {
		padding-bottom: 10px;
	}
	.info-price .n-price {
		font-size: 20px;
		color: var(--color-tint);
		padding-left: 4px;
	}
	.info-price .o-price {
		font-size: 14px;
		color: #7a7a7a;
		text-decoration: line-through;
		padding: 0 5px;
	}
	.info-price .discount {
		background-color: var(--color-tint);
		color: white;
		border-radius: 4px;
	}
	.info-other {
		display: flex;
		text-align: justify;
		padding-bottom: 5px;
		box-shadow: 0 1px 1px rgba(100,100,100,.2);
	}
	.info-other span {
		font-size: 14px;
		color: #7a7a7a;
		flex: 1;
	}
	.info-service {
		display: flex;
		padding: 15px 5px;
		font-size: 14px;
		border-bottom: 6px rgba(100,100,100,.2) solid;
	}
	.info-service>span {
		flex: 1;
	}
	.info-service img {
		width: 10px;
	}
</style>
