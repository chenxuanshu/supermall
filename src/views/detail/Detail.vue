<template>
	<div class="detail">
		<detail-nav class="detail-nav"/>
		<scroll class="scroll" ref="scroll">
		<swiper>
			<swiper-item v-for="(item,index) in this.topImages" class="swiper-item" :key="index">
				<img :src="item">
			</swiper-item>
		</swiper>
		<detail-des :goods="goods"/>
		<Shop :shopInfo="shop"/>
		<detail-goods :goodsImage="goodsImage" @imgLoad="imgLoad"/>
		<detail-param :goodsParam="goodsParam"/>
		<detail-comment :goodsComments="goodsComment"/>
		</scroll>
	</div>
</template>

<script>
	import DetailNav from 'views/detail/DetailNav.vue'
	import Swiper from 'components/common/swiper/Swiper.vue'
	import SwiperItem from 'components/common/swiper/SwiperItem.vue'
	import DetailDes from 'views/detail/DetailDes.vue'
	import Shop from 'views/detail/Shop.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import DetailGoods from 'views/detail/DetailGoods.vue'
	import DetailParam from 'views/detail/DetailParam.vue'
	import DetailComment from 'views/detail/DetailComment.vue'
	
	import {detailReq,Goods,Shops,GoodsParam} from 'network/home-req.js'
	
	export default {
		name: 'Detail',
		data(){return {
			iid: '',
			topImages: [],
			goods: {},
			shop: {},
			goodsImage: [],
			goodsParam: {},
			goodsComment: {}
		}},
		components: {DetailNav,Swiper,SwiperItem,DetailDes,Shop,Scroll,DetailGoods,DetailParam,DetailComment},
		methods: {
			imgLoad(){
				this.$refs.scroll.refresh()
			}
		},
		created(){
			this.iid = this.$route.query.iid
			detailReq(this.iid).then(res=>{
				let result = res.result
				console.log(result)
				this.topImages = result.itemInfo.topImages
				this.goods = new Goods(result.itemInfo,result.columns,result.shopInfo.services)
				this.shop = new Shops(result.shopInfo)
				this.goodsParam = new GoodsParam(result.itemParams.info,result.itemParams.rule)
				this.goodsImage = result.detailInfo.detailImage[0].list
				this.goodsComment = result.rate.list[0]
			})
			.catch(err=>{
				console.log(err)
			})
		}
	}
</script>

<style scoped="scoped">
	.detail {
		height: 100vh;
		position: relative;
		z-index: 1000;
		background-color: #fff;
	}
	.swiper-item {
		height: 300px;
	}
	.scroll {
		height: calc(100vh - 44px);
	}
	.detail-nav {
		background-color: white;
		position: relative;
		z-index: 999;
	}
</style>
