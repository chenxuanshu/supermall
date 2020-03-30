<template>
  <div id="app">
	<keep-alive exclude="Detail"><router-view></router-view></keep-alive>
   <main-tab/>
  </div>
</template>

<script>
	import MainTab from 'components/content/mainTabbar/MainTab.vue'
	
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
