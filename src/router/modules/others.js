import layout from '@/components/layout/layout'; //框架布局
import recursionComponent1 from '@/views/note/others/递归组件/recursionComponent1';
import recursionComponent2 from '@/views/note/others/递归组件/recursionComponent2';
import vmOperate from '@/views/note/others/vm-operate/base';

export default {
	path: '/others',
	name: 'others',
	redirect: '/others/recursion-component1',
	component: layout,
	children: [
		{
			path: 'recursion-component1',
			name: 'recursion-component1',
			component: recursionComponent1,
		},
		{
			path: 'recursion-component2',
			name: 'recursion-component2',
			component: recursionComponent2,
		},
		{
			path: 'vm-operate',
			name: 'vm-operate',
			component: vmOperate,
		},
	]
}