import layout from '@/components/layout/layout'; //框架布局
import recursionComponent1 from '@/views/note/others/递归组件/recursionComponent1';

export default {
	path: '/router',
	name: 'router',
	redirect: '/router/base',
	component: layout,
	children: [
		
	]
}