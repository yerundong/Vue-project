<template>
	<div>
		⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇【组件2】⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
		<p><button @click="showClick">2：{{flag}}</button></p>
		<rec-component1 v-if = "flag"/>
		↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑【组件2】↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
	</div>
</template>

<script>
//	【此例为：两两相互调用的递归组件】
//	组件1调用组件2，且同时组件2调用组件1
// 	相互调用的组件不能按普通的组件注册，需要【异步注册】，即在beforeCreate回调里注册
//  相互调用的两个组件【只需其中一个】进行异步注册即可，另一个可正常注册
//  确保递归调用有终止条件，即用v-if来结束递归

	import recComponent1 from './recursionComponent1'
	
	export default {
		name: "recComponent2",
		components: {},
		data() {
			return {
				flag:false
			}
		},
		methods: {
			showClick(){
				this.flag = !this.flag;
			}
		},
		beforeCreate(){
			this.$options.components.recComponent1 = recComponent1;
		},
		created() {

		},
	}
</script>

<style>
</style>