<template>
	<nav-bar class="detail-nav">
		<div slot="left" class="back" @click="backClick">
		<img src="~assets/img/common/back.svg" >
		</div>
		<div slot="center" class="center">
			<div v-for="(item,index) in titles" :key="index" 
			:class="{active:index==currentIndex}"
			@click="changeIndex(index)"
			>{{item}}</div>
		</div>
	</nav-bar>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	export default {
		name: 'detailNav',
		data(){return {
			titles: ['商品','参数','评论','推荐'],
			currentIndex: 0
		}},
		methods: {
			changeIndex(index){
				this.currentIndex = index
			},
			backClick(){
				this.$router.go(-1)
			}
		},
		components: {
			NavBar
		}
		
	}
</script>

<style scoped="scoped">
	.detail-nav .center{
		display: flex;
		}
	.detail-nav .center div {
		cursor: pointer;
		flex: 1;
		}
	.active {
		color: var(--color-tint);
		}
	.back img {
		height: 60%;
		margin-top: 20%;
		}
</style>
