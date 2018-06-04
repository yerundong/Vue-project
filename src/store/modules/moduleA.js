export default {
//	【命名空间】
//	如果你在moduleA和moduleB里分别声明了命名相同的action或者mutation或者getter（叫some），
//	当你使用store.commit('some')或store.dispatch('some')，A和B模块里的some会同时响应,
//	而getters则会报错，如果希望你的模块具有更高的封装度和复用性，则开启命名空间属性
//	开启命名空间getter，mutation，action需要根据模块结构路径调用整个命名，如store.dispatch('moduleA/add_number')
//	而对state获取方式无影响
	namespaced: true,//默认false
	state:{
		number:0
	},
	getters:{
//		通过rootState和rootGetters访问全局state和getters
		_number(state,　getters, rootState, rootGetters){
//			debugger
			return state.number+'岁'
		}
	},
	mutations:{
		ADD_NUMBER(state,data){
			state.number ++ 
		}
	},
	actions:{
		// 第一个参数上下文，第二个参数传入数据
		add_number(context, data){
			context.commit('ADD_NUMBER');
		},
//		开启命名空间时,模块内若需分发全局的action,或提交全局mutation, 需要加上第三个参数{ root: true }
		add_number_root1({ dispatch, commit, getters, rootGetters }, data){
			dispatch('add_number', data, { root: true });
		},
		add_number_root2({ dispatch, commit, getters, rootGetters }, data){
			commit('ADD_NUMBER',null, { root: true });
		},
	}
}
