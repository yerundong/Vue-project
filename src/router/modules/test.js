import layout from '@/components/layout/layout'; //框架布局
import web1 from '@/views/webs/web1';
import web2 from '@/views/webs/web2';
export default {
	path: '/system',
	name: 'layout',
	component: layout,
	children: [{
			path: 'web1',
			name: 'web1',
			component: web1,
		},
		{
			path: 'web2',
			name: 'web2',
			component: web2,
		},
	]
}