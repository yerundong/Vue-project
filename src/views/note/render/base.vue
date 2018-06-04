<script>
	//	Vue推荐在绝大多数情况下使用template来创建你的 HTML。
	//	然而在一些场景中，你真的需要 JavaScript的完全编程的能力，这就是 render函数，它比 template更接近编译器。
	//	但是template实现某些东西很简单，比如 v-if和 v-for，render函数则没有提供专用的 API，使用if/else代替。
	//  render函数中没有v-model的 API，你必须自己来实现相应的逻辑
	import myTest from './test';
	export default {
		data() {
			return {
				msg: "你好哇~"
			}
		},
		methods: {
			hello() {
				console.log(this.msg + '666')
			},
		},
		render(h) {
//			 console.log(h)
			// h是生成虚拟DOM（VNode）函数，包含3个参数-h()
			// {String | Object | Function}: 可以是HTML标签字符串、组件对象，或者一个函数返回值(必填)
			// {Object}:一个包含模板相关属性的数据对象,可以在template中使用这些属性(可选)
			// {String | Array}:子节点 (VNodes)，可以是文本节点，或 `h()`构建的子VNode(可选)
			let mytest = h(myTest, {
					props: {
						someProp: 'foobar'
					}
				}),
				mymsg = h('h3', this.msg);
			return h(
				'div', 
				{
					on:{
						click(){
							alert(123)
						}
					}
				}, [
					'先写一些文字',
					mymsg,
					mytest,
					// 所有 VNodes 必须是唯一的,若需要重复很多次的元素/组件，你可以使用工厂函数来实现
					Array.apply(null, {
						length: 5
					}).map(() => h('p', 'hihihihi~')),
				]
			);
		},
		created() {
			console.log(this)
		}
	}
</script>

<style>

</style>