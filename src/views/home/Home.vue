<template>
  <div class="home">
    我是home<br>
	{{$store.state.counter}}<br>
	{{$store.state.students}}
	<button @click="change">click</button>
	-------------------------------------
	{{$store.getters.filTea}}
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
   
  },
  methods: {
	  change(){
		  this.$store.dispatch('act','ok')
		  .then((result)=>{
			  console.log(result)
		  })
	  }
},
}


</script>
