import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import LoginRouter from './modules/login';
import VuexRouter from './modules/vuex';
import TestRouter from './modules/test';
import OthersRouter from './modules/others';
import MixinsRouter from './modules/mixins';
import CustomDirectives from './modules/custom-directives';
import Render from './modules/render';
import Sass from './modules/sass';

const RouterConfig = [
	{
		path: '/',
		redirect: '/login'
	},
	LoginRouter,
	TestRouter,
	VuexRouter,
	OthersRouter,
	MixinsRouter,
	CustomDirectives,
	Render,
	Sass,
];

export default new Router({
	// mode: "history",//
	routes: RouterConfig
})