<!--递归组件-->
<template>
	<div>
		👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇【组件1】👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
		<p><button @click="showClick">1：{{flag}}</button></p>
		<rec-component2 />
		<rec-component1 v-if="flag" />
		👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆【组件1】👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆
	</div>
</template>

<script>
//	【递归组件】
//	组件在它的模板内调用自己，或者组件1调用组件2，且同时组件2调用组件1，称为递归组件，它们是循环调用的关系

//	【此例为：调用自身的递归组件】
//	调用自身的递归组件不需要引入与注册，设置name属性（必须），将name值当作标签插入即可调用
// 	确保递归调用有终止条件，即用v-if来结束递归

	import recComponent2 from './recursionComponent2';
	
	export default {
		name: "recComponent1",
		components: {
			recComponent2
		},
		data() {
			return {
				flag: false,
			}
		},
		methods: {
			showClick() {
				this.flag = !this.flag;
			}
		},
		created() {
			//或者利用外部传进来的一个数字控制递归次数
//			someCount ++;
//			if(this.someCount>3){
//				this.flag = false;
//			}
		},
	}
</script>

<style>

</style>