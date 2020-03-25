import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	counter: 0,
	students: [{id:0,name:'chen',age:19},{id:1,name:'liu',age:20},{id:2,name:'zhang',age:10}]
  },
  mutations: {
	add(state){
		state.counter = 10
	}
	
  },
  getters: {
	ageMore(state){return (age) => state.students.filter(s => s.age>age)}
  },
  actions: {
	  act(context,payload){
		  return new Promise((res,rej)=>{
			  setTimeout(()=>{
				context.commit('add')
				res(payload)  
			  },1000)
		  })
		  
	  }
  },
  modules: {
	  a: {
		  state: {
			  teachers:[{id:0,name:'zhao',age:44},{id:1,name:'xia',age:54}]
		  },
		  getters: {
			  filTea(state,getters,rootState){
				  return state.teachers.filter(s=>s.age<50)
			  }
		  },
		  mutations: {},
		  actions: {}
	  }
  }
})
