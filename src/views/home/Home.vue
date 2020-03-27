<template>
  <div id="home">
	<nav-bar class="home-nav">
		<div slot="center">购物街</div>
	</nav-bar>
	<scroll class="content" ref="scroll" :probe-type="3" @isScroll='isScroll'>
		<home-swiper :banner='banner'/>
		<home-recommend :recommend='recommend'/>
		<feature-wrapper/>
		<tab-control :tabControlTitle="['流行','新款','精选']" @tabClick="changeGooods"/>
		<goods-list :goods="goods[currentGoods].list"/>
	</scroll>
	<back-top @click.native="backClick" v-show="isShow"/>
	
	
	
	
	
	
  </div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import HomeSwiper from 'views/home/HomeSwiper.vue'
	import HomeRecommend from 'views/home/HomeRecommend.vue'
	import FeatureWrapper from 'views/home/FeatureWrapper.vue'
	import TabControl from 'components/content/tabControl/TabControl.vue'
	import GoodsList from 'components/content/goodsList/GoodsList.vue'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import BackTop from 'components/content/backTop/BackTop.vue'
	
	import {getHomeMultidata,getHomeGoods} from 'network/home-req.js'


export default {
  name: 'Home',
  data(){return {
	banner: [],
	dKeyword: [],
	keywords: [],
	recommend: [],
	goods: {
		'pop': {page:0,list:[]},
		'new': {page:0,list:[]},
		'sell': {page:0,list:[]}
	},
	currentGoods: 'pop',
	isShow: false
  }},
  components: {
	NavBar,HomeSwiper,HomeRecommend,FeatureWrapper,TabControl,GoodsList,Scroll,BackTop
  },
  
  methods: {
	  changeGooods(index){
		  switch(index){
			  case 0: 
				this.currentGoods = 'pop'
				break
			  case 1:
				this.currentGoods = 'new'
				break
			  case 2:
				this.currentGoods = 'sell'
				break
		  }
	  },
	getHomeMultida(){
		getHomeMultidata().then(res=>{
				  this.banner = res.data.banner.list
				  this.dKeyword = res.data.dKeyword.list
				  this.keywords = res.data.keywords.list
				  this.recommend = res.data.recommend.list
			})
	},
	getHomeGoodsda(type){
		let page = this.goods[type].page + 1
		getHomeGoods(type,page).then(res=>{
			this.goods[type].list.push(...(res.data.list))
		})
		},
	backClick(){
		this.$refs.scroll.scroll.scrollTo(0,0,500)
	},
	isScroll(p){
		this.isShow = p.y < -500
	}
  },
  
  created(){
	this.getHomeMultida()
	this.getHomeGoodsda('pop')
	this.getHomeGoodsda('new')
	this.getHomeGoodsda('sell')
  }
}

</script>

<style scoped="scoped">
	#home {
		width: 100%;
		height: 100vh;
		position: relative;
	}
	.home-nav {
		background-color: var(--color-tint);
		color: white;
	}
	.content {
		height: calc(100% - 93px);
		margin-top: 44px;
	}
	
</style>
