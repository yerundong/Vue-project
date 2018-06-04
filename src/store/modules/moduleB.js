export default {
	namespaced: true,//默认false
	state:{
		number:0
	},
	mutations:{
		ADD_NUMBER(state,data){
			state.number ++ 
		}
	},
	actions:{
		add_number(context, data){
			context.commit('ADD_NUMBER');
		},
	}
}
