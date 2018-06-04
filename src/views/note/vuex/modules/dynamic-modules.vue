<template>
	<div>
		八阿哥！！！！！！！！！！！！！！！！！！！！！！！！！！！！
		<button @click="add_number">add number</button>
		<p>{{map_number}}</p>
	</div>
</template>

<script>
//	注册动态modules
	import store from '@/store/store.js';
	import moduleB from '@/store/modules/moduleB';
	import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
	export default {
		name:"vue-base",
		components:{},
		data(){
			return{
				
			}
		},
		computed:{
			...mapState('moduleB',{
				map_number: "number",
			}),
		},
		methods:{
			...mapActions('moduleB',{
				add_number:"add_number"
			}),
		},
		created(){
			// 注册模块 `myModule`
			store.registerModule('moduleB', moduleB);
			
			// 注册嵌套模块 `nested/myModule`
//			store.registerModule(['nested', 'myModule'], {
//			  // ...
//			})
		}
	}
</script>

<style>
</style>