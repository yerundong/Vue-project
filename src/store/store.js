//引入vuex
import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import state from './state';
import moduleA from './modules/moduleA';

Vue.use(Vuex);
//注册一个store对象，this指向这个对象
export default new Vuex.Store({
	//【state】-状态参数值
	state,
	//【getters】-相当于state值的计算属性(computed)，在computed里获取
	getters,
	//【mutations】-change状态的方法,不能执行异步的函数
	mutations,
	//【actions】-change状态的方法,允许执行异步的函数
	actions,
	modules:{
		moduleA,
	}
});