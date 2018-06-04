import layout from '@/components/layout/layout'; //框架布局
import Base from '@/views/note/custom-directives/base';

export default {
	path: '/custom-directives',
	name: 'custom-directives',
	redirect: '/custom-directives/base',
	component: layout,
	children: [
		{
			path: 'base',
			name: 'base',
			component: Base,
		},
	]
}