export const backTopMixin = {
	data(){return {
		isShow: false
	}},
	methods: {
		backClick(){
			this.$refs.scroll.scrollTo(0,0,500)
		}
	}
}