<template>
	<div>
		age:<input type="num" v-model="assignAge_v" />
		place:<input type="num" v-model="assignPlace_v" />
		<button @click="assignTalkHandle">Assign Talk Handle</button>
		<p>{{age}}岁，来自{{place}}</p>
	</div>
</template>

<script>
//vuex里不允许直接改变状态对象，如store.state.count = 5
//需要通过提供的 store.commit方法触发状态变更

	import store from '@/store/store.js';
	import { mapMutations,mapState } from 'vuex';
	export default {
		name:"commit",
		computed:{
			...mapState(['age','place'])
		},
		data(){
			return{
				assignAge_v:'',
				assignPlace_v:''
			}
		},
		methods:{
			//mapMutations需要传参数的话需要另外调用，默认只有一个参数，即传入的data
			assignTalkHandle(){
				this.assignAge(this.assignAge_v);
				this.assignPlace(this.assignPlace_v);
			},
			//使用mapMutations辅助函数将多个mutation方法映射到methods
			//第一种写法
			...mapMutations({
		      assignAge: 'assignAge',
		      assignPlace: 'assignPlace'
		    }),
		    //第二种写法
//			...mapMutations(['assignAge', 'assignPlace']),
		},
	}
</script>

<style>
</style>