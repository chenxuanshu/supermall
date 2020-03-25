<template>
  <div id="app">
   <main-tab/>
   <router-view></router-view>
  </div>
</template>

<script>
	import MainTab from './components/tabbar/MainTab.vue'
	
	export default {
		name:'App',
		components:{
			MainTab
		}
	}
	
	
</script>

<style>
	@import url("./assets/css/base.css");




</style>
