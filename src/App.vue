<template>
  <div id="app">
	<router-view></router-view>
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
