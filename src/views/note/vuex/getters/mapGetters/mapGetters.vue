<template>
	<div>
		<p>completeAge：{{completeAge}}</p>
		<p>completePlace：{{completePlace}}</p>
		<p>completeTalk：{{completeTalk}}</p>
	</div>
</template>

<script>
//当一个组件需要获取多个getters时候，将这些getters都声明为计算属性会有些重复和冗余。
//为了解决这个问题，我们可以使用mapGetters辅助函数帮助我们【生成计算属性】，让你少按几次键：
	import { mapGetters } from 'vuex';
	
	export default {
		name:"mapGetters",
		computed:{
			//第一种写法
			...mapGetters({
				completeAge: 'completeAge',
				completePlace: 'completePlace',
				completeTalk: 'completeTalk'
			}),
			//第二种写法
//			当映射的计算属性的名称与 getters的子节点【名称相同】，我们也可以给mapGetters传一个【字符串数组】。
//			...mapGetters(['completeAge','completePlace','completeTalk'])
		},
		data(){
			return{}
		},
		methods:{
			
		},
		created(){
			console.log(mapGetters)
		}
	}
</script>

<style>
</style>