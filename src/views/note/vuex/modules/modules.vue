<template>
	<div>
		<button @click="add_number">add number</button>
		<button @click="add_number_root1">add number root</button>
		<button @click="add_number_root2">add number root</button>
		<p>{{number}}</p>
		<p>{{map_number}}</p>
		<p>{{_number}}</p>
	</div>
</template>

<script>
//	当一个项目比较大时，所有的状态都集中在一起会得到一个比较大的对象，进而显得臃肿，难以维护。
//	为了解决这个问题，Vuex允许我们将store分割成模块（module），每个module有自己的
//	state，mutation，action，getter，甚至还可以往下嵌套模块
	import store from '@/store/store.js';
	import { mapState } from 'vuex';
	export default {
		name:"vue-base",
		components:{},
		data(){
			return{
				
			}
		},
		computed:{
			//获取模块moduleA下state，不管是否启用命名空间，取法都是如此
			number:()=>store.state.moduleA.number,
			...mapState({
				map_number: state=>state.moduleA.number,
			}),
			//命名空间启用后，需要按模块结构路径进行获取getters
			_number:()=>store.getters['moduleA/_number'],
		},
		methods:{
			add_number(){
				//命名空间启用后，需要按模块结构路径进行分发action
				store.dispatch('moduleA/add_number', {a:1,b:2});
			},
			add_number_root1(){
				store.dispatch('moduleA/add_number_root1', {a:1,b:2});
			},
			add_number_root2(){
				store.dispatch('moduleA/add_number_root2', {a:1,b:2});
			}
		},
		created(){
			console.log(store)
			console.log(this.map_number)
		}
	}
</script>

<style>
</style>