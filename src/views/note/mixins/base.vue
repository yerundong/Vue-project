<template>
	<div id="base_app">
		<!--<compt-1></compt-1>-->
	</div>
</template>

<script>
	//Mixins一般有两种用途：
	//	1、在你已经写好了构造器后，需要增加方法或者临时的活动时使用的方法，这时用混入会减少源代码的污染。
	//	2、很多组件需要公用方法或属性，用混入的方法可以减少代码量，实现代码重用。

	// 一般情况下不要全局使用Mixins，因为会污染vue所有实例
	// 生命周期执行顺序：全局mixins->组件mixins->组件

	// 原理：递归合并
	import Vue from 'Vue';
	// 定义一个混合对象(与vue实例相同)

	let myMixin = {
		data() {
			return {
				msg: "hello~"
			}
		},
		created: function() {
			this.hello()
		},
		methods: {
			hello() {
				console.log(this.msg)
			},
			hi() {
				console.log('hi~')
			}
		}
	}

	// 定义一个使用混合对象的组件
//	let MyComponent = Vue.extend({
//		mixins: [myMixin]
//	});
	// 实例化该组件
//	let component = new MyComponent() // => "hello~"
//	component.hi();
	
	export default {
//		当组件引入混入对象时，将myMixin中的属性与方法混入组件内
//		混合对象先进行初始化，组件再进行初始化
//		当组件和混入对象含有同名选项时，以组件数据优先，将覆盖混合对象的数据。
		mixins: [myMixin],
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
			this.mixin_hello();
		}
	}
</script>

<style>

</style>