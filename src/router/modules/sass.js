import layout from '@/components/layout/layout'; //框架布局
import Base from '@/views/note/sass/base';

export default {
	path: '/sass',
	name: 'sass',
	redirect: '/sass/base',
	component: layout,
	children: [
		{
			path: 'base',
			name: 'base',
			component: Base,
		},
	]
}