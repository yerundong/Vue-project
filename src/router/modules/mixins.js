import layout from '@/components/layout/layout'; //框架布局
import MixinBase from '@/views/note/mixins/base';
import GlobalMixin from '@/views/note/mixins/global-mixin';

export default {
	path: '/mixins',
	name: 'mixins',
	redirect: '/mixins/mixin-base',
	component: layout,
	children: [
		{
			path: 'mixin-base',
			name: 'mixin-base',
			component: MixinBase,
		},
		{
			path: 'global-mixin',
			name: 'global-mixin',
			component: GlobalMixin,
		},
	]
}