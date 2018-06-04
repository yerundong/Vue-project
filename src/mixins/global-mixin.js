import Vue from 'vue';
const GlobalMixin = {
	data() {
		return {
			mixin_msg: "我是全局混入对象~~",
			core:{
				getCookie( msg ){
					console.log( msg + 'cookie!!' )
				}
			}
		}
	},
	methods: {
		mixin_hello() {
			console.log(this.mixin_msg)
		}
	},
	created: function() {
//		this.mixin_hello()
	},
}

Vue.mixin( GlobalMixin );