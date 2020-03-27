<template>
	<div class="tab-bar-item" @click="itemClick">
		<slot name="tabbar-icon" v-if="isShow">
			
		</slot>
		<slot name="tabbar-icon-active" v-else>
			
		</slot>
		<div :style="activeColor">
		<slot name="tabbar-text">
		</slot>
		</div>
	</div>
</template>

<script>
	export default {
		name:'TabBarItem',
		data(){return {
			
		}},
		props:{
			path:{
				type:String
			},
			color:{
				type: String,
				default: '#1296db'
			}
		},
		methods:{
			itemClick(){
				this.$router.push(this.path)
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) !== -1
			},
			isShow(){
				return !this.isActive
			},
			activeColor(){
				return this.isActive ? {color:this.color} : {}
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height: 49px;
	}
	
	.tab-bar-item img{
		height: 25px;
		width: 25px;
		margin-top: 2px;
		margin-bottom: 2px;
		vertical-align: middle;
	}
	
</style>
