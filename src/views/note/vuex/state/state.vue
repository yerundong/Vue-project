<template>
	<div>
		<p>count-from-computed:{{countFromComputed}}</p>
		<p>count-from-data:{{countFromData}}</p>
		=======================================
		<br />
		加法
		<compt1></compt1>
		=======================================
		<br />
		减法
		<compt2></compt2>
	</div>
</template>

<script>
	import store from '@/store/store.js';
	import compt1 from './compt1';
	import compt2 from './compt2';
	
//	获取state里的状态值有两种方式：store | this.$store
	export default {
		name:"vue-base",
		components:{
			compt1,
			compt2,
		},
		data(){
			return{
				// 在data获取state里的状态值只会在初始化时获取一次，是非响应式的
				countFromData: this.$store.state.count,
			}
		},
		computed:{
			// 在computed获取state里的状态值是响应式的，所以当store.state.count变化的时候,都会触发重新求取计算属性（数据驱动）
			countFromComputed(){
				return store.state.count
			}
		},
		created(){
			console.log(store)
		}
	}
</script>

<style>
</style>