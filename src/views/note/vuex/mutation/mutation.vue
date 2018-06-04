<template>
	<div>
		<p>{{count}}</p>
		<input type="text" v-model="assignData.val"/>
		<button @click="_assignValue">go assign</button>
	</div>
</template>

<script>
// vuex里不允许直接改变状态对象，如store.state.count = 5
// 只能通过mutation里定义的函数进行改变state，而使用的 store.commit方法触发mutation里的函数
// 一般把执行mutation的代码写在actions里的函数里
// 【一条重要的原则就是：mutation里必须是同步函数】，若需要异步，可在actions里异步地去执行mutation

	import store from '@/store/store.js'
	export default {
		name:"commit",
		computed:{
			count(){
				return store.state.count;
			}
		},
		data(){
			return{
				assignData:{
					val:0,
					msg:"success"
				},
			}
		},
		methods:{
			_assignValue(){
				// 第一种写法
				// store.commit(handler, data);
				// handler-mutations里已存在的方法,string类型;data-需要传入的数据
				store.commit('assignValue', this.assignData);

				// 第二种写法-传入一个对象参数作为mutations的第二个参数，type:handler是必须的，其他属性任意添加
				// ｛type:handler,...｝
				// store.commit({
				// 	type:'assignValue',
				// 	val:this.assignData.val,
				// 	msg:this.assignData.msg
				// });
			}
		},
	}
</script>

<style>
</style>