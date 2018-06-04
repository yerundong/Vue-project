import layout from '@/components/layout/layout'; //框架布局
import Base from '@/views/note/render/base';
import Test from '@/views/note/render/test';

export default {
	path: '/render',
	name: 'render',
	redirect: '/render/base',
	component: layout,
	children: [
		{
			path: 'base',
			name: 'base',
			component: Base,
		},
		{
			path: 'test',
			name: 'test',
			component: Test,
		},
	]
}