<template>
	<div class="profile">
		<nav-bar class="profile-nav-bar">
			<div slot="center">我的</div>
		</nav-bar>
		<user-info></user-info>
		<section class="account"> 
			<div class="account-item">
				<div class="number">
					<span class="balance">0.00</span>元
				</div>
				<div class="account-info">我的余额</div>
			</div>
			<div class="account-item">
				<div class="number">
					<span class="balance">0</span>个
				</div>
				<div class="account-info">我的优惠</div>
			</div>
			<div class="account-item">
				<div class="number">
					<span class="balance">0</span>分
				</div>
				<div class="account-info">我的积分</div>
			</div>
		</section>
		<list-view/>
		<service-view/>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import UserInfo from 'views/profile/UserInfo.vue'
	import ListView from 'views/profile/ListView.vue'
	import ServiceView from 'views/profile/ServiceView.vue'

	export default {
		name:'Profile',
		data(){return {
			UserInfo: {}
		}},
		components:{NavBar,UserInfo,ListView,ServiceView},
		mounted(){

		}
	}
	
</script>

<style scoped="scoped">
	.profile {
		background-color: #f2f2f2;
	}
	.profile-nav-bar {
		background-color: var(--color-tint);
		color: white;
	}

	.account {
		display: flex;
	}
	.account-item {
		width: 100%;
		background-color: #fff;
		margin-right: 1px;
		text-align: center;
	}
	.account-item:last-of-type {
		margin-right: 0;
	}
	.account-item {
		color: #666;
		font-size: 13px;
		padding: 18px;
	}
	.account-item .balance {
		font-size: 24px;
		font-weight: 700;
		color: #ff5f3e;
	}
	.account-info {
		margin-top: 6px;
	}

	
	
</style>
