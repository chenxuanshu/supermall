<template>
  <div class="category">
	<nav-bar class="category-nav-bar">
		<div slot="center">商品分类</div>
	</nav-bar>
	<div class="content">
		<tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
		<scroll id="tab-control" :data="[categoryData]">
			<div>
				<tab-control-category :subcategories="showSubcategory"></tab-control-category>
				<tab-control :tabControlTitle="['综合','新品','销量']" @itemClick="tabClick"></tab-control>
				<tab-control-detail :category-detail="showCategoryDetail"></tab-control-detail>
			</div>
		</scroll>
	</div>
  </div>
</template>

<script>
	import Scroll from 'components/common/scroll/Scroll.vue'
	import TabControl from 'components/content/tabControl/TabControl.vue'
	import NavBar from 'components/common/navbar/NavBar.vue'
	import TabMenu from 'views/category/TabMenu.vue'
	import TabControlCategory from 'views/category/TabControlCategory.vue'
	import TabControlDetail from 'views/category/TabControlDetail.vue'

	import {getCategory,getSubcategory,getCategoryDetail} from 'network/category-req.js'

	export default {
		name:'Category',
		components:{Scroll,NavBar,TabMenu,TabControl,TabControlCategory,TabControlDetail},
		data(){return {
			categories: [],
			categoryData: {},
			currentIndex: -1
		}},
		methods: {
			_getCategory() {
				getCategory().then(res=>{
					this.categories = res.data.category.list
					for (let i =0; i < this.categories.length; i++) {
						this.categoryData[i] = {
							subcategories: {},
							categoryDetail: {
								'pop': [],
								'new': [],
								'sell': []
							}
						}
					}
					this._getSubcategories(0)
				})
			},
			_getSubcategories(index) {
				this.currentIndex = index
				const mailKey = this.categories[index].mailKey
				getSubcategory(mailKey).then(res => {
					this.categoryData[index].subcategories = res.data
					this.categoryData = {...this.categoryData}
					this._getCategoryDetail('pop')
					this._getCategoryDetail('new')
					this._getCategoryDetail('sell')
				})
			},
			_getCategoryDetail(type) {
				const miniWallkey = this.categories[this.currentIndex].miniWallkey
				getCategoryDetail(miniWallkey,type).then(res => {
					this.categoryData[this.currentIndex].categoryDetail[type] = res
					this.categoryData = {...this.categoryData}
				})
			},
			selectItem(index) {
				this._getSubcategories(index)
			},
			tabClick(index){
				this.currentIndex = index
			}
		},
		created(){
			this. _getCategory()
		},
		computed: {
			showSubcategory() {
				if (this.currentIndex == -1) return {}
				return this.categoryData[this.currentIndex].subcategories
			},
			showCategoryDetail() {
				if (this.currentIndex == -1) return []
				return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
			}
		}
	}
	
</script>

<style scoped="scoped">
	.category-nav-bar {
		background-color: var(--color-tint);
	}
	.category {
		height: 100vh;
	}
	.content {
		position: absolute;
		left: 0;
		right: 0;
		top: 44px;
		bottom: 49px;
		display: flex;
	}
	#tab-content {
		height: 100%;
		flex: 1;
	}
	
	
</style>
