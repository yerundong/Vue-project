<template>
	<div>
		gfd
	</div>
</template>

<script>
	import Vue from 'vue';
	const GlobalMixin = {
		data() {
			return {
				mixin_msg1: "23333333333333333333"
			}
		},
		created: function() {
		},
		methods: {
			mixin_hello1() {
				console.log(this.mixin_msg1);
			}
		}
	}
	
//	注册全局混入对象方法
	Vue.mixin( GlobalMixin );
//	所有的组件都能使用全局混入对象里的属性与方法
//	多个全局混入对象若有相同的属性或方法，则谁先注册谁优先级高
	
	export default {
		data: function() {
			return {
				msg: "你好哇~"
			}
		},
		methods:{
			hello() {
				console.log(this.msg + '666')
			},
		},
		created: function() {
			this.hello();
			this.mixin_hello1();
			this.core.getCookie('lalala~')
		}
	}
</script>

<style>
</style>