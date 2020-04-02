import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	cartGoods: []
  },
  mutations: {
	addGood(state,good){
		let oldGood = state.cartGoods.find(item => item.iid == good.iid)
		if (oldGood){
			oldGood.counter++
		}else{
			good.counter = 1
			good.checked = false
			state.cartGoods.push(good)
		}
	},
	clickChecked(state,iid){
		const theGood = state.cartGoods.find(item => item.iid == iid)
		theGood.checked = ! theGood.checked
	}
	
  },
  getters: {
	cartLength(state){
		return state.cartGoods.length
	}
  },
  actions: {
	  addGood(context,good){
		  return new Promise((res,rej) => {
				// context.mutations.addGood(good)
				context.commit('addGood',good)
				res('加入成功')
			})
		}
	}
})
