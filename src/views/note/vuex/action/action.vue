<template>
	<div>
		<button @click = "addOne">count++</button>
		<p>{{count}}</p>
		<br />
		<button @click = "_formationTalk">formation talk</button>
		<p>{{formationTalk}}</p>
	</div>
</template>

<script>
//actions只是一个架构性的概念，并不是必须的，说到底只是一个函数，一般用来触发一次或多次mutation
//由于mutation必须是同步的，则可以在Actions里异步地去执行mutation
	import store from '@/store/store.js';
	import { mapState } from 'vuex';
	export default {
		name:"vuex-action",
		data(){
			return{
				
			}
		},
		computed:{
			...mapState(['count','formationTalk'])
		},
		methods:{
			addOne(){
				store.dispatch('addCount').then(() => {
  					console.log('我是回调代码')
				});
			},
			_formationTalk(){
				//第一种写法
				store.dispatch('formationTalk',{a:1,b:2});
				//第二种写法
//				store.dispatch({
//					type:'formationTalk',
//					a:1,
//					b:2
//				});
			}
		},
		created(){
			
		}
	}
</script>

<style>
</style>