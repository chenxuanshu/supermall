<template>
	<div class="detail">
		<detail-nav class="detail-nav" @toPosition="toPosition" ref="nav"/>
		<scroll class="scroll" @isScroll="isScroll" :probeType="3" ref="scroll">
		<swiper>
			<swiper-item v-for="(item,index) in this.topImages" class="swiper-item" :key="index">
				<img :src="item">
			</swiper-item>
		</swiper>
		<detail-des :goods="goods"/>
		<Shop :shopInfo="shop"/>
		<detail-goods :goodsImage="goodsImage" @imgLoad="imgLoad"/>
		<detail-param :goodsParam="goodsParam" ref="goodsParam"/>
		<detail-comment :goodsComments="goodsComment" ref="goodsComment"/>
		<span class="recommend-header" ref="recommendHeader">相关推荐</span>
		<goods-list :goods="detailRecommends" :recommendLength="detailRecommends.length" ref="goodsRecommend"/>
		</scroll>
		<back-top @click.native="backClick" v-show="isShow"/>
		<de-bottom-bar @add="add"/>
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
	import GoodsList from 'components/content/goodsList/GoodsList.vue'
	import GoodsListItem from 'components/content/goodsList/GoodsListItem.vue'
	import DeBottomBar from 'views/detail/DeBottomBar.vue'
	import BackTop from 'components/content/backTop/BackTop.vue'
	
	// import backTopMixin from '@/common/mixin.js'
	
	import {detailReq,Goods,Shops,GoodsParam,detailRecommend} from 'network/home-req.js'
	
	export default {
		name: 'Detail',
		// mixins: [backTopMixin],
		data(){return {
			iid: '',
			topImages: [],
			goods: {},
			shop: {},
			goodsImage: [],
			goodsParam: {},
			goodsComment: {},
			detailRecommends: [],
			toOffsetTop: [0,0,0,0],
			isShow: false
		}},
		components: {DetailNav,Swiper,SwiperItem,
					DetailDes,Shop,Scroll,DetailGoods,
					DetailParam,DetailComment,GoodsList,
					GoodsListItem,DeBottomBar,BackTop},
		methods: {
			imgLoad(){
				this.$refs.scroll.refresh()
				this.toOffsetTop[1] = this.$refs.goodsParam.$el.offsetTop -20
				this.toOffsetTop[2] = this.$refs.goodsComment.$el.offsetTop ? this.$refs.goodsComment.$el.offsetTop : this.$refs.recommendHeader.offsetTop
				this.toOffsetTop[3] = this.$refs.recommendHeader.offsetTop
			},
			toPosition(index){
				this.$refs.scroll.scrollTo(0,-this.toOffsetTop[index],200)
			},
			isScroll(p){
				p = -p.y
				if(p>=0 && p< this.toOffsetTop[1]){
					this.$refs.nav.currentIndex = 0
				}else if(p>=this.toOffsetTop[1] && p<this.toOffsetTop[2]){
					this.$refs.nav.currentIndex = 1 
				}else if(p>=this.toOffsetTop[2] && p<this.toOffsetTop[3]){
					this.$refs.nav.currentIndex = 2
				}
				else{
					this.$refs.nav.currentIndex = 3
				}
				this.isShow = p > 500
			},
			backClick(){
				this.$refs.scroll.scrollTo(0,0,500)
			},
			add(){
				//加入购物车的商品传入store
				const cartGood = {}
				cartGood.iid = this.iid
				cartGood.imgURL = this.topImages[0]
				cartGood.title = this.goods.title
				cartGood.desc = this.goods.desc
				cartGood.newPrice = this.goods.newPrice
				cartGood.lowPrice = this.goods.lowPrice
				this.$store.dispatch('addGood',cartGood)
				.then((res)=>{
					this.$toast.show(res,1000)
					console.log(this.$toast)
				})
			}
		},
		created(){
			//请求商品详情数据
			this.iid = this.$route.query.iid
			detailReq(this.iid).then(res=>{
				let result = res.result
				// console.log(result)
				this.topImages = result.itemInfo.topImages
				this.goods = new Goods(result.itemInfo,result.columns,result.shopInfo.services)
				this.shop = new Shops(result.shopInfo)
				this.goodsParam = new GoodsParam(result.itemParams.info,result.itemParams.rule)
				this.goodsImage = result.detailInfo.detailImage[0].list
				this.goodsComment = result.rate.list ? result.rate.list[0] : {}
			})
			.catch(err=>{
				console.log(err)
			})
			//推荐商品数据
			detailRecommend().then(res=>{
				this.detailRecommends = res.data.list
			})
			.catch(err=>{
				console.log(err)
			})
		},
		mounted(){
			this.$bus.$on('DimgLoadOver',()=>{
					this.$refs.scroll ? this.$refs.scroll.refresh() : ''
			})
		},
		
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
		height: calc(100vh - 44px - 49px);
	}
	.detail-nav {
		background-color: white;
		position: relative;
		z-index: 999;
	}
	.recommend-header {
		padding: 5px;
	}
</style>
