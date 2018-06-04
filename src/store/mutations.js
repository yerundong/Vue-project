export default {
	//默认第一个参数传的是state,也可以直接以this.state取值，第二个参数是传入的数据，一般为对象
	assignValue(state, data) {
		this.state.count = data.val + '+' + data.msg;
	},
	add(state, num) {
		state.count += num * 1;
	},
	formationTalk(state) {
		state.formationTalk = `我今年${state.count}岁,厉害不?`
	},
	reduce(state, num) {
		state.count -= num * 1;
	},
	assignAge(state, num) {
		state.age = num;
	},
	assignPlace(state, place) {
		state.place = place;
	},
	assignTalk() {
		return ''
	},
	ADD_NUMBER(){
		alert('ADD_NUMBER from root')
	}
}