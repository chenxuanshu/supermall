<template>
	<swiper>
		<swiper-item v-for="(item,index) in banner" :key=index>
			<a :href="item.link">
				<img :src="item.image" >
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
	import Swiper from 'components/common/swiper/Swiper.vue'
	import SwiperItem from 'components/common/swiper/SwiperItem.vue'
	
	export default {
		name: 'home-swiper',
		methods:{
		},
		components: {
			Swiper,SwiperItem
		},
		props: {
			banner: {
				type: Array,
				default(){
					return []
				}
			}
		}
	}
	
	
	
</script>

<style>
</style>
