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
				num:0
			}
		},
		methods:{
			addClick(){
				store.commit('reduce',this.num);
			}
		},
		created(){
			
		}
	}
</script>

<style>
</style>