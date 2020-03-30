<template>
	<div class="tab-control">
		<div class="tab-control-item" :class="{active:index==activeIndex}" 
		v-for="(item,index) in tabControlTitle" :key=index @click="isActive(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	
	
	export default {
		name: 'TabControl',
		data(){return {
			activeIndex: 0
		}},
		props: {
			tabControlTitle: {
				type: Array,
				default(){return []}
			}
		},
		methods: {
			isActive(index){
				this.activeIndex = index
				this.$emit('tabClick',index)
			}
		}
		
	}
</script>

<style>
	.tab-control {
		width: 100%;
		display: flex;
		text-align: center;
		background-color: white;
		font-size: 15px;
		line-height: 35px;
		box-shadow: 0 1px 1px rgba(100,100,100,.2);
		z-index: 99;
	}
	
	.tab-control-item {
		flex: 1;
	}
	
	.tab-control-item {
		cursor: pointer;
	}
	.tab-control-item span {
		padding: 4px 10px;
	}
	.active span {
		border-bottom: 4px solid var(--color-tint);
	}
</style>
