<template>
	<div id="base_app">
		<p>{{a.b}}</p>
		<p>{{msg}}</p>
		<p><button @click="_change">change</button></p>
		<p><button @click="_reset">reset</button></p>
		<p><button @click="_forceUpdate">forceUpdate</button></p>
		<p><button @click="_mount">mount</button></p>
		<p><button @click="_destroy">destroy</button></p>
		<p><button @click="_delete">delete</button></p>
		<p><button @click="_set">set</button></p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: "Data Source",
				a:{
					b:1
				}
			}
		},
		beforeCreate() {
			console.log("go beforeCreate")
		},
		created: function() {
			console.log("go created")
		},
		beforeMount() {
			console.log("go beforeMount")
		},
		mounted(){
			console.log("go mounted")
		},
		beforeUpdate(){
			console.log("go beforeUpdate")
		},
		updated(){
			console.log("go updated")
		},
		destroyed(){
			console.log("go destroyed")
		},
		methods: {
			_change(){
				this.msg = this.msg +'1'
			},
			//重置数据源
			_reset(){
				Object.assign(this.$data, this.$options.data());
				console.log(this.$options)
			},
			//响应式删除对象下的属性
			_delete(){
				this.$delete(this.a, 'b')
			},
			//响应式修改对象下的属性
			_set(){
				this.$set(this.a, 'b', this.a.b+1)
			},
			//完全销毁一个实例，清理它与其它实例的连接，解绑它的全部指令及事件监听器
			//触发 beforeDestroy 和 destroyed 的钩子
			_destroy(){
				this.$destroy()
			},
			//手动地挂载一个未挂载的实例
			_mount(){
				this.$mount()
			},
			//迫使实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。
			_forceUpdate(){
				let node = new VNode()
				console.log(node);
				this.$forceUpdate();
			},
		}
	}
</script>

<style>

</style>