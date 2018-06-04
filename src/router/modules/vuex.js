import layout from '@/components/layout/layout'; //框架布局
import vuexState from '@/views/note/vuex/state/state';
import vuexMapState from '@/views/note/vuex/state/mapState/mapState';
import vuexMutation from '@/views/note/vuex/mutation/mutation';
import vuexMapMutations from '@/views/note/vuex/mutation/mapMutations/mapMutations';
import vuexGetters from '@/views/note/vuex/getters/getters';
import vuexMapGetters from '@/views/note/vuex/getters/mapGetters/mapGetters';
import vuexAction from '@/views/note/vuex/action/action';
import vuexMapAction from '@/views/note/vuex/action/mapAction/mapAction';
import vuexModules from '@/views/note/vuex/modules/modules';
import vuexModulesMapSome from '@/views/note/vuex/modules/modules-mapSome';
import vuexDynamicModules from '@/views/note/vuex/modules/dynamic-modules';

export default {
	path: '/vuex',
	name: 'vuex',
	redirect: '/vuex/vuex-state',
	component: layout,
	children: [{
			path: 'vuex-state',
			name: 'vuex-state',
			component: vuexState,
		},
		{
			path: 'vuex-mapState',
			name: 'vuex-mapState',
			component: vuexMapState,
		},
		{
			path: 'vuex-mutation',
			name: 'vuex-mutation',
			component: vuexMutation,
		},
		{
			path: 'vuex-getters',
			name: 'vuex-getters',
			component: vuexGetters,
		},
		{
			path: 'vuex-mapGetters',
			name: 'vuex-mapGetters',
			component: vuexMapGetters,
		},
		{
			path: 'vuex-mapMutations',
			name: 'vuex-mapMutations',
			component: vuexMapMutations,
		},
		{
			path: 'vuex-vuexAction',
			name: 'vuex-vuexAction',
			component: vuexAction,
		},
		{
			path: 'vuex-vuexMapAction',
			name: 'vuex-vuexMapAction',
			component: vuexMapAction,
		},
		{
			path: 'vuex-vuexModules',
			name: 'vuex-vuexModules',
			component: vuexModules,
		},
		{
			path: 'vuex-vuexModulesMapSome',
			name: 'vuex-vuexModulesMapSome',
			component: vuexModulesMapSome,
		},
		{
			path: 'vuex-vuexDynamicModules',
			name: 'vuex-vuexDynamicModules',
			component: vuexDynamicModules,
		},
	]
}