<template>
	<div class="detail-goods">
		<span class="header">商品信息</span>
		<div class="goods-image-wrapper" v-for="(item,index) in goodsImage" :key="index">
		<img :src="item" @load="imgLoad"/>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailGoods',
		data(){
			return {
				shopImListLen: 0,
				counter: 0
			}
		},
		props: {
			goodsImage: {
				type: Array,
				default(){return []}
			}
		},
		methods: {
			imgLoad(){
				this.counter++
				if(this.counter == this.shopImListLen){
				this.$emit('imgLoad')
				}
			}
			
		},
		watch:{
			goodsImage(){
				this.shopImListLen = this.goodsImage.length
			}
		}
		
	}
</script>

<style>
	.detail-goods img {
		width: 100%;
	}
	.detail-goods .header {
		display: block;
		text-align: center;
		font-size: 14px;
		padding-right: 40px;
		border-bottom: 1px solid #eee;
		margin-bottom: 5px;
	}
</style>
