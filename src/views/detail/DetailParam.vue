<template>
	<div class="goods-param" v-if="Object.keys(goodsParam) !== 0">
		<table v-for="(table,index) in sizes" :key="index" class="goods-size">
			<tr v-for="(tr,indey) in table" :key="indey">
				<td v-for="(td,indez) in tr" :key="indez">
					{{td}}
				</td>
			</tr>
		</table>
		<table class="goods-param">
			<tr v-for="(info,index) in infos" :key="index">
				<td class="info-param-key">{{info.key}}</td>
				<td class="param-value">{{info.value}}</td>
			</tr>
		</table>
		<div class="info-img" v-if="image.length !== 0">
			<img :src="image"/>
		</div>
	</div>
	
</template>

<script>
	export default {
		name: 'DetailParam',
		data(){return {
			image: '',
			infos: '',
			sizes: ''
		}},
		props: {
			goodsParam: {
				type: Object,
				default(){return {}}
			}
		},
		watch: {
			goodsParam(){
				this.image = this.goodsParam.image
				this.infos = this.goodsParam.infos
				this.sizes = this.goodsParam.sizes
			}
		}
	}
</script>

<style scoped="scoped">
	.goods-param {
		padding: 20px 15px;
		font-size: 14px;
		border-bottom: 5px solid #f2f5f8;
	}
	
	.goods-param table {
		width: 100%;
		border-collapse: collapse;
	}
	.goods-param table tr {
		height: 42px;
	}
	.goods-param table tr td {
		border-bottom: 1px solid rgba(100,100,100,.1);
	}
	.info-param-key {
		width: 95px;
	}
	.info-param {
		border-top: 1px solid rgba(0,0,0,.1);
	}
	.param-value {
		color: var(--color-tint);
	}
	.info-img {
		width: 100%;
	}
</style>
