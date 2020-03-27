<template>
	<div class="home-recommend">
		<div class="home-recommend-item" v-for="(item,index) in recommend" :key=index>
			<a :href="item.link">
			<img :src="item.image">
			<div>
				{{item.title}}
			</div>
			</a>
		</div>
	</div>
	
</template>

<script>
	
	export default {
		name: 'HomeRecommend',
		props: {
			recommend: {
				type: Array,
				default(){
					return []
				}
			}
		}
		
		
	}
</script>

<style>
	.home-recommend {
		display: flex;
		width: 100%;
		text-align: center;
		font-size: 12px;
		padding: 10px 0 15px;
		border-bottom: 10px solid #eee;
	}
	.home-recommend-item {
		flex: 1;
	}
	.home-recommend-item img{
		width: 70px;
		height: 70px;
	}
	
	
	
</style>
