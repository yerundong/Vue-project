/*
	入口文件 
	作用:初始化vue实例,并引入需要的插件、全局组件。
*/
// 引入babel-polyfill
import "babel-polyfill";
// 引入vue
import Vue from 'vue';
// 引入主组件
import App from './App';
// 引入路由
import router from './router/router.js';
// 引入vuex的store对象
import store from './store/store.js';
// 执行全局组件注册文件
import './components';
// 执行全局混合对象注册
import './mixins/global-mixin';
// 引入全局样式
import './styles/gloable/font.scss';

Vue.config.productionTip = false;

//实例化vue
new Vue({
	el: '#app',
	router,
	store, //Vuex通过store选项，提供了一种机制将状态从根组件“注入”到每一个子组件中（需调用 Vue.use(Vuex)）,使得在this.$store中可以获取store对象
	render: h => h(App)
});