export default {
//	默认第一个参数传的是context对象-与 store实例具有相同方法和属性的 context对象
//	
	addCount(context){
//		【获取state与getters】
//		console.log(context.state.count);
//		console.log(context.getters.completeAge);

//		【执行mutation】
//		context.commit('add',1);

//		Action通常是异步的，那么如何知道 action 什么时候结束呢？
//		这时候就需要使用Promise以处理更加复杂的异步流程
		return new Promise((resolve, reject) => {
			setTimeout(() => {
		      context.commit('add',1);
		      resolve()
		    }, 1000);
		}); 
	},
	formationTalk(context, data){
		// 除了提交mutation，也可以分发其他action
      	context.dispatch('addCount');
		context.commit('formationTalk');
	},
	add_number(context,data){
		alert('root-add_number')
	}
}