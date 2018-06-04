<template>
	<div>
		<button @click="add_number">add number</button>
		<button @click="ADD_NUMBER">add number2</button>
		<p>{{map_number}}</p>
		<p>{{map_getter_number}}</p>
	</div>
</template>

<script>
//	带命名空间的绑定函数
	import store from '@/store/store.js';
	import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
	export default {
		name:"vue-base",
		components:{},
		data(){
			return{
				
			}
		},
		computed:{
//			当使用 mapState, mapGetters, mapActions 和 mapMutations这些函数来绑定命名空间模块时，写起来可能比较繁琐	:
//			...mapState({
//				map_number1: state=>state.moduleA.number1,
//				map_number2: state=>state.moduleA.number2,
//				map_number3: state=>state.moduleA.number3,
//				...
//			}),
//			这时候需要将路径提取出来这样的简便的写法:
			...mapState('moduleA',{
				map_number: "number",
			}),
			...mapGetters('moduleA',{
				map_getter_number: "_number",
			}),
		},
		methods:{
			...mapActions('moduleA',{
				add_number:"add_number"
			}),
			...mapMutations('moduleA',["ADD_NUMBER"])
		},
		created(){
		}
	}
</script>

<style>
</style>