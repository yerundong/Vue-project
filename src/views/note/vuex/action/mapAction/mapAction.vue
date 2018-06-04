<template>
	<div>
		<button @click = "$addOne">count++</button>
		<p>{{count}}</p>
		<br />
		<button @click = "_$formationTalk">formation talk</button>
		<p>{{formationTalk}}</p>
	</div>
</template>

<script>
//当需要分发多个action时，使用 mapActions辅助函数将组件的 methods映射为 store.dispatch调用，减少代码量
	import store from '@/store/store.js';
	import { mapState,mapActions } from 'vuex';
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
			//第一种写法
			...mapActions({
				$addOne:"addCount",
				$formationTalk:"formationTalk",
			}),
			//第二种写法()
//			...mapActions(["addCount","formationTalk",]),

			//如果要传参数的话需要另外调用，默认只有一个参数，即传入的data
			_$formationTalk(){
				this.$formationTalk({a:1,b:2})
			},
		},
		created(){
//			debugger
		}
	}
</script>

<style>
</style>