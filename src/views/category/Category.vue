<template>
  <div class="category">
	<div class="wrapper">
		我是category
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
		a<br>
	</div>
    

	
  </div>
</template>

<script>
	import Bscroll from 'better-scroll'
	
	export default {
		name:'Category',
		components:{},
		mounted(){
			let bs = new Bscroll('.category')
			bs.on('scroll',(position)=>{console.log(position)})
		}
	}
	
</script>

<style>
	.category {
		height: 200px;
		background-color: #0000CC;
	}
	
	
	
</style>
