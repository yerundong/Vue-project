<template>
	<div>
		<p>name1:{{name1}}</p>
		<p>name2:{{name2}}</p>
		<p>name3:{{name3}}</p>
	</div>
</template>

<script>
//当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。
//为了解决这个问题，我们可以使用 mapState辅助函数帮助我们【生成计算属性】，让你少按几次键：
//mapState(Object|Array) 返回computed格式的对象，直接混合进computed就行了

	import store from '@/store/store.js';
	import { mapState } from 'vuex';
	
	export default {
		name:"mapState",
		computed:{
			//第一种写法
			...mapState({
				name1: state=>state.name1,
				name2: 'name2',//与1相同
				name3(state){
					return state.name3 +'33333333333'
				}
			}),
			//第二种写法
//			当映射的计算属性的名称与 state的子节点【名称相同】，我们也可以给 mapState传一个【字符串数组】。
//			...mapState(['name1','name2','name3'])
		},
		data(){
			return{}
		},
		methods:{
			
		},
		created(){
			console.log(mapState)
		}
	}
</script>

<style>
</style>