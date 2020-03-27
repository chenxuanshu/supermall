<template>
	<tab-bar>
			<tab-bar-item path='/home'>
				<img src="~assets/img/tabbar/home.svg" slot="tabbar-icon">
				<img src="~assets/img/tabbar/home-active.svg" slot="tabbar-icon-active">
				<div slot="tabbar-text">首页</div>
			</tab-bar-item>
			<tab-bar-item path='/category'>
				<img src="~assets/img/tabbar/menu.svg" slot="tabbar-icon">
				<img src="~assets/img/tabbar/menu-active.svg" slot="tabbar-icon-active">
				<div slot="tabbar-text">菜单</div>
			</tab-bar-item>
			<tab-bar-item path='/cart'>
				<img src="~assets/img/tabbar/marks.svg" slot="tabbar-icon">
				<img src="~assets/img/tabbar/marks-active.svg" slot="tabbar-icon-active">
				<div slot="tabbar-text">购物车</div>
			</tab-bar-item>
			<tab-bar-item path='profile'>
				<img src="~assets/img/tabbar/nickname.svg" slot="tabbar-icon">
				<img src="~assets/img/tabbar/nickname-active.svg" slot="tabbar-icon-active">
				<div slot="tabbar-text">我的</div>
			</tab-bar-item>
	</tab-bar>
</template>

<script>
	import TabBar from 'components/common/tabbar/Tabbar.vue'
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
	export default {
		name: 'maintab',
		components: {TabBar,TabBarItem}
	}
</script>

<style>
	
	
	
</style>
