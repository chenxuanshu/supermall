<template>
	<div class="shop">
		<div class="shop-name">
			<img :src="shopInfo.logo">
			<span>{{shopInfo.name}}</span>
		</div>
		<div class="shop-wrapper">
		<div class="shop-left">
			<div><em>{{shopInfo.sells}}</em><br><span class="small">总销量</span></div>
			<div><em>{{shopInfo.goodCount}}</em><br><span class="small">全部宝贝</span></div>
		</div>
		<div class="shop-right">
			<ul>
				<li v-for="(item,index) in shopInfo.score" :key="index">
				<span class="ch">{{item.name}}</span><span>{{item.score}}</span>
				<span v-if="item.score<5" class="low">低</span><span v-else class="high">高</span></li>
			</ul>
		</div>
		</div>
		<div class="bottom"><button>进店逛逛</button></div>
	</div>
	
</template>

<script>
	export default {
		name: 'Shop',
		props: {
			shopInfo: {
				type: Object,
				default(){return {}}
			}
		}
	}
</script>

<style scoped="scoped">
	.shop {
		padding-bottom: 5px;
		border-bottom: 1px solid #E0E0E0;
	}
	.shop-name {
		display: flex;
		height: 90px;
		padding-top: 22.5px;
	}
	.shop-name img {
		width: 45px;
		height: 45px;
		margin-left: 10px;
		
	}
	.shop-name span {
		vertical-align: middle;
		font-size: 14px;
		margin-left: 7px;
		padding-top: 12px;
	}
	.shop-left {
		display: flex;
		padding-right: 25px;
		padding-left: 20px;
		border-right: 2px solid #E0E0E0;
	}
	.shop-left div {
		text-align: center;
		margin-left: 15px;
	}
	.shop-left .small {
		font-size: 12px;
	}
	.shop-wrapper {
		display: flex;
	}
	.shop-right {
		width: 50%;
		padding-left: 20px;
	}
	.shop-right ul {
		list-style: none;
	}
	.shop-right ul span {
		margin-right: 15px;
		flex: 1;
	}
	.shop-right ul .ch {
		flex: 3;
	}
	.shop-right ul li {
		display: flex;
	}
	.shop-right ul .low {
		background-color: greenyellow;
		color: white;
		border-radius: 5px;
		text-align: center;
	}
	.shop-right ul .high {
		background-color: red;
		color: white;
		border-radius: 5px;
		text-align: center;
	}
	.bottom {
		width: 100%;
	}
	.bottom button {
		margin: 10px auto;
		margin-left: 30%;
		background-color: #E0E0E0;
		padding: 4px 25px;
		border-radius: 6px;
		font-size: 14px;
		color: white;
	}
</style>
