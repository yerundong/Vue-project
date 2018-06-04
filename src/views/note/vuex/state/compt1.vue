<template>
	<div>
		<input type="number" v-model = "num"/>
		<button @click="addClick">add</button>
	</div>
</template>

<script>
	import store from '@/store/store.js'
	export default {
		name:"vueBase",
		data(){
			return{
				num:0,
				msg:'asd'
			}
		},
		methods:{
			addClick(){
				store.commit('add',this.num);
//				console.log(store)
			}
		},
		created(){
			
		}
	}
</script>

<style>
</style>